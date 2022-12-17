import React from 'react';
import styles from './Navigation.module.scss';
import { ReactComponent as BagIcon } from './images/bag.svg';
import { ReactComponent as LogoIcon } from './images/logo.svg';
import { ReactComponent as PhoneIcon } from './images/phone.svg';
import { ReactComponent as UserIcon } from './images/user.svg';
import { NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

const Navigation = () => {
    // const { isAuth, login } = useAuth();

    // const concatNickName = () => {
    //     const str = String(login);
    //     const pos = str.indexOf('@');
    //     return str.slice(0, pos);
    // };

    const [user] = useAuthState(auth);

    return (
        <nav className={styles.navigation}>
            <NavLink to={'/react-store'} className={styles.logo}>
                <LogoIcon />
            </NavLink>
            <div className={styles.menu}>
                <NavLink to={'/shops'}>Shops</NavLink>
                <NavLink to={'/delivery'}>Delivery</NavLink>
                <NavLink to={'/payment'}>Payment</NavLink>
                <NavLink to={'/contacts'}>Contacts</NavLink>
            </div>
            <div className={styles.phone}>
                <span className={styles.number}>
                    <PhoneIcon />
                    +375 (33) 999-88-77
                </span>
                <span>9:00-21:00</span>
            </div>
            <div className={styles.user}>
                <UserIcon />
                {user ? (
                    <NavLink to={'/profile'}>{user.displayName}</NavLink>
                ) : (
                    <NavLink to={'/login'}>Sign In</NavLink>
                )}
            </div>
            <div className={styles.bag}>
                <BagIcon />
                <NavLink to={'/bag'}>Bag</NavLink>
            </div>
        </nav>
    );
};

export default Navigation;
