import { combineReducers } from 'redux';
import fetchLinksInBioReducer from './fetchLinksInBio';

const rootReducer = combineReducers({
    fetchLinksInBio: fetchLinksInBioReducer,
})

export default rootReducer;