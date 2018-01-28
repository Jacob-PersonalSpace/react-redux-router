import { combineReducers } from 'redux'

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
