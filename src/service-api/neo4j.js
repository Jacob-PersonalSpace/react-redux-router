import { protectedFetchAndValidateResult } from './fetch'

import {
    SEARCH_TECHNICS_BY_FABRICCODE,
    GET_FABRIC_ACTUAL,
    GET_FABRICITEM_LIFECYCLE,
    SEARCH_TAGS,
    SEARCH_FABRICCODE_LIST,
    GET_FABRIC_REQUEST,
    GET_ACTUAL_TAGS,
    ADD_TAG,
    REMOVE_TAG,
    GET_FABRIC_PRICE,
    GET_REQUEST_ORDER,
} from '../constants/apiTypes'

export const searchTechnicsByFabricCodeApi = fabricCode => {
    let urlKey = SEARCH_TECHNICS_BY_FABRICCODE,
        requestObject = {
            fabricCode,
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

export const getActualFabricInfoApi = (fabricCode) => {
    let urlKey = GET_FABRIC_ACTUAL,
        requestObject = {
            fabricCode,
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

export const getFabricItemLifeCycleApi = fabricCode => {
    let urlKey = GET_FABRICITEM_LIFECYCLE,
        requestObject = {
            fabricCode,
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

export const searchTagsApi = tag => {
    let urlKey = SEARCH_TAGS,
        requestObject = {
            tag,
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

export const searchFabricCodeListApi = ({ searchPatas, page, pageSize, orderBy, sort, needTotalNumber }) => {
    let urlKey = SEARCH_FABRICCODE_LIST,
        requestObject = {
            page,
            pageSize,
            orderBy,
            sort,
            needTotalNumber,
        },
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

export const getRequestFabricInfoApi = (fabricCode) => {
    let urlKey = GET_FABRIC_REQUEST,
        requestObject = {
            fabricCode,
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

export const getActualTagsApi = (fabricCode) => {
    let urlKey = GET_ACTUAL_TAGS,
        requestObject = {
            fabricCode,
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

export const addTagsApi = (postJson) => {
    let urlKey = ADD_TAG,
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

    return protectedFetchAndValidateResult(urlKey, requestObject, options)
}

export const removeTagsApi = (postJson) => {
    let urlKey = REMOVE_TAG,
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

    return protectedFetchAndValidateResult(urlKey, requestObject, options)
}

export const getFabricPriceApi = (fabricCode, refresh) => {
    let urlKey = GET_FABRIC_PRICE,
        requestObject = {
            fabricCode,
            refresh,
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

export const getRequestOrderApi = (itemId) => {
    let urlKey = GET_REQUEST_ORDER,
        requestObject = {
            itemId,
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
