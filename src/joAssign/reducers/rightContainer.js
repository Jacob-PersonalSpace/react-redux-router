import { combineReducers } from 'redux-immutable'
import { fromJS, List } from 'immutable'

import {
    INIT_JOASSIGN_FILE_HEADER,
} from '../../constants/index'

import {
    JOASSIGN_RECEIVE_FILE,
} from '../../actionTypes/index'

const initFileContent = fromJS({})

export const fileContent = (state = initFileContent, action) => {
    switch (action.type) {
        case JOASSIGN_RECEIVE_FILE:
            return action.payload.updateIn(['content', 0], content => content.mergeDeep(INIT_JOASSIGN_FILE_HEADER))
            break

        default:
            return state
    }
}

export default combineReducers({
    fileContent,
})
