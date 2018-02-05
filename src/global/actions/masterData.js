import { fromJS } from 'immutable'

import {
    onAddUserErrorForAlert,
    onAddAPIRequestForBlockUi,
    onRemoveAPIRequestForBlockUi,
} from '../../global/actions'

import {
    searchFinishingApi,
} from '../../service-api/wmis'

import {
    getShipModeApi,
    getDestinationApi,
    getWashTypeApi,
    getGarmentFeatureApi,
} from '../../service-api/escm'

import {
    REQUEST_GETSHIPMODE,
    RECEIVE_GETSHIPMODE,
    FAILURE_GETSHIPMODE,
    REQUEST_GETDESTINATION,
    RECEIVE_GETDESTINATION,
    FAILURE_GETDESTINATION,
    REQUEST_GETWASHTYPE,
    RECEIVE_GETWASHTYPE,
    FAILURE_GETWASHTYPE,
    REQUEST_GETGARMENTFEATURE,
    RECEIVE_GETGARMENTFEATURE,
    FAILURE_GETGARMENTFEATURE,
    REQUEST_SEARCHFINISHING,
    RECEIVE_SEARCHFINISHING,
    FAILURE_SEARCHFINISHING,
} from '../../actionTypes/index'

const requestSearchFinishing = () => ({
    type: REQUEST_SEARCHFINISHING,
})

const receiveSearchFinishing = data => ({
    type: RECEIVE_SEARCHFINISHING,
    payload: fromJS(data),
})

const failureSearchFinishing = error => ({
    type: FAILURE_SEARCHFINISHING,
    payload: new Error(error),
    error: true,
})

export const searchFinishing = () => (dispatch, getState) => {
    try {
        dispatch(requestSearchFinishing())
        dispatch(onAddAPIRequestForBlockUi())

        searchFinishingApi()
            .then(data => {
                dispatch(receiveSearchFinishing(data))
            })
            .catch(error => {
                dispatch(failureSearchFinishing(error))
                dispatch(onAddUserErrorForAlert({ title: 'ERROR', message: error, alertType: 'error' }))
            })
            .then(() => {
                dispatch(onRemoveAPIRequestForBlockUi())
            })
    } catch (error) {
        dispatch(failureSearchFinishing(error))
        dispatch(onRemoveAPIRequestForBlockUi())
        dispatch(onAddUserErrorForAlert({ title: 'ERROR', message: error, alertType: 'error' }))
    }
}

const requestGetShipMode = () => ({
    type: REQUEST_GETSHIPMODE,
})

const receiveGetShipMode = data => ({
    type: RECEIVE_GETSHIPMODE,
    payload: fromJS(data),
})

const failureGetShipMode = error => ({
    type: FAILURE_GETSHIPMODE,
    payload: new Error(error),
    error: true,
})

export const getShipMode = (page) => (dispatch, getState) => {
    try {
        dispatch(requestGetShipMode())
        dispatch(onAddAPIRequestForBlockUi())

        getShipModeApi(-1)
            .then(data => {
                dispatch(receiveGetShipMode(data))
            })
            .catch(error => {
                dispatch(failureGetShipMode(error))
                dispatch(onAddUserErrorForAlert({ title: 'ERROR', message: error, alertType: 'error' }))
            })
            .then(() => {
                dispatch(onRemoveAPIRequestForBlockUi())
            })
    } catch (error) {
        dispatch(failureGetShipMode(error))
        dispatch(onRemoveAPIRequestForBlockUi())
        dispatch(onAddUserErrorForAlert({ title: 'ERROR', message: error, alertType: 'error' }))
    }
}

const requestGetDestination = () => ({
    type: REQUEST_GETDESTINATION,
})

const receiveGetDestination = data => ({
    type: RECEIVE_GETDESTINATION,
    payload: fromJS(data),
})

const failureGetDestination = error => ({
    type: FAILURE_GETDESTINATION,
    payload: new Error(error),
    error: true,
})

export const getDestination = (page) => (dispatch, getState) => {
    try {
        dispatch(requestGetDestination())
        dispatch(onAddAPIRequestForBlockUi())

        getDestinationApi(-1)
            .then(data => {
                dispatch(receiveGetDestination(data))
            })
            .catch(error => {
                dispatch(failureGetDestination(error))
                dispatch(onAddUserErrorForAlert({ title: 'ERROR', message: error, alertType: 'error' }))
            })
            .then(() => {
                dispatch(onRemoveAPIRequestForBlockUi())
            })
    } catch (error) {
        dispatch(failureGetDestination(error))
        dispatch(onRemoveAPIRequestForBlockUi())
        dispatch(onAddUserErrorForAlert({ title: 'ERROR', message: error, alertType: 'error' }))
    }
}

const requestGetWashType = () => ({
    type: REQUEST_GETWASHTYPE,
})

const receiveGetWashType = data => ({
    type: RECEIVE_GETWASHTYPE,
    payload: fromJS(data),
})

const failureGetWashType = error => ({
    type: FAILURE_GETWASHTYPE,
    payload: new Error(error),
    error: true,
})

export const getWashType = () => (dispatch, getState) => {
    try {
        dispatch(requestGetWashType())
        dispatch(onAddAPIRequestForBlockUi())

        getWashTypeApi(-1)
            .then(data => {
                dispatch(receiveGetWashType(data))
            })
            .catch(error => {
                dispatch(failureGetWashType(error))
                dispatch(onAddUserErrorForAlert({ title: 'ERROR', message: error, alertType: 'error' }))
            })
            .then(() => {
                dispatch(onRemoveAPIRequestForBlockUi())
            })
    } catch (error) {
        dispatch(failureGetWashType(error))
        dispatch(onRemoveAPIRequestForBlockUi())
        dispatch(onAddUserErrorForAlert({ title: 'ERROR', message: error, alertType: 'error' }))
    }
}

const requestGetGarmentFeature = () => ({
    type: REQUEST_GETGARMENTFEATURE,
})

const receiveGetGarmentFeature = data => ({
    type: RECEIVE_GETGARMENTFEATURE,
    payload: fromJS(data),
})

const failureGetGarmentFeature = error => ({
    type: FAILURE_GETGARMENTFEATURE,
    payload: new Error(error),
    error: true,
})

export const getGarmentFeature = () => (dispatch, getState) => {
    try {
        dispatch(requestGetGarmentFeature())
        dispatch(onAddAPIRequestForBlockUi())

        getGarmentFeatureApi(-1)
            .then(data => {
                dispatch(receiveGetGarmentFeature(data))
            })
            .catch(error => {
                dispatch(failureGetGarmentFeature(error))
                dispatch(onAddUserErrorForAlert({ title: 'ERROR', message: error, alertType: 'error' }))
            })
            .then(() => {
                dispatch(onRemoveAPIRequestForBlockUi())
            })
    } catch (error) {
        dispatch(failureGetGarmentFeature(error))
        dispatch(onRemoveAPIRequestForBlockUi())
        dispatch(onAddUserErrorForAlert({ title: 'ERROR', message: error, alertType: 'error' }))
    }
}
