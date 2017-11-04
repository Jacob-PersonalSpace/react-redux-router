import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
// import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';

import rootReducer from './reducer';

export const history = createHistory();
const logger = createLogger()

const initialState = {}
const enhancers = []
const middleWare = [
    thunk,
    routerMiddleware(history),
    logger,
]

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleWare),
    ...enhancers,
)

const store = createStore(
    rootReducer,
    // connectRouter(history)(rootReducer),
    initialState,
    composedEnhancers,
)

export default store;
