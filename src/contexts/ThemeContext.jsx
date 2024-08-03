import React, { useEffect, useState, createContext, useContext } from 'react';

const ThemeContext = createContext(null);

const THEME_STORAGE_KEY = 'theme';

export default function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        window.localStorage.setItem(THEME_STORAGE_KEY, newTheme);
        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(newTheme);
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
        const preferredColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const initialTheme = localTheme || preferredColorScheme;

        setTheme(initialTheme);
        document.documentElement.classList.add(initialTheme);
    }, []);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (context === null) {
        throw new Error('useTheme must be used within a ThemeContextProvider');
    }

    return context;
}
