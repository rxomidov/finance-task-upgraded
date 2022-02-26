import { takeLatest, put, call, all } from "redux-saga/effects";
import api from "../api/api";
import {
    loginFail,
    loginSuccess,
} from "../actions/loginActions";
import { LOGIN_START } from "../constants/constants";

export function* postLoginGetCode({ payload }) {
    try {
        const response = yield api.request.post("/Account/GenerateToken", payload);
        yield put(loginSuccess(response.data.token));
        localStorage.setItem("token", response.data.token);
    } catch (e) {
        yield put(loginFail());
    }
}

export function* postLoginGetCodeStart() {
    yield takeLatest(LOGIN_START, postLoginGetCode);
}

export function* loginSagas() {
    yield all([call(postLoginGetCodeStart)]);
}
