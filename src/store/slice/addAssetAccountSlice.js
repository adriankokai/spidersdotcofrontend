import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {BACKEND_URL} from '../utility.js';

export const addAssetAccount = createAsyncThunk(
    'addAssetAccount/addAssetAccount',
    async (asset, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    'Authorization': `Token ${token}`
                }
            };
            const response = await axios.post(`${BACKEND_URL}spideraccounts/add_asset_account/`,
                asset
            , config);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const addAssetAccountSlice = createSlice({
    name: 'addAssetAccount',
    initialState: {
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addAssetAccount.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(addAssetAccount.fulfilled, (state) => {
                state.status = 'succeeded';
            })
            .addCase(addAssetAccount.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || action.error.message;
            });
    },
});

export default addAssetAccountSlice.reducer;