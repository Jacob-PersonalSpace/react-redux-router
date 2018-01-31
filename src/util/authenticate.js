import { AuthenticationContext } from 'react-adal'

import { getEnvironment } from './getEnvironment'
import { getAdalConfig } from './getAdalConfig'

export const env = getEnvironment()

let adalConfig = getAdalConfig(env)

export const authContext = new AuthenticationContext(adalConfig)

export const getAdalResourceGuiId = (authContext) => {
    return authContext.getResourceForEndpoint(window.location.href)
}
