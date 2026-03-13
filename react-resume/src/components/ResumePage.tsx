
import { useTemplate } from '../context/TemplateContext';
import RadixTemplate from './templates/RadixTemplate';
import ModernTemplate from './templates/ModernTemplate';

/**
 * The main resume document component.
 * Acts as a controller to render the selected template.
 */
export default function ResumePage() {
    const { template } = useTemplate();

    return (
        <>
            {template === 'radix' ? <RadixTemplate /> : <ModernTemplate />}
        </>
    );
}
