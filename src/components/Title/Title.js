import React from 'react';
import styles from './Title.module.scss';
import { ReactComponent as EditIcon } from './edit.svg';

const Title = ({ children }) => {
    return (
        <h1 className={styles.title}>
            {children}
            <EditIcon />
        </h1>
    );
};

export default Title;
