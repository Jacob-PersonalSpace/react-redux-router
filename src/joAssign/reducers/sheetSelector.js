import { combineReducers } from 'redux-immutable'
import { fromJS, List } from 'immutable'

import {
    JOASSIGN_SHEETS,
} from '../../constants/index'

import {
    JOASSIGN_CHANGE_SHEET,
} from '../../actionTypes/index'

const initSheets = fromJS(JOASSIGN_SHEETS)

export const sheets = (state = initSheets, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const initSelectedSheet = JOASSIGN_SHEETS[1].value

export const selectedSheet = (state = initSelectedSheet, action) => {
    switch (action.type) {
        case JOASSIGN_CHANGE_SHEET:
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
