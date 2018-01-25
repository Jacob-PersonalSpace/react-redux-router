import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from './reducer';

const logger = createLogger()

const initialState = {}
const enhancers = []
const middleWare = [
    thunk,
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
    initialState,
    composedEnhancers,
)

export default store;
