import React, { useState } from 'react';
import styles from './Form.module.scss';

const Form = ({ title, handleClick }) => {
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
            <button onClick={() => handleClick(login, password)}>
                {title}
            </button>
        </form>
    );
};

export default Form;
