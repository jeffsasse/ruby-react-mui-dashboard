import React, {
    useEffect,
    useState,
} from "react"
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom"
import { 
    HomePage,
    LoginPage,
    DashboardPage,
    UsersPage,
} from "../pages"
import {
    AdminLayout,
    Layout,
} from "../layouts"
import { 
    localStorageService,
    helper
 } from "../utils"
import Constants from "../config"

export default function RoutesIndex() {

    const routes = [
        {
            path: '',
            exact: true,
            auth: false,
            name: "HomePage",
            component: <HomePage/>
        },
        {
            path: 'login',
            exact: true,
            auth: false,
            name: "LoginPage",
            component: <LoginPage/>
        },
        {
            path: 'dashboard',
            exact: true,
            auth: true,
            name: "DashboardPage",
            component: <DashboardPage/>
        },
        {
            path: 'users',
            exact: true,
            auth: true,
            name: "UsersPage",
            component: <UsersPage/>
        },
    ]
    const [menu, setMenu] = useState([])

    useEffect(() => {
        setMenu(getMenu)
    }, [])
    
    const getMenu = routes.map((route, index) => {
        return route.component ? route.auth ? (
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
                name={route.name}
                element={
                    localStorageService.getItem('token') ? route.component : (
                        <Navigate
                            to={Constants.routes.LOGIN}
                            state={{ from: route.path }}
                        />
                    )
                }
            />
        ) : (
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
                name={route.name}
                element={route.component}
            />
          ) : null
    })

    return (
        <Routes>
            { menu }
        </Routes>
    );
}