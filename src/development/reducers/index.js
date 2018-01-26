import { combineReducers } from 'redux'

import collaborationState from '../nestedRoutes/collaboration/reducers'
import queryState from '../nestedRoutes/query/reducers'
import fabricItemState from '../nestedRoutes/fabricItem/reducers'

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
