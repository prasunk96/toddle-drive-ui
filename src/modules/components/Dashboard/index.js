import { Grid } from '@mui/material';
import React from 'react';
import Header from '../Header';
import Main from '../Main';
import Navbar from '../Navbar';

import './styles.css';

const Dashboard = () => {
    return (
        <Grid container direction="row" height={'100vh'} className="dashboardContainer">
            <Navbar />
            <Grid container direction="row" className="bodyContainer" height={"100%"}>
                <Header/>
                <Main />
            </Grid>
        </Grid>
    )
}

export default Dashboard;
