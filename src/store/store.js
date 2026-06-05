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
import fetchItemCategoriesReducer from './slice/fetchItemCategoriesSlice';
import addItemCategoryReducer from './slice/addItemCategorySlice';
import fetchIncomeAccountsReducer from './slice/fetchIncomeAccountsSlice';
import fetchExpenseAccountsReducer from './slice/fetchExpenseAccountsSlice';
import addIncomeAccountReducer from './slice/addIncomeAccountSlice';
import addExpenseAccountReducer from './slice/addExpenseAccountSlice';
import addInventoryItemReducer from './slice/addInventoryItemSlice';
import fetchProductsAndServicesReducer from './slice/fetchProductsAndServicesSlice';
import addAssetAccountReducer from './slice/addAssetAccountSlice';
import fetchAssetAccountsReducer from './slice/fetchAssetAccountsSlice';

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
        fetchItemCategories: fetchItemCategoriesReducer,
        addItemCategory: addItemCategoryReducer,
        fetchIncomeAccounts: fetchIncomeAccountsReducer,
        fetchExpenseAccounts: fetchExpenseAccountsReducer,
        addIncomeAccount: addIncomeAccountReducer,
        addExpenseAccount: addExpenseAccountReducer,
        addInventoryItem: addInventoryItemReducer,
        fetchProductsAndServices: fetchProductsAndServicesReducer,
        addAssetAccount: addAssetAccountReducer,
        fetchAssetAccounts: fetchAssetAccountsReducer,
    }
});

export default store;