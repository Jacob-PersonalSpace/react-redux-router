import { combineReducers } from 'redux-immutable'

import pageHeader from './global/pageHeader/reducers'
import development from './development/reducers'
import shoppingCart from './shoppingCart/reducers'
import joAssign from './joAssign/reducers'
import global from './global/reducers'

export default combineReducers({
    pageHeader,
    development,
    shoppingCart,
    joAssign,
    global,
})
