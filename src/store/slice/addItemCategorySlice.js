import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {BACKEND_URL} from "../utility.js";

export const addItemCategory = createAsyncThunk(
    "addItemCategory/addItemCategory",
    async (categoryData, thunkAPI) => {
        try {
            const token = localStorage.getItem("token");
            const config = {
                headers: {
                    "Authorization": `Token ${token}`
                }
            };
            const response = await axios.post(BACKEND_URL + "spideraccounts/add_item_category/", categoryData, config);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const addItemCategorySlice = createSlice({
    name: "addItemCategory",
    initialState: {
        status: "idle",
        error: null,
        category: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addItemCategory.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(addItemCategory.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.category = action.payload;
                state.error = null;
            })
            .addCase(addItemCategory.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
                state.category = null;
            });
    },
});

export default addItemCategorySlice.reducer;