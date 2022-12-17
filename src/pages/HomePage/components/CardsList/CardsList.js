import React, { useEffect } from 'react';
import styles from './CardsList.module.scss';
import Card from '../Card/Card';
import { cardsFetch } from '../../../../store/fetching/getCards';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../../components/Loader/Loader';

const CardsList = () => {
    const { items, isLoading } = useSelector((state) => state.cards);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!items.length) {
            dispatch(cardsFetch());
        }
    }, []);

    return (
        <ul className={styles.list}>
            {isLoading ? (
                <Loader />
            ) : (
                items.map((card) => <Card card={card} key={card.id} />)
            )}
        </ul>
    );
};

export default CardsList;
