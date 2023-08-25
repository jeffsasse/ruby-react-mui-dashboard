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

import { hideAlert, logOut } from "../store/actions"

const theme = createTheme();

function Layout(props) {

    const { children, showAlert, msg } = props

    const navigate = useNavigate()
    const location = useLocation()

    const handleClose = () => {
        props.hideAlert()
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
            
            {children}
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
export default connect(mapStateToProps, mapDispatchToProps)(Layout);