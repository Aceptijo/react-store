import React from 'react';
import styles from './BagList.module.scss';
import BagItem from '../BagItem/BagItem';
import { useSelector } from 'react-redux';
import { ReactComponent as BagImage } from './bagsvg.svg';

const BagList = () => {
    const { items, totalPrice } = useSelector((state) => state.bag);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Great, you lost $${totalPrice}!`);
    }

    return !!totalPrice ? (
        <div className={styles.wrapper}>
            <ul className={styles.list}>
                {items.map((item) => (
                    <BagItem item={item} key={item.id} />
                ))}
            </ul>
            <div className={styles.payment}>
                <span className={styles.price}>TOTAL PRICE</span>
                <span className={styles.number}>{`$${totalPrice}`}</span>
                <form onSubmit={handleSubmit}>
                    <button className={styles.submit}>CHECKOUT</button>
                </form>
            </div>
        </div>
    ) : (
        <div className={styles.empty}>
            <BagImage />
            <span className={styles.text}>We didn't add any item on the bag</span>
        </div>
    );
};

export default BagList;
