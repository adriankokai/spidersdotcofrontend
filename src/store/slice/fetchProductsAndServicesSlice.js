import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BACKEND_URL } from '../utility.js';

export const fetchProductsAndServices = createAsyncThunk(
    'fetchProductsAndServices/fetchProductsAndServices',
    async (organisationId, thunkAPI) => {
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    'Authorization': `Token ${token}`
                }
            };
            const response = await axios.get(BACKEND_URL + 'spideraccounts/fetch_products_and_services/' + organisationId + '/', config);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const fetchProductsAndServicesSlice = createSlice({
    name: 'fetchProductsAndServices',
    initialState: {
        status: 'idle',
        error: null,
        productsAndServices: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsAndServices.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchProductsAndServices.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.productsAndServices = action.payload;
                state.error = null;
            })
            .addCase(fetchProductsAndServices.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
                state.productsAndServices = [];
            });
    },
});

export default fetchProductsAndServicesSlice.reducer;