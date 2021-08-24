import * as actionTypes from './actionTypes';
import axios from 'axios';
import { BACKEND_URL } from '../utility';

export const fetchArticlesStart = () => {
    return {
        type: actionTypes.FETCH_ARTICLES_START
    }
}

export const fetchArticlesSuccess = articles => {
    return {
        type: actionTypes.FETCH_ARTICLES_SUCCESS,
        articles
    }
}

export const fetchArticlesFail = error => {
    return {
        type: actionTypes.FETCH_ARTICLES_FAIL,
        error
    }
}

export const fetchArticles = () => {
    return dispatch => {
        dispatch(fetchArticlesStart());
        axios.get(BACKEND_URL + 'blog/articles/')
        .then(res => {
            dispatch(fetchArticlesSuccess(res.data))
        })
        .catch(err => {
            dispatch(fetchArticlesFail(err))
        })
    }
}