import React from 'react';
import styles from './Profile.module.scss';
import Menu from '../Menu/Menu';
import Title from '../../../../components/Title/Title';
import { NavLink } from 'react-router-dom';
import { ReactComponent as ExitIcon } from './exit.svg';
import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../../../../firebase';

const Profile = () => {
    const [signOut] = useSignOut(auth);

    return (
        <div className={styles.container}>
            <Menu />
            <div className={styles.info}>
                <div className={styles.left}>
                    <div className={styles.general}>
                        <Title>General</Title>
                        <h3>Name</h3>
                        <span>Igor</span>
                        <h3>Surname</h3>
                        <span>Grinev</span>
                        <h3>Phone</h3>
                        <span>+375 (33) 323-89-94</span>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.delivery}>
                        <Title>Delivery addresses</Title>
                    </div>
                    <div className={styles.city}>
                        <Title>Your city</Title>
                        <span>Minsk</span>
                    </div>
                    <div className={styles.exit}>
                        <NavLink
                            to={'/react-store'}
                            onClick={async () => {
                                const success = signOut();
                                if (success) {
                                    alert('You are sign out');
                                }
                            }}
                        >
                            Log out
                            <ExitIcon />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
