import { combineReducers } from 'redux-immutable'

const initFCRRejectState = 'Here is shoppingCart-fcr-reject component'

export const fcrRejectState = (state = initFCRRejectState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default combineReducers({
    fcrRejectState,
})
