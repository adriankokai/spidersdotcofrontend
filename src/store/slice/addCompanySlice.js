import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {BACKEND_URL} from "../utility.js";

export const addCompany = createAsyncThunk(
    "addCompany/addCompany",
    async (companyData, thunkAPI) => {
        try {
            const token = localStorage.getItem("token");
            const config = {
                headers: {
                    "Authorization": `Token ${token}`
                }
            };
            const response = await axios.post(BACKEND_URL + "spideraccounts/add_company/", companyData, config);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const addCompanySlice = createSlice({
    name: "addCompany",
    initialState: {
        status: "idle",
        error: null,
        company: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addCompany.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(addCompany.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.company = action.payload;
                state.error = null;
            })
            .addCase(addCompany.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
                state.company = null;
            });
    },
});

export default addCompanySlice.reducer;