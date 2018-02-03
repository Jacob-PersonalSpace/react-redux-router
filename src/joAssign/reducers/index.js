import { combineReducers } from 'redux-immutable'
import leftContainerState from './leftContainer'
import rightContainerState from './rightContainer'

export default combineReducers({
    leftContainerState,
    rightContainerState,
})
