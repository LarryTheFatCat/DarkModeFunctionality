import { useState, useEffect } from 'react';
import './DarkTheme.css';


export const ThemeSwitcher = () => {

    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light');
    const toggleTheme = () => {
        if (theme === 'light') {
            localStorage.setItem('theme', 'dark');
            setTheme('dark');
        } else if(theme === 'dark') {
            localStorage.setItem('theme', 'light')
            setTheme('light');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
        <div className={`App ${theme}`}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <input type="text" />
            <h1>Test Function</h1>
        </div>
    );
}