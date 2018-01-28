import { combineReducers } from 'redux-immutable'

import {
    RECEIVE_FINISHING_LIST,
    RECEIVE_WASHTYPE_LIST,
} from '../../actionTypes'

const initFinishingList = []

export const finishingList = (state = initFinishingList, action) => {
    switch (action.type) {
        case RECEIVE_FINISHING_LIST:
            return action.payload
            break

        default:
            return state
    }
}

const initwashTypeList = []

export const washTypeList = (state = initwashTypeList, action) => {
    switch (action.type) {
        case RECEIVE_WASHTYPE_LIST:
            return action.payload
            break

        default:
            return state
    }
}

export default combineReducers({
    finishingList,
    washTypeList,
})
