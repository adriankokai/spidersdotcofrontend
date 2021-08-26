import * as actionTypes from './actionTypes';
import axios from 'axios';
import { BACKEND_URL } from '../utility';

export const fetchArticleStart = () => {
    return {
        type: actionTypes.FETCH_ARTICLES_START
    }
}

export const fetchArticleSuccess = article => {
    return {
        type: actionTypes.FETCH_ARTICLES_SUCCESS,
        article
    }
}

export const fetchArticleFail = error => {
    return {
        type: actionTypes.FETCH_ARTICLES_FAIL,
        error
    }
}

export const fetchArticle = title => {
    return dispatch => {
        dispatch(fetchArticleStart());
        axios.get(BACKEND_URL + 'blog/article/' + title + '/')
        .then(res => {
            dispatch(fetchArticleSuccess(res.data))
        })
        .catch(err => {
            dispatch(fetchArticleFail(err))
        })
    }
}