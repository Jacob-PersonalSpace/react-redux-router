import { INPUT_NEWUSERNAME, INPUT_NEWPASSWORD, INPUT_CONFIRMPASSWORD, RESET } from '../../actionTypes'

export const newUserName = (state = '', action) => {
    switch (action.type) {
        case INPUT_NEWUSERNAME:
            return action.payload;
            break;

        case RESET:
            return '';
            break;

        default:
            return state;
    }
}

export const newPassword = (state = '', action) => {
    switch (action.type) {
        case INPUT_NEWPASSWORD:
            return action.payload;
            break;

        case RESET:
            return '';
            break;

        default:
            return state;
    }
}

export const confirmPassword = (state = '', action) => {
    switch (action.type) {
        case INPUT_CONFIRMPASSWORD:
            return action.payload;
            break;

        case RESET:
            return '';
            break;

        default:
            return state;
    }
}
