import { INPUT_USERNAME, INPUT_PASSWORD } from '../../actionTypes'

export const inputUserName = userName => ({
    type: INPUT_USERNAME,
    payload: userName,
})

export const inputPassword = password => ({
    type: INPUT_PASSWORD,
    payload: password,
})
