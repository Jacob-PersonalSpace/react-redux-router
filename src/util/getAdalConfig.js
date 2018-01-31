import { ENV_ADALCONFIG_MAPPING } from '../config/adal.config'

export const getAdalConfig = (env) => {
    return ENV_ADALCONFIG_MAPPING[env]
}
