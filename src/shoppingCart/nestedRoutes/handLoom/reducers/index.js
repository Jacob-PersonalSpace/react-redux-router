import { combineReducers } from 'redux'

const initHandLoomState = 'Here is shoppingCart-handloom component'

export const handLoomState = (state = initHandLoomState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const initShoppingCartHandLoomLeftContentState = 'Here is shoppingCart-handloom left content component'

export const shoppingCartHandLoomLeftContentState = (state = initShoppingCartHandLoomLeftContentState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const initShoppingCartHandLoomRightContentState = 'Here is shoppingCart-handloom right content component'

export const shoppingCartHandLoomRightContentState = (state = initShoppingCartHandLoomRightContentState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default combineReducers({
    handLoomState,
    shoppingCartHandLoomLeftContentState,
    shoppingCartHandLoomRightContentState,
})
