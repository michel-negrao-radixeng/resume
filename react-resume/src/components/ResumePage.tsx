
import { useLanguage } from '../context/LanguageContext';
import SectionHeader from './SectionHeader';
import BulletList from './BulletList';
import ExperienceEntryBlock from './ExperienceEntryBlock';
import { resumeSections } from '../data/resumeData';
import type { AnySection } from '../data/resumeData';

/**
 * Renders a single resume section by switching on the `type` discriminant.
 * New section types can be supported by extending AnySection in resumeData.ts
 * and adding a matching case here.
 */
function ResumeSection({ section }: { section: AnySection }) {
    switch (section.type) {
        case 'paragraph':
            return (
                <>
                    <SectionHeader titleKey={section.titleKey} />
                    <ParagraphBody contentKey={section.contentKey} />
                </>
            );
        case 'bullets':
            return (
                <>
                    <SectionHeader titleKey={section.titleKey} />
                    <BulletList items={section.items} />
                </>
            );
        case 'experience':
            return (
                <>
                    <SectionHeader titleKey={section.titleKey} />
                    {section.entries.map((entry, idx) => (
                        <ExperienceEntryBlock
                            key={entry.companyKey}
                            entry={entry}
                            withTopMargin={idx > 0}
                        />
                    ))}
                </>
            );
    }
}

/** Renders a translated paragraph — extracted to keep ResumeSection clean */
function ParagraphBody({ contentKey }: { contentKey: string }) {
    const { t } = useLanguage();
    return <p>{t(contentKey)}</p>;
}

/**
 * The main resume document component.
 *
 * Layout is driven entirely by `resumeSections` from resumeData.ts — no
 * content is hardcoded in JSX. To add, remove, or reorder a section, edit
 * the data model; this component remains unchanged.
 */
export default function ResumePage() {
    const { t } = useLanguage();

    return (
        <div className="page">
            <table>
                <thead>
                    <tr>
                        <td>
                            <div className="header-stripe">
                                <img src={`${import.meta.env.BASE_URL}header_logo.png`} alt="logo" />
                            </div>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="content">
                                <div className="name-title">{t('NAME')}</div>
                                <div className="horizontal-line" />

                                {resumeSections.map((section) => (
                                    <ResumeSection key={section.titleKey} section={section} />
                                ))}
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>{/* Spacer for print footer */}</td>
                    </tr>
                </tfoot>
            </table>
            <div className="footer-container">
                <img src={`${import.meta.env.BASE_URL}footer_illustration.png`} alt="footer" />
            </div>
        </div>
    );
}
