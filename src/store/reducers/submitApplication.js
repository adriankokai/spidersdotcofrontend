import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    message: null,
    error: null,
    loading: false
}

const submitApplicationStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    })
}

const submitApplicationSuccess = (state, action) => {
    return updateObject(state, {
        message: action.message,
        error: null,
        loading: false
    })
}

const submitApplicationFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
}

const submitApplicationReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.SUBMIT_APPLICATION_START: return submitApplicationStart(state, action);
        case actionTypes.SUBMIT_APPLICATION_SUCCESS: return submitApplicationSuccess(state, action);
        case actionTypes.SUBMIT_APPLICATION_FAIL: return submitApplicationFail(state, action);
        default:
            return state;
    }
}

export default submitApplicationReducer;