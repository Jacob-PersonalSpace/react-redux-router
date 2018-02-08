import { JOASSIGN_CHANGE_SHEET } from '../../actionTypes/index'

export const onChangeSheet = (value) => ({
    type: JOASSIGN_CHANGE_SHEET,
    payload: value,
})
