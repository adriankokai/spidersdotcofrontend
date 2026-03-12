import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BACKEND_URL } from '../utility.js';

export const fetchUser = createAsyncThunk(
    'fetchUser/fetchUser',
    async (_, thunkAPI) => {
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    'Authorization': `Token ${token}`
                }
            };
            const response = await axios.get(BACKEND_URL + 'users/fetch_user/', config);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const fetchUserSlice = createSlice({
    name: 'fetchUser',
    initialState: {
        status: 'idle',
        error: null,
        user: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
                state.error = null;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
                state.user = null;
            });
    },
});

export default fetchUserSlice.reducer;