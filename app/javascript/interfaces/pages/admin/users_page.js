import React, { useState, useEffect } from 'react'
import { Box, Container, Stack, Button } from '@mui/material'
import { connect } from "react-redux"
import { Link, useNavigate } from 'react-router-dom'
import { getUsers, hideAlert } from "../../store/actions"
import {
    PrimaryButton,
    PrimaryInput,
    LogoImage
} from "../../components"

function UsersPage(props) {

  const { showAlert, usersData } = props

  const navigate = useNavigate();

  useEffect(() => {
    props.getUsers({})
  },[])

  return (
    <Box
      sx={{
      }}>

    </Box>
  );
}

const mapStateToProps = state => {
  return {
      loading: state.store.loading,
      showAlert: state.store.showAlert,
      msg: state.store.msg,
      authUser: state.store.authUser,
      usersData: state.store.usersData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
      getUsers: (data) => dispatch(getUsers(data)),
      hideAlert: () => dispatch(hideAlert()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
