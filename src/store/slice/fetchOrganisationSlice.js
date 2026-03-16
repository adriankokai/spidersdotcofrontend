import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BACKEND_URL } from '../utility.js';

export const fetchOrganisation = createAsyncThunk(
    'fetchOrganisation/fetchOrganisation',
    async (organisationId, thunkAPI) => {
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    'Authorization': `Token ${token}`
                }
            };
            const response = await axios.get(BACKEND_URL + 'spideraccounts/fetch_organisation/' + organisationId + '/', config);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const fetchOrganisationSlice = createSlice({
    name: 'fetchOrganisation',
    initialState: {
        status: 'idle',
        error: null,
        organisation: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrganisation.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchOrganisation.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.organisation = action.payload;
                state.error = null;
            })
            .addCase(fetchOrganisation.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
                state.organisation = null;
            });
    },
});

export default fetchOrganisationSlice.reducer;