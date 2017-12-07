import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router/immutable'
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { Map } from 'immutable';

import rootReducer from './reducer';

export const history = createBrowserHistory();

const logger = createLogger()

const initialState = Map()
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
    connectRouter(history)(rootReducer),
    initialState,
    composedEnhancers,
)

export default store;
