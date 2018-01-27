import { combineReducers } from 'redux'

const initFabricItemState = 'Here is development-fabricItem component'

export const fabricItemState = (state = initFabricItemState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const initDevelopmentFabricItemLeftContentState = 'Here is development-fabricItem left content component'

export const developmentFabricItemLeftContentState = (state = initDevelopmentFabricItemLeftContentState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const initDevelopmentFabricItemRightContentState = 'Here is development-fabricItem right content component'

export const developmentFabricItemRightContentState = (state = initDevelopmentFabricItemRightContentState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default combineReducers({
    fabricItemState,
    developmentFabricItemLeftContentState,
    developmentFabricItemRightContentState,
})
