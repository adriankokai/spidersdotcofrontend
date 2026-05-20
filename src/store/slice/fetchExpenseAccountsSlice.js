import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {BACKEND_URL} from '../utility.js';

export const fetchExpenseAccounts = createAsyncThunk(
    'expenseAccounts/fetchExpenseAccounts',
    async (organisationId, thunkAPI) => {
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    'Authorization': `Token ${token}`
                }
            };
            const response = await axios.get(BACKEND_URL + `spideraccounts/fetch_expense_accounts/${organisationId}/`, config);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const expenseAccountsSlice = createSlice({
    name: 'expenseAccounts',
    initialState: {
        status: 'idle',
        error: null,
        expenseAccounts: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchExpenseAccounts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchExpenseAccounts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.expenseAccounts = action.payload;
            })
            .addCase(fetchExpenseAccounts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
        },
    });

export default expenseAccountsSlice.reducer;