const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const CACHE_FILE = path.join(__dirname, 'jobs_cache.json');
const TENANT = 'radix';
const API_URL = 'https://api.inhire.app/job-posts/public/pages';

// Keywords to match your profile
const KEYWORDS = [
    'Fullstack', 'Full Stack', 'Python', 'React', 'Node', 
    'Software', 'Desenvolvedor', 'Engenheiro', 'TypeScript', 'NestJS'
];

// Keywords to exclude (e.g. non-tech or internships if you want)
const EXCLUDE = ['Estágio', 'Estagiário', 'Jovem Aprendiz', 'QA', 'Testes'];

function fetchJobs() {
    try {
        const output = execSync(`curl -s -H "x-tenant: ${TENANT}" ${API_URL}`);
        return JSON.parse(output.toString());
    } catch (e) {
        console.error("Failed to fetch jobs:", e.message);
        return null;
    }
}

function loadCache() {
    if (fs.existsSync(CACHE_FILE)) {
        return JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
    }
    return [];
}

function saveCache(jobIds) {
    fs.writeFileSync(CACHE_FILE, JSON.stringify(jobIds, null, 2));
}

async function run() {
    console.log(`[${new Date().toISOString()}] Starting Radix Job Monitor...`);
    
    const data = fetchJobs();
    if (!data || !data.jobsPage) {
        console.log("No data or error during fetch.");
        return;
    }

    const allJobs = data.jobsPage;
    const oldJobIds = new Set(loadCache());
    
    const matchedJobs = allJobs.filter(job => {
        const title = job.displayName;
        const matches = KEYWORDS.some(k => title.toLowerCase().includes(k.toLowerCase()));
        const excluded = EXCLUDE.some(k => title.toLowerCase().includes(k.toLowerCase()));
        return matches && !excluded;
    });

    const newJobs = matchedJobs.filter(job => !oldJobIds.has(job.jobId));

    if (newJobs.length > 0) {
        console.log(`\n🚀 FOUND ${newJobs.length} NEW MATCHING JOBS:\n`);
        newJobs.forEach(job => {
            const url = `https://radix.inhire.app/vagas/${job.jobId}/${job.displayName.toLowerCase().replace(/ /g, '-')}`;
            console.log(`- TITLE: ${job.displayName}`);
            console.log(`  LOC:   ${job.location}`);
            console.log(`  URL:   ${url}`);
            console.log('-----------------------------------');
        });
        
        // Update cache with ALL current job IDs (to handle deletions as well)
        saveCache(allJobs.map(j => j.jobId));
    } else {
        console.log("No new matching jobs found today.");
    }

    console.log(`Total jobs on board: ${allJobs.length}`);
    console.log(`Jobs matching keywords: ${matchedJobs.length}`);
}

run();
