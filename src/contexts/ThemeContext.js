import React, { useState, createContext } from 'react';
import { lightTheme } from '../styles/theme';

export const ThemeContext = createContext();

const ThemeProvider = ( { children } ) => {
    const [theme, setTheme] = useState({
        theme: lightTheme,
    });

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            { children }
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;