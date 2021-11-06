import React from 'react';
import { Grid } from '@mui/material';
import Breadcrumb from '../../common/Breadcrumb';

import './styles.css';

const Navbar = () => {
    return (
        <Grid container className="navbarContainer" alignItems="center" pl={'25px'}>
            <Breadcrumb />
        </Grid>
    )
}

export default Navbar;
