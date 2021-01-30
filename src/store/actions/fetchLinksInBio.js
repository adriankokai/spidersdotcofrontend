import * as actionTypes from './actionTypes';
import axios from 'axios';
import { BACKEND_URL } from '../utility';

export const fetchLinksInBioStart = () => {
    return {
        type: actionTypes.FETCH_LINKSINBIO_START
    }
}

export const fetchLinksInBioSuccess = linksInBio => {
    return {
        type: actionTypes.FETCH_LINKSINBIO_SUCCESS,
        linksInBio: linksInBio
    }
}

export const fetchLinksInBioFail = error => {
    return {
        type: actionTypes.FETCH_LINKSINBIO_FAIL,
        error: error
    }
}

export const fetchLinksInBio = () => {
    return dispatch => {
        dispatch(fetchLinksInBioStart());
        axios.get(BACKEND_URL + 'main/linksinbio/')
        .then(res => {
            dispatch(fetchLinksInBioSuccess(res.data))
        })
        .catch(err => {
            dispatch(fetchLinksInBioFail(err))
        })
    }
}