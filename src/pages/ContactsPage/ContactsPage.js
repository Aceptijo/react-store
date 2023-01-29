import React from 'react';
import styles from './ContactsPage.module.scss';

const ContactsPage = () => {
    return (
        <div className={styles.container}>
            <span className={styles.title}>
                We believe in delivering excellent customer service and we are
                dedicated to satisfying our customers. If you have any
                questions, comments or suggestions, feel free to contact us!
            </span>
            <span className={styles.email}>
                Email:
                <a href="mailto: scandavee@gmail.com?subject=Questions, comments or suggestions">
                    scandavee@gmail.com
                </a>
            </span>
            <span className={styles.phone}>
                Phone:
                <a href="tel: +375 (33) 999-88-77">+375 (33) 999-88-77</a>
            </span>
        </div>
    );
};

export default ContactsPage;
