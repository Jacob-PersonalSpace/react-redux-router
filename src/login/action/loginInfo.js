import { INPUT_USERNAME, INPUT_PASSWORD, REQUEST_LOGIN, SUCCESS_LOGIN, FAILURE_LOGIN } from '../../actionTypes'

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

const successLogin = userInfo => ({
    type: SUCCESS_LOGIN,
    payload: userInfo,
})

const failureLogin = error => ({
    type: FAILURE_LOGIN,
})

export const onLogin = (userName, password) => (dispatch, getState) => {
    try {
        let url = 'http://localhost:3001/graphql?'
        let options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `query {
                    posts {
                        _id
                        title
                    }
                }`,
                variables: {},
            }),
        }

        dispatch(requestLogin())

        fetch(url, options)
            .then(APIReturnData => dispatch(successLogin(APIReturnData)))
            .catch(error => dispatch(failureLogin(error)))
    } catch (error) {
        dispatch(failureLogin(error))
    }
}
