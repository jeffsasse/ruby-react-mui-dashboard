import React, { useState } from 'react'
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { LogoImage } from '..'
import Constants from '../../config'

export default function LeftMenu(props) {
  const { window, pathName, mobileOpen, handleDrawerToggle, user, menuWidth } =
    props
  const navigate = useNavigate()

  const [open, setOpen] = useState(true);

  const clickHandler = () => {
    navigate(Constants.routes.DASHBOARD);
  };

  const drawer = (
    <div>
      <LogoImage 
        width={40}
        height={40}
        sx={{
          mt: 3
        }}
        clickHandler={clickHandler} 
        text="Admin Panel"
        textStyle={{
          color: Constants.colors.whiteColor
        }}
        />
      <List component="nav">
        {Constants.menus.map((item) => {
          const selected = pathName.includes(item.route);
          return (
            <ListItem 
              key={item.slug} disablePadding
              sx={{
                m: "16px 22px",
                width: "auto !important",
                background: selected ? `${Constants.colors.selectedColor}` : `${Constants.colors.transparent}`,
                borderRadius: '6px',
              }}
            >
              <ListItemButton
                sx={{
                  p: "15px 35px",
                  fontSize: "18px",
                  color: `${Constants.colors.whiteColor}`,
                  fontWeight: 500
                }}
                selected={selected}
                onClick={() => {
                  if (mobileOpen) {
                    handleDrawerToggle();
                  }
                  setOpen(false);
                  navigate(item.route);
                }}>
                <ListItemText primary={item.name} 
                  sx={{
                    ml: '15px',
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: 'flex',
        transition: "300ms linear",
      }}>
      <Box
        component="nav"
        sx={{
          width: { sm: Constants.width.drawerWidth },
          flexShrink: { sm: 0 },
          transition: "300ms linear",
        }}
        aria-label="mailbox folders">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { sm: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: Constants.width.drawerWidth,
              boxShadow: '0 0 10px rgba(0,0,0,0.2) !important',
              border: 'none !important',
              backgroundImage: `linear-gradient(180deg, ${Constants.colors.secondaryColor} 0%, ${Constants.colors.primaryColor} 78.65%)`,
            }
          }}>
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: 'none', md: 'block' },
            transition: "300ms linear",
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: menuWidth,
              boxShadow: '0 0 10px rgba(0,0,0,0.2) !important',
              border: 'none !important',
              backgroundImage: `linear-gradient(180deg, ${Constants.colors.secondaryColor} 0%, ${Constants.colors.primaryColor} 78.65%)`,
            }
          }}
          open>
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
