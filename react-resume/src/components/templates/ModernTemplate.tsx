import { useLanguage } from '../../context/LanguageContext';
import SectionHeader from '../SectionHeader';
import BulletList from '../BulletList';
import ExperienceEntryBlock from '../ExperienceEntryBlock';
import { resumeSections, personalInfo } from '../../data/resumeData';
import type { AnySection } from '../../data/resumeData';

/**
 * Modern Template Layout:
 * Uses a TABLE structure to force consistent margins/offsets on multi-page prints.
 * thead: Repeating spacer for top margin.
 * tbody: Sidebar (left) and Main content (right).
 */

function ResumeSection({ section }: { section: AnySection }) {
    switch (section.type) {
        case 'paragraph':
            return (
                <div className="modern-section">
                    <SectionHeader titleKey={section.titleKey} />
                    <ParagraphBody contentKey={section.contentKey} />
                </div>
            );
        case 'bullets':
            return (
                <div className="modern-section">
                    <SectionHeader titleKey={section.titleKey} />
                    <BulletList items={section.items} />
                </div>
            );
        case 'experience':
            return (
                <div className="modern-section">
                    <SectionHeader titleKey={section.titleKey} />
                    {section.entries.map((entry, idx) => (
                        <ExperienceEntryBlock
                            key={entry.companyKey}
                            entry={entry}
                            withTopMargin={idx > 0}
                        />
                    ))}
                </div>
            );
    }
}

function ParagraphBody({ contentKey }: { contentKey: string }) {
    const { t } = useLanguage();
    return <p>{t(contentKey)}</p>;
}

export default function ModernTemplate() {
    const { t } = useLanguage();

    // Partition sections
    const sidebarSections = resumeSections.filter(s =>
        ['ABOUT_ME', 'LANGUAGES', 'CERTIFICATIONS', 'MAIN_QUALIFICATIONS', 'AWARDS_AND_PUBLICATIONS'].includes(s.titleKey)
    );
    const mainSections = resumeSections.filter(s =>
        !['ABOUT_ME', 'LANGUAGES', 'CERTIFICATIONS', 'MAIN_QUALIFICATIONS', 'AWARDS_AND_PUBLICATIONS'].includes(s.titleKey)
    );

    return (
        <div className="page modern-template">
            <table className="modern-layout-table">
                <thead>
                    <tr>
                        <th className="modern-sidebar-spacer">
                            <div className="print-spacer">&nbsp;</div>
                        </th>
                        <th className="modern-main-spacer">
                            <div className="print-spacer">&nbsp;</div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="modern-sidebar-cell">
                            <aside className="modern-sidebar-content">
                                <header className="modern-sidebar-header">
                                    <div className="name-title">{t('NAME')}</div>
                                    <div className="modern-line" />
                                </header>

                                <div className="modern-contact-info">
                                    <div className="contact-item">
                                        <span className="contact-label">{t('EMAIL_LABEL')}:</span>
                                        <span className="contact-value">{t(personalInfo.emailKey)}</span>
                                    </div>
                                    <div className="contact-item">
                                        <span className="contact-label">{t('LINKEDIN_LABEL')}:</span>
                                        <span className="contact-value">{t(personalInfo.linkedinKey)}</span>
                                    </div>
                                    <div className="contact-item">
                                        <span className="contact-label">{t('LOCATION_LABEL')}:</span>
                                        <span className="contact-value">{t(personalInfo.locationKey)}</span>
                                    </div>
                                </div>

                                {sidebarSections.map((section) => (
                                    <ResumeSection key={section.titleKey} section={section} />
                                ))}
                            </aside>
                        </td>
                        <td className="modern-main-cell">
                            <main className="modern-main-content">
                                {mainSections.map((section) => (
                                    <ResumeSection key={section.titleKey} section={section} />
                                ))}
                            </main>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td className="modern-footer-spacer">
                            <div className="print-footer-spacer">&nbsp;</div>
                        </td>
                        <td className="modern-footer-spacer">
                            <div className="print-footer-spacer">&nbsp;</div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}
