import { combineReducers } from 'redux-immutable'

import apiRequestState from './apiRequest'
import masterDataState from './masterData'
import userErrorState from './userError'
import userProfileState from './userProfile'

export default combineReducers({
    apiRequestState,
    masterDataState,
    userErrorState,
    userProfileState,
})
