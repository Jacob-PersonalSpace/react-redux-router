
import { isEmpty } from 'lodash'

import { protectedFetchAndValidateResult } from '../util/fetch'

import {
    GET_SYSTEM_MENU,
} from '../constants/apiTypes'

export const getSystemMenuApi = () => {
    let urlKey = GET_SYSTEM_MENU,
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
