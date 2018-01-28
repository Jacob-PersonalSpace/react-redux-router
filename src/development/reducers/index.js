import { combineReducers } from 'redux-immutable'

import collaborationState from '../../global/collaboration/reducers'
import queryState from '../../global/query/reducers'
import fabricItemState from '../../global/fabricItem/reducers'

const initDevelopmentState = 'Here is development component'

export const developmentState = (state = initDevelopmentState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default combineReducers({
    developmentState,
    collaborationState,
    queryState,
    fabricItemState,
})
