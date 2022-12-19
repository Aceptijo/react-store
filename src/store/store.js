import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cardsReducer from './slices/cardsSlice';
import bagReducer from './slices/bagSlice';
import savedReducer from './slices/savedSlice';

const rootReducer = combineReducers({
    cards: cardsReducer,
    bag: bagReducer,
    saved: savedReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});
