import {
    BANK_INFO_START,
    BANK_INFO_UPDATE,
    BANK_INFO_SUCCESS,
    BANK_INFO_FAIL,
} from "../constants/constants";

const initialState = {
    bankInfoBegin: false,
    bankInfoSuccess: false,
    bankInfoSuccessData: [],
    bankInfoFailData: [],
    bankInfoFail: false,
};

const bankInfoInfoReducer = (state = initialState, action) => {
    // console.log(action.payload)
    switch (action.type) {
        case BANK_INFO_START:
            return {
                ...state,
                bankInfoBegin: true,
                bankInfoSuccessData: [],
            };
        case BANK_INFO_SUCCESS:
            return {
                ...state,
                bankInfoBegin: false,
                bankInfoSuccess: true,
                bankInfoSuccessData: action.payload,
                bankInfoFail: false,
            };
        case BANK_INFO_FAIL:
            return {
                ...state,
                bankInfoBegin: false,
                bankInfoSuccess: false,
                bankInfoFailData: action.payload,
                bankInfoFail: true,
            };
        default:
            return state;
    }
};

export default bankInfoInfoReducer;
