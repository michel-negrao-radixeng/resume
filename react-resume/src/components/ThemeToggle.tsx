import { useTheme } from '../context/ThemeContext';

/**
 * Floating toggle button that switches between light and dark themes.
 * Displays 🌙 in light mode (click to go dark) and ☀️ in dark mode (click to go light).
 * Hidden on print via CSS (.theme-btn).
 */
export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    return (
        <button
            className="theme-btn"
            onClick={toggleTheme}
            title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        >
            {theme === 'light' ? '🌙' : '☀️'}
        </button>
    );
}
