import { combineReducers } from 'redux'

import * as registInfo from './registInfo'

export default combineReducers({
    ...registInfo,
})