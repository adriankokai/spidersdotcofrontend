import * as actionTypes from './actionTypes'
import axios from 'axios'
import { BACKEND_URL } from '../utility'

export const fetchTutorialStart = () => {
    return {
        type: actionTypes.FETCH_TUTORIAL_START
    }
}

export const fetchTutorialSuccess = tutorial => {
    return {
        type: actionTypes.FETCH_TUTORIAL_SUCCESS,
        tutorial: tutorial
    }
}

export const fetchTutorialFail = error => {
    return {
        type: actionTypes.FETCH_TUTORIAL_FAIL,
        error: error
    }
}

export const fetchTutorial = id => {
    return dispatch => {
        dispatch(fetchTutorialStart());
        axios.get(BACKEND_URL + `tutorials/tutorial/${id}`)
        .then(res => {
            dispatch(fetchTutorialSuccess(res.data))
        })
        .catch(err => {
            dispatch(fetchTutorialFail(err))
        })
    }
}