import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
    tutorial: null,
    error: null,
    loading: false
}

const fetchTutorialStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    })
}

const fetchTutorialSuccess = (state, action) => {
    return updateObject(state, {
        tutorial: action.tutorial,
        error: null,
        loading: false
    })
}

const fetchTutorialFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
}

const fetchTutorialReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TUTORIAL_START: return fetchTutorialStart(state, action);
        case actionTypes.FETCH_TUTORIAL_SUCCESS: return fetchTutorialSuccess(state, action);
        case actionTypes.FETCH_TUTORIAL_FAIL: return fetchTutorialFail(state, action);
        default:
            return state
    }
}

export default fetchTutorialReducer;