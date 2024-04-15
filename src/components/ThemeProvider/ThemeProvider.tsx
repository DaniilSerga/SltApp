import React, { FC, createContext, useState, PropsWithChildren } from 'react';
import { IThemeContext, defaultState } from './type';

export const ThemeContext = createContext<IThemeContext>(defaultState);

const ThemeProvider: FC<PropsWithChildren> = (props) => {
    const [isDarkTheme, setTheme] = useState(false);

    const toggleTheme = () => {
        setTheme(!isDarkTheme);
    };

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
