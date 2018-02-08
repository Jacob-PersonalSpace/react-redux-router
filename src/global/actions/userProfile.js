import { fromJS } from 'immutable'

import {
    onAddUserErrorForAlert,
    onAddAPIRequestForBlockUi,
    onRemoveAPIRequestForBlockUi,
} from '../../global/actions'

import {
    FAILURE_USER_PROFILE,
    RECEIVE_USER_PROFILE,
    REQUEST_USER_PROFILE,
    CHANGE_SELECTED_CUSTOMER,
    CHANGE_SELECTED_BRAND,
} from '../../actionTypes/index'

const requestUserProfile = () => ({
    type: REQUEST_USER_PROFILE,
})

const receiveUserProfile = data => ({
    type: RECEIVE_USER_PROFILE,
    payload: fromJS(data),
})

const failureUserProfile = error => ({
    type: FAILURE_USER_PROFILE,
    payload: new Error(error),
    error: true,
})

export const getUserProfile = () => (dispatch, getState) => {
    try {
        dispatch(requestUserProfile())
        dispatch(onAddAPIRequestForBlockUi())

        let data = {
            "_id": "5993b095f36d287a8b039497",
            "userName": "fengjac",
            "customers": [
                {
                    "customerName": "JOHNSTON & MURPHY C/O GENESCO INC",
                    "customerCode": "15305",
                    "brands": [
                        {
                            "brandName": "JOHNSTON & MURPHY",
                            "brandCode": "JOM",
                            "fcr": {
                                "season": "",
                                "year": "",
                                "attentionTo": "",
                                "trimFabricMatchesKnitBodyFabric": false
                            },
                            "handloom": {
                                "sendTo": "asdf3"
                            },
                            "trialWeave": {
                                "qualityRequirement": "",
                                "coFty": "",
                                "shipmentSample": false,
                                "directFabricSales": false,
                                "trimFabricMatchedKnitBody": false,
                                "remark": "",
                                "reservationNo": ""
                            }
                        },
                        {
                            "brandName": "brandB",
                            "brandCode": "b",
                            "fcr": {
                                "season": "",
                                "year": "",
                                "attentionTo": "",
                                "trimFabricMatchesKnitBodyFabric": false
                            },
                            "handloom": {
                                "sendTo": "asdf4"
                            },
                            "trialWeave": {
                                "qualityRequirement": "",
                                "coFty": "",
                                "shipmentSample": false,
                                "directFabricSales": false,
                                "trimFabricMatchedKnitBody": false,
                                "remark": "",
                                "reservationNo": ""
                            }
                        },
                    ]
                },
                {
                    "customerName": "customerC",
                    "customerCode": "c",
                    "brands": [
                        {
                            "brandName": "brandD",
                            "brandCode": "d",
                            "fcr": {
                                "season": "",
                                "year": "",
                                "attentionTo": "",
                                "trimFabricMatchesKnitBodyFabric": false
                            },
                            "handloom": {
                                "sendTo": "asdf1"
                            },
                            "trialWeave": {
                                "qualityRequirement": "",
                                "coFty": "",
                                "shipmentSample": false,
                                "directFabricSales": false,
                                "trimFabricMatchedKnitBody": false,
                                "remark": "",
                                "reservationNo": ""
                            }
                        },
                        {
                            "brandName": "brandE",
                            "brandCode": "e",
                            "fcr": {
                                "season": "",
                                "year": "",
                                "attentionTo": "",
                                "trimFabricMatchesKnitBodyFabric": false
                            },
                            "handloom": {
                                "sendTo": "asdf2"
                            },
                            "trialWeave": {
                                "qualityRequirement": "",
                                "coFty": "",
                                "shipmentSample": false,
                                "directFabricSales": false,
                                "trimFabricMatchedKnitBody": false,
                                "remark": "",
                                "reservationNo": ""
                            }
                        },
                    ]
                },
            ]
        }
        // getUserProfileApi(-1)
        //     .then(data => {
        dispatch(receiveUserProfile(data))
        // })
        // .catch(error => {
        //     dispatch(failureUserProfile(error))
        //     dispatch(onAddUserErrorForAlert({ title: 'ERROR', message: error, alertType: 'error' }))
        // })
        // .then(() => {
        dispatch(onRemoveAPIRequestForBlockUi())
        // })
    } catch (error) {
        dispatch(failureUserProfile(error))
        dispatch(onRemoveAPIRequestForBlockUi())
        dispatch(onAddUserErrorForAlert({ title: 'ERROR', message: error, alertType: 'error' }))
    }
}

export const onChangeSelectedCustomer = (value) => (dispatch, getState) => {
    let userProfile = getState().getIn(['global', 'userProfileState', 'userProfile'])

    dispatch({
        type: CHANGE_SELECTED_CUSTOMER,
        payload: fromJS({
            userProfile,
            selectedCustomerCode: value,
        })
    })
}

export const onChangeSelectedBrand = (value) => ({
    type: CHANGE_SELECTED_BRAND,
    payload: value,
})
