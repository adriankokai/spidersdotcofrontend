import * as actionTypes from './actionTypes';
import axios from axios

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authLoggedIn = user => {
    return {
        type: actionTypes.AUTH_LOGGED_IN
        user: user
    }
}

export const authLoggedOut = () => {
    return {
        type: actionTypes.AUTH_LOGGED_OUT,
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const login = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post(BACKEND_URL + )
    }
}