import React from 'react';
import styles from './Profile.module.scss';
import Menu from '../Menu/Menu';
import Title from '../../../../components/Title/Title';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import { useAuth } from '../../../../context/AuthContext/AuthContext';

const Profile = () => {
    const { logOut, user } = useAuth();

    const splitDisplayName = (name) => {
        const result = user.displayName.split(' ');
        return name === 'name' ? result[0] : result[1];
    };

    return (
        <div className={styles.container}>
            <Menu />
            <div className={styles.info}>
                <div className={styles.left}>
                    <div className={styles.general}>
                        <Title>General</Title>
                        <h3>Name</h3>
                        <span>{splitDisplayName('name')}</span>
                        <h3>Surname</h3>
                        <span>{splitDisplayName('surname')}</span>
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
                        <NavLink to={'/react-store'} onClick={() => logOut()}>
                            <Button variant="outlined" color={'error'}>
                                Log out
                            </Button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
