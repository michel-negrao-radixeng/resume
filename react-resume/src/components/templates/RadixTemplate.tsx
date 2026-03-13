
import { useLanguage } from '../../context/LanguageContext';
import SectionHeader from '../SectionHeader';
import BulletList from '../BulletList';
import ExperienceEntryBlock from '../ExperienceEntryBlock';
import { resumeSections } from '../../data/resumeData';
import type { AnySection } from '../../data/resumeData';

/**
 * Renders a single resume section by switching on the `type` discriminant.
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

/** Renders a translated paragraph */
function ParagraphBody({ contentKey }: { contentKey: string }) {
    const { t } = useLanguage();
    return <p>{t(contentKey)}</p>;
}

export default function RadixTemplate() {
    const { t } = useLanguage();

    return (
        <div className="page radix-template">
            <table>
                <thead>
                    <tr>
                        <td>
                            <div className="header-stripe">
                                <img src={`${import.meta.env.BASE_URL}header_logo.png`} alt="logo" />
                            </div>
                        </td>
                    </tr>
                    <tr className="radix-print-header-spacer">
                        <td>
                            <div className="print-spacer">&nbsp;</div>
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
                        <td className="radix-footer-spacer">
                            <div className="print-footer-spacer">&nbsp;</div>
                        </td>
                    </tr>
                </tfoot>
            </table>
            <div className="footer-container">
                <img src={`${import.meta.env.BASE_URL}footer_illustration.png`} alt="footer" />
            </div>
        </div>
    );
}
