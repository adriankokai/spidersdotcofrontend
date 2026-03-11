import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {BACKEND_URL} from '../utility.js';

export const fetchCurrencyList = createAsyncThunk(
    'currencyList/fetchCurrencyList',
    async (_, thunkAPI) => {
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    'Authorization': `Token ${token}`
                }
            };
            const response = await axios.get(BACKEND_URL + 'spideraccounts/fetch_currencies/', config);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const currencyListSlice = createSlice({
    name: 'currencyList',
    initialState: {
        status: 'idle',
        error: null,
        currencies: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrencyList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCurrencyList.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.currencies = action.payload;
            })
            .addCase(fetchCurrencyList.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export default currencyListSlice.reducer;