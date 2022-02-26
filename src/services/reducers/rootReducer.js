import {combineReducers} from "redux";
import loginReducer from "./loginReducer";
import bankListReducer from "./bankListReducer";
import bankInfoInfoReducer from "./bankInfoReducer";
import userListReducer from "./userListReducer";
import usersSlice from "../../pages/Users/_redux/usersSlice";

export const rootReducer = combineReducers({
    login: loginReducer,
    bankList: bankListReducer,
    bankInfo: bankInfoInfoReducer,
    userList: usersSlice.reducer,
});