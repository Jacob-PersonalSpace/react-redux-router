import { combineReducers } from 'redux-immutable'
import { fromJS, List } from 'immutable'

import {
    INIT_JOASSIGN_FILE_HEADER,
} from '../../constants/index'

import {
    JOASSIGN_RECEIVE_FILE,
    JOASSIGN_CHANGE_CELLS,
    JOASSIGN_RECEIVE_PROCEED,
    JOASSIGN_REQUEST_FILE,
    JOASSIGN_FAILURE_FILE,
} from '../../actionTypes/index'

const initFileContent = fromJS({})

export const fileContent = (state = initFileContent, action) => {
    switch (action.type) {
        case JOASSIGN_RECEIVE_PROCEED:
        case JOASSIGN_RECEIVE_FILE:
            return action.payload.updateIn(['content', 0], content => content.merge(INIT_JOASSIGN_FILE_HEADER))
            break

        case JOASSIGN_CHANGE_CELLS:
            let body = state.getIn(['content', 0, 'body'])

            action.payload.forEach(row => {
                let rowIndex = body.findIndex(r => r.get('_id') === row.get('_id'))

                if (rowIndex > -1) {
                    state = state.updateIn(['content', 0, 'body', rowIndex], v => v.mergeDeep(row))
                }
            })

            return state

            break

        default:
            return state
    }
}

const initIsFetchingRequestFile = false

export const isFetchingRequestFile = (state = initIsFetchingRequestFile, action) => {
    switch (action.type) {
        case JOASSIGN_FAILURE_FILE:
        case JOASSIGN_RECEIVE_FILE:
            return false
            break

        case JOASSIGN_REQUEST_FILE:
            return true

            break

        default:
            return state
    }
}

export default combineReducers({
    fileContent,
    isFetchingRequestFile,
})
