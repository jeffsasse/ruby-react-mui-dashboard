import React from 'react'
import { LoadingButton } from '@mui/lab'

export default function PrimaryButton(props) {
  const {
    type = 'button',
    text,
    handleClick,
    loading,
    width,
    height = 40,
    startIcon,
    endIcon,
    disabled = false,
    sx
  } = props;

  return (
    <LoadingButton
      startIcon={ startIcon }
      endIcon={ endIcon }
      type={type}
      variant="contained"
      loading={loading}
      onClick={handleClick}
      disabled={disabled}
      sx={{
        borderRadius: '5px',
        width: width ? width : '100%',
        height: height,
        boxShadow: 'none',
        ...sx
      }}>
      {text}
    </LoadingButton>
  );
}
