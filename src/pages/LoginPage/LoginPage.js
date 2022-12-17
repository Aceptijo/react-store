import React from 'react';
import Login from './components/Login/Login';
import { Link } from 'react-router-dom';
import styles from './LoginPage.module.scss';

const LoginPage = () => {
    return (
        <div className={styles.page}>
            LOGIN
            <Login />
            <span>
                You haven't an account? <Link to={'/registration'}>Registration</Link>
            </span>
        </div>
    );
};

export default LoginPage;
