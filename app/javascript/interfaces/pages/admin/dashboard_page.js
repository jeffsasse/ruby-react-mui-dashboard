import React, { useState, useEffect } from 'react'
import { Box, Container, Stack, Button } from '@mui/material'
import { connect } from "react-redux";
import { Link, useNavigate } from 'react-router-dom'
import { login, hideAlert } from "../../store/actions"
import {
    PrimaryButton,
    PrimaryInput,
    LogoImage
} from "../../components"

function DashboardPage(props) {

  const { showAlert, authUser } = props;

  const navigate = useNavigate();

  return (
    <Box
      sx={{
      }}>
      <LogoImage sx={{ mb: 2 }} width={100} height={100}/>
    </Box>
  );
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
      login: (data) => dispatch(login(data)),
      hideAlert: () => dispatch(hideAlert()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
