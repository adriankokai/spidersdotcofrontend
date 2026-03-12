import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BACKEND_URL } from '../utility.js';

export const fetchCompany = createAsyncThunk(
    'fetchCompany/fetchCompany',
    async (companyId, thunkAPI) => {
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    'Authorization': `Token ${token}`
                }
            };
            const response = await axios.get(BACKEND_URL + 'spideraccounts/fetch_company/' + companyId, config);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const fetchCompanySlice = createSlice({
    name: 'fetchCompany',
    initialState: {
        status: 'idle',
        error: null,
        company: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCompany.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchCompany.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.company = action.payload;
                state.error = null;
            })
            .addCase(fetchCompany.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
                state.company = null;
            });
    },
});

export default fetchCompanySlice.reducer;