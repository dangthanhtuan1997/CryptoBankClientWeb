import { combineReducers } from 'redux';
import userReducer from './userReducer';
import transactionReducer from './transactionReducer';
import popupReducer from './popupReducer';

const reducer = combineReducers({
  userReducer,
  transactionReducer,
  popupReducer
});

export default reducer;