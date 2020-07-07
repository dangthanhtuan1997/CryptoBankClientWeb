import { combineReducers } from 'redux';
import userReducer from './userReducer';
import transactionReducer from './transactionReducer';
import popupReducer from './popupReducer';
import notificationReducer from './notificationReducer';

const reducer = combineReducers({
  userReducer,
  transactionReducer,
  popupReducer,
  notificationReducer
});

export default reducer;