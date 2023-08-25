import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Avatar,
  MenuItem,
  Tooltip,
  InputBase,
  Button,
  Stack
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import Constants from '../../config'

export default function HeaderMenu(props) {
  const { logout, user, handleDrawerToggle, title, handleProfile, handleSettings, menuWidth } =
    props;

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenPopover = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClosePopover = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    handleClosePopover();
    logout();
  };

  const handleProfilePage = () => {
    handleClosePopover();
    handleProfile();
  };

  const handleSettingsPage = () => {
    handleClosePopover();
    handleSettings();
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { md: `calc(100% - ${menuWidth})` },
        ml: { md: `${menuWidth}` },
        pr: "20px",
        backgroundColor: Constants.colors.whiteColor,
        boxShadow: 'none',
        transition: "300ms linear",
      }}>
      <Toolbar disableGutters>
        <IconButton
          color="default"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ ml: "20px" }}>
          <MenuIcon 
            sx={{
              color: Constants.colors.primaryTextColor,
              fontSize: 28
            }}
          />
        </IconButton>

        <Box
          sx={{
            flexGrow: 1,
          }}>
          <Typography
              sx={{
                color: Constants.colors.primaryTextColor,
                pl: "0px"
              }}>
              {title}
            </Typography>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'block', md: 'none' }
          }}></Box>

        <Stack
          direction="row"
          alignItems="center">
          <Box>
            <Tooltip title="Open Profile">
              <Button
                onClick={handleOpenPopover}
                sx={{ p: 0 }}
                >
                <Avatar
                  alt={user?.fullName}
                  src={
                    user?.imageUrl
                  }
                  sx={{ width: 45, height: 45 }}
                />
              </Button>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElUser)}
              onClose={handleClosePopover}>
              <MenuItem key={3} onClick={handleLogout}>
                <Typography textAlign="center" sx={{
                  color: Constants.colors.primaryTextColor,
                }}>Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
