import { fromJS } from 'immutable'

import { setShoppingCartHeaderApi } from '../../service-api/development'

import {
    onAddUserErrorForAlert,
    onAddAPIRequestForBlockUi,
    onRemoveAPIRequestForBlockUi,
} from '../../global/actions'

import {
    REQUEST_SET_SHOPPINGCART_HEADER,
    RECEIVE_SET_SHOPPINGCART_HEADER,
    FAILURE_SET_SHOPPINGCART_HEADER,
    ONFOCUS_SHOPPINGCART_TEXTAREA,
    ONBLUR_SHOPPINGCART_TEXTAREA,
} from '../../actionTypes/index'

export const onFocusShoppingCartTextarea = () => ({
    type: ONFOCUS_SHOPPINGCART_TEXTAREA,
})

export const onBlurShoppingCartTextarea = () => ({
    type: ONBLUR_SHOPPINGCART_TEXTAREA,
})

const requestSetShoppingCartHeader = () => ({
    type: REQUEST_SET_SHOPPINGCART_HEADER,
})

const receiveSetShoppingCartHeader = (data, selectedCustomerCode, selectedBrandCode) => ({
    type: RECEIVE_SET_SHOPPINGCART_HEADER,
    payload: fromJS({ data, selectedCustomerCode, selectedBrandCode }),
})

const failureSetShoppingCartHeader = error => ({
    type: FAILURE_SET_SHOPPINGCART_HEADER,
    payload: error,
    error: true,
})

export const onChangeShoppingCartHeader = (fabricType, key, value) => (dispatch, getState) => {
    try {
        let selectedCustomerCode = getState().getIn(['global', 'userProfileState', 'selectedCustomer'])
        let selectedBrandCode = getState().getIn(['global', 'userProfileState', 'selectedBrand'])

        let sendData = getState()
            .getIn(['global', 'userProfileState', 'userProfile'])
            .update('customers', customers => {
                let customer = customers.find(customer => customer.get('customerCode') === selectedCustomerCode)

                return customers
                    .clear()
                    .push(customer)
            })
            .updateIn(['customers', 0, 'brands'], brands => {
                let brand = brands.find(brand => brand.get('brandCode') === selectedBrandCode)

                brand = brand.updateIn([fabricType, key], v => value)

                return brands
                    .clear()
                    .push(brand)
            })

        dispatch(requestSetShoppingCartHeader())

        setShoppingCartHeaderApi(sendData)
            .then(data => dispatch(receiveSetShoppingCartHeader(data, selectedCustomerCode, selectedBrandCode)))
            .catch(error => {
                dispatch(failureSetShoppingCartHeader(error))
                dispatch(onAddUserErrorForAlert({ title: 'ERROR', message: error, alertType: 'error' }))
            })
    } catch (error) {
        dispatch(failureSetShoppingCartHeader(error))
        dispatch(onAddUserErrorForAlert({ title: 'ERROR', message: error, alertType: 'error' }))
    }
}
