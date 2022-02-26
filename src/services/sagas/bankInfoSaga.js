import { takeLatest, put, call, all } from "redux-saga/effects";
import api from "../api/api";
import {getBankInfoSuccess,getBankInfoFail} from "../actions/bankInfoActions";
import {BANK_INFO_START, BANK_INFO_UPDATE} from "../constants/constants";

export function* getBankInfo({ payload }) {
    try {
        const response = yield api.request.get(`/Bank/Get?id=${payload.id}`);
        // console.log(response.data);
        yield put(getBankInfoSuccess(response.data));
    } catch (e) {
        yield put(getBankInfoFail());
    }
}
export function* updateBankInfo({ payload }) {
    try {
        const response = yield api.request.post(`/Bank/Update?id=${payload.id}`, payload);
        // console.log(response.data);
        yield put(getBankInfoSuccess(response.data));
    } catch (e) {
        yield put(getBankInfoFail());
    }
}
export function* getBankInfoStart() {
    yield takeLatest(BANK_INFO_START, getBankInfo);
}
export function* getBankInfoUpdate() {
    yield takeLatest(BANK_INFO_UPDATE, updateBankInfo);
}

export function* bankInfoSagas() {
    yield all([
        call(getBankInfoStart),
        call(getBankInfoUpdate),
    ]);
}
