import React from 'react';
import styles from './SavedItem.module.scss';
import { addItem } from '../../../../store/slices/bagSlice';
import { useDispatch } from 'react-redux';
import { changeSavedStatus, changeSelectedStatus } from '../../../../store/slices/cardsSlice';
import { changeSelectedStatusForSaved, removeSavedItem } from '../../../../store/slices/savedSlice';

const SavedItem = ({ item }) => {
    const dispatch = useDispatch();

    const addToBasket = () => {
        dispatch(addItem(item));
        dispatch(changeSelectedStatusForSaved(item));
        dispatch(changeSelectedStatus(item));
    };

    const removeFromSaved = () => {
        dispatch(removeSavedItem(item));
        dispatch(changeSavedStatus(item));
    };

    return (
        <li className={styles.card}>
            <button className={styles.delete} onClick={removeFromSaved}>
                X
            </button>
            <span className={styles.name}>{item.name}</span>
            <span className={styles.price}>{`$${Number(item.price)}`}</span>
            <button
                onClick={addToBasket}
                className={item.isSelected ? styles.active : styles.btn}
                disabled={item.isSelected}
            >
                {item.isSelected ? 'In a bag' : 'Add'}
            </button>
        </li>
    );
};

export default SavedItem;
