import { createSlice } from '@reduxjs/toolkit';
import { calculateTotalPrice, findItemById, getItemIndexById } from '../utils';

const initialState = {
    items: [],
    totalPrice: 0,
};

//todo: summary: get index and item by value (id or full object)

//todo: *** move all logic to backend, implement optimistic update ***

const bagSlice = createSlice({
    name: 'bag',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const foundItem = findItemById(state, action.payload.id);

            if (!foundItem) {
                state.items.push({
                    ...action.payload,
                    count: 1,
                });

                const price = action.payload.price;
                state.totalPrice = calculateTotalPrice(
                    state.totalPrice,
                    price,
                    'increment'
                );
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id)

            const totalItemPrice = action.payload.count * action.payload.price

            state.totalPrice = calculateTotalPrice(
                state.totalPrice,
                totalItemPrice,
                'decrement'
            )
        },
        increment: (state, action) => {
            const index = getItemIndexById(state, action.payload.id);
            const price = action.payload.price;

            state.items[index].count += 1;

            state.totalPrice = calculateTotalPrice(
                state.totalPrice,
                price,
                'increment'
            );
        },
        decrement: (state, action) => {
            const index = getItemIndexById(state, action.payload.id);
            const price = action.payload.price;

            state.totalPrice = calculateTotalPrice(state.totalPrice, price);

            state.items[index].count -= 1;
        },
    },
});

export default bagSlice.reducer;
export const { addItem, removeItem, decrement, increment } = bagSlice.actions;
