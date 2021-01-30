import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    linksInBio: null,
    error: null,
    loading: false
}
 
const fetchLinksInBioStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true        
    })
}

const fetchLinksInBioSuccess = (state, action) => {
    return updateObject(state, {
        linksInBio: action.linksInBio,
        error: null,
        loading: false
    })
}

const fetchLinksInBioFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
}

const fetchLinksInBioReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_LINKSINBIO_START: return fetchLinksInBioStart(state, action);
        case actionTypes.FETCH_LINKSINBIO_SUCCESS: return fetchLinksInBioSuccess(state, action);
        case actionTypes.FETCH_LINKSINBIO_FAIL: return fetchLinksInBioFail(state, action);
        default:
            return state
    }
}

export default fetchLinksInBioReducer;