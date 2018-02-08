import { combineReducers } from 'redux-immutable'
import { fromJS, List } from 'immutable'

import {
    COLLAPSE_HANDLOOM_LEFT_CONTAINER,
    EXPAND_HANDLOOM_LEFT_CONTAINER,
} from '../../../actionTypes/index'

const initSendTo = ''

export const sendTo = (state = initSendTo, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const initIsExpanded = true

export const isExpanded = (state = initIsExpanded, action) => {
    switch (action.type) {
        case EXPAND_HANDLOOM_LEFT_CONTAINER:
            return true
            break

        case COLLAPSE_HANDLOOM_LEFT_CONTAINER:
            return false
            break

        default:
            return state
    }
}

export default combineReducers({
    sendTo,
    isExpanded,
})
