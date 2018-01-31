import { merge } from 'lodash'

import { DEFAULT_HOST, BACKEND_BASEURL_HOST_CONFIG, BACKEND_BASEURL_PATH_CONFIG } from '../config/backendBaseUrl.config'

export const getBackendUrl = (env) => {
    let backendUrl = {}
    let envHost = BACKEND_BASEURL_HOST_CONFIG[env]

    console.log('envHost: ', envHost)

    for (let serviceKey in BACKEND_BASEURL_PATH_CONFIG) {
        let host = envHost[serviceKey] ? envHost[serviceKey] : DEFAULT_HOST
        let paths = BACKEND_BASEURL_PATH_CONFIG[serviceKey]

        for (let pathKey in paths) {
            let url = host + '/' + paths[pathKey].url

            backendUrl = merge(backendUrl, { [pathKey]: merge(paths[pathKey], { url }) })
        }
    }

    console.log('backendUrl: ', backendUrl)

    return backendUrl
}
