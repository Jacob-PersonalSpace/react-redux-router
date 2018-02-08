import { combineReducers } from 'redux-immutable'
import { fromJS } from 'immutable'

import {
    RECEIVE_GETSHIPMODE,
    RECEIVE_GETDESTINATION,
    RECEIVE_GETWASHTYPE,
    RECEIVE_GETGARMENTFEATURE,
    RECEIVE_SEARCHFINISHING,
} from '../../actionTypes'

const initFinishingList = fromJS([])

export const finishingList = (state = initFinishingList, action) => {
    switch (action.type) {
        case RECEIVE_SEARCHFINISHING:
            return action.payload.map(obj => obj.update('value', value => value.toString()))
            break

        default:
            return state
    }
}

const initwashTypeList = fromJS([])

export const washTypeList = (state = initwashTypeList, action) => {
    switch (action.type) {
        case RECEIVE_GETWASHTYPE:
            return action.payload
            break

        default:
            return state
    }
}

const initGarmentFeatureList = fromJS([])

export const garmentFeatureList = (state = initGarmentFeatureList, action) => {
    switch (action.type) {
        case RECEIVE_GETGARMENTFEATURE:
            return action.payload
            break

        default:
            return state
            break
    }
}

const initDestinationList = fromJS([])

export const destinationList = (state = initDestinationList, action) => {
    switch (action.type) {
        case RECEIVE_GETDESTINATION:
            return action.payload.map(v => v.set('label', v.get('value')))
            break

        default:
            return state
            break
    }
}

const initShipModeList = fromJS([])

export const shipModeList = (state = initShipModeList, action) => {
    switch (action.type) {
        case RECEIVE_GETSHIPMODE:
            return action.payload
            break

        default:
            return state
            break
    }
}

export default combineReducers({
    finishingList,
    washTypeList,
    shipModeList,
    destinationList,
    garmentFeatureList,
})
