import {configureStore} from '@reduxjs/toolkit';
import submitRegistrationFormReducer from './slice/submitRegistrationFormSlice';
import fetchArticleReducer from './reducers/fetchArticle';
import loginReducer from './slice/loginSlice';
import fetchCompanyListReducer from './slice/fetchCompanyListSlice';
import addCompanyReducer from './slice/addCompanySlice';
import fetchCountryListReducer from './slice/fetchCountryListSlice';
import fetchCurrencyListReducer from './slice/fetchCurrencyListSlice';

const store = configureStore({
    reducer: {
        // add your reducers here
        submitRegistrationForm: submitRegistrationFormReducer,
        fetchArticle: fetchArticleReducer,
        login: loginReducer,
        fetchCompanyList: fetchCompanyListReducer,
        addCompany: addCompanyReducer,
        fetchCountryList: fetchCountryListReducer,
        fetchCurrencyList: fetchCurrencyListReducer,
    }
});

export default store;