const tenant = '29abf16e-95a2-4d13-8d51-6db1b775d45b'

export const ENV_ADALCONFIG_MAPPING = {
    CR: {
        tenant,
        clientId: '505aae87-e9dd-4979-9c4e-b17dc35a3e32',
        extraQueryParameter: 'nux=1',
        disableRenewal: true,
        endpoints: {
            'http://localhost': 'https://esquel.onmicrosoft.com/805cadd7-d8b2-44f7-9c28-3841c112f04b',
            '': 'https://esquel.onmicrosoft.com/805cadd7-d8b2-44f7-9c28-3841c112f04b',
        }
        // cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
    },
    LOCAL: {
        tenant,
        clientId: '505aae87-e9dd-4979-9c4e-b17dc35a3e32',
        extraQueryParameter: 'nux=1',
        disableRenewal: true,
        endpoints: {
            'http://localhost': 'https://esquel.onmicrosoft.com/805cadd7-d8b2-44f7-9c28-3841c112f04b',
            '': 'https://esquel.onmicrosoft.com/805cadd7-d8b2-44f7-9c28-3841c112f04b',
        }
        // cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
    },
    DOCKER: {
        tenant,
        clientId: '505aae87-e9dd-4979-9c4e-b17dc35a3e32',
        extraQueryParameter: 'nux=1',
        disableRenewal: true,
        endpoints: {
            'http://localhost': 'https://esquel.onmicrosoft.com/705cadd7-d8b2-44f7-9c28-3841c112f04b',
            '': 'https://esquel.onmicrosoft.com/705cadd7-d8b2-44f7-9c28-3841c112f04b',
        }
        // cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
    },
    K8S_DEV: {
        tenant,
        clientId: 'c7dab103-ce04-42cd-b199-e510e95334c5',
        extraQueryParameter: 'nux=1',
        disableRenewal: true,
        endpoints: {
            'http://designer-workbench.azurewebsites.net': 'https://esquel.onmicrosoft.com/705cadd7-d8b2-44f7-9c28-3841c112f04b',
            'http://getazdevnt002.chinacloudapp.cn/sprint9': 'https://esquel.onmicrosoft.com/705cadd7-d8b2-44f7-9c28-3841c112f04b',
            '': 'https://esquel.onmicrosoft.com/705cadd7-d8b2-44f7-9c28-3841c112f04b',
        }
        // cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
    },
    K8S_SIT: {
        tenant,
        clientId: '02e290c1-30a5-4eaa-8788-588a68b2aaab',
        extraQueryParameter: 'nux=1',
        disableRenewal: true,
        endpoints: {
            'http://getnt130.gfg1.esquel.com/InstantNoodle_SIT/Workbench': 'https://esquel.onmicrosoft.com/4900b804-63d5-4e74-8e0f-88d4efdf84a1',
            '': 'https://esquel.onmicrosoft.com/4900b804-63d5-4e74-8e0f-88d4efdf84a1'
        }

    },
    K8S_UAT: {
        tenant,
        clientId: 'e8dfedc0-a5f8-43d9-89c1-16d7c68314e0',
        extraQueryParameter: 'nux=1',
        disableRenewal: true,
        endpoints: {
            'http://getnt130.gfg1.esquel.com/InstantNoodle_UAT/Workbench': "https://esquel.onmicrosoft.com/2b37b5bd-83b5-4d8f-bce1-7376c142ad9d",
            '': "https://esquel.onmicrosoft.com/2b37b5bd-83b5-4d8f-bce1-7376c142ad9d",
        }
    },
    K8S_PRD: {
        tenant,
        clientId: '86c3edac-6db2-496e-8152-91f74338ca77',
        extraQueryParameter: 'nux=1',
        disableRenewal: true,
        endpoints: {
            'http://getnt132.gfg1.esquel.com/InstantNoodle/Workbench': "https://esquel.onmicrosoft.com/a18406c4-51df-4b5a-8258-1d68f600aeef",
            '': "https://esquel.onmicrosoft.com/a18406c4-51df-4b5a-8258-1d68f600aeef",
        }
        // cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
    },
}
