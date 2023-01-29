import React, { useState } from 'react';
import styles from './RegionButton.module.scss';

const RegionButton = ({ region }) => {
    const [active, setActive] = useState(false);

    const handleSwitch = () => {
        setActive(!active);
    };

    return (
        <div className={styles.container}>
            <button
                className={active ? styles.active : styles.btn}
                onClick={handleSwitch}
            >
                {region}
                <span className={styles.plus}> {active ? '-' : '+'} </span>
            </button>
            {active && (
                <div className={active ? styles.listActive : styles.list}>
                    <span>{`${region}: some address №1`}</span>
                    <span>{`${region}: some address №2`}</span>
                    <span>{`${region}: some address №3`}</span>
                    <span>{`${region}: some address №4`}</span>
                </div>
            )}
        </div>
    );
};

export default RegionButton;
