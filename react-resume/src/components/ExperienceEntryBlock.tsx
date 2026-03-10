
import { useLanguage } from '../context/LanguageContext';
import BulletList from './BulletList';
import type { ExperienceEntry as ExperienceEntryData } from '../data/resumeData';

interface ExperienceEntryProps {
    entry: ExperienceEntryData;
    /** Whether to add extra top margin (for entries after the first) */
    withTopMargin?: boolean;
}

/**
 * Renders a single employment block inside the Professional Experience section.
 * Includes: company header, one or more job-role rows with dates, an
 * "Activities:" sub-heading with a bullet list, and an optional "Main
 * Projects:" sub-heading with a bullet list.
 *
 * All text is driven by i18n keys from the `entry` prop — no hardcoded strings.
 * Can be placed in any experience section by declaring it in resumeData.ts.
 */
export default function ExperienceEntryBlock({
    entry,
    withTopMargin = false,
}: ExperienceEntryProps) {
    const { t } = useLanguage();

    return (
        <div>
            <div
                className="company-header"
                style={withTopMargin ? { marginTop: '25px' } : undefined}
            >
                {t(entry.companyKey)}
            </div>

            {entry.roles.map((role) => (
                <div key={role.titleKey} className="job-title-row">
                    {t(role.titleKey)}
                    <span className="job-date">{t(role.dateKey)}</span>
                </div>
            ))}

            <div className="activities-heading">{t(entry.activitiesHeadingKey)}</div>
            <BulletList items={entry.activities} className="activities-list" />

            {entry.projectsHeadingKey && entry.projects && (
                <>
                    <div className="activities-heading">{t(entry.projectsHeadingKey)}</div>
                    <BulletList items={entry.projects} className="activities-list" />
                </>
            )}
        </div>
    );
}
