import { combineReducers } from 'redux-immutable'

const initFcrNewState = 'Here is shoppingCart-fcr-new component'

export const fcrNewState = (state = initFcrNewState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default combineReducers({
    fcrNewState,
})
