import {
    ADD_USER_ERROR,
    REMOVE_USER_ERROR,
} from '../../actionTypes/index'

export const onAddUserErrorForAlert = ({ title, message, alertType, html }) => ({
    type: ADD_USER_ERROR,
    title,
    message,
    alertType,
    html,
})

export const onRemoveUserErrorForAlert = (index) => ({
    type: REMOVE_USER_ERROR,
    payload: index,
})
