import { combineReducers } from 'redux-immutable'
// import { fromJS, List } from 'immutable'

import {
    EXPAND_TRIALWEAVE_LEFT_CONTAINER,
    COLLAPSE_TRIALWEAVE_LEFT_CONTAINER
} from '../../../actionTypes/index'

const initIsExpanded = true

export const isExpanded = (state = initIsExpanded, action) => {
    switch (action.type) {
        case EXPAND_TRIALWEAVE_LEFT_CONTAINER:
            return true
            break

        case COLLAPSE_TRIALWEAVE_LEFT_CONTAINER:
            return false
            break

        default:
            return state
    }
}

export default combineReducers({
    isExpanded,
})
