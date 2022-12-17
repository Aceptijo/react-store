import React from 'react';
import styles from './BagItem.module.scss';
import { decrement, increment, removeItem } from '../../../../store/slices/bagSlice';
import { useDispatch } from 'react-redux';
import { changeSelectedStatus } from '../../../../store/slices/cardsSlice';
import { changeSelectedStatusForSaved } from '../../../../store/slices/savedSlice';

const BagItem = ({ item }) => {
    const dispatch = useDispatch();

    const plusOne = () => {
        const payload = { count: item.count, id: item.id, price: item.price };
        dispatch(increment(payload));
    };

    const minusOne = () => {
        const payload = { count: item.count, id: item.id, price: item.price };
        dispatch(decrement(payload));
    };

    const remove = () => {
        dispatch(removeItem(item));
        dispatch(changeSelectedStatus(item));
        dispatch(changeSelectedStatusForSaved(item));
    };

    return (
        <li className={styles.card}>
            <button onClick={remove} className={styles.delete}>
                X
            </button>
            <span className={styles.name}>{item.name}</span>
            <span className={styles.name}>{`$${item.price * item.count}`}</span>
            <div className={styles.change}>
                <button
                    onClick={minusOne}
                    className={item.count === 1 ? styles.block : styles.minus}
                    disabled={item.count === 1 && true}
                >
                    -
                </button>
                <span className={styles.count}>{item.count}</span>
                <button onClick={plusOne} className={styles.plus}>
                    +
                </button>
            </div>
        </li>
    );
};

export default BagItem;
