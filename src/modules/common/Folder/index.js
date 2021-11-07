import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import folderIcon from '../../../assets/icons/folder.svg';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import './style.css';

const Folder = ({ folder, name, handleOnFolderClick }) => {
  return (
    <Box sx={{ minWidth: 246, minHeight: 262 }}>
      <Card height="100%" variant="outlined">
        <CardContent sx={{
          height: '208px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }} onClick={() => handleOnFolderClick(folder)}>
          <img src={folderIcon} alt="folder" />
        </CardContent>
        <CardActions sx={{
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid var(--border-color)'
        }}>
          <Typography width={190} noWrap={true} variant="h5" lineHeight="24px" fontSize={16} color="var(--text-color-primary)">
            {name}
          </Typography>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}

export default Folder;

