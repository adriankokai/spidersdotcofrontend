import { combineReducers } from 'redux';
import fetchArticleReducer from './fetchArticle';
import fetchArticlesReducer from './fetchArticles';

const rootReducer = combineReducers({
    fetchArticles: fetchArticlesReducer,
    fetchArticle: fetchArticleReducer,
})

export default rootReducer;