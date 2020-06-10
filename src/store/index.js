import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AppReducer from '../reducers';

const store = createStore(AppReducer, applyMiddleware(thunk));

export default store;