import { put, all } from "redux-saga/effects"
import * as actions from "../actions/index"
import APIService from "../api"
import { localStorageService } from "../../utils"

export function* login(payload) {
    try {
        const response = yield APIService.login(payload.data)
        if (response.status) {
            localStorageService.setItem('token', response.data.token)
            yield all([
                put(actions.loginSuccess(response)),
                put(actions.showAlert())
            ])
        } else {
            yield all([
                put(actions.loginFailed(response)),
                put(actions.showAlert())
            ])
        }
    } catch (error) {
        yield all([
            put(actions.loginFailed(error)),
            put(actions.showAlert())
        ])
    } finally {
        yield put(actions.endLoading())
    }
}

export function *logOut() {
    localStorageService.clearAll();
}

export function* getUsers(payload) {
    try {
        const response = yield APIService.getUsers(payload.data)
        if (response.status) {
            yield all([
                put(actions.getUsersSuccess(response)),
            ])
        } else {
            yield all([
                put(actions.apiFailed(response)),
            ])
        }
    } catch (error) {
        yield all([
            put(actions.apiFailed(error)),
        ])
    } finally {
        // yield put(actions.endLoading())
    }
}
