import { combineReducers } from 'redux'

import handLoomState from '../../global/handLoom/reducers'
import trialWeaveState from '../../global/trialWeave/reducers'
import fcrState from '../../global/FCR/reducers'

const initShoppingCartState = []

export const shoppingCartState = (state = initShoppingCartState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default combineReducers({
    shoppingCartState,
    handLoomState,
    trialWeaveState,
    fcrState,
})
