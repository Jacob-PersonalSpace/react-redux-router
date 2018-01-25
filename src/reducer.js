import { combineReducers } from 'redux';

import * as loginInfo from './login/reducer';
import * as registInfo from './regist/reducer';

export default combineReducers({
    ...loginInfo,
    ...registInfo,
})
