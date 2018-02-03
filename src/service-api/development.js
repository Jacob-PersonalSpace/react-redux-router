import { isEmpty } from 'lodash'

import { protectedFetchAndValidateResult } from '../util/fetch'

import {
    JOIN_CONVERSATION,
    SAVE_SUGGESTVALUE,
    APPLY_SUGGESTVALUE,
    ADD_FILE_COMMENT,
    ADD_CELL_COMMENT,
    GET_HANDLOOM_REQUEST_HEADER,
    GET_HANDLOOM_REQUEST,
    SAVE_HANDLOOM_REQUEST,
    ISSUE_HANDLOOM_REQUEST,
    GET_SHOPPINGCART_HEADER,
    SET_SHOPPINGCART_HEADER,
    AUTO_ASSIGN_JO,
    DELETE_FILE,
    SEARCH_HANDLOOM_REQUEST,
    GET_VIRTUAL_FILEID,
    SEARCH_HANDLOOM_REQUEST_DETAIL,
    SEARCH_TRIALWEAVE_REQUEST,
    GET_HANDLOOM_COMMENT,
    SEARCH_TRIALWEAVE_REQUEST_DETAIL,
    SEARCH_TRIALWEAVE_INFO_FIRST_PRICE,
    SAVE_HANDLOOM_COMMENT,
    SAVE_FILE,
    EXPORT_FILE,
    GET_FILE_CONTENT,
    GET_BRAND_FOLDER_LIST,
    GET_YEARSEASON_FOLDER_LIST_BY_BRAND,
    GET_FILE_LIST_BY_BRANDYEARSEASON,
    GET_RECENT_FILE_LIST,
    GET_FILE_HEADER,
} from '../constants/apiTypes'

export const joinConversationApi = ({ conversationId }) => {
    if (!isEmpty(conversationId)) {
        let urlKey = JOIN_CONVERSATION,
            requestObject = {
                conversationId,
            },
            options = {
                credentials: 'same-origin',
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                data: JSON.stringify({ conversationId })
            }

        return protectedFetchAndValidateResult(urlKey, requestObject, options) // [0]
    }
    else {
        return Promise.resolve([][0])
    }
}

export const saveSuggestedValueApi = ({ conversationId, fileContentId, rowId, cellId, originValue, suggestedValue }) => {
    let urlKey = SAVE_SUGGESTVALUE,
        requestObject = {},
        options = {
            credentials: 'same-origin',
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            data: JSON.stringify({
                conversationId,
                fileContentId,
                rowId,
                cellId,
                originValue,
                suggestedValue,
            })
        }

    return protectedFetchAndValidateResult(urlKey, requestObject, options) // [0]
}

export const applySuggestedValueApi = ({ conversationId, fileContentId, rowId, cellId, suggestedValue }) => {
    let urlKey = APPLY_SUGGESTVALUE,
        requestObject = {},
        options = {
            credentials: 'same-origin',
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            data: JSON.stringify({
                conversationId,
                fileContentId,
                rowId,
                cellId,
                suggestedValue,
            })
        }

    return protectedFetchAndValidateResult(urlKey, requestObject, options) // [0]
}

export const addFileCommentApi = ({ conversationId, fileContentId, rowId, cellId, value }) => {
    let urlKey = ADD_FILE_COMMENT,
        requestObject = {},
        options = {
            credentials: 'same-origin',
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            data: JSON.stringify({
                conversationId,
                fileContentId,
                rowId,
                cellId,
                value,
            })
        }

    return protectedFetchAndValidateResult(urlKey, requestObject, options) // [0]
}

export const addCellCommentApi = ({ fileContentId, rowId, cellId, conversationId, value }) => {
    let urlKey = ADD_CELL_COMMENT,
        requestObject = {},
        options = {
            credentials: 'same-origin',
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            data: JSON.stringify({
                fileContentId,
                rowId,
                cellId,
                conversationId,
                value,
            })
        }

    return protectedFetchAndValidateResult(urlKey, requestObject, options) // [0]
}

