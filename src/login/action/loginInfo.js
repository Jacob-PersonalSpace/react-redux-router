import {
    INPUT_USERNAME,
    INPUT_PASSWORD,
    SUCCESS_LOGIN,
    SELECT_FABRICITEM,
    EXPAND_NODE,
} from '../../actionTypes'

export const inputUserName = userName => ({
    type: INPUT_USERNAME,
    payload: userName,
})

export const inputPassword = password => ({
    type: INPUT_PASSWORD,
    payload: password,
})

export const loginIn = () => ({
    type: SUCCESS_LOGIN,
})

export const onSelectFabricItem = fabricItem => ({
    type: SELECT_FABRICITEM,
    payload: fabricItem,
})

export const onChangeNodeExpanded = fabricItem => ({
    type: EXPAND_NODE,
    payload: fabricItem,
})
