import { combineReducers } from 'redux-immutable'
import { fromJS, List } from 'immutable'

import {
    RECEIVE_REQUEST_LIST,
    EXPAND_JOASSIGN_LEFT_CONTAINER,
    COLLAPSE_JOASSIGN_LEFT_CONTAINER,
    JOASSIGN_CLICK_FOLDER,
    JOASSIGN_RECEIVE_PROCEED,
} from '../../actionTypes/index'

const initRequestList = fromJS([])

export const requestList = (state = initRequestList, action) => {
    switch (action.type) {
        case JOASSIGN_RECEIVE_PROCEED:
            let brandIndex = state.findIndex(obj => obj.get('brandCode') === action.payload.get('brandCode'))

            if (brandIndex > -1) {
                let childIndex = state.getIn([brandIndex, 'child']).findIndex(obj => obj.get('handloomRequestNo') === action.payload.get('handloomRequestNo'))

                if (childIndex > -1) {
                    let count = action.payload.get('count')

                    if (count === 0) {
                        return state.updateIn([brandIndex, 'child'], v => v.splice(childIndex, 1))
                    }
                    else {
                        return state.updateIn([brandIndex, 'child', childIndex], v => v.set('count', count))
                    }
                }
            }

            return state
            break

        case RECEIVE_REQUEST_LIST:
            let newState = action.payload

            return !newState.isEmpty() && List.isList(newState) ?
                newState.map(node => {
                    let newNode = node.merge(fromJS({ name: node.get('brandCode'), deepth: 0, expanded: false }))

                    if (!newNode.get('child').isEmpty() && List.isList(newNode.get('child'))) {
                        newNode = newNode.update('child', children => children.map(child => child.merge(fromJS({ name: child.get('handloomRequestNo'), deepth: 1, leaf: true }))))
                    }

                    return newNode
                }) :
                initRequestList
            break

        case JOASSIGN_CLICK_FOLDER:
            let folderIndex = state.findIndex(obj => obj.get('brandCode') === action.payload)

            if (folderIndex > -1) {
                return state.update(folderIndex, value => value.set('isExpanded', !value.get('isExpanded')))
            }
            else {
                return state
            }
            break

        default:
            return state
    }
}

const initIsExpanded = true

export const isExpanded = (state = initIsExpanded, action) => {
    switch (action.type) {
        case EXPAND_JOASSIGN_LEFT_CONTAINER:
            return true
            break

        case COLLAPSE_JOASSIGN_LEFT_CONTAINER:
            return false
            break

        default:
            return state
    }
}

export default combineReducers({
    requestList,
    isExpanded,
})