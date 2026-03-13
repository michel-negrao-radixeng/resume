
import { useTemplate, ResumeTemplate } from '../context/TemplateContext';

export default function TemplateToggle() {
    const { template, setTemplate } = useTemplate();

    const templates: { id: ResumeTemplate, label: string }[] = [
        { id: 'radix', label: 'Radix' },
        { id: 'modern', label: 'Modern' }
    ];

    return (
        <div className="template-toggle">
            {templates.map((t) => (
                <button 
                    key={t.id}
                    onClick={() => setTemplate(t.id)} 
                    className={`template-btn ${template === t.id ? 'active' : ''}`}
                >
                    {t.label}
                </button>
            ))}
        </div>
    );
}
