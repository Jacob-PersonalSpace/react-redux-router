import { combineReducers } from 'redux-immutable'

const initPageHeaderState = 'Here is pageHeader component'

export const pageHeaderState = (state = initPageHeaderState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default combineReducers({
    pageHeaderState,
})
