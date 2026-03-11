import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BACKEND_URL } from "../utility.js";



export const fetchCompanyList = createAsyncThunk(
    "companyList/fetchCompanyList",
    async (_, thunkAPI) => {
        try {
            const token = localStorage.getItem("token");
            const config = {
                headers: {
                    "Authorization": `Token ${token}`
                }
            };
            const response = await axios.get(BACKEND_URL + "spideraccounts/fetch_companies/", config);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const companyListSlice = createSlice({
    name: "companyList",
    initialState: {
        status: "idle",
        error: null,
        companies: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCompanyList.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchCompanyList.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.companies = action.payload;
                state.error = null;
            })
            .addCase(fetchCompanyList.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
                state.companies = [];
            });
    },
});

export default companyListSlice.reducer;
