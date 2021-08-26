import axios from 'axios';
import { BACKEND_URL } from '../utility';
import * as actionTypes from './actionTypes';

export const submitApplicationStart = () => {
    return {
        type: actionTypes.SUBMIT_APPLICATION_START
    }
}

export const submitApplicationSuccess = message => {
    return {
        type: actionTypes.SUBMIT_APPLICATION_SUCCESS,
        message
    }
}

export const submitApplicationFail = error => {
    return {
        type: actionTypes.SUBMIT_APPLICATION_FAIL,
        error: error
    }
}

export const submitApplication = (
            firstName,
            lastName,
            address,
            email,
            facebook,
            instagram,
            twitter,
            category,
            PACKAGE
) => {
    return dispatch => {
        dispatch(submitApplicationStart());
        axios.post(BACKEND_URL + 'main/submit_application/', {
            first_name: firstName,
            last_name: lastName,
            address: address,
            email: email,
            facebook: facebook,
            instagram: instagram,
            twitter: twitter,
            category: category,
            package: PACKAGE
        })
        .then(res => {
            dispatch(submitApplicationSuccess(res.data))
        })
        .catch(err => {
            dispatch(submitApplicationFail(err))
        })
    }
}

export const subscribe = (name, email) => {
    return dispatch => {
        dispatch(submitApplicationStart());
        axios.post(BACKEND_URL + 'blog/subscribe/', {
            name: name,
            email: email
        })
        .then(res => {
            dispatch(submitApplicationSuccess(res.data))
        })
        .catch(err => {
            dispatch(submitApplicationFail(err))
        })
    }
}