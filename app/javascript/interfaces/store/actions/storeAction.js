import * as storeTypes from "./types/storeActionTypes"

export const startLoading = data => {
    return {
        type: storeTypes.START_LOADING,
        data
    }
}
export const endLoading = data => {
    return {
        type: storeTypes.END_LOADING,
        data
    }
}
export const showAlert = data => {
    return {
        type: storeTypes.SHOW_ALERT,
        data
    }
}
export const hideAlert = data => {
    return {
        type: storeTypes.HIDE_ALERT,
        data
    }
}
export const login = (data) => {
    return {
        type: storeTypes.LOGIN,
        data
    };
};
export const logOut = () => {
    return {
        type: storeTypes.LOGOUT,
    };
};
export const loginSuccess = (data) => {
    return {
        type: storeTypes.LOGIN_SUCCESS,
        data
    }
}
export const loginFailed = (data) => {
    return {
        type: storeTypes.LOGIN_FAILED,
        data
    }
}
export const apiFailed = (data) => {
    return {
        type: storeTypes.API_FAILED,
        data
    }
}
export const getUsers = (data) => {
    return {
        type: storeTypes.GET_USERS,
        data
    }
}
export const getUsersSuccess = (data) => {
    return {
        type: storeTypes.GET_USERS_SUCCESS,
        data
    }
}
