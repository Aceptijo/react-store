import React, { useState } from 'react';
import styles from './Form.module.scss';
import { ReactComponent as GoogleIcon } from './google.svg';

const Form = ({ title, emailSignUp, googleSignIn, emailSignIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            <input
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={'Email'}
            />
            <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder={'Password'}
            />
            <button
                onClick={
                    title === 'Sign In'
                        ? () => emailSignIn(email, password)
                        : () => emailSignUp(email, password)
                }
            >
                {title}
            </button>
            {title === 'Sign In' && (
                <button onClick={googleSignIn} className={styles.google}>
                    <GoogleIcon />
                    Sign in with Google
                </button>
            )}
        </form>
    );
};

export default Form;
