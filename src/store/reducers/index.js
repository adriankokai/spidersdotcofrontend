import { combineReducers } from 'redux';
import fetchLinksInBioReducer from './fetchLinksInBio';
import fetchTutorialReducer from './fetchTutorial';

const rootReducer = combineReducers({
    fetchLinksInBio: fetchLinksInBioReducer,
    fetchTutorial: fetchTutorialReducer
})

export default rootReducer;