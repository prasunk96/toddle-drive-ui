import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header';
import Main from '../Main';
import Navbar from '../Navbar';
import { setActiveFolderData } from './actions';
import { driveData } from '../../../data';
import './styles.css';
import { setBreadCrumbs } from '../Dashboard/actions';

const Dashboard = () => {
    const dispatch = useDispatch();
    const { breadcrumbs } = useSelector(state => state.dashboard);
    useEffect(() => {
        dispatch(setActiveFolderData(driveData));
        dispatch(setBreadCrumbs([...breadcrumbs, driveData.name]))
    }, []);

    return (
        <Grid container direction="row" height={'100vh'} className="dashboardContainer">
            <Navbar />
            <Grid container direction="row" className="bodyContainer">
                <Header/>
                <Main />
            </Grid>
        </Grid>
    )
}

export default Dashboard;
