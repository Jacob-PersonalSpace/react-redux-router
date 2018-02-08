import { combineReducers } from 'redux-immutable'
import { fromJS, List } from 'immutable'

import {
    RECEIVE_USER_PROFILE,
    CHANGE_SELECTED_CUSTOMER,
    CHANGE_SELECTED_BRAND,
} from '../../actionTypes'

const initUserProfile = fromJS({})

export const userProfile = (state = initUserProfile, action) => {
    switch (action.type) {
        case RECEIVE_USER_PROFILE:
            return action.payload
            break

        default:
            return state
    }
}

const initCustomerList = fromJS([])

export const customerList = (state = initCustomerList, action) => {
    switch (action.type) {
        case RECEIVE_USER_PROFILE:
            if (List.isList(action.payload.get('customers')) && action.payload.get('customers').size > 0) {
                return action.payload.get('customers').map(customer => fromJS({
                    customerName: customer.get('customerName'),
                    customerCode: customer.get('customerCode'),
                }))
            } else {
                return state
            }
            break

        default:
            return state
    }
}

const initBrandList = fromJS([])

export const brandList = (state = initBrandList, action) => {
    switch (action.type) {
        case CHANGE_SELECTED_CUSTOMER:
            let customer = action.payload.getIn(['userProfile', 'customers'])
                .find(customer => customer.get('customerCode') === action.payload.get('selectedCustomerCode'))

            if (customer) {
                let brands = customer.get('brands')

                if (List.isList(brands) && brands.size > 0) {
                    return brands.map(brand => fromJS({
                        brandName: brand.get('brandName'),
                        brandCode: brand.get('brandCode'),
                    }))
                }
            }

            return initBrandList
            break

        default:
            return state
    }
}

const initSelectedCustomer = '15305'

export const selectedCustomer = (state = initSelectedCustomer, action) => {
    switch (action.type) {
        case CHANGE_SELECTED_CUSTOMER:
            return action.payload.get('selectedCustomerCode')
            break

        default:
            return state
    }
}

const initSelectedBrand = 'JOM'

export const selectedBrand = (state = initSelectedBrand, action) => {
    switch (action.type) {
        case CHANGE_SELECTED_CUSTOMER:
            return ''
            break

        case CHANGE_SELECTED_BRAND:
            return action.payload
            break

        default:
            return state
    }
}

export default combineReducers({
    userProfile,
    customerList,
    brandList,
    selectedCustomer,
    selectedBrand,
})
