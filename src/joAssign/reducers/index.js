import { combineReducers } from 'redux'

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
    joAssignLeftContentState,
    joAssignRightContentState,
})
