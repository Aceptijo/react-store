import { createSlice } from '@reduxjs/toolkit';
import { findItemById, getItemIndexById } from '../utils';

const initialState = {
    items: [],
};

const savedSlice = createSlice({
    name: 'saved',
    initialState,
    reducers: {
        addSavedItem: (state, action) => {
            const foundItem = findItemById(state, action.payload.id);
            if (!foundItem) {
                state.items.push({
                    ...action.payload,
                });
            }
        },
        removeSavedItem: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload.id
            );
        },
        changeSelectedStatusForSaved: (state, action) => {
            const index = getItemIndexById(state, action.payload.id);

            state.items[index].isSelected = !state.items[index].isSelected;
        },
    },
});

export const { addSavedItem, removeSavedItem, changeSelectedStatusForSaved } =
    savedSlice.actions;
export default savedSlice.reducer;
