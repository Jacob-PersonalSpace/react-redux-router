import {
    INPUT_USERNAME,
    INPUT_PASSWORD,
    CHANGE_TREE_DATA,
    SUCCESS_LOGIN,
} from '../../actionTypes'

export const inputUserName = userName => ({
    type: INPUT_USERNAME,
    payload: userName,
})

export const inputPassword = password => ({
    type: INPUT_PASSWORD,
    payload: password,
})

export const onChangeTreeData = treeData => ({
    type: CHANGE_TREE_DATA,
    payload: treeData,
})

export const loginIn = () => ({
    type: SUCCESS_LOGIN,
})
