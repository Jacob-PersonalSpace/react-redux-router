import { fromJS } from 'immutable'

import {
    getHandloomRequestHeaderApi,
    openHandloomRequestApi,
} from '../../service-api/development'

import {
    REQUEST_REQUEST_LIST,
    RECEIVE_REQUEST_LIST,
    FAILURE_REQUEST_LIST,
    EXPAND_JOASSIGN_LEFT_CONTAINER,
    COLLAPSE_JOASSIGN_LEFT_CONTAINER,
    JOASSIGN_CLICK_FOLDER,
    JOASSIGN_FAILURE_FILE,
    JOASSIGN_RECEIVE_FILE,
    JOASSIGN_REQUEST_FILE,
} from '../../actionTypes/index'

const requestHandloomRequestList = () => ({
    type: REQUEST_REQUEST_LIST,
})

const receiveHandloomRequestList = data => ({
    type: RECEIVE_REQUEST_LIST,
    payload: fromJS(data),
})

const failureHandloomRequestList = error => ({
    type: FAILURE_REQUEST_LIST,
    payload: new Error(error),
    error: true,
})

export const onClickFolder = (brandCode) => ({
    type: JOASSIGN_CLICK_FOLDER,
    payload: brandCode,
})

export const onExpandDirectory = () => ({
    type: EXPAND_JOASSIGN_LEFT_CONTAINER,
})

export const onCollapseDirectory = () => ({
    type: COLLAPSE_JOASSIGN_LEFT_CONTAINER,
})

export const onFetchHandloomRequestList = () => (dispatch, getState) => {
    try {
        dispatch(requestHandloomRequestList())

        getHandloomRequestHeaderApi()
            .then(data => dispatch(receiveHandloomRequestList(data)))
            .catch(error => dispatch(failureHandloomRequestList(error)))
    } catch (error) {
        dispatch(failureHandloomRequestList(error))
    }
}

const requestGetFileContent = () => ({
    type: JOASSIGN_REQUEST_FILE,
})

const receiveGetFileContent = data => ({
    type: JOASSIGN_RECEIVE_FILE,
    payload: fromJS(data),
})

const failureGetFileContent = error => ({
    type: JOASSIGN_FAILURE_FILE,
    payload: new Error(error),
    error: true,
})

export const onOpenHandloomRequest = (brandCode, _id) => (dispatch, getState) => {
    try {
        dispatch(requestGetFileContent())

        openHandloomRequestApi(_id)
            .then(data => dispatch(receiveGetFileContent(data)))
            .catch(error => dispatch(failureGetFileContent(error)))
    } catch (error) {
        dispatch(failureGetFileContent(error))
    }
}
