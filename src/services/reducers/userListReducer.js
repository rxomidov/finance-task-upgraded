import {
    USER_LIST_START,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    USER_LIST_PAGINATION,
    USER_LIST_FILTER
} from "../constants/constants";

const initialState = {
    userListBegin: false,
    userListSuccess: false,
    userListSuccessData: [],
    userListFailData: [],
    paginationData: {
        PageNumber: 1,
        PageLimit: 10,
    },
    filterData: {
        filterType: null,

    },
    bankListFail: false,
};

const userListReducer = (state = initialState, action) => {
    // console.log(action.payload, "payload")
    switch (action.type) {
        case USER_LIST_START:
            return {
                ...state,
                userListBegin: true,
            };
        case USER_LIST_SUCCESS:
            return {
                ...state,
                userListBegin: false,
                userListSuccess: true,
                userListSuccessData: action.payload,
                userListFail: false,
            };
        case USER_LIST_PAGINATION:
            return {
                ...state,
                paginationData: {
                    PageNumber: action.payload.PageNumber ? action.payload.PageNumber : state.paramsData.PageLimit,
                    PageLimit: action.payload.PageLimit ? action.payload.PageLimit : state.paramsData.PageLimit,
                },
            };
        case USER_LIST_FILTER:
            return {
                ...state,
                filterData: action.payload,
            };
        case USER_LIST_FAIL:
            return {
                ...state,
                userListBegin: false,
                userListSuccess: false,
                userListSuccessData: [],
                userListFailData: action.payload,
                userListFail: true,
            };
        default:
            return state;
    }
};

export default userListReducer;
