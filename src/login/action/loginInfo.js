import { 
    INPUT_USERNAME, 
    INPUT_PASSWORD, 
    CLICK_TREE_NODE,
    COLLAPSE_TREE,
    EXPAND_TREE,
 } from '../../actionTypes'

export const inputUserName = userName => ({
    type: INPUT_USERNAME,
    payload: userName,
})

export const inputPassword = password => ({
    type: INPUT_PASSWORD,
    payload: password,
})

export const clickTreeNode = keyNode => ({
    type: CLICK_TREE_NODE,
    payload: keyNode,
})

export const collapseTree = () => ({
    type: COLLAPSE_TREE,
})

export const expandTree = () => ({
    type: EXPAND_TREE,
})
