import { combineReducers } from 'redux';
import userReducer from './userReducer';
import transactionReducer from './transactionReducer';

const reducer = combineReducers({
  userReducer,
  transactionReducer
});

export default reducer;