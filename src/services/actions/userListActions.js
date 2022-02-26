import {
  USER_LIST_START,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_PAGINATION,
  USER_LIST_FILTER
} from "../constants/constants";

export const getUserListStartAct = (data) => {
  console.log(data);
  return {
      type: USER_LIST_START,
      payload: data,
  };
};

export const getUserListSuccess = (data) => {
  return {
      type: USER_LIST_SUCCESS,
      payload: data,
  };
};

export const getUserListFail = (data) => {
  return {
      type: USER_LIST_FAIL,
      payload: data,
  };
};

export const setUserListPagination = (data) => {
  return {
      type: USER_LIST_PAGINATION,
      payload: data,
  };
};
export const setUserListFilter = (data) => {
  return {
      type: USER_LIST_FILTER,
      payload: data,
  };
};