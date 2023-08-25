import { takeLatest, all, takeEvery } from "redux-saga/effects"
import * as storeTypes from "../actions/types/storeActionTypes"
import { login, getUsers, logOut } from "./storeSaga"

export function* watchStore() {
    yield all([takeLatest(storeTypes.LOGIN, login)])
    yield all([takeLatest(storeTypes.GET_USERS, getUsers)])
    yield all([takeLatest(storeTypes.LOGOUT, logOut)])
}
