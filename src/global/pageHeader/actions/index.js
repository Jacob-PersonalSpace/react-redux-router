import { fromJS } from 'immutable'

import {
    getSystemMenuApi,
} from '../../../service-api/core'

import {
    SELECT_MENUITEM,
    ADD_MENUITEMSET,
    CLEAN_MENUITEMSET,
    REQUEST_GETSYSTEMMENU,
    RECEIVE_GETSYSTEMMENU,
    FAILURE_GETSYSTEMMENU,
    UPDATE_BREADCRUMB,
} from '../../../actionTypes/index'

export const updateBreadcrumb = data => ({
    type: UPDATE_BREADCRUMB,
    payload: fromJS(data),
})

export const selectMenuItem = item => ({
    type: SELECT_MENUITEM,
    payload: item,
})

export const addMenuItemSet = item => ({
    type: ADD_MENUITEMSET,
    payload: item,
})

export const cleanMenuItemSet = () => ({
    type: CLEAN_MENUITEMSET,
})

const requestGetSystemMenu = () => ({
    type: REQUEST_GETSYSTEMMENU,
})

const receiveGetSystemMenu = data => ({
    type: RECEIVE_GETSYSTEMMENU,
    payload: fromJS(data),
})

const failureGetSystemMenu = error => ({
    type: FAILURE_GETSYSTEMMENU,
    payload: new Error(error),
    error: true,
})

export const getSystemMenu = () => (dispatch, getState) => {
    try {
        dispatch(requestGetSystemMenu())

        getSystemMenuApi()
            .then(data => {
                dispatch(receiveGetSystemMenu(data))
            })
            .catch(error => dispatch(failureGetSystemMenu(error)))
    } catch (error) {
        dispatch(failureGetSystemMenu(error))
    }
}
