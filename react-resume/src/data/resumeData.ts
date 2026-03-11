// ---------------------------------------------------------------------------
// Resume Data Model
// ---------------------------------------------------------------------------
// All resume content is declared here as typed data. No content should be
// hardcoded in JSX — components receive data via props and resolve i18n keys
// through the LanguageContext `t()` function.
// ---------------------------------------------------------------------------

/** A section that renders a titled bullet list (skills, education, etc.) */
export interface BulletSection {
    type: 'bullets';
    /** i18n key for the section title rendered inside the purple box */
    titleKey: string;
    /** i18n keys for each bullet item */
    items: string[];
}

/** A single job role row: title + date */
export interface JobRole {
    /** i18n key for the role title (e.g. "Senior Developer | ") */
    titleKey: string;
    /** i18n key for the date range (e.g. "Nov 2023 – Jan 2026") */
    dateKey: string;
}

/** A single employment entry inside an experience section */
export interface ExperienceEntry {
    /** i18n key for the company / employer name */
    companyKey: string;
    /** One or more role rows for this employer */
    roles: JobRole[];
    /** i18n key for the "Activities:" label */
    activitiesHeadingKey: string;
    /** i18n keys for activity bullet items */
    activities: string[];
    /** Optional i18n key for a "Main Projects:" sub-heading */
    projectsHeadingKey?: string;
    /** Optional i18n keys for project bullet items */
    projects?: string[];
}

/** A section that renders a titled list of employment entries */
export interface ExperienceSection {
    type: 'experience';
    /** i18n key for the section title */
    titleKey: string;
    /** Ordered list of employers */
    entries: ExperienceEntry[];
}

/** A section that renders a titled paragraph of prose */
export interface ParagraphSection {
    type: 'paragraph';
    /** i18n key for the section title */
    titleKey: string;
    /** i18n key for the body text */
    contentKey: string;
}

export type AnySection = BulletSection | ExperienceSection | ParagraphSection;

// ---------------------------------------------------------------------------
// Resume content declaration (LinkedIn Export driven)
// ---------------------------------------------------------------------------

export const resumeSections: AnySection[] = [
    {
        type: 'paragraph',
        titleKey: 'ABOUT_ME',
        contentKey: 'ABOUT_ME_DESC',
    },
    {
        type: 'bullets',
        titleKey: 'MAIN_QUALIFICATIONS',
        items: [
            'QUAL_REACT',
            'QUAL_PYTHON',
            'QUAL_NESTJS',
            'QUAL_GRAPHQL',
            'QUAL_SQL',
            'QUAL_TS',
            'QUAL_FULLSTACK',
            'QUAL_FRONTEND',
            'QUAL_BACKEND',
            'QUAL_CDF',
            'QUAL_MOBILE',
        ],
    },
    {
        type: 'experience',
        titleKey: 'PROFESSIONAL_EXPERIENCE',
        entries: [
            {
                companyKey: 'COMPANY_RADIX',
                roles: [
                    { titleKey: 'JOB_RADIX_1', dateKey: 'DATE_RADIX_1' },
                    { titleKey: 'JOB_RADIX_2', dateKey: 'DATE_RADIX_2' }
                ],
                activitiesHeadingKey: 'ACTIVITIES_HEADING',
                activities: ['ACT_RADIX_1', 'ACT_RADIX_2'],
            },
            {
                companyKey: 'COMPANY_FRN3',
                roles: [{ titleKey: 'JOB_FRN3', dateKey: 'DATE_FRN3' }],
                activitiesHeadingKey: 'ACTIVITIES_HEADING',
                activities: ['ACT_FRN3_1'],
            },
            {
                companyKey: 'COMPANY_MKT',
                roles: [{ titleKey: 'JOB_SELF', dateKey: 'DATE_SELF' }],
                activitiesHeadingKey: 'ACTIVITIES_HEADING',
                activities: ['ACT_SELF_1'],
            },
            {
                companyKey: 'COMPANY_MKT',
                roles: [{ titleKey: 'JOB_MKT', dateKey: 'DATE_MKT' }],
                activitiesHeadingKey: 'ACTIVITIES_HEADING',
                activities: ['ACT_MKT_1'],
            },
            {
                companyKey: 'COMPANY_ACCENTURE',
                roles: [
                    { titleKey: 'JOB_ACCENTURE_1', dateKey: 'DATE_ACCENTURE_1' },
                ],
                activitiesHeadingKey: 'ACTIVITIES_HEADING',
                activities: ['ACT_ACCENTURE_1', 'ACT_ACCENTURE_1_2'],
            },
            {
                // This is grouped under Accenture logically in the LinkedIn PDF but 
                // formatted uniquely in the export. I will attach it as a continuation 
                // of Accenture roles.
                companyKey: 'COMPANY_ACCENTURE',
                roles: [
                    { titleKey: 'JOB_ACCENTURE_2', dateKey: 'DATE_ACCENTURE_2' }
                ],
                activitiesHeadingKey: 'ACTIVITIES_HEADING',
                activities: ['ACT_ACCENTURE_2'],
            },
            {
                // Another nested Accenture role for Cargill
                companyKey: 'COMPANY_ACCENTURE',
                roles: [
                    { titleKey: 'JOB_ACCENTURE_3', dateKey: 'DATE_ACCENTURE_3' }
                ],
                activitiesHeadingKey: 'ACTIVITIES_HEADING',
                activities: ['ACT_ACCENTURE_3'],
            }
        ],
    },
    {
        type: 'bullets',
        titleKey: 'ACADEMIC_BACKGROUND',
        items: ['EDU_1', 'EDU_2', 'EDU_3'],
    },
    {
        type: 'bullets',
        titleKey: 'CERTIFICATIONS',
        items: ['CERT_1', 'CERT_2', 'CERT_3', 'CERT_4'],
    },
    {
        type: 'bullets',
        titleKey: 'AWARDS_AND_PUBLICATIONS',
        items: ['AWARDS_1'],
    },
    {
        type: 'bullets',
        titleKey: 'LANGUAGES',
        items: ['LANG_1', 'LANG_2', 'LANG_3'],
    },
];
