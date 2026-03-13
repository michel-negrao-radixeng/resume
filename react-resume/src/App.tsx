
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { TemplateProvider } from './context/TemplateContext';
import LanguageToggle from './components/LanguageToggle';
import PrintButton from './components/PrintButton';
import ThemeToggle from './components/ThemeToggle';
import TemplateToggle from './components/TemplateToggle';
import ResumePage from './components/ResumePage';

function App() {
  return (
    <ThemeProvider>
      <TemplateProvider>
        <LanguageProvider>
          <LanguageToggle />
          <TemplateToggle />
          <PrintButton />
          <ThemeToggle />
          <ResumePage />
        </LanguageProvider>
      </TemplateProvider>
    </ThemeProvider>
  );
}

export default App;
