import { combineReducers } from 'redux'

import pageHeader from './global/pageHeader/reducers'
import development from './development/reducers'
import shoppingCart from './shoppingCart/reducers'
import joAssign from './joAssign/reducers'
import masterData from './global/reducers/masterData'

export default combineReducers({
    pageHeader,
    development,
    shoppingCart,
    joAssign,
    masterData,
})
