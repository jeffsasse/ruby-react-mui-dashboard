import { create } from "apisauce"
import { localStorageService } from "../utils"
import config from "../config"

// Base API Init
const api = create({
    baseURL: config.apis.baseUrl,
    headers: {
        'authorization': localStorageService.getItem('token')
    },
    timeout: 10000
});
// Functions list init
let APIService = {}

APIService.login = async (request) => {
    try {
        const response = await api.post(config.apis.login, request)
        return response.data
    } catch (error) {
        return error
    }
}

APIService.getUsers = async (request) => {
    try {
        const params = `?page=${request?.page || 1}&per_page=${request?.per_page || 10}`
        const response = await api.get(config.apis.users + params)
        return response.data
    } catch (error) {
        return error
    }
}

APIService.getUser = async () => {
    try {
        const response = await api.get("/api/v1/search?query=redux")
        return response
    } catch (error) {
        return error
    }
}

export default APIService
