import { combineReducers } from 'redux-immutable'

import fcrNewState from '../../FCRNew/reducers'
import fcrRejectState from '../../FCRReject/reducers'

const initFcrState = 'Here is shoppingCart-fcr component'

export const fcrState = (state = initFcrState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const initShoppingCartFCRLeftContentState = 'Here is shoppingCart-FCR left content component'

export const shoppingCartFCRLeftContentState = (state = initShoppingCartFCRLeftContentState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const initShoppingCartFCRRightContentState = 'Here is shoppingCart-FCR right content component'

export const shoppingCartFCRRightContentState = (state = initShoppingCartFCRRightContentState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default combineReducers({
    fcrState,
    leftContentState: combineReducers({
        leftContentLabel: shoppingCartFCRLeftContentState,
    }),
    rightContentState: combineReducers({
        rightContentLabel: shoppingCartFCRRightContentState,
    }),
    fcrNewState,
    fcrRejectState,
})
