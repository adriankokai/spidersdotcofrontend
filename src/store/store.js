import {configureStore} from '@reduxjs/toolkit';
import submitRegistrationFormReducer from './slice/submitRegistrationFormSlice';
import fetchArticleReducer from './reducers/fetchArticle';
import loginReducer from './slice/loginSlice';

const store = configureStore({
    reducer: {
        // add your reducers here
        submitRegistrationForm: submitRegistrationFormReducer,
        fetchArticle: fetchArticleReducer,
        login: loginReducer,
    }
});

export default store;