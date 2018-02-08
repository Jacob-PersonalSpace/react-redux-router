import { combineReducers } from 'redux-immutable'
import { fromJS, List } from 'immutable'

import {
    SHOPPINGCART_SHEETS,
} from '../../constants/index'

import {
    SHOPPINGCART_CHANGE_SHEET,
} from '../../actionTypes/index'

const initSheets = fromJS(SHOPPINGCART_SHEETS)

export const sheets = (state = initSheets, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const initSelectedSheet = SHOPPINGCART_SHEETS[0].value

export const selectedSheet = (state = initSelectedSheet, action) => {
    switch (action.type) {
        case SHOPPINGCART_CHANGE_SHEET:
            return action.payload
            break

        default:
            return state
    }
}

export default combineReducers({
    sheets,
    selectedSheet,
})
