import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CustomButton from '../Button';

const Modal = ({ heading, subText, btnOneText, btnTwoText, btnOneClick, btnTwoClick, open }) => {
    return (
        <div>
            <Dialog open={open} onClose={btnOneClick} fullWidth={true} maxWidth="xs">
                <DialogTitle>
                    {heading}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {subText}
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ paddingRight: '30px', paddingBottom: '30px' }}>
                    <CustomButton type="secondary" size="small" label={btnTwoText} variant="contained" handleOnClick={btnTwoClick} />    
                    <CustomButton size="small" label={btnOneText} variant="outlined" handleOnClick={btnOneClick} />
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Modal;

