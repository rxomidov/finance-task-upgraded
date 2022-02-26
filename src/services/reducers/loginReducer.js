import {
    LOGIN_START,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_USER,
} from "../constants/constants";

const initialState = {
    loginBegin: false,
    loginSuccess: false,
    loginSuccessData: "",
    loginFail: false,
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                loginBegin: true,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loginBegin: false,
                loginSuccess: true,
                loginSuccessData: action.payload,
                loginFail: false,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                loginBegin: false,
                loginSuccess: false,
                loginFail: true,
            };
        case LOGOUT_USER:
            return {
                ...state,
                loginFail: true,
                loginSuccess: false,
                loginSuccessData: "",
            };
        default:
            return state;
    }
};

export default loginReducer;
