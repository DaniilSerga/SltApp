import React, { FC, useContext, useEffect } from 'react';
import { Header, ThemeContext } from 'components';
import styles from './App.module.scss';

const App: FC = () => {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
        document.documentElement.setAttribute(
            'data-theme',
            isDarkTheme ? 'dark' : 'light'
        );
    }, [isDarkTheme]);

    return (
        <div className='App'>
            <Header />
            <h1 className={styles.heading}>App</h1>
            <button onClick={() => toggleTheme()}>Toggle theme</button>
        </div>
    );
};

export default App;
