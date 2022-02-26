import {
    BANK_LIST_START,
    BANK_LIST_SUCCESS,
    BANK_LIST_FAIL,
    BANK_LIST_PARAMS,
} from "../constants/constants";

const initialState = {
    bankListBegin: false,
    bankListSuccess: false,
    bankListSuccessData: [],
    bankListFailData: [],
    paramsData: {
        Search: "",
        SortColumn: "",
        OrderType: "",
        PageNumber: 1,
        PageLimit: 10,
    },
    helpersData: {
        filter: false,
        page: 1,
    },
    bankListFail: false,
};

const bankListReducer = (state = initialState, action) => {
    // console.log(action.payload, "payload")
    switch (action.type) {
        case BANK_LIST_START:
            return {
                ...state,
                bankListBegin: true,
            };
        case BANK_LIST_SUCCESS:
            return {
                ...state,
                bankListBegin: false,
                bankListSuccess: true,
                bankListSuccessData: action.payload,
                bankListFail: false,
            };
        case BANK_LIST_PARAMS:
            return {
                ...state,
                paramsData: {
                    PageNumber: action.payload.PageNumber ? action.payload.PageNumber : state.paramsData.PageNumber,
                    PageLimit: action.payload.PageLimit ? action.payload.PageLimit : state.paramsData.PageLimit,
                    OrderType: action.payload.OrderType,
                    SortColumn: action.payload.SortColumn ? action.payload.SortColumn : state.paramsData.SortColumn,
                    Search: action.payload.Search,
                },
                helpersData: {
                    filter: action.payload.filter,
                    page: action.payload.page,
                }
            };
        case BANK_LIST_FAIL:
            return {
                ...state,
                bankListBegin: false,
                bankListSuccess: false,
                bankListSuccessData: [],
                bankListFailData: action.payload,
                bankListFail: true,
            };
        default:
            return state;
    }
};

export default bankListReducer;
