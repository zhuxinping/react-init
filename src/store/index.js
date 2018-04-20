import {createStore,applyMiddleware} from 'redux';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import reducer from './reducers/index';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducer, /* preloadedState, */ composeEnhancers(applyMiddleware(reduxLogger,reduxThunk,reduxPromise)));
window._store = store; //为了测试用
export default store;