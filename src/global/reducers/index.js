import { combineReducers } from 'redux-immutable'

import apiRequestState from './apiRequest'
import masterDataState from './masterData'
import userErrorState from './userError'

export default combineReducers({
    apiRequestState,
    masterDataState,
    userErrorState,
})