export const getHandloomRequestHeaderApi = () => {
    let urlKey = GET_HANDLOOM_REQUEST_HEADER,
        requestObject = {},
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

export const openHandloomRequestApi = id => {
    let urlKey = GET_HANDLOOM_REQUEST,
        requestObject = {
            id,
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

export const saveHandloomRequestApi = saveData => {
    let urlKey = SAVE_HANDLOOM_REQUEST,
        requestObject = {},
        options = {
            credentials: 'same-origin',
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(saveData)
        }

    return protectedFetchAndValidateResult(urlKey, requestObject, options)
}

export const issueHandloomRequestApi = issueData => {
    let urlKey = ISSUE_HANDLOOM_REQUEST,
        requestObject = {},
        options = {
            credentials: 'same-origin',
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(issueData)
        }

    return protectedFetchAndValidateResult(urlKey, requestObject, options)
}

export const getShoppingCartHeaderApi = () => {
    let urlKey = GET_SHOPPINGCART_HEADER,
        requestObject = {},
        options = {
            credentials: 'same-origin',
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }

    return protectedFetchAndValidateResult(urlKey, requestObject, options) // [0]
}

export const setShoppingCartHeaderApi = (saveData) => {
    let urlKey = SET_SHOPPINGCART_HEADER,
        requestObject = {},
        options = {
            credentials: 'same-origin',
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(saveData)
        }

    return protectedFetchAndValidateResult(urlKey, requestObject, options)
}

export const autoAssignJoApi = handloomRequestNum => {
    let urlKey = AUTO_ASSIGN_JO,
        requestObject = {},
        options = {
            credentials: 'same-origin',
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            data: JSON.stringify({ handloomRequestNum })
        }

    return protectedFetchAndValidateResult(urlKey, requestObject, options) // [0]
}

export const deleteCollaborationFileApi = id => {
    let urlKey = DELETE_FILE,
        requestObject = {
            id,
        },
        options = {
            credentials: 'same-origin',
            method: 'delete',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }

    return protectedFetchAndValidateResult(urlKey, requestObject, options) // [0]
}

export const searchHLRequestApi = (searchPatas) => {
    let urlKey = SEARCH_HANDLOOM_REQUEST,
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

export const getVirtualCollaborationFileIdApi = (searchPatas) => {
    let urlKey = GET_VIRTUAL_FILEID,
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

export const searchHLRequestDetailApi = (searchHLs) => {
    let urlKey = SEARCH_HANDLOOM_REQUEST_DETAIL,
        requestObject = {},
        options = {
            credentials: 'same-origin',
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(searchHLs)
        }

    return protectedFetchAndValidateResult(urlKey, requestObject, options)
}

export const searchTWRequestApi = (searchPatas) => {
    let urlKey = SEARCH_TRIALWEAVE_REQUEST,
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

export const getActualFabricApproveApi = (fabricCode) => {
    let urlKey = GET_HANDLOOM_COMMENT,
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

export const searchTWRequesDetailtApi = (searchPatas) => {
    let urlKey = SEARCH_TRIALWEAVE_REQUEST_DETAIL,
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

export const searFirstTrialWeaveInfoPriceApi = (searchPatas) => {
    let urlKey = SEARCH_TRIALWEAVE_INFO_FIRST_PRICE,
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

export const saveActualFabricApproveApi = (postJson) => {
    let urlKey = SAVE_HANDLOOM_COMMENT,
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

export const saveCollaborationFileApi = (id, saveData) => {
    let urlKey = SAVE_FILE,
        requestObject = {
            id,
        },
        options = {
            credentials: 'same-origin',
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(saveData)
        }

    return protectedFetchAndValidateResult(urlKey, requestObject, options) // [0]
}

export const printCollaborationFileApi = (id) => {
    let urlKey = EXPORT_FILE,
        requestObject = {
            id,
        },
        options = {
            credentials: 'same-origin',
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }

    return protectedFetchAndValidateResult(urlKey, requestObject, options) // [0]
}

export const listCollaborationBrandFoldersPromise = () => {
    let urlKey = GET_BRAND_FOLDER_LIST,
        requestObject = {},
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

export const listCollaborationYearSeasonFoldersByBrandApi = brandCodeID => {
    let urlKey = GET_YEARSEASON_FOLDER_LIST_BY_BRAND,
        requestObject = {
            brandCodeID,
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

export const listCollaborationFilesByBrandYearSeasonApi = (yearSeasonCodeID) => {
    let urlKey = GET_FILE_LIST_BY_BRANDYEARSEASON,
        requestObject = {
            yearSeasonCodeID,
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

export const listCollaborationRecentFilesApi = pagesize => {
    let urlKey = GET_RECENT_FILE_LIST,
        requestObject = {
            pagesize,
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

export const getCollaborationFileHeaderApi = id => {
    let urlKey = GET_FILE_HEADER,
        requestObject = {
            id,
        },
        options = {
            credentials: 'same-origin',
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }

    return protectedFetchAndValidateResult(urlKey, requestObject, options) // [0]
}

export const getCollaborationFileBodyApi = id => {
    let urlKey = GET_FILE_CONTENT,
        requestObject = {
            id,
        },
        options = {
            credentials: 'same-origin',
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }

    return protectedFetchAndValidateResult(urlKey, requestObject, options) // [0]
}
