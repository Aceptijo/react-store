import React from 'react';
import SignUp from './components/SignUp/SignUp';
import { Link } from 'react-router-dom';
import styles from './RegistrationPage.module.scss';

const RegistrationPage = () => {
    return (
        <div className={styles.page}>
            REGISTER
            <SignUp />
            <span>
                You already have an account? <Link to={'/login'}>Login</Link>
            </span>
        </div>
    );
};

export default RegistrationPage;
