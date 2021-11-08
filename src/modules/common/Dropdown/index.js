import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import DeleteIcon from '@mui/icons-material/Delete';

import './style.css';

const ITEM_HEIGHT = 48;

export default function Dropdown({ options, onItemClick }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (value) => {
        onItemClick(value);
        setAnchorEl(null);
    };

    const handleMenueIcon = (option) => {
        let optionIcon = null;
        switch (option) {
            case 'rename':
                optionIcon = <DriveFileRenameOutlineIcon sx={{ marginRight: '5px' }} />;
                break;
            case 'duplicate':
                optionIcon = <FileCopyIcon sx={{ marginRight: '5px' }} />;
                break;
            case 'delete':
                optionIcon = <DeleteIcon sx={{ marginRight: '5px' }} />;
                break;
            default:
                optionIcon = null;
        }
        return optionIcon;
    }

return (
    <div>
        <IconButton
            aria-label="more"
            id="long-button"
            aria-controls="long-menu"
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
        >
            <MoreHorizIcon />
        </IconButton>
        <Menu
            id="long-menu"
            MenuListProps={{
                'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch'
                },
            }}
            anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
        >
            {options.map((option) => (
                <MenuItem
                    className="dropdownMenuItem"
                    key={option.name}
                    value={option.type}
                    onMouseDown={(e) => handleClose(e.target.getAttribute('value'))}>
                    {handleMenueIcon(option.type)}
                    {option.name}
                </MenuItem>
            ))}
        </Menu>
    </div>
);
}
