import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const cardsFetch = createAsyncThunk(
    'cards/getAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(
                'https://635cf9ddfc2595be264ffcad.mockapi.io/api/card/card'
            );
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
