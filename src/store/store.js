import {configureStore} from '@reduxjs/toolkit';
import submitRegistrationFormReducer from './slice/submitRegistrationFormSlice';
import fetchArticleReducer from './reducers/fetchArticle';
import loginReducer from './slice/loginSlice';
import fetchOrganisationListReducer from './slice/fetchOrganisationListSlice';
import addOrganisationReducer from './slice/addOrganisationSlice';
import fetchCountryListReducer from './slice/fetchCountryListSlice';
import fetchCurrencyListReducer from './slice/fetchCurrencyListSlice';
import fetchOrganisationReducer from './slice/fetchOrganisationSlice';
import fetchUserReducer from './slice/fetchUserSlice';

const store = configureStore({
    reducer: {
        // add your reducers here
        submitRegistrationForm: submitRegistrationFormReducer,
        fetchArticle: fetchArticleReducer,
        login: loginReducer,
        fetchOrganisationList: fetchOrganisationListReducer,
        addOrganisation: addOrganisationReducer,
        fetchCountryList: fetchCountryListReducer,
        fetchCurrencyList: fetchCurrencyListReducer,
        fetchOrganisation: fetchOrganisationReducer,
        fetchUser: fetchUserReducer,
    }
});

export default store;