import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {BACKEND_URL} from '../utility.js';

export const fetchItemCategories = createAsyncThunk(
    'itemCategories/fetchItemCategories',
    async (organisationId, thunkAPI) => {
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    'Authorization': `Token ${token}`
                }
            };
            const response = await axios.get(BACKEND_URL + `spideraccounts/fetch_item_categories/${organisationId}/`, config);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const itemCategoriesSlice = createSlice({
    name: 'itemCategories',
    initialState: {
        status: 'idle',
        error: null,
        itemCategories: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchItemCategories.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchItemCategories.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.itemCategories = action.payload;
            })
            .addCase(fetchItemCategories.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export default itemCategoriesSlice.reducer;