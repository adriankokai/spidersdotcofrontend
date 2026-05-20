import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {BACKEND_URL} from '../utility.js';

export const fetchIncomeAccounts = createAsyncThunk(
    'fetchIncomeAccounts/fetchIncomeAccounts',
    async (organisationId, thunkAPI) => {
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    'Authorization': `Token ${token}`
                }
            };
            const response = await axios.get(BACKEND_URL + 'spideraccounts/fetch_income_accounts/' + organisationId + '/', config);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const fetchIncomeAccountsSlice = createSlice({
    name: 'fetchIncomeAccounts',
    initialState: {
        status: 'idle',
        error: null,
        incomeAccounts: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchIncomeAccounts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchIncomeAccounts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.incomeAccounts = action.payload;
            })
            .addCase(fetchIncomeAccounts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
        },
    });

export default fetchIncomeAccountsSlice.reducer;