import { combineReducers } from 'redux-immutable'
import { fromJS } from 'immutable'

import {
    SELECT_MENUITEM,
    ADD_MENUITEMSET,
    CLEAN_MENUITEMSET,
    REQUEST_GETSYSTEMMENU,
    RECEIVE_GETSYSTEMMENU,
    FAILURE_GETSYSTEMMENU,
    UPDATE_BREADCRUMB,
} from '../../../actionTypes/index'

const initMenu = ""

export const menu = (state = initMenu, action) => {
    switch (action.type) {
        case SELECT_MENUITEM:
            return action.payload
            break

        default:
            return state
    }
}

const initMenuItemSet = fromJS([])

export const menuItemSet = (state = initMenuItemSet, action) => {
    switch (action.type) {
        case ADD_MENUITEMSET:
            return state.push(action.payload)
            break

        case CLEAN_MENUITEMSET:
            return initMenuItemSet
            break

        default:
            return state
    }
}

const initSystemMenu = fromJS([])

export const systemMenu = (state = initSystemMenu, action) => {
    switch (action.type) {
        case RECEIVE_GETSYSTEMMENU:
            return action.payload
            break

        default:
            return state
    }
}

const initBreadcrumb = fromJS(['Development', 'Fabric', 'Woven'])

export const breadcrumb = (state = initBreadcrumb, action) => {
    switch (action.type) {
        case UPDATE_BREADCRUMB:
            return action.payload

        default:
            return state
    }
}

const initSites = fromJS(['Workbench'])

export const sites = (state = initSites, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const initMenuItems = fromJS(['Product', 'Development', 'Planning', 'TNA'])

export const menuItems = (state = initMenuItems, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default combineReducers({
    menu,
    menuItemSet,
    systemMenu,
    breadcrumb,
    sites,
    menuItems,
})
