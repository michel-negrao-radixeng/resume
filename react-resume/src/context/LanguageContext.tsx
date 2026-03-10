import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { i18nData } from '../data/i18n';

type Language = 'en' | 'pt';

interface LanguageContextProps {
    lang: Language;
    setLang: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [lang, setLang] = useState<Language>('en');

    useEffect(() => {
        setLang(navigator.language.startsWith('pt') ? 'pt' : 'en');
    }, []);

    const t = (key: string): string => {
        if (i18nData[key] && i18nData[key][lang]) {
            return i18nData[key][lang];
        }
        return key;
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextProps => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
