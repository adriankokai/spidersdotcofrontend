import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BACKEND_URL } from "../utility.js";



export const fetchOrganisationList = createAsyncThunk(
    "organisationList/fetchOrganisationList",
    async (_, thunkAPI) => {
        try {
            const token = localStorage.getItem("token");
            const config = {
                headers: {
                    "Authorization": `Token ${token}`
                }
            };
            const response = await axios.get(BACKEND_URL + "spideraccounts/fetch_organisations/", config);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const organisationListSlice = createSlice({
    name: "organisationList",
    initialState: {
        status: "idle",
        error: null,
        companies: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrganisationList.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchOrganisationList.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.companies = action.payload;
                state.error = null;
            })
            .addCase(fetchOrganisationList.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
                state.companies = [];
            });
    },
});

export default organisationListSlice.reducer;
