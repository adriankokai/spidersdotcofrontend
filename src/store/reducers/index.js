import { combineReducers } from 'redux';
import fetchArticleReducer from './fetchArticle';
import fetchArticlesReducer from './fetchArticles';
import submitApplicationReducer from './submitApplication';

const rootReducer = combineReducers({
    fetchArticles: fetchArticlesReducer,
    fetchArticle: fetchArticleReducer,
    submitApplication: submitApplicationReducer,
})

export default rootReducer;