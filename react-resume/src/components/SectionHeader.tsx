
import { useLanguage } from '../context/LanguageContext';

interface SectionHeaderProps {
    /** i18n key for the section title text */
    titleKey: string;
}

/**
 * Renders the purple-bordered section title box used to introduce each
 * resume section (e.g. "ABOUT ME", "PROFESSIONAL EXPERIENCE").
 *
 * Can be dropped into any section of the resume page — content is driven
 * entirely by the `titleKey` prop resolved through LanguageContext.
 */
export default function SectionHeader({ titleKey }: SectionHeaderProps) {
    const { t } = useLanguage();
    return <div className="section-box">{t(titleKey)}</div>;
}
