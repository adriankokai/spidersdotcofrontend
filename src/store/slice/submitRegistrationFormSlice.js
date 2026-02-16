import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {BACKEND_URL} from '../utility.js';

export const submitRegistrationForm = createAsyncThunk(
    'submitRegistrationForm/submit',
    async (formData, thunkAPI) => {
        try {
            const response = await axios.post(BACKEND_URL + 'accounts/register/', formData);
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
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: ''
    },
    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action) => {
            state.lastName = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setConfirmPassword: (state, action) => {
            state.confirmPassword = action.payload;
        },
        setPhoneNumber: (state, action) => {
            state.phoneNumber = action.payload;
        }
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
            })
            .addCase(submitRegistrationForm.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
        }
    });

export const {setFirstName, setLastName, setEmail, setPassword, setConfirmPassword, setPhoneNumber} = submitRegistrationFormSlice.actions;

export default submitRegistrationFormSlice.reducer;