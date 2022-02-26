import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userListBegin: false,
    userListSuccess: false,
    userListSuccessData: {},
    userListFailData: {},
    paginationData: {
        PageNumber: 1,
        PageLimit: 10,
    },
    filterData: {
        filterType: null,

    },
    bankListFail: false,
};


const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        getUserListSuccess: (state, action) => {
            return {
                userListSuccess: true,
                userListSuccessData: action.payload,
            };
        },
        setUserListPagination: (state, action) => {
            console.log(action.payload);
            return {
                paginationData: {
                    PageNumber: action.payload.PageNumber,
                    PageLimit: action.payload.PageLimit,
                },
            };
        },
        getUserListFail: (state, action) => {
            return {
                userListSuccess: false,
            };
        }
    }
});

export const { getUserListSuccess, getUserListFail, setUserListPagination } = usersSlice.actions;
export default usersSlice;