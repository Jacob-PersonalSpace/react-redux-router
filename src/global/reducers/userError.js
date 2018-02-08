import { combineReducers } from 'redux-immutable'
import { fromJS } from 'immutable'

import {
    ADD_USER_ERROR,
    REMOVE_USER_ERROR,
} from '../../actionTypes'

const initUserErrors = fromJS([])

export const userErrors = (state = initUserErrors, action) => {
    switch (action.type) {
        case ADD_USER_ERROR:
            return state.push(fromJS({
                title: action.title,
                message: action.message,
                alertType: action.alertType,
                html: action.html,
                index: state.size > 0 ? state.maxBy(o => o.get('index')).get('index') + 1 : 0,
            }))
            break

        case REMOVE_USER_ERROR:
            return state.filter(v => v.get('index') !== action.payload)
            break

        default:
            return state
    }
}

export default combineReducers({
    userErrors,
})
