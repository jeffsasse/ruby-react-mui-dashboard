import React, { useEffect, useState } from 'react'
import {
    createTheme,
    ThemeProvider
} from '@mui/material/styles'
import {
    Box,
    Toolbar,
    Snackbar,
    Alert,
} from "@mui/material"
import { connect } from "react-redux"
import { useNavigate, useLocation } from 'react-router-dom'

import Constants from '../config'
import { localStorageService } from '../utils'
import { LeftMenu, HeaderMenu } from '../components'
import { hideAlert, logOut } from "../store/actions"

const theme = createTheme();

function AdminLayout(props) {

    const { children, showAlert, msg } = props

    const navigate = useNavigate()
    const location = useLocation()

    const [mobileOpen, setMobileOpen] = useState(false)
    const [menuWidth, setMenuWidth] = useState(Constants.width.drawerWidth)

    useEffect(() => {
    }, [showAlert])

    const handleClose = () => {
        props.hideAlert()
    }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
        if (mobileOpen) {
          setMenuWidth(Constants.width.drawerWidth)
        } else {
          setMenuWidth("0px")
        }
    }

    const getTitle = () => {
        let title
        const selectedMenu = [
            ...Constants.menus,
        ].filter((menu) => location.pathname.includes(menu.route))
        if (selectedMenu.length > 0) { title = selectedMenu[0].name}
        else { title = ""}
        return title
    };

    const logoutAction = () => {
        props.logOut()
        navigate(Constants.routes.LOGIN)
    };

    const goProfilePage = () => {
        navigate(Constants.routes.PROFILE)
    };

    const goSettingsPage = () => {
        navigate(Constants.routes.SETTINGS)
    }

    return (
        <ThemeProvider theme={theme}>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                autoHideDuration={5000}
                open={showAlert}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                    {msg}
                </Alert>
            </Snackbar>
            <HeaderMenu
                handleDrawerToggle={handleDrawerToggle}
                handleProfile={goProfilePage}
                handleSettings={goSettingsPage}
                title={getTitle()}
                menuWidth={menuWidth}
                logout={logoutAction}
            />
            <LeftMenu
                pathName={location.pathname}
                handleDrawerToggle={handleDrawerToggle}
                mobileOpen={mobileOpen}
                menuWidth={menuWidth}
                user={""}
            />
            <Box
                component="main"
                sx={{
                flexGrow: 1,
                p: { xs: "45px 30px", md: "45px 60px" },
                width: {
                    md: `calc(100% - ${menuWidth})`
                },
                ml: { md: `${menuWidth}` },
                mt: "45px"
                }}>
                {children}
            </Box>
        </ThemeProvider>
    )

}

const mapStateToProps = state => {
  return {
      loading: state.store.loading,
      showAlert: state.store.showAlert,
      msg: state.store.msg,
      authUser: state.store.authUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
      logOut: () => dispatch(logOut()),
      hideAlert: () => dispatch(hideAlert()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminLayout);