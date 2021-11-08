import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header';
import Main from '../Main';
import Navbar from '../Navbar';
import { setActiveFolderData, setLoading } from './actions';
import { driveData } from '../../../data';
import './styles.css';
import { setBreadCrumbs } from '../Dashboard/actions';

const Dashboard = () => {
    const dispatch = useDispatch();
    const { breadcrumbs } = useSelector(state => state.dashboard);
    useEffect(() => {
        dispatch(setLoading(true));
        setTimeout(() => dispatch(setLoading(false)), 1000);
        dispatch(setActiveFolderData(driveData));
        dispatch(setBreadCrumbs([...breadcrumbs, driveData.name]))
    }, []);

    return (
        <Grid container direction="row" height={'100%'} className="dashboardContainer">
            <Navbar />
            <Grid container direction="row" minHeight="100vh" height="100%" className="bodyContainer">
                <Header/>
                <Main />
            </Grid>
        </Grid>
    )
}

export default Dashboard;
