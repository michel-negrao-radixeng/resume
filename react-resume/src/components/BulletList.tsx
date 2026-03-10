
import { useLanguage } from '../context/LanguageContext';

interface BulletListProps {
    /** i18n keys for each list item */
    items: string[];
    /** Optional CSS class override; defaults to 'skills-list' */
    className?: string;
}

/**
 * Renders an unsorted list of items using i18n keys resolved through
 * LanguageContext. The list style defaults to the `skills-list` CSS class
 * (square bullet prefix). Pass `className="activities-list"` for the
 * indented activities style.
 *
 * Reusable in any section — qualifications, education, certifications,
 * awards, languages, or activities within an experience entry.
 */
export default function BulletList({ items, className = 'skills-list' }: BulletListProps) {
    const { t } = useLanguage();
    return (
        <ul className={className}>
            {items.map((key) => (
                <li key={key}>{t(key)}</li>
            ))}
        </ul>
    );
}
