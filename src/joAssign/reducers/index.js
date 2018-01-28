import { combineReducers } from 'redux-immutable'

const initJoAssignState = 'Here is JoAssign component'

export const joAssignState = (state = initJoAssignState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const initJoAssignLeftContentState = 'Here is JoAssign left content component'

export const joAssignLeftContentState = (state = initJoAssignLeftContentState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const initJoAssignRightContentState = 'Here is JoAssign right content component'

export const joAssignRightContentState = (state = initJoAssignRightContentState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default combineReducers({
    joAssignState,
    leftContentState: combineReducers({
        leftContentLabel: joAssignLeftContentState,
    }),
    rightContentState: combineReducers({
        rightContentLabel: joAssignRightContentState,
    }),
})
