import { combineReducers } from 'redux-immutable'

const initCollaborationState = 'Here is development-collaboration component'

export const collaborationState = (state = initCollaborationState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const initDevelopmentCollaborationLeftContentState = 'Here is development-collaboration left content component'

export const developmentCollaborationLeftContentState = (state = initDevelopmentCollaborationLeftContentState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const initDevelopmentCollaborationRightContentState = 'Here is development-collaboration right content component'

export const developmentCollaborationRightContentState = (state = initDevelopmentCollaborationRightContentState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default combineReducers({
    collaborationState,
    leftContentState: combineReducers({
        leftContentLabel: developmentCollaborationLeftContentState,
    }),
    rightContentState: combineReducers({
        rightContentLabel: developmentCollaborationRightContentState,
    }),
})
