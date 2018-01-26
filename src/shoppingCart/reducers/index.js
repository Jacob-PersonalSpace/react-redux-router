import { combineReducers } from 'redux'

import handLoomState from '../nestedRoutes/handLoom/reducers'
import trialWeaveState from '../nestedRoutes/trialWeave/reducers'
import fcrState from '../nestedRoutes/FCR/reducers'

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
