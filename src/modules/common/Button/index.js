import React from 'react';
import Button from '@mui/material/Button';

import './styles.css';

const CustomButton = ({ variant, handleOnClick, disabled, label }) => {
  return (
   <Button variant={variant} className={variant === 'contained' ? 'containedButton' : 'outlinedButton'} onClick={handleOnClick} disabled={disabled} disableElevation>{label}</Button>
  );
}

export default CustomButton;

