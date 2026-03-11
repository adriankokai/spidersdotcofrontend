import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BACKEND_URL } from '../utility.js';

export const fetchCountryList = createAsyncThunk(
    'countryList/fetchCountryList',
    async (_, thunkAPI) => {
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    'Authorization': `Token ${token}`
                }
            };
            const response = await axios.get(BACKEND_URL + 'spideraccounts/fetch_countries/', config);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const countryListSlice = createSlice({
    name: 'countryList',
    initialState: {
        status: 'idle',
        error: null,
        countries: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountryList.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchCountryList.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.countries = action.payload;
                state.error = null;
            })
            .addCase(fetchCountryList.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
                state.countries = [];
            });
    },
});

export default countryListSlice.reducer;