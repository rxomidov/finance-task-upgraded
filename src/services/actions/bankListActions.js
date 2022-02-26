import {
    BANK_LIST_START,
    BANK_LIST_SUCCESS,
    BANK_LIST_FAIL,
    BANK_LIST_PARAMS,
} from "../constants/constants";

export const getBankListStartAct = (data) => {
    return {
        type: BANK_LIST_START,
        payload: data,
    };
};

export const getBankListSuccess = (data) => {
    return {
        type: BANK_LIST_SUCCESS,
        payload: data,
    };
};

export const getBankListFail = (data) => {
    return {
        type: BANK_LIST_FAIL,
        payload: data,
    };
};

export const setFilterParams = (data) => {
    return {
        type: BANK_LIST_PARAMS,
        payload: data,
    };
};