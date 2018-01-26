import { combineReducers } from 'redux'

const initTrialWeaveState = 'Here is shoppingCart-trialWeave component'

export const trialWeaveState = (state = initTrialWeaveState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const initShoppingCartTrialWeaveLeftContentState = 'Here is shoppingCart-TrialWeave left content component'

export const shoppingCartTrialWeaveLeftContentState = (state = initShoppingCartTrialWeaveLeftContentState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const initShoppingCartTrialWeaveRightContentState = 'Here is shoppingCart-TrialWeave right content component'

export const shoppingCartTrialWeaveRightContentState = (state = initShoppingCartTrialWeaveRightContentState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default combineReducers({
    trialWeaveState,
    shoppingCartTrialWeaveLeftContentState,
    shoppingCartTrialWeaveRightContentState,
})
