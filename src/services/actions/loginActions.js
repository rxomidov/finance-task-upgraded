import {
    LOGIN_FAIL,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGOUT_USER,
} from "../constants/constants";

export const loginStart = (data) => {
    return {
        type: LOGIN_START,
        payload: data,
    };
};

export const loginSuccess = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload: data,
    };
};

export const loginFail = () => {
    return {
        type: LOGIN_FAIL,
    };
};

export const logoutFromApp = () => {
    return {
        type: LOGOUT_USER,
    };
};
