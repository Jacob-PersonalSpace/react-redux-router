export const BACKEND_BASEURL_HOST_CONFIG = {
    CR: {
        wmis: 'http://localhost:2000',
        escm: 'http://localhost:10010',
        development: 'http://localhost:3000',
        socketHost: {
            port: 8000
        },
        neo4j: 'http://lpd-cabala.sit.k8s.esquel.cloud',
    },
    LOCAL: {
        wmis: 'http://localhost:2000',
        escm: 'http://localhost:10010',
        development: 'http://localhost:3000',
        socketHost: {
            hostname: '192.168.99.100',
            port: 8000
        },
        neo4j: 'http://localhost:10030',
    },
    DOCKER: {
        wmis: 'http://' + window.location.hostname + ':2000',
        escm: 'http://' + window.location.hostname + ':10010',
        development: 'http://' + window.location.hostname + ':3000',
        socketHost: {
            hostname: window.location.hostname,
            port: 8000
        },
    },
    K8S_DEV: {
        wmis: 'http://wmis-api.dev.k8s.esquel.cloud',
        escm: 'http://escm-api.dev.k8s.esquel.cloud',
        development: 'http://fabric-dev-api.dev.k8s.esquel.cloud',
        socketHost: {
            hostname: 'lpd-fabric-development-sc.dev.k8s.esquel.cloud',
            port: 80
        },
        neo4j: 'http://lpd-cabala.dev.k8s.esquel.cloud',
    },
    K8S_SIT: {
        wmis: 'http://wmis-api.sit.k8s.esquel.cloud',
        escm: 'http://escm-api.sit.k8s.esquel.cloud',
        development: 'http://fabric-dev-api.sit.k8s.esquel.cloud',
        socketHost: {
            hostname: 'lpd-fabric-development-sc.sit.k8s.esquel.cloud',
            port: 80
        },
        neo4j: 'http://lpd-cabala.sit.k8s.esquel.cloud',
    },
    K8S_UAT: {
        wmis: 'http://wmis-api.uat.k8s.esquel.cloud',
        escm: 'http://escm-api.uat.k8s.esquel.cloud',
        development: 'http://fabric-dev-api.uat.k8s.esquel.cloud',
        socketHost: {
            hostname: 'lpd-fabric-development-sc.uat.k8s.esquel.cloud',
            port: 80
        },
        neo4j: 'http://lpd-cabala.uat.k8s.esquel.cloud',
    },
    K8S_PRD: {
        wmis: 'http://wmis-api.k8s.esquel.cloud',
        escm: 'http://escm-api.k8s.esquel.cloud',
        development: 'http://fabric-dev-api.k8s.esquel.cloud',
        socketHost: {
            hostname: 'lpd-fabric-development-sc.k8s.esquel.cloud',
            port: 80
        },
        neo4j: 'http://lpd-cabala.k8s.esquel.cloud',
    }
}

export const DEFAULT_HOST = window.location.origin

