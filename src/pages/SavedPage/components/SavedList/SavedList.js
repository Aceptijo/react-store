import React from 'react';
import styles from './SavedList.module.scss';
import { useSelector } from 'react-redux';
import SavedItem from '../SavedItem/SavedItem';

const SavedList = () => {
    const savedItems = useSelector((state) => state.saved.items);

    return (
        <ul className={styles.list}>
            {savedItems.map((item) => (
                <SavedItem key={item.id} item={item} />
            ))}
        </ul>
    );
};

export default SavedList;
