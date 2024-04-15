import React, { FC } from 'react';
import styles from './Header.module.scss';

const Header: FC = () => {
    return (
        <header className={styles.headerContainer}>
            <ul className={styles.navbar}>
                <li>Products</li>
                <li>Pricing</li>
                <li>Company</li>
                <li>Support</li>
                {/* TODO: Theme switch */}
                <li>
                    <div className={styles.themeSwitch}></div>
                </li>
            </ul>
            <p>123</p>
        </header>
    );
};

export default Header;
