import { useState, useEffect } from 'react';

function useThemeToggle() {
    const getInitialMode = (): string => {
        const savedMode = localStorage.getItem('theme');
        return savedMode || 'light';
    };

    const [theme, setTheme] = useState<string>(getInitialMode);

    const toggleTheme = (): void => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return [theme, toggleTheme] as const;
}

export default useThemeToggle;
