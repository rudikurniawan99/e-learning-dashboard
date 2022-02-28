import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

// ==============================|| REDUX - MAIN STORE ||============================== //
const { NODE_ENV } = process.env;

const composeEnhancers =
    (NODE_ENV !== 'production' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || // eslint-disable-line no-underscore-dangle
    compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk())));
const persister = 'Free';

export { store, persister };
