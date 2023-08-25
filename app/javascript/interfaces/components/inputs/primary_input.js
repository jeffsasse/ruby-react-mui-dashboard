import React,  { useState } from 'react'
import { TextField, Box, InputLabel, InputAdornment, IconButton } from '@mui/material'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'

export default function PrimaryInput(props) {
  const {
    label,
    placeholder,
    type,
    name,
    autoComplete,
    autoFocus = false,
    handleChange,
    value,
    disabled = false,
    required = false,
    sx
  } = props

  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword(!showPassword)
  const handleMouseDownPassword = () => setShowPassword(!showPassword)

  return (
    <Box>
      {label && (
        <InputLabel sx={{ 
          lineHeight: '24px',
          mb: '4px',
          }}>
          {label}
          {required && (
            <span style={{ color: 'red' }}>
              *
            </span>
          )}
        </InputLabel>
      )}
      <TextField
        margin="none"
        fullWidth
        name={name}
        disabled={disabled}
        type={type === 'password' ? showPassword ? 'text' : 'password' : type}
        size="small"
        placeholder={placeholder}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        onChange={handleChange}
        value={value}
        required={required}
        minLength={type === 'password' ? 6 : 1}
        fontFamily="Poppins"
        height={40}
        inputProps={{
          style: {
            color: `blue !important`,
          },
          sx: {
            '&::placeholder':{
              color: `grey`,
              opacity: 1
            },
          }
        }}
        sx={{
          '& fieldset': {
            borderRadius: '5px'
          },            
          input: {
            color: `black`,
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'grey',
            },
            '&:hover fieldset': {
              borderColor: 'grey',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'grey',
            },
          },
          ...sx,
        }}
        InputProps={{
          endAdornment: (
            type === 'password' && <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOffOutlinedIcon sx={{ color: 'grey' }}/> : <VisibilityOutlinedIcon sx={{ color: 'grey' }}/>}
            </IconButton>
          </InputAdornment>
          ),
          style: {
            paddingRight: '0px'
          }
        }}
      />
    </Box>
  );
}
