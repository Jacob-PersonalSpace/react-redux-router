import { fromJS } from 'immutable'

import { getInsertIndexDesc } from '../../util/helper'

import {
    onAddUserErrorForAlert,
    onAddAPIRequestForBlockUi,
    onRemoveAPIRequestForBlockUi,
} from '../../global/actions'

import {
    saveHandloomRequestApi,
    issueHandloomRequestApi,
} from '../../service-api/development'

import {
    JOASSIGN_REQUEST_SAVE,
    JOASSIGN_RECEIVE_SAVE,
    JOASSIGN_FAILURE_SAVE,
    JOASSIGN_REQUEST_PROCEED,
    JOASSIGN_RECEIVE_PROCEED,
    JOASSIGN_FAILURE_PROCEED,
    JOASSIGN_CHANGE_CELLS,
} from '../../actionTypes/index'

const requestSaveFileContent = () => ({
    type: JOASSIGN_REQUEST_SAVE,
})

const receiveSaveFileContent = data => ({
    type: JOASSIGN_RECEIVE_SAVE,
    payload: fromJS(data),
})

const failureSaveFileContent = error => ({
    type: JOASSIGN_FAILURE_SAVE,
    payload: new Error(error),
    error: true,
})

export const onClickSave = (file) => (dispatch, getState) => {
    try {
        dispatch(onAddAPIRequestForBlockUi())
        dispatch(requestSaveFileContent())

        saveHandloomRequestApi(file)
            .then(data => {
                dispatch(receiveSaveFileContent(data[0]))
            })
            .catch(error => {
                dispatch(failureSaveFileContent(error))
                dispatch(onAddUserErrorForAlert({ title: 'ERROR', message: error, alertType: 'error' }))
            })
            .then(() => {
                dispatch(onRemoveAPIRequestForBlockUi())
            })
    } catch (error) {
        dispatch(failureSaveFileContent(error))
        dispatch(onRemoveAPIRequestForBlockUi())
        dispatch(onAddUserErrorForAlert({ title: 'ERROR', message: error, alertType: 'error' }))
    }
}

const requestProceed = () => ({
    type: JOASSIGN_REQUEST_PROCEED,
})

const receiveProceed = data => ({
    type: JOASSIGN_RECEIVE_PROCEED,
    payload: fromJS(data),
})

const failureProceed = error => ({
    type: JOASSIGN_FAILURE_PROCEED,
    payload: new Error(error),
    error: true,
})

export const changeCells = (rows) => ({
    type: JOASSIGN_CHANGE_CELLS,
    payload: fromJS(rows),
})

export const onClickProceed = (issueData) => (dispatch, getState) => {
    try {
        dispatch(onAddAPIRequestForBlockUi())
        dispatch(requestProceed())

        issueHandloomRequestApi(issueData)
            .then(data => {
                let fileContent = data[0],
                    failureRowIds = data[1],
                    successRowIds = data[2],
                    wmisData = data[3]

                let alertMessage = [],
                    successfulJoNo = []

                wmisData.forEach(obj => {
                    let ifHasResult = Object.keys(obj).find(v => v === 'result')
                    let ifHasJoNo = Object.keys(obj).find(v => v === 'jono')

                    if (ifHasResult && ifHasJoNo) {
                        if (obj.result.toUpperCase() === 'SUCCESS') {
                            let existendJo = successfulJoNo.find(jono => jono === obj.jono)

                            if (!existendJo) {
                                let insertIndex = getInsertIndexDesc(successfulJoNo, obj.jono)

                                successfulJoNo.splice(insertIndex, 0, obj.jono)
                            }
                        }
                    }
                })

                if (successfulJoNo.length > 0) {
                    alertMessage.push(`<div>Successfully proceeded ${successRowIds.length} item(s) in WMIS and created below Job Numbers:</div>`)
                    successfulJoNo.forEach(v => alertMessage.push(`<div>${v}</div>`))
                }

                if (failureRowIds.length > 0) {
                    alertMessage.push(`<div>Failed to proceed ${failureRowIds.length} item(s) to WMIS. Please try again and contact system administrator for help.</div>`)
                }

                dispatch(receiveProceed(fileContent))
                dispatch(onAddUserErrorForAlert({
                    title: 'SUCCESS',
                    html: alertMessage.join(''),
                    alertType: 'success',
                }))
            })
            .catch(error => {
                dispatch(failureProceed(error))
                dispatch(onAddUserErrorForAlert({ title: 'ERROR', message: error, alertType: 'error' }))
            })
            .then(() => {
                dispatch(onRemoveAPIRequestForBlockUi())
            })
    } catch (error) {
        dispatch(failureProceed(error))
        dispatch(onRemoveAPIRequestForBlockUi())
        dispatch(onAddUserErrorForAlert({ title: 'ERROR', message: error, alertType: 'error' }))
    }
}
