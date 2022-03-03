import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import resources from './resources';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    customization: customizationReducer,
    resources
});

export default reducer;
