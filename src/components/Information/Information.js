import React from 'react';
import styles from './Information.module.scss';
import { ReactComponent as VKIcon } from './vk.svg';
import { ReactComponent as TGIcon } from './telegram.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';

const Information = () => {
    const aboutCompany = ['Shops', 'News', 'About us'];
    const forClients = ['Brands', 'Delivery', 'Payment', 'Offers'];

    return (
        <div className={styles.container}>
            <div className={styles.about}>
                <h2>About company</h2>
                <ul className={styles.list}>
                    {aboutCompany.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className={styles.clients}>
                <h2>For clients</h2>
                <ul className={styles.list}>
                    {forClients.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className={styles.contacts}>
                <h1>+375 33 999-88-77</h1>
                <h3>9:00 - 21:00</h3>
                <div className={styles.socials}>
                    <VKIcon />
                    <InstagramIcon />
                    <TGIcon />
                </div>
            </div>
        </div>
    );
};

export default Information;
