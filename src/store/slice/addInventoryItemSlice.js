import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {BACKEND_URL} from "../utility.js";

export const addInventoryItem = createAsyncThunk(
    'addInventoryItem/addInventoryItem',
    async (itemData, thunkAPI) => {
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    'Authorization': `Token ${token}`
                }
            };
            const response = await axios.post(`${BACKEND_URL}spideraccounts/add_inventory_item/`, itemData, config);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const addInventoryItemSlice = createSlice({
    name: 'addInventoryItem',
    initialState: {
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addInventoryItem.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(addInventoryItem.fulfilled, (state) => {
                state.status = 'succeeded';
            })
            .addCase(addInventoryItem.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || action.error.message;
            });
    },
});

export default addInventoryItemSlice.reducer;