import { createSlice } from '@reduxjs/toolkit';
import { cardsFetch } from '../fetching/getCards';
import { getItemIndexById } from '../utils';

const initialState = {
    items: [],
    isLoading: false,
    error: '',
};

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        changeSelectedStatus: (state, action) => {
            const index = getItemIndexById(state, action.payload.id);

            state.items[index].isSelected = !state.items[index].isSelected;
        },
        changeSavedStatus: (state, action) => {
            const index = getItemIndexById(state, action.payload.id);

            state.items[index].isSaved = !state.items[index].isSaved;
        },
    },
    extraReducers: {
        [cardsFetch.pending.type]: (state) => {
            state.isLoading = true;
        },
        [cardsFetch.fulfilled.type]: (state, action) => {
            state.isLoading = false;
            state.items = action.payload.map((item) => ({
                ...item,
                isSelected: false,
                isSaved: false,
            }));
            state.error = '';
        },
        [cardsFetch.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export default cardsSlice.reducer;
export const { changeSelectedStatus, changeSavedStatus } = cardsSlice.actions;
