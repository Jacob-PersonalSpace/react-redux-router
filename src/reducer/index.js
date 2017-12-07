import { combineReducers } from 'redux-immutable';

import * as loginInfo from '../login/reducer';
import * as registInfo from '../regist/reducer';

export default combineReducers({
    ...loginInfo,
    ...registInfo,
})
