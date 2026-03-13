export interface I18nDictionary {
    [key: string]: {
        en: string;
        pt: string;
    };
}

export const i18nData: I18nDictionary = {
    NAME: { en: "MICHEL NEGRÃO", pt: "MICHEL NEGRÃO" },
    
    // Core Sections
    ABOUT_ME: { en: "ABOUT ME", pt: "SOBRE MIM" },
    MAIN_QUALIFICATIONS: { en: "MAIN QUALIFICATIONS", pt: "PRINCIPAIS COMPETÊNCIAS" },
    PROFESSIONAL_EXPERIENCE: { en: "PROFESSIONAL EXPERIENCE", pt: "EXPERIÊNCIA PROFISSIONAL" },
    ACADEMIC_BACKGROUND: { en: "ACADEMIC BACKGROUND", pt: "FORMAÇÃO ACADÊMICA" },
    CERTIFICATIONS: { en: "CERTIFICATIONS", pt: "CERTIFICAÇÕES" },
    AWARDS_AND_PUBLICATIONS: { en: "AWARDS AND PUBLICATIONS", pt: "PRÊMIOS E PUBLICAÇÕES" },
    LANGUAGES: { en: "LANGUAGES", pt: "IDIOMAS" },
    PRINT_BUTTON: { en: "Download PDF", pt: "Baixar PDF" },

    // About Me Content
    ABOUT_ME_DESC: {
        pt: "Sou Desenvolvedor Full-Stack especializado em engenharia de aplicações orientadas a dados. Nos últimos três anos, tenho me dedicado à criação de soluções ponta a ponta, desenvolvendo interfaces dinâmicas com React/TypeScript e serviços escaláveis com Python e NestJS. Possuo sólida experiência em modelagem de dados industriais e integração de APIs utilizando Cognite Data Fusion (FDM), complementada por forte domínio em SQL, Docker e Azure DevOps",
        en: "I am a Full-Stack Developer specializing in data-driven application engineering. Over the past three years, I have dedicated myself to creating end-to-end solutions, developing dynamic interfaces with React/TypeScript and scalable services with Python and NestJS. I have solid experience in industrial data modeling and API integration using Cognite Data Fusion (FDM), complemented by a strong command of SQL, Docker, and Azure DevOps."
    },

    // Main Qualifications (Skills)
    QUAL_REACT: { en: "React", pt: "React" },
    QUAL_PYTHON: { en: "Python", pt: "Python" },
    QUAL_NESTJS: { en: "NestJS", pt: "NestJS" },
    QUAL_GRAPHQL: { en: "Graphql", pt: "Graphql" },
    QUAL_SQL: { en: "SQL", pt: "SQL" },
    QUAL_TS: { en: "Typescript", pt: "Typescript" },
    QUAL_FULLSTACK: { en: "Fullstack", pt: "Fullstack" },
    QUAL_FRONTEND: { en: "Frontend", pt: "Frontend" },
    QUAL_BACKEND: { en: "Backend", pt: "Backend" },
    QUAL_CDF: { en: "Cognite Data Fusion", pt: "Cognite Data Fusion" },
    QUAL_MOBILE: { en: "Mobile Apps", pt: "Aplicativos móveis" },

    // Experience Items
    ACTIVITIES_HEADING: { en: "Description:", pt: "Descrição:" },

    COMPANY_RADIX: { en: "Radix", pt: "Radix" },
    JOB_RADIX_1: { en: "Technical Specialist (Fullstack) | ", pt: "Especialista Técnico (Fullstack) | " },
    DATE_RADIX_1: { en: "Feb 2026 - Present", pt: "Fevereiro de 2026 - Presente" },
    ACT_RADIX_1: { 
        pt: "Fintech: desenvolvimento de múltiplos módulos de uma plataforma de cartões pré-pagos para motoristas, incluindo registro de empresas e notificações. Utilização de TypeScript no frontend (React SPA) e no backend (NestJS).",
        en: "Fintech: developed multiple modules of a prepaid card platform for drivers, including corporate registration and notifications. Used TypeScript on the frontend (React SPA) and backend (NestJS)."
    },

    JOB_RADIX_2: { en: "Developer | ", pt: "Desenvolvedor | " },
    DATE_RADIX_2: { en: "Nov 2023 - Feb 2026", pt: "Novembro de 2023 - Fevereiro de 2026" },
    ACT_RADIX_2: {
        pt: "Indústria química: Frontend: React SPA usando MaterialUI. Backend: Python (FastAPI), incluindo o design e a implementação de APIs e modelagem de dados para aplicações industriais utilizando Cognite Data Fusion.",
        en: "Chemical industry: Frontend: React SPA using MaterialUI. Backend: Python (FastAPI), including the design and implementation of APIs and data modeling for industrial applications using Cognite Data Fusion."
    },

    COMPANY_FRN3: { en: "FRN³", pt: "FRN³" },
    JOB_FRN3: { en: "Developer | ", pt: "Desenvolvedor | " },
    DATE_FRN3: { en: "Oct 2022 - Jul 2023", pt: "Outubro de 2022 - Julho de 2023" },
    ACT_FRN3_1: {
        pt: "Atuando como desenvolvedor frontend, fui responsável pela implementação de melhorias de layout e componentes na plataforma de e-commerce VTEX para diferentes clientes da agência. Tecnologias utilizadas: Plataforma VTEX.IO, CSS, React JS, Git, VSCode.",
        en: "Acting as a frontend developer, I was responsible for implementing layout and component improvements on the VTEX e-commerce platform for different agency clients. Technologies used: VTEX.IO Platform, CSS, React JS, Git, VSCode."
    },

    JOB_SELF: { en: "Owner@selfBusiness | ", pt: "Owner@selfBusiness | " },
    DATE_SELF: { en: "Nov 2009 - Jul 2021", pt: "Novembro de 2009 - Julho de 2021" },
    ACT_SELF_1: {
        pt: "\"Como proprietário, gerenciei os diversos desafios inerentes ao crescimento de uma pequena empresa. Desenvolvi e integrei processos vitais para a operação do negócio sob a ótica de TI, abrangendo áreas como Finanças, Tributário, Vendas e Logística\"",
        en: "\"As an owner, I managed the various challenges inherent in growing a small business. I developed and integrated vital processes for the business operation from an IT perspective, covering areas such as Finance, Tax, Sales, and Logistics.\""
    },

    COMPANY_MKT: { en: "Self Employed", pt: "Trabalho Autônomo" },
    JOB_MKT: { en: "coding@RealEstateCo | ", pt: "coding@RealEstateCo | " },
    DATE_MKT: { en: "May 2018 - Jul 2018", pt: "Maio de 2018 - Julho de 2018" },
    ACT_MKT_1: {
        pt: "Desenvolvimento de soluções de backend em NodeJS (JavaScript/TypeScript) com noSQL (MongoDB). Na arquitetura da solução foram utilizadas soluções cloud (IBMCloud) e on premises, além de APIs de terceiros, como Twilio. A plataforma consistia em uma solução de facilitação de publicidade e geração de leads para o mercado imobiliário.",
        en: "Development of backend solutions in NodeJS (JavaScript/TypeScript) with noSQL (MongoDB). The solution architecture used cloud solutions (IBMCloud) and on premises, in addition to third-party APIs, such as Twilio. The platform consisted of an advertising facilitation and lead generation solution for the real estate market."
    },

    COMPANY_ACCENTURE: { en: "Accenture", pt: "Accenture" },
    JOB_ACCENTURE_1: { en: "Consultant | ", pt: "Consultor | " },
    DATE_ACCENTURE_1: { en: "Oct 2006 - Sep 2009", pt: "Outubro de 2006 - Setembro de 2009" },
    ACT_ACCENTURE_1: {
        pt: "Consultor de TI – Projeto Painel Digital (Petrobras): Modelagem e Estratégia: Projetei e validei a modelagem de dados para 20+ soluções de negócio. Liderança Técnica: Orientei a equipe do cliente na implementação da arquitetura de dados.",
        en: "IT Consultant – Digital Panel Project (Petrobras): Modeling and Strategy: Designed and validated data modeling for 20+ business solutions. Technical Leadership: Guided the client team in implementing the data architecture."
    },
    ACT_ACCENTURE_1_2: {
        pt: "Desenvolvimento e Integração: Responsável pelo backend e depuração de componentes em C# e serviços Java (BEA Weblogic) integrados a bancos Oracle.",
        en: "Development and Integration: Responsible for backend and component debugging in C# and Java services (BEA Weblogic) integrated with Oracle databases."
    },

    JOB_ACCENTURE_2: { en: "Consultant | ", pt: "Consultor | " },
    DATE_ACCENTURE_2: { en: "Sep 2004 - Sep 2006", pt: "Setembro de 2004 - Setembro de 2006" },
    ACT_ACCENTURE_2: {
        pt: "Unilever | Analista de Infraestrutura (América Latina): Atuei na migração em larga escala de 15.000 estações de trabalho Windows na região LATAM. Fui responsável pelo suporte crítico pós-migração, atendendo uma média semanal de 300 usuários por localidade. Garanti a estabilidade do projeto através da resolução de incidentes em servidores e estações, além de desenvolver scripts de automação (PowerShell, VBScript e AutoIt) para otimizar processos de rede e conectividade TCP/IP.",
        en: "Unilever | Infrastructure Analyst (Latin America): Acted in the large-scale migration of 15,000 Windows workstations in the LATAM region. Responsible for critical post-migration support, assisting a weekly average of 300 users per location. Ensured project stability by resolving incidents on servers and workstations, in addition to developing automation scripts (PowerShell, VBScript, and AutoIt) to optimize network processes and TCP/IP connectivity."
    },

    JOB_ACCENTURE_3: { en: "Software Analyst | ", pt: "Analista de Software | " },
    DATE_ACCENTURE_3: { en: "Sep 2001 - Sep 2004", pt: "Setembro de 2001 - Setembro de 2004" },
    ACT_ACCENTURE_3: {
        pt: "Cargill | Analista de Suporte de 2º Nível (ERP JDE OneWorld): Atuei no suporte especializado ao módulo de Originação, focado na aquisição de soja. Minhas responsabilidades incluíam a análise técnica de bancos de dados para identificar e corrigir inconsistências contábeis. Realizei a depuração de processos do ERP utilizando C++ e SQL/PL-SQL, garantindo a integridade das informações e o direcionamento estratégico de falhas para equipes globais de desenvolvimento",
        en: "Cargill | 2nd Level Support Analyst (JDE OneWorld ERP): Acted in specialized support to the Origination module, focused on soybean acquisition. Responsibilities included technical analysis of databases to identify and correct accounting inconsistencies. Debugged ERP processes using C++ and SQL/PL-SQL, ensuring data integrity and strategic routing of failures to global development teams."
    },

    // Education
    EDU_1: { 
        pt: "Gama Academy: Skilled, Full Stack and VTEX.IO · (abril de 2022 - julho de 2022)", 
        en: "Gama Academy: Skilled, Full Stack and VTEX.IO · (April 2022 - July 2022)" 
    },
    EDU_2: { 
        pt: "Veris - IBTA: Bacharelado em Engenharia de Software com ênfase em SOA · (2009 - 2010)", 
        en: "Veris - IBTA: Bachelor's Degree, Software Engineering with SOA · (2009 - 2010)" 
    },
    EDU_3: { 
        pt: "Uniban: Bacharelado em Sistemas de Informação · (2000 - 2003)", 
        en: "Uniban: Bachelor's degree, Information Systems · (2000 - 2003)" 
    },

    // Certifications
    CERT_1: { 
        pt: "Trilha de Formação em VTEX.IO", 
        en: "VTEX.IO Training Track" 
    },
    CERT_2: { 
        pt: "AWS, DEVOPS e Digital Ecommerce", 
        en: "AWS, DEVOPS and Digital Ecommerce" 
    },
    CERT_3: { 
        pt: "Palantir - AIP Logic: Building Your First Application", 
        en: "Palantir - AIP Logic: Building Your First Application" 
    },
    CERT_4: { 
        pt: "Palantir - Foundry Ontology: Your First AIP Workflow", 
        en: "Palantir - Foundry Ontology: Your First AIP Workflow" 
    },

    // Awards and Publications
    AWARDS_1: { 
        pt: "VTEX - 1º Lugar no Hiring Coders#3 2022", 
        en: "VTEX - 1st Place at Hiring Coders#3 2022" 
    },

    // Languages
    LANG_1: { pt: "Português (Nativo)", en: "Portuguese (Native or Bilingual)" },
    LANG_2: { pt: "Inglês (Profissional/Fluente)", en: "English (Professional Working)" },
    LANG_3: { pt: "Espanhol (Básico)", en: "Spanish (Limited Working)" },
    EMAIL_LABEL: { en: "Email", pt: "E-mail" },
    EMAIL_VAL: { en: "michelnegrao@gmail.com", pt: "michelnegrao@gmail.com" },
    LINKEDIN_LABEL: { en: "LinkedIn", pt: "LinkedIn" },
    LINKEDIN_VAL: { en: "linkedin.com/in/michelnegrao", pt: "linkedin.com/in/michelnegrao" },
    LOCATION_LABEL: { en: "Location", pt: "Localização" },
    LOCATION_VAL: { en: "Itu, São Paulo, Brasil", pt: "Itu, São Paulo, Brasil" },
};
