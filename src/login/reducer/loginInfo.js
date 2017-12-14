import {
    INPUT_USERNAME,
    INPUT_PASSWORD,
    FAILURE_LOGIN,
} from '../../actionTypes'

export const userName = (state = '', action) => {
    switch (action.type) {
        case INPUT_USERNAME:
            return action.payload;
            break;

        default:
            return state;
    }
}

export const passWord = (state = '', action) => {
    switch (action.type) {
        case INPUT_PASSWORD:
            return action.payload;
            break;

        default:
            return state;
    }
}

export const loginErrorMessage = (state = '', action) => {
    switch (action.type) {
        case FAILURE_LOGIN:
            return action.payload;
            break;

        default:
            return state;
    }
}
