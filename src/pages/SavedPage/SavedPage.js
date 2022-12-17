import React from 'react';
import styles from './SavedPage.module.scss';
import Menu from '../ProfilePage/components/Menu/Menu';
import SavedList from './components/SavedList/SavedList';

const SavedPage = () => {
    return (
        <section className={styles.container}>
            <Menu />
            <SavedList />
        </section>
    );
};

export default SavedPage;
