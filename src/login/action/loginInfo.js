import {
    INPUT_USERNAME,
    INPUT_PASSWORD,
    REQUEST_LOGIN,
    SUCCESS_LOGIN,
    FAILURE_LOGIN,
} from '../../actionTypes';

export const inputUserName = userName => ({
    type: INPUT_USERNAME,
    payload: userName,
})

export const inputPassword = password => ({
    type: INPUT_PASSWORD,
    payload: password,
})

const requestLogin = () => ({
    type: REQUEST_LOGIN,
})

const successLogin = loginReturnData => ({
    type: SUCCESS_LOGIN,
    payload: loginReturnData,
})

const failureLogin = error => ({
    type: FAILURE_LOGIN,
    payload: error,
})

export const loginIn = () => (dispatch, getState) => {
    try {
        dispatch(requestLogin())

        const userName = getState().get('userName')
        const passWord = getState().get('passWord')

        fetch('http://localhost:2000/login', {
            method: 'post',
            body: JSON.stringify({
                userName,
                passWord,
            }),
        })
            .then(loginReturnData => {
                dispatch(successLogin(loginReturnData))
            })
            .catch(error => {
                dispatch(failureLogin(error))
            })
    } catch (error) {
        dispatch(failureLogin(error.message))
    }
}
