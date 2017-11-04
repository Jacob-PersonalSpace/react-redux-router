import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import * as loginInfo from './login/reducer';
import * as registInfo from './regist/reducer';

export default combineReducers({
    router: routerReducer,
    ...loginInfo,
    ...registInfo,
})
