import {
    BANK_INFO_START,
    BANK_INFO_UPDATE,
    BANK_INFO_SUCCESS,
    BANK_INFO_FAIL,
} from "../constants/constants";

export const getBankInfoStartAct = (data) => {
    return {
        type: BANK_INFO_START,
        payload: data,
    };
};

export const getBankInfoSuccess = (data) => {
    return {
        type: BANK_INFO_SUCCESS,
        payload: data,
    };
};

export const updateBankInfo = (data) => {
    return {
        type: BANK_INFO_UPDATE,
        payload: data,
    };
};

export const getBankInfoFail = (data) => {
    return {
        type: BANK_INFO_FAIL,
        payload: data,
    };
};