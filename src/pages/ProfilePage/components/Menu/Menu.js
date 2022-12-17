import React from 'react';
import styles from './Menu.module.scss';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div className={styles.menu}>
            <NavLink
                to={'/profile'}
                className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
            >
                Account
            </NavLink>
            <NavLink
                to={'/saved'}
                className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
            >
                Saved
            </NavLink>
        </div>
    );
};

export default Menu;
