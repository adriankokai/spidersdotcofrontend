import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {BACKEND_URL} from "../utility.js";

export const addOrganisation = createAsyncThunk(
    "addOrganisation/addOrganisation",
    async (organisationData, thunkAPI) => {
        try {
            const token = localStorage.getItem("token");
            const config = {
                headers: {
                    "Authorization": `Token ${token}`
                }
            };
            const response = await axios.post(BACKEND_URL + "spideraccounts/add_organisation/", organisationData, config);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const addOrganisationSlice = createSlice({
    name: "addOrganisation",
    initialState: {
        status: "idle",
        error: null,
        organisation: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addOrganisation.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(addOrganisation.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.organisation = action.payload;
                state.error = null;
            })
            .addCase(addOrganisation.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
                state.organisation = null;
            });
    },
});

export default addOrganisationSlice.reducer;