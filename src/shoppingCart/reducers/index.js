import { combineReducers } from 'redux-immutable'

import handLoomState from '../../global/handLoom/reducers'
import trialWeaveState from '../../global/trialWeave/reducers'
// import fcrState from '../../global/FCR/reducers'
import sheetSelectorState from './sheetSelector'

export default combineReducers({
    handLoomState,
    trialWeaveState,
    // fcrState,
    sheetSelectorState,
})
