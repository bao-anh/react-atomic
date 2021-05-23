import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';
import modal from './modal';

const rootReducer = combineReducers({
  auth,
  alert,
  modal
});

export default rootReducer;
