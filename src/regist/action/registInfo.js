import { INPUT_NEWUSERNAME, INPUT_NEWPASSWORD, INPUT_CONFIRMPASSWORD, RESET } from '../../actionTypes'

export const inputNewUserName = newUserName => ({
    type: INPUT_NEWUSERNAME,
    payload: newUserName,
})

export const inputNewPassword = newPassword => ({
    type: INPUT_NEWPASSWORD,
    payload: newPassword,
})

export const inputConfirmPassword = confirmPassword => ({
    type: INPUT_CONFIRMPASSWORD,
    payload: confirmPassword,
})

export const reset = () => ({
    type: RESET,
})
