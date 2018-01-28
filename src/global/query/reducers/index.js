import { combineReducers } from 'redux-immutable'

const initQueryState = 'Here is development-query component'

export const queryState = (state = initQueryState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const initDevelopmentQueryLeftContentState = 'Here is development-query left content component'

export const developmentQueryLeftContentState = (state = initDevelopmentQueryLeftContentState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const initDevelopmentQueryRightContentState = 'Here is development-query right content component'

export const developmentQueryRightContentState = (state = initDevelopmentQueryRightContentState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default combineReducers({
    queryState,
    leftContentState: combineReducers({
        leftContentLabel: developmentQueryLeftContentState,
    }),
    rightContentState: combineReducers({
        rightContentLabel: developmentQueryRightContentState,
    }),
})
