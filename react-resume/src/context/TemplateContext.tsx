import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ResumeTemplate = 'radix' | 'modern';

interface TemplateContextProps {
    template: ResumeTemplate;
    setTemplate: (template: ResumeTemplate) => void;
}

const TemplateContext = createContext<TemplateContextProps | undefined>(undefined);

const STORAGE_KEY = 'resume_template';

interface TemplateProviderProps {
    children: ReactNode;
}

export const TemplateProvider: React.FC<TemplateProviderProps> = ({ children }) => {
    const [template, setTemplateState] = useState<ResumeTemplate>('radix');

    useEffect(() => {
        const savedTemplate = localStorage.getItem(STORAGE_KEY) as ResumeTemplate | null;
        if (savedTemplate && (savedTemplate === 'radix' || savedTemplate === 'modern')) {
            setTemplateState(savedTemplate);
        }
    }, []);

    const setTemplate = (newTemplate: ResumeTemplate) => {
        setTemplateState(newTemplate);
        localStorage.setItem(STORAGE_KEY, newTemplate);
    };

    return (
        <TemplateContext.Provider value={{ template, setTemplate }}>
            {children}
        </TemplateContext.Provider>
    );
};

export const useTemplate = (): TemplateContextProps => {
    const context = useContext(TemplateContext);
    if (!context) {
        throw new Error('useTemplate must be used within a TemplateProvider');
    }
    return context;
};
