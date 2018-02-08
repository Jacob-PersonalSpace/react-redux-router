import { SHOPPINGCART_CHANGE_SHEET } from '../../actionTypes/index'

export const onChangeSheet = (value) => ({
    type: SHOPPINGCART_CHANGE_SHEET,
    payload: value,
})
