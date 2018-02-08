export const URL_ENV_MAPPING = {
    'http://localhost:33886': 'K8S_SIT',     //更精确的地址放在前面
    'http://localhost:22949': 'DOCKER',
    'http://localhost:{0}': 'LOCAL',    //{0}表示任意数字
    'http://127.0.0.1:{0}': 'DOCKER',
    'http://192.168.99.100:{0}': 'DOCKER',
    'http://cube.dev.k8s.esquel.cloud': 'K8S_DEV',
    'http://cube.sit.k8s.esquel.cloud': 'K8S_SIT',
    'http://cube.uat.k8s.esquel.cloud': 'K8S_UAT',
    'http://cube.k8s.esquel.cloud': 'K8S_PRD',
}

export const DEFAULT_ENV = 'CR'
