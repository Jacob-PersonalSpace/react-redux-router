import { combineReducers } from 'redux';

import loginInfo from './login/reducer';
import registInfo from './regist/reducer';

export default combineReducers({
    login: loginInfo,
    regist: registInfo,
})
