import React from 'react';
import Button from '@mui/material/Button';

import './styles.css';

const CustomButton = ({ variant, type, handleOnClick, disabled, label, size }) => {
  return (
   <Button size={size} variant={variant} className={variant === 'contained' ? type === 'secondary' ? 'containedButtonSecondary' : 'containedButton' : 'outlinedButton'} onClick={handleOnClick} disabled={disabled} disableElevation>{label}</Button>
  );
}

export default CustomButton;

