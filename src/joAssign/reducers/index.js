import { combineReducers } from 'redux-immutable'

import leftContainerState from './leftContainer'
import rightContainerState from './rightContainer'
import sheetSelectorState from './sheetSelector'

export default combineReducers({
    leftContainerState,
    rightContainerState,
    sheetSelectorState,
})
