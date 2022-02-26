import {all, call} from "redux-saga/effects";

//all sagas
import {loginSagas} from "./loginSaga";
import {bankListSagas} from "./bankListSaga";
import {bankInfoSagas} from "./bankInfoSaga";
import { userListSagas } from "./userListSaga";


export default function* rootSaga() {
    // console.log("Hello from Saga!");
    yield all([
        call(loginSagas),
        call(bankListSagas),
        call(bankInfoSagas),
        call(userListSagas),
    ]);
}