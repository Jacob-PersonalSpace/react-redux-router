import { isEmpty } from 'lodash'

import { URL_ENV_MAPPING, DEFAULT_ENV } from '../config/login.config'

const getEnvironmentByMapping = (path) => {
    for (let p in URL_ENV_MAPPING) {
        if ((new RegExp("^" + p.replace(/(\{0\})/g, "\\d+") + "(|/.*)$", "i")).test(path)) {
            return URL_ENV_MAPPING[p]
        }
    }
}

export const getEnvironment = () => {
    if (isEmpty(URL_ENV_MAPPING)) {
        if (isEmpty(DEFAULT_ENV)) {
            console.error("Can't get environment!(please defind DEFAULT_ENV in login.config.js)")
            throw new Error("Can't get environment!(please defind DEFAULT_ENV in login.config.js)")
        }
        else {
            console.debug("environment is " + DEFAULT_ENV)
            return DEFAULT_ENV
        }
    }
    else {
        let url = window.location.href
        console.debug("window.location.href is " + url)

        let env = getEnvironmentByMapping(url)

        if (!isEmpty(env)) {
            console.debug("environment is " + env)
            return env
        }
        else {
            console.error("Can't get environment!('" + url + "' not in g_environmentURIMapping variable in login.config.js)")
            throw new Error("Can't get environment!('" + url + "' not in g_environmentURIMapping variable in login.config.js)")
        }

    }
}
