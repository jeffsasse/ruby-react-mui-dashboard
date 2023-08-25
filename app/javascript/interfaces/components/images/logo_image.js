import React from 'react'
import { Box, Typography, Stack } from '@mui/material'

export default function LogoImage(props) {
  const { width = 50, height = 50, text, textStyle, clickHandler, sx } = props

  const logo = require('../../../../../public/images/logo.png')

  return (
    <Box
      sx={{
        ...sx,
        cursor: 'pointer',
      }}
      onClick={clickHandler}
    >
      <Stack alignItems="center" justifyContent={"center"} direction={"row"} spacing={"10px"}>
        <img src={logo} width={width} height={height} style={{
          borderRadius: '8px'
        }}/>
        <Typography sx={{
          ...textStyle
        }}>{text}</Typography>
      </Stack>
    </Box>
  );
}
