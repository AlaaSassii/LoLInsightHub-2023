import { useState, useEffect } from 'react';

function useThemeToggle() {
    const getInitialMode = (): string => {
        const savedMode = localStorage.getItem('theme');
        return savedMode || 'light';
    };

    const [theme, setTheme] = useState<string>(getInitialMode);

    const toggleTheme = (): void => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        document.body.classList.add(newTheme);
        const oppositeTheme = theme === 'light' ? 'dark' : 'light';
        document.body.classList.remove(oppositeTheme);

        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    };

    useEffect(() => {
        console.log(theme)
        document.body.className = theme;
    }, [theme]);
    const light = theme === 'light'

    return [light, toggleTheme, ] as const;
}

export default useThemeToggle;
