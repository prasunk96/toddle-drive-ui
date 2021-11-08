import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import filePDF from '../../../assets/icons/filePDF.svg';
import filePPT from '../../../assets/icons/filePPT.svg';
import fileText from '../../../assets/icons/fileText.svg';
import Dropdown from '../Dropdown';

const File = ({ fileType, name, file, handleOptionClicked }) => {
    const fileIcon = fileType === 'pdf' ? filePDF : fileType === 'ppt' ? filePPT : fileText;
    return (
        <Box sx={{ maxWidth: 246, minHeight: 286 }}>
            <Card height="100%" variant="outlined">
                <CardContent sx={{
                height: '206px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: fileType === 'pdf' ? '#FFF5F7' : fileType === 'ppt' ? '#FFF9EB' : '#F5F5FF',
                }}>
                <img src={fileIcon} alt="file" />
                </CardContent>
                <CardActions sx={{
                    height: '79px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderTop: '1px solid var(--border-color)'
                }}>
                    <Box>
                        <Typography mb={1} variant="h3" fontSize={14} lineHeight="19px" color="var(--text-color-secondary)">
                        {fileType.toUpperCase()}
                        </Typography>
                        <Typography width={190} noWrap={true} variant="h5" lineHeight="24px" fontSize={16} color="var(--text-color-primary)">
                            {name}
                        </Typography>
                    </Box>
                    <Dropdown onItemClick={(value) => handleOptionClicked(file, value)} options={[{type: 'rename', name: 'Rename file'}, {type: 'duplicate', name: 'Duplicate file'}, {type: 'delete', name: 'Delete file'}]} />
                </CardActions>
            </Card>
        </Box>
    );
}

export default File;

