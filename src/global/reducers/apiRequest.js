import { combineReducers } from 'redux-immutable'
import { fromJS } from 'immutable'

import {
    ADD_API_REQUEST,
    REMOVE_API_REQUEST,
} from '../../actionTypes'

const initAPIRequests = 0

export const apiRequestsForBlockUi = (state = initAPIRequests, action) => {
    switch (action.type) {
        case ADD_API_REQUEST:
            return state + 1
            break

        case REMOVE_API_REQUEST:
            return state - 1
            break

        default:
            return state
    }
}

export default combineReducers({
    apiRequestsForBlockUi,
})
