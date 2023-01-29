import React from 'react';
import styles from './PaymentPage.module.scss';
import { ReactComponent as VisaIcon } from './images/visaico.svg';
import { ReactComponent as MasterCardIcon } from './images/mastercardico.svg';
import { ReactComponent as MaestroCardIcon } from './images/maestroico.svg';

const PaymentPage = () => {
    return (
        <div className={styles.container}>
            <span className={styles.title}>How to pay:</span>
            <div className={styles.first}>
                <span className={styles.article}>
                    1. Pay with Credit/Debit Card{' '}
                </span>
                <div className={styles.methods}>
                    <VisaIcon />
                    <MasterCardIcon />
                    <MaestroCardIcon />
                </div>
                <span className={styles.description}>
                    You can pay with Credit/Debit Card at DogDug.com, Our pay
                    with Credit/Debit Card is through Strip, It's Safe and
                    Secure. We never keep your card's information.
                </span>
            </div>
            <div className={styles.second}>
                <span className={styles.article}>
                    2. Pay with Credit/Debit Card by Paypal
                </span>
                <div className={styles.methods}>
                    <VisaIcon />
                    <MasterCardIcon />
                    <MaestroCardIcon />
                </div>
                <span className={styles.description}>
                    You can pay with Credit/Debit Card via Paypal at DogDug.com,
                    When you place an order, you will be redirected to the
                    PayPal payment page, where you can confirm your payment by
                    logging in with your PayPal username and password, also You
                    can still check out even without a PayPal account, just only
                    input your Credit/Debit Card information.
                </span>
            </div>
        </div>
    );
};

export default PaymentPage;
