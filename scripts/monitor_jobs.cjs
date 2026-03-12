const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const CACHE_FILE = path.join(__dirname, 'jobs_cache.json');
const API_URL = 'https://api.inhire.app/job-posts/public/pages';

// Tenants to monitor
const TENANTS = [
    'magazineluiza', 'magalucloud', 'cielo', 'olist', 'alice', 'nomad', 
    'idwall', 'vitru', 'insider', 'qive', 'elogroup', 'radix', 
    'remessaonline', 'infotec', 'attrus', 'cerc', 'v360', 'medway', 
    'shape', 'flutterbrazil', 'priner', 'unimar', 'vhsys', 'taking', 
    'seazone', 'dp6', 'elsys', 'adelcoco', 'portalnova', 'asper', 'inhire'
];

// Keywords to match your profile
const KEYWORDS = [
    'Fullstack', 'Full Stack', 'Python', 'React', 'Node', 
    'Software', 'Desenvolvedor', 'Engenheiro', 'TypeScript', 'NestJS', 'Frontend', 'Backend'
];

// Keywords to exclude
const EXCLUDE = ['Estágio', 'Estagiário', 'Jovem Aprendiz', 'QA', 'Testes', 'Comercial', 'Vendas'];

function fetchJobs(tenant) {
    try {
        const output = execSync(`curl -s -H "x-tenant: ${tenant}" ${API_URL}`);
        return JSON.parse(output.toString());
    } catch (e) {
        console.error(`Failed to fetch jobs for ${tenant}:`, e.message);
        return null;
    }
}

function loadCache() {
    if (fs.existsSync(CACHE_FILE)) {
        try {
            const cache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
            // Support legacy array format or new object format
            return Array.isArray(cache) ? {} : cache;
        } catch (e) {
            return {};
        }
    }
    return {};
}

function saveCache(cache) {
    fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
}

async function run() {
    console.log(`[${new Date().toISOString()}] Starting Multi-Tenant Job Monitor...`);
    console.log(`Monitoring ${TENANTS.length} companies.\n`);
    
    const cache = loadCache();
    let hasNewJobs = false;
    let totalJobsCount = 0;
    let totalMatchedCount = 0;

    for (const tenant of TENANTS) {
        process.stdout.write(`Checking ${tenant.padEnd(20)}... `);
        const data = fetchJobs(tenant);
        
        if (!data || !data.jobsPage) {
            console.log("Error or no data.");
            continue;
        }

        const allJobs = data.jobsPage;
        totalJobsCount += allJobs.length;
        
        const oldJobIds = new Set(cache[tenant] || []);
        
        const matchedJobs = allJobs.filter(job => {
            const title = job.displayName;
            const matches = KEYWORDS.some(k => title.toLowerCase().includes(k.toLowerCase()));
            const excluded = EXCLUDE.some(k => title.toLowerCase().includes(k.toLowerCase()));
            return matches && !excluded;
        });

        totalMatchedCount += matchedJobs.length;
        const newJobs = matchedJobs.filter(job => !oldJobIds.has(job.jobId));

        if (newJobs.length > 0) {
            hasNewJobs = true;
            console.log(`\n🚀 FOUND ${newJobs.length} NEW MATCHES for ${tenant.toUpperCase()}:`);
            newJobs.forEach(job => {
                const url = `https://${tenant}.inhire.app/vagas/${job.jobId}/${job.displayName.toLowerCase().replace(/ /g, '-')}`;
                console.log(`  - ${job.displayName} (${job.location})`);
                console.log(`    URL: ${url}`);
            });
            console.log("");
        } else {
            console.log(`Done (${allJobs.length} jobs, 0 new)`);
        }

        // Update cache for this tenant
        cache[tenant] = allJobs.map(j => j.jobId);
    }

    if (hasNewJobs) {
        saveCache(cache);
    }

    console.log(`\n--- Summary ---`);
    console.log(`Total jobs scanned: ${totalJobsCount}`);
    console.log(`Total matching keyword: ${totalMatchedCount}`);
    console.log(`Monitor finished at ${new Date().toISOString()}`);
}

run();
