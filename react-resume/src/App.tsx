
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import LanguageToggle from './components/LanguageToggle';
import PrintButton from './components/PrintButton';
import ThemeToggle from './components/ThemeToggle';
import ResumePage from './components/ResumePage';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <LanguageToggle />
        <PrintButton />
        <ThemeToggle />
        <ResumePage />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
