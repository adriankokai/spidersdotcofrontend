import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {BACKEND_URL} from "../utility.js";

export const addIncomeAccount = createAsyncThunk(
    'addIncomeAccount/addIncomeAccount',
    async ({ organisation, name, balance, date }, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    'Authorization': `Token ${token}`
                }
            };
            const response = await axios.post(`${BACKEND_URL}spideraccounts/add_income_account/`, {
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

const addIncomeAccountSlice = createSlice({
    name: 'addIncomeAccount',
    initialState: {
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addIncomeAccount.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(addIncomeAccount.fulfilled, (state) => {
                state.status = 'succeeded';
            })
            .addCase(addIncomeAccount.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || action.error.message;
            });
    },
});

export default addIncomeAccountSlice.reducer;