import {configureStore} from '@reduxjs/toolkit';
import submitRegistrationFormReducer from './slice/submitRegistrationFormSlice';
import fetchArticleReducer from './reducers/fetchArticle';

const store = configureStore({
    reducer: {
        // add your reducers here
        submitRegistrationForm: submitRegistrationFormReducer,
        fetchArticle: fetchArticleReducer
    }
});

export default store;