import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CustomButton from '../../common/Button';
import Searchbox from '../../common/Searchbox';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container>
                <Grid container item xs="6" direction="row" spacing={2}>
                    <Grid item xs="12">
                        <Typography fontWeight="bold" variant="h2" fontSize="24px" lineHeight="33px">New hire onborading</Typography>
                    </Grid>
                    <Grid item xs="12">
                        <Typography color="var(--text-color-secondary)" variant="h4" fontSize="16px" lineHeight="22px">3 Folders, 4 Files</Typography>
                    </Grid>
                    <Grid item xs="12">
                        <Searchbox />
                    </Grid>
                </Grid>
                <Grid container item xs="6" justifyContent="flex-end" spacing={2}>
                    <Grid item>
                        <CustomButton variant="outlined" label="New Folder" />
                    </Grid>
                    <Grid item>
                        <CustomButton variant="contained" label="New File" />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Header;
