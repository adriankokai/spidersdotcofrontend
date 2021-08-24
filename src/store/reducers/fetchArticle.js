import * as actionTypes from '../actions/actionTypes';
import { BACKEND_URL } from '../utility';
import { updateObject } from '../utility';

const initialState = {
    articles: null,
    error: null,
    loading: false
}

const fetchArticleStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    })
}

const fetchArticleSuccess = (state, action) => {
    return updateObject(state, {
        article: action.article,
        error: null,
        loading: true
    })
}

const fetchArticleFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
}

const fetchArticleReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_ARTICLES_START: return fetchArticleStart(state, action);
        case actionTypes.FETCH_ARTICLES_SUCCESS: return fetchArticleSuccess(state, action);
        case actionTypes.FETCH_ARTICLES_FAIL: return fetchArticleFail(state, action);
        default:
            return state
    }
}

export default fetchArticleReducer;