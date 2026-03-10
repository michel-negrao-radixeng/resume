
import { LanguageProvider } from './context/LanguageContext';
import LanguageToggle from './components/LanguageToggle';
import ResumePage from './components/ResumePage';

function App() {
  return (
    <LanguageProvider>
      <LanguageToggle />
      <ResumePage />
    </LanguageProvider>
  )
}

export default App;
