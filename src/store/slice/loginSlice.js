import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BACKEND_URL } from "../utility.js";

export const login = createAsyncThunk(
    "login/login",
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post(BACKEND_URL + "users/login/", credentials);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        status: "idle",
        error: null,
        user: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.user = action.payload;
                state.error = null;
                localStorage.setItem("token", action.payload.token);
            })
            .addCase(login.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
                state.user = null;
            });
    },
});

export default loginSlice.reducer;