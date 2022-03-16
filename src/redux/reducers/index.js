import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import resources from './resources';
import currentUser from './current-user'

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  customization: customizationReducer,
  resources,
  currentUser
});

export default reducer;
