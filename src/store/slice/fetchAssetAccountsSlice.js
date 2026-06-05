import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {BACKEND_URL} from '../utility.js';

export const fetchAssetAccounts = createAsyncThunk(
    'fetchAssetAccounts/fetchAssetAccounts',
    async (organisationId, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    'Authorization': `Token ${token}`
                }
            };
            const response = await axios.get(`${BACKEND_URL}spideraccounts/fetch_asset_accounts/${organisationId}/`, config);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const fetchAssetAccountsSlice = createSlice({
    name: 'fetchAssetAccounts',
    initialState: {
        assetAccounts: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAssetAccounts.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchAssetAccounts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.assetAccounts = action.payload;
            })
            .addCase(fetchAssetAccounts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || action.error.message;
            });
    },
});

export default fetchAssetAccountsSlice.reducer;