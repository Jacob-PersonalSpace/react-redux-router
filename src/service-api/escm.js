import { protectedFetchAndValidateResult } from '../util/fetch'

import {
    GET_SHIPMODE,
    GET_DESTINATION,
    GET_GARMENTFEATURE,
    GET_WASHTYPE,
} from '../constants/apiTypes'

export const getShipModeApi = pageSize => {
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

export const getDestinationApi = pageSize => {
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

export const getWashTypeApi = pageSize => {
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

export const getGarmentFeatureApi = pageSize => {
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