export const BACKEND_BASEURL_PATH_CONFIG = {
    static: {
        getVersion: { url: 'version.json', isNoneAuth: false },
    },
    development: {
        //Development
        listCollaborationBrandFolders: { url: 'api/collaboration/folder/brand', isNoneAuth: false },
        listCollaborationYearSeasonFoldersByBrand: { url: 'api/collaboration/folder/yearseason/{brandCodeID}', isNoneAuth: false },
        listCollaborationFilesByBrandYearSeason: { url: 'api/collaboration/folder/file/{yearSeasonCodeID}', isNoneAuth: false },
        listCollaborationRecentFiles: { url: 'api/collaboration/folder/recentfile/{pagesize}', isNoneAuth: false },//'v1/note/findAllNotes_forMe',//
        getCollaborationFileHeader: { url: 'api/collaboration/filecontent/{id}/header', isNoneAuth: false },//唔用
        getCollaborationFileBody: { url: 'api/collaboration/file/{id}/body', isNoneAuth: false },
        //uploadExcel: useLocalMock ? 'json/upload.json' : 'api/collabration/file/creation',
        //uploadExcelFail: useLocalMock ? 'json/upload-fail.json' : 'api/collabration/file/creation',
        deleteCollaborationFile: { url: 'api/collaboration/file/{id}', isNoneAuth: false },
        uploadExcel: { url: 'api/collaboration/file/creation', isNoneAuth: false },
        uploadExcelFail: { url: 'api/collaboration/file/creation', isNoneAuth: false },
        saveCollaborationFile: { url: 'api/collaboration/file/{id}/body', isNoneAuth: false },
        printCollaborationFile: { url: 'api/collaboration/filecontent/{id}/print', isNoneAuth: false },

        // conversation
        joinConversation: { url: 'api/collaboration/conversation/join', isNoneAuth: false },
        saveSuggestedValue: { url: 'api/collaboration/conversation/suggest/save', isNoneAuth: false },
        applySuggestedValue: { url: 'api/collaboration/conversation/suggest/apply', isNoneAuth: false },
        addFileComment: { url: 'api/collaboration/conversation/comment/file', isNoneAuth: false },
        addCellComment: { url: 'api/collaboration/conversation/comment/cell', isNoneAuth: false },

        //ShoppingCart
        getShoppingCartHeader: { url: 'api/shoppingCart/getHeader', isNoneAuth: false },
        setShoppingCartHeader: { url: 'api/shoppingCart/saveHeader', isNoneAuth: false },
        autoAssignJo: { url: 'api/shoppingCart/autoAssignJo', isNoneAuth: false },

        //joAssign
        getHandloomRequestHeader: { url: 'api/joAssign/getHandloomRequestHeader', isNoneAuth: false },
        getHandloomRequest: { url: 'api/joAssign/getHandloomRequest/{id}', isNoneAuth: false },
        saveHandloomRequest: { url: 'api/joAssign/saveHandloomRequest', isNoneAuth: false },
        issueHandloomRequest: { url: 'api/joAssign/issueHandloom', isNoneAuth: false },

        //query
        searchHLRequest: { url: 'api/handloomQuery/searchHLRequest', isNoneAuth: false },
        searchHLRequestDetail: { url: 'api/handloomQuery/searchHLRequestDetail', isNoneAuth: false },
        searchTWRequest: { url: 'api/trialweave/trialWeaveQuery/searchTWRequest', isNoneAuth: false },
        searchTWRequestDetail: { url: 'api/trialweave/trialWeaveQuery/searchTWRequestDetail', isNoneAuth: false },
        searFirstTrialWeaveInfoPrice: { url: 'api/trialweave/trialWeaveQuery/searchTWRequestDetailPrice', isNoneAuth: false },

        // fabric item
        getVirtualCollaborationFileId: { url: 'api/fabricItem/collaboration/getVirtualCollaborationFileId', isNoneAuth: false },
        getHandloomComment: { url: 'api/fabricItem/handloom/getHandloomComment/{fabricCode}', isNoneAuth: false },
        saveHandloomComment: { url: 'api/fabricItem/handloom/saveHandloomComment', isNoneAuth: false },
    },
    wmis: {
        searchFinishList: { url: 'api/JO/searchFinishing', isNoneAuth: false },
        searHandloomRequestDetailInfo: { url: 'api/JO/searchHandloomInfo', isNoneAuth: false },
        searchUpdatedTrialWeaveInfoPrice: { url: 'api/JO/searchTrialWeaveInfoPrice', isNoneAuth: false },
        searchTrialWeaveInfo: { url: 'api/JO/searchTrialWeaveInfo', isNoneAuth: false },
        searchTechnicsByRefNo: { url: 'api/JO/searchTechnicsByRefNo', isNoneAuth: false },
        getFabricImageUrl: { url: 'api/JO/getFabricImageUrl', isNoneAuth: false },
        approveHandloom: { url: 'api/JO/approvalHandloom', isNoneAuth: false },
    },
    escm: {
        // getShipMode: { url: 'genShipModeWithValue', isNoneAuth: false },
        // getDestination: { url: 'genFactoryWithValue', isNoneAuth: false },
        // getWashType: { url: 'genWashTypeWithValue', isNoneAuth: false },
        // getGarmentFeature: { url: 'gmtFeatureWithValue', isNoneAuth: false },
        getShipMode: { url: 'masterData/GEN_SHIP_MODE?pageSize={pageSize}', isNoneAuth: false },
        getDestination: { url: 'masterData/GEN_FACTORY?pageSize={pageSize}', isNoneAuth: false },
        getWashType: { url: 'masterData/GEN_WASH_TYPE?pageSize={pageSize}', isNoneAuth: false },
        getGarmentFeature: { url: 'masterData/GMT_FEATURE?pageSize={pageSize}', isNoneAuth: false },
    },
    neo4j: {
        getActualTags: { url: 'fabric/GetTags?fabricCode={fabricCode}', isNoneAuth: true },
        searchTags: { url: 'tag/Find?tag={tag}', isNoneAuth: true },
        searchFabricCodeList: { url: 'fabric/Find?page={page}&pageSize={pageSize}&orderBy={orderBy}&sort={sort}&needTotalNumber={needTotalNumber}', isNoneAuth: true },
        getFabricItemLifeCycle: { url: 'fabric/LifeCyclePath?fabricCode={fabricCode}', isNoneAuth: true },
        searchTechnicsByFabricCode: { url: 'fabric/GetDetail/{fabricCode}', isNoneAuth: true },
        addTag: { url: 'fabric/AddTag', isNoneAuth: true },
        removeTag: { url: 'fabric/RemoveTag', isNoneAuth: true },
        getFabricRequest: { url: 'fabric/GetRequests/{fabricCode}', isNoneAuth: true },
        getFabricActual: { url: 'fabric/GetDetail/{fabricCode}', isNoneAuth: true },
        getFabricPrice: { url: 'fabric/GetDetail/{fabricCode}/Price?refresh={refresh}', isNoneAuth: true },
        getRequestOrder: { url: 'request/Get/{itemId}', isNoneAuth: true },
    },
}
