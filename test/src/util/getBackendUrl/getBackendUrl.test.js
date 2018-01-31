import { expect } from 'chai'

import * as getBackendUrl from '../../../../src/util/getBackendUrl'

const testMethod = getBackendUrl.getBackendUrl

describe('util › getBackendUrl.js › getBackendUrl', () => {
    const expectReturnData = {
        getVersion: { url: 'null/version.json', isNoneAuth: false },
        listCollaborationBrandFolders: { url: 'http://localhost:3000/api/collaboration/folder/brand', isNoneAuth: false },
        listCollaborationYearSeasonFoldersByBrand: { url: 'http://localhost:3000/api/collaboration/folder/yearseason/{brandCodeID}', isNoneAuth: false },
        listCollaborationFilesByBrandYearSeason: { url: 'http://localhost:3000/api/collaboration/folder/file/{yearSeasonCodeID}', isNoneAuth: false },
        listCollaborationRecentFiles: { url: 'http://localhost:3000/api/collaboration/folder/recentfile/{pagesize}', isNoneAuth: false },
        getCollaborationFileHeader: { url: 'http://localhost:3000/api/collaboration/filecontent/{id}/header', isNoneAuth: false },
        getCollaborationFileBody: { url: 'http://localhost:3000/api/collaboration/file/{id}/body', isNoneAuth: false },
        deleteCollaborationFile: { url: 'http://localhost:3000/api/collaboration/file/{id}', isNoneAuth: false },
        uploadExcel: { url: 'http://localhost:3000/api/collaboration/file/creation', isNoneAuth: false },
        uploadExcelFail: { url: 'http://localhost:3000/api/collaboration/file/creation', isNoneAuth: false },
        saveCollaborationFile: { url: 'http://localhost:3000/api/collaboration/file/{id}/body', isNoneAuth: false },
        printCollaborationFile: { url: 'http://localhost:3000/api/collaboration/filecontent/{id}/print', isNoneAuth: false },
        joinConversation: { url: 'http://localhost:3000/api/collaboration/conversation/join', isNoneAuth: false },
        saveSuggestedValue: { url: 'http://localhost:3000/api/collaboration/conversation/suggest/save', isNoneAuth: false },
        applySuggestedValue: { url: 'http://localhost:3000/api/collaboration/conversation/suggest/apply', isNoneAuth: false },
        addFileComment: { url: 'http://localhost:3000/api/collaboration/conversation/comment/file', isNoneAuth: false },
        addCellComment: { url: 'http://localhost:3000/api/collaboration/conversation/comment/cell', isNoneAuth: false },
        getShoppingCartHeader: { url: 'http://localhost:3000/api/shoppingCart/getHeader', isNoneAuth: false },
        setShoppingCartHeader: { url: 'http://localhost:3000/api/shoppingCart/saveHeader', isNoneAuth: false },
        autoAssignJo: { url: 'http://localhost:3000/api/shoppingCart/autoAssignJo', isNoneAuth: false },
        getHandloomRequestHeader: { url: 'http://localhost:3000/api/joAssign/getHandloomRequestHeader', isNoneAuth: false },
        getHandloomRequest: { url: 'http://localhost:3000/api/joAssign/getHandloomRequest/{id}', isNoneAuth: false },
        saveHandloomRequest: { url: 'http://localhost:3000/api/joAssign/saveHandloomRequest', isNoneAuth: false },
        issueHandloomRequest: { url: 'http://localhost:3000/api/joAssign/issueHandloom', isNoneAuth: false },
        searchHLRequest: { url: 'http://localhost:3000/api/handloomQuery/searchHLRequest', isNoneAuth: false },
        searchHLRequestDetail: { url: 'http://localhost:3000/api/handloomQuery/searchHLRequestDetail', isNoneAuth: false },
        searchTWRequest: { url: 'http://localhost:3000/api/trialweave/trialWeaveQuery/searchTWRequest', isNoneAuth: false },
        searchTWRequestDetail: { url: 'http://localhost:3000/api/trialweave/trialWeaveQuery/searchTWRequestDetail', isNoneAuth: false },
        searFirstTrialWeaveInfoPrice: { url: 'http://localhost:3000/api/trialweave/trialWeaveQuery/searchTWRequestDetailPrice', isNoneAuth: false },
        getVirtualCollaborationFileId: { url: 'http://localhost:3000/api/fabricItem/collaboration/getVirtualCollaborationFileId', isNoneAuth: false },
        getHandloomComment: { url: 'http://localhost:3000/api/fabricItem/handloom/getHandloomComment/{fabricCode}', isNoneAuth: false },
        saveHandloomComment: { url: 'http://localhost:3000/api/fabricItem/handloom/saveHandloomComment', isNoneAuth: false },
        searchFinishList: { url: 'http://localhost:2000/api/JO/searchFinishing', isNoneAuth: false },
        searHandloomRequestDetailInfo: { url: 'http://localhost:2000/api/JO/searchHandloomInfo', isNoneAuth: false },
        searchUpdatedTrialWeaveInfoPrice: { url: 'http://localhost:2000/api/JO/searchTrialWeaveInfoPrice', isNoneAuth: false },
        searchTrialWeaveInfo: { url: 'http://localhost:2000/api/JO/searchTrialWeaveInfo', isNoneAuth: false },
        searchTechnicsByRefNo: { url: 'http://localhost:2000/api/JO/searchTechnicsByRefNo', isNoneAuth: false },
        getFabricImageUrl: { url: 'http://localhost:2000/api/JO/getFabricImageUrl', isNoneAuth: false },
        approveHandloom: { url: 'http://localhost:2000/api/JO/approvalHandloom', isNoneAuth: false },
        getShipMode: { url: 'http://localhost:10010/masterData/GEN_SHIP_MODE?pageSize={pageSize}', isNoneAuth: false },
        getDestination: { url: 'http://localhost:10010/masterData/GEN_FACTORY?pageSize={pageSize}', isNoneAuth: false },
        getWashType: { url: 'http://localhost:10010/masterData/GEN_WASH_TYPE?pageSize={pageSize}', isNoneAuth: false },
        getGarmentFeature: { url: 'http://localhost:10010/masterData/GMT_FEATURE?pageSize={pageSize}', isNoneAuth: false },
        getActualTags: { url: 'http://lpd-cabala.sit.k8s.esquel.cloud/fabric/GetTags?fabricCode={fabricCode}', isNoneAuth: true },
        searchTags: { url: 'http://lpd-cabala.sit.k8s.esquel.cloud/tag/Find?tag={tag}', isNoneAuth: true },
        searchFabricCodeList: { url: 'http://lpd-cabala.sit.k8s.esquel.cloud/fabric/Find?page={page}&pageSize={pageSize}&orderBy={orderBy}&sort={sort}&needTotalNumber={needTotalNumber}', isNoneAuth: true },
        getFabricItemLifeCycle: { url: 'http://lpd-cabala.sit.k8s.esquel.cloud/fabric/LifeCyclePath?fabricCode={fabricCode}', isNoneAuth: true },
        searchTechnicsByFabricCode: { url: 'http://lpd-cabala.sit.k8s.esquel.cloud/fabric/GetDetail/{fabricCode}', isNoneAuth: true },
        addTag: { url: 'http://lpd-cabala.sit.k8s.esquel.cloud/fabric/AddTag', isNoneAuth: true },
        removeTag: { url: 'http://lpd-cabala.sit.k8s.esquel.cloud/fabric/RemoveTag', isNoneAuth: true },
        getFabricRequest: { url: 'http://lpd-cabala.sit.k8s.esquel.cloud/fabric/GetRequests/{fabricCode}', isNoneAuth: true },
        getFabricActual: { url: 'http://lpd-cabala.sit.k8s.esquel.cloud/fabric/GetDetail/{fabricCode}', isNoneAuth: true },
        getFabricPrice: { url: 'http://lpd-cabala.sit.k8s.esquel.cloud/fabric/GetDetail/{fabricCode}/Price?refresh={refresh}', isNoneAuth: true },
        getRequestOrder: { url: 'http://lpd-cabala.sit.k8s.esquel.cloud/request/Get/{itemId}', isNoneAuth: true },
    }

    it('resolve: CR environment', () => {
        expect(testMethod('CR')).to.deep.equal(expectReturnData)
    })
})
