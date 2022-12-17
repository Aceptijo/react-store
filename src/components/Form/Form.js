import React, { useState } from 'react';
import styles from './Form.module.scss';
import { ReactComponent as GoogleIcon } from './google.svg';

const Form = ({ title, emailAuth, googleAuth }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            <input
                type="text"
                value={login}
                onChange={(event) => setLogin(event.target.value)}
                placeholder={'Email'}
            />
            <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder={'Password'}
            />
            <button onClick={() => emailAuth(login, password)}>{title}</button>
            {title === 'Sign In' && (
                <button onClick={googleAuth} className={styles.google}>
                    <GoogleIcon />
                    Sign in with Google
                </button>
            )}
        </form>
    );
};

export default Form;
