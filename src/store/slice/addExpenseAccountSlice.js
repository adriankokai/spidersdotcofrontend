import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {BACKEND_URL} from "../utility.js";

export const addExpenseAccount = createAsyncThunk(
    'addExpenseAccount/addExpenseAccount',
    async ({ organisation, name, balance, date }, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    'Authorization': `Token ${token}`
                }
            };
            const response = await axios.post(`${BACKEND_URL}spideraccounts/add_expense_account/`, {
                organisation,
                name,
                balance,
                date
            }, config);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const addExpenseAccountSlice = createSlice({
    name: 'addExpenseAccount',
    initialState: {
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addExpenseAccount.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(addExpenseAccount.fulfilled, (state) => {
                state.status = 'succeeded';
            })
            .addCase(addExpenseAccount.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || action.error.message;
            });
    },
});

export default addExpenseAccountSlice.reducer;