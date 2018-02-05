import {
    ADD_API_REQUEST,
    REMOVE_API_REQUEST,
} from '../../actionTypes/index'

export const onAddAPIRequestForBlockUi = () => ({
    type: ADD_API_REQUEST,
})

export const onRemoveAPIRequestForBlockUi = () => ({
    type: REMOVE_API_REQUEST,
})
