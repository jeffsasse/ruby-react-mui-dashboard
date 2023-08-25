import React from "react"
import { BrowserRouter as Router, useLocation } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import { watchStore } from "./store/sagas"
import reducer from "./store/reducers"
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import Routes from "./routes"
import {
    AdminLayout,
    Layout
} from "./layouts"
import {
    localStorageService,
    helper
} from "./utils"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(watchStore)

const theme = createTheme()

export default function App() {

    const location = useLocation();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Provider store={store}>
                { helper.isAuthRoute(location.pathname) ? (
                    <AdminLayout>
                        <Routes/>
                    </AdminLayout>
                ) : (
                    <Layout>
                        <Routes/>
                    </Layout>
                ) }
            </Provider>
        </ThemeProvider>
    );
}