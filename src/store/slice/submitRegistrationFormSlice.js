import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {BACKEND_URL} from '../utility.js';

export const submitRegistrationForm = createAsyncThunk(
    'submitRegistrationForm/submit',
    async (formData, thunkAPI) => {
        try {
            const response = await axios.post(BACKEND_URL + 'users/register/', formData);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    });

export const submitRegistrationFormSlice = createSlice({
    name: 'submitRegistrationForm',
    initialState: {
        status: 'idle',
        error: null,
    },
    reducers: {
    
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitRegistrationForm.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(submitRegistrationForm.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.error = null;
                console.log("Registration successful! Response data:", action.payload);
                localStorage.setItem('token', action.payload.token);
            })
            .addCase(submitRegistrationForm.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
        }
    });

export const {setFirstName, setLastName, setEmail, setPassword, setConfirmPassword, setPhoneNumber} = submitRegistrationFormSlice.actions;

export default submitRegistrationFormSlice.reducer;