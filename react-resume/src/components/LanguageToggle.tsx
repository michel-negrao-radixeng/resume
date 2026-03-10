import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle(): JSX.Element {
    const { lang, setLang } = useLanguage();

    return (
        <div className="lang-toggle">
            <button 
                onClick={() => setLang('en')} 
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
            >
                🇺🇸 EN
            </button>
            <button 
                onClick={() => setLang('pt')} 
                className={`lang-btn ${lang === 'pt' ? 'active' : ''}`}
            >
                🇧🇷 PT
            </button>
        </div>
    );
}
