import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CustomButton from '../Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const InputModal = ({ heading, placeholder, inputLabel, btnOneText, btnTwoText, btnOneClick, btnTwoClick, open }) => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div>
            <Dialog open={open} onClose={btnOneClick} fullWidth={true} maxWidth="xs">
                <DialogTitle>
                    {heading}
                    <IconButton
                        aria-label="close"
                        onClick={btnOneClick}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: 'var(--text-color-secondary)',
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {inputLabel}
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="input modal"
                        type="text"
                        size="small"
                        fullWidth
                        variant="outlined"
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder={placeholder}
                    />
                </DialogContent>
                <DialogActions sx={{ paddingRight: '30px', paddingBottom: '30px' }}>
                    <CustomButton size="small" label={btnOneText} variant="outlined" handleOnClick={btnOneClick} />
                    <CustomButton size="small" label={btnTwoText} variant="contained" handleOnClick={() => btnTwoClick(inputValue)} />
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default InputModal;

