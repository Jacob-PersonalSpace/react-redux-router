import axios from 'axios'
import { adalFetch, adalGetToken } from 'react-adal'
import { isEmpty } from 'lodash'

export const encodeUrl = (url, obj) => {
    Object.keys(obj).forEach(key => {
        url = url.replace(`{${key}}`, encodeURIComponent(obj[key]))
    })

    return url
}

export const validateResult = (result) => {
    if (isEmpty(result) || isEmpty(result.data)) {
        throw new Error('Sorry, no result is obtained from the system.  Operation is aborted.')
    }

    let resultData = result.data

    if (isEmpty(resultData.resultType)) {
        throw new Error(`Sorry, no resultType is received when calling ${result.config.url ? result.config.url : 'server'}.`)
    }
    else if (resultData.resultType === 'SUCCESS') {
        if (!isEmpty(resultData.resultMsg)) {
            throw new Error(resultData.resultMsg)
        }
    }
    else if (resultData.resultType === 'ERROR') {
        throw new Error(!isEmpty(resultData.resultMsg) ? resultData.resultMsg : 'Sorry, something went wrong without error message.')
    }
    else {
        throw new Error(`Sorry, we received unexpected resultType ${resultData.resultType}.`)
    }
}

export const protectedFetchAndValidateResult = (urlKey, requestObject, options) => {
    let actualUrl = encodeUrl(!isEmpty(window.app.backendUrl[urlKey]) ? window.app.backendUrl[urlKey].url : urlKey, requestObject)

    return adalFetch(window.app.authentication.authContext, window.app.authentication.resourceGuiId, axios, actualUrl, options)
        .then(result => {
            validateResult(result)

            return result.data.results
        })
}
