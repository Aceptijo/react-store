import React from 'react';
import styles from './Card.module.scss';
import { ReactComponent as LikeIcon } from '../../../../assets/images/favouritesvg.svg';
import { addItem } from '../../../../store/slices/bagSlice';
import { useDispatch } from 'react-redux';
import { addSavedItem } from '../../../../store/slices/savedSlice';
import {
    changeSavedStatus,
    changeSelectedStatus,
} from '../../../../store/slices/cardsSlice';

const Card = ({ card }) => {
    const dispatch = useDispatch();

    const addToBasket = () => {
        dispatch(addItem(card));
        dispatch(changeSelectedStatus(card));
    };

    const addToSavedList = () => {
        dispatch(addSavedItem(card));
        dispatch(changeSavedStatus(card));
    };

    return (
        <li className={styles.card}>
            <button
                className={card.isSaved ? styles.block : styles.like}
                onClick={addToSavedList}
                disabled={card.isSaved}
            >
                <LikeIcon
                    className={card.isSaved ? styles.full : styles.empty}
                />
            </button>
            <span className={styles.name}>{card.name}</span>
            <span className={styles.name}>{`$${Number(card.price)}`}</span>
            <button
                onClick={addToBasket}
                className={card.isSelected ? styles.active : styles.btn}
                disabled={card.isSelected}
            >
                {card.isSelected ? 'In a bag' : 'Add'}
            </button>
        </li>
    );
};

export default Card;
