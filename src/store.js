import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { fromJS } from 'immutable'
import reduxMiddleware from 'react-block-ui/reduxMiddleware'

import rootReducer from './reducer'

const logger = createLogger({
    stateTransformer(state) {
        return state.toJS()
    }
})

const initialState = fromJS({})
const enhancers = []
const middleWare = [
    thunk,
    logger,
    reduxMiddleware,
]

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
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

export default store
