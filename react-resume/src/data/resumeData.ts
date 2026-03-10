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
// Resume content declaration
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
            'QUAL_CDF',
            'QUAL_JS',
            'QUAL_PYTHON',
            'QUAL_SQL',
            'QUAL_AZURE',
            'QUAL_DOCKER',
            'QUAL_LINUX',
        ],
    },
    {
        type: 'experience',
        titleKey: 'PROFESSIONAL_EXPERIENCE',
        entries: [
            {
                companyKey: 'COMPANY_RADIX',
                roles: [
                    { titleKey: 'JOB_SPEC_1', dateKey: 'DATE_FEB_26' },
                    { titleKey: 'JOB_SENIOR', dateKey: 'DATE_NOV_23' },
                ],
                activitiesHeadingKey: 'ACTIVITIES_HEADING',
                activities: [
                    'ACT_RADIX_1',
                    'ACT_RADIX_2',
                    'ACT_RADIX_3',
                    'ACT_RADIX_4',
                    'ACT_RADIX_5',
                    'ACT_RADIX_6',
                    'ACT_RADIX_7',
                ],
                projectsHeadingKey: 'MAIN_PROJECTS_HEADING',
                projects: ['PROJ_1', 'PROJ_2', 'PROJ_3'],
            },
            {
                companyKey: 'COMPANY_ANP',
                roles: [{ titleKey: 'JOB_RESEARCHER', dateKey: 'DATE_JUN_20' }],
                activitiesHeadingKey: 'ACTIVITIES_HEADING',
                activities: ['ACT_ANP_1', 'ACT_ANP_2', 'ACT_ANP_3'],
            },
            {
                companyKey: 'COMPANY_KLABIN',
                roles: [{ titleKey: 'JOB_AUTO', dateKey: 'DATE_JUL_18' }],
                activitiesHeadingKey: 'ACTIVITIES_HEADING',
                activities: [
                    'ACT_KLA_1',
                    'ACT_KLA_2',
                    'ACT_KLA_3',
                    'ACT_KLA_4',
                    'ACT_KLA_5',
                ],
            },
        ],
    },
    {
        type: 'bullets',
        titleKey: 'ACADEMIC_BACKGROUND',
        items: ['EDU_1', 'EDU_2', 'EDU_3', 'EDU_4', 'EDU_5'],
    },
    {
        type: 'bullets',
        titleKey: 'CERTIFICATIONS',
        items: ['CERT_1', 'CERT_2', 'CERT_3', 'CERT_4', 'CERT_5', 'CERT_6'],
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
