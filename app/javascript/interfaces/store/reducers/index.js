import { combineReducers } from 'redux'
import storeReducer from './store'

const rootReducer = combineReducers({
    store: storeReducer
})

export default rootReducer