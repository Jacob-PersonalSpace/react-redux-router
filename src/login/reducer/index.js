import { combineReducers } from 'redux'

import * as login from './loginInfo'

export default combineReducers({
    ...login,
})