import * as storeTypes from "../actions/types/storeActionTypes"

const initialState = {
    loading: false,
    authUser: null,
    showAlert: false,
    msg: "",
    usersData: null,
}

const storeReducer = (state = initialState, action) => {
    console.log("store reducer...:", state);
    switch (action.type) {            
        case storeTypes.START_LOADING:
            return {
                ...state,
                loading: true
            }
        case storeTypes.END_LOADING:
            return {
                ...state,
                loading: false
            }
        case storeTypes.SHOW_ALERT:
            return {
                ...state,
                showAlert: true
            };
        case storeTypes.HIDE_ALERT:
            return {
                ...state,
                showAlert: false
            }
        case storeTypes.LOGIN:
            return {
                ...state,
                authUser: null,
                loading: true,
            }
        case storeTypes.LOGIN_SUCCESS:
            return {
                ...state,
                authUser: action.data.data.user,
                loading: false,
                msg: "Successfully Login!",
            }
        case storeTypes.LOGIN_FAILED:
            return {
                ...state,
                authUser: null,
                loading: false,
                msg: action.data.message || "Failed to login",
            }
        case storeTypes.API_FAILED:
            return {
                ...state,
                loading: false,
                usersData: null,
                msg: action.data.message || "Failed to fetch data",
            }
        case storeTypes.GET_USERS:
            return {
                ...state,
            }
        case storeTypes.GET_USERS_SUCCESS:
            return {
                ...state,
                usersData: action.data.data,
            }
        case storeTypes.LOGOUT:
            return {
                loading: false,
                authUser: null,
                showAlert: false,
                msg: "",
                usersData: null,
            }
        default:
            return state
    }
};

export default storeReducer
