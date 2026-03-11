import { useLanguage } from '../context/LanguageContext';

/**
 * A floating button that triggers the browser print dialog.
 * Allows the user to save the resume as a PDF via the OS print-to-PDF driver.
 * Hidden in print output via CSS (.print-btn).
 */
export default function PrintButton() {
    const { t } = useLanguage();
    return (
        <button className="print-btn" onClick={() => window.print()}>
            {t('PRINT_BUTTON')}
        </button>
    );
}
