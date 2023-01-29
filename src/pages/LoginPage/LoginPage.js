import React from 'react';
import Login from './components/Login/Login';
import styles from './LoginPage.module.scss';

const LoginPage = () => {
    return (
        <div className={styles.page}>
            <Login />
        </div>
    );
};

export default LoginPage;
