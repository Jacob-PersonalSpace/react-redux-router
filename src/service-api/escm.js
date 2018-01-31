import { protectedFetchAndValidateResult } from './fetch'

import {
    GET_SHIPMODE,
    GET_DESTINATION,
    GET_GARMENTFEATURE,
    GET_WASHTYPE,
} from '../constants/apiTypes'

export const getShipMode = pageSize => {
    let urlKey = GET_SHIPMODE,
        requestObject = {
            pageSize,
        },
        options = {
            credentials: 'same-origin',
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }

    return protectedFetchAndValidateResult(urlKey, requestObject, options)
}

export const getDestination = pageSize => {
    let urlKey = GET_DESTINATION,
        requestObject = {
            pageSize,
        },
        options = {
            credentials: 'same-origin',
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }

    return protectedFetchAndValidateResult(urlKey, requestObject, options)
}

export const getWashType = pageSize => {
    let urlKey = GET_WASHTYPE,
        requestObject = {
            pageSize,
        },
        options = {
            credentials: 'same-origin',
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }

    return protectedFetchAndValidateResult(urlKey, requestObject, options)
}

export const getGarmentFeature = pageSize => {
    let urlKey = GET_GARMENTFEATURE,
        requestObject = {
            pageSize,
        },
        options = {
            credentials: 'same-origin',
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }

    return protectedFetchAndValidateResult(urlKey, requestObject, options)
}