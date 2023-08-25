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

function LoginPage(props) {

  const { showAlert, authUser } = props;

  const navigate = useNavigate();

  useEffect(() => {
    if (authUser) {
      navigate("/dashboard");
    }
  }, [authUser]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      email: formData.get('email'),
      password: formData.get('password')
    };
    props.login(data);
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Stack spacing={3} alignItems="center">
          <Box
            component="form"
            noValidate={false}
            onSubmit={handleSubmit}
            sx={{ mt: 1, width: { sm: '100%', md: '300px' } }}>
            <LogoImage sx={{ mb: 2 }} width={100} height={100}/>
            <PrimaryInput
              label="Email address"
              name="email"
              type="email"
              autoComplete="email"
              size="small"
              placeholder="Enter Email address"
              autoFocus={true}
              required={true}
            />
            <Box sx={{ mt: 2 }}></Box>
            <PrimaryInput
              label="Password"
              name="password"
              type="password"
              autoComplete="current-password"
              size="small"
              placeholder="Enter Password"
              required={true}
            />
            <PrimaryButton
              type="submit"
              text="Login"
              loading={props.loading}
              sx={{ mt: 3 }}
            />
          </Box>
          <Link
            to={"/forgot-password"}
            style={{ textDecoration: "none" }}>
            Forgot your password?
          </Link>
        </Stack>
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
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
