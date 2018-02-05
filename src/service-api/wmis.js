import { protectedFetchAndValidateResult } from '../util/fetch'

import {
    SEARCH_FINISH_LIST,
    SEARCH_TRIALWEAVE_INFO,
    SEARCH_TECHNICS_BY_REFNO,
    SEARCH_UPDATED_TRIALWEAVE_INFO_PRICE,
    APPROVE_HANDLOOM,
    SEARCH_HANDLOOM_REQUEST_DETAIL_INFO,
} from '../constants/apiTypes'

export const searchFinishingApi = () => {
    let urlKey = SEARCH_FINISH_LIST,
        requestObject = {},
        options = {
            credentials: 'same-origin',
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }

    return protectedFetchAndValidateResult(urlKey, requestObject, options)
}

export const searchTrialWeaveInfoApi = (searchPatas) => {
    let urlKey = SEARCH_TRIALWEAVE_INFO,
        requestObject = {},
        options = {
            credentials: 'same-origin',
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(searchPatas)
        }

    return protectedFetchAndValidateResult(urlKey, requestObject, options)
}

export const searchTechnicsByRefNoApi = (searchPatas) => {
    let urlKey = SEARCH_TECHNICS_BY_REFNO,
        requestObject = {},
        options = {
            credentials: 'same-origin',
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(searchPatas)
        }

    return protectedFetchAndValidateResult(urlKey, requestObject, options)
}

export const searchUpdatedTrialWeaveInfoPriceApi = (searchPatas) => {
    let urlKey = SEARCH_UPDATED_TRIALWEAVE_INFO_PRICE,
        requestObject = {},
        options = {
            credentials: 'same-origin',
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(searchPatas)
        }

    return protectedFetchAndValidateResult(urlKey, requestObject, options)
}

export const approveHandloomApi = (postJson) => {
    let urlKey = APPROVE_HANDLOOM,
        requestObject = {},
        options = {
            credentials: 'same-origin',
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(postJson)
        }

    return protectedFetchAndValidateResult(urlKey, requestObject, options) // [0]
}

export const searchHLDetailApi = (handloomNumber) => {
    let urlKey = SEARCH_HANDLOOM_REQUEST_DETAIL_INFO,
        requestObject = {},
        options = {
            credentials: 'same-origin',
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            data: JSON.stringify({ "handlloomNo": handloomNumber })
        }

    return protectedFetchAndValidateResult(urlKey, requestObject, options)
}
