import * as actionTypes from '../actions/actionTypes';
import { BACKEND_URL } from '../utility';
import { updateObject } from '../utility';

const initialState = {
    articles: null,
    error: null,
    loading: false
}

const fetchArticlesStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    })
}

const fetchArticlesSuccess = (state, action) => {
    return updateObject(state, {
        articles: action.articles,
        error: null,
        loading: true
    })
}

const fetchArticlesFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
}

const fetchArticlesReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_ARTICLES_START: return fetchArticlesStart(state, action);
        case actionTypes.FETCH_ARTICLES_SUCCESS: return fetchArticlesSuccess(state, action);
        case actionTypes.FETCH_ARTICLES_FAIL: return fetchArticlesFail(state, action);
        default:
            return state
    }
}

export default fetchArticlesReducer;