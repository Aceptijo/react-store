import React from 'react';
import styles from './ShopsPage.module.scss';
import RegionButton from './components/RegionButton/RegionButton';

const ShopsPage = () => {
    return (
        <div className={styles.container}>
            <RegionButton region={'Minsk'} />
            <RegionButton region={'Brest'} />
            <RegionButton region={'Mogilev'} />
            <RegionButton region={'Gomel'} />
            <RegionButton region={'Vitebsk'} />
        </div>
    );
};

export default ShopsPage;
