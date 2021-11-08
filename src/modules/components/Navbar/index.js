import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Skeleton } from '@mui/material';
import Breadcrumb from '../../common/Breadcrumb';
import { setBreadCrumbs, setActiveFolderData } from '../Dashboard/actions';
import { driveData } from '../../../data';
import './styles.css';

import { findDeepObjectAndReturn } from '../../../utils';

const Navbar = () => {
    const dispatch = useDispatch();
    const { breadcrumbs, loading } = useSelector(state => state.dashboard);
    const handleBreadcrumbClicked = (item) => {
        let index = breadcrumbs.indexOf(item);
        const updatedBreadcrumb = breadcrumbs.slice(0, index + 1);
        dispatch(setBreadCrumbs(updatedBreadcrumb));
        let obj = findDeepObjectAndReturn(driveData, item);
        dispatch(setActiveFolderData(obj));
    }
    return (
        <Grid container className="navbarContainer" alignItems="center" pl={'25px'}>
            {loading ? <><Skeleton variant="text" height={24} width="50px" sx={{ marginRight: '10px' }} /> <Skeleton variant="text" height={24} width="50px" /></> : <Breadcrumb handlLinkClicked={handleBreadcrumbClicked} breadcrumb={breadcrumbs} />}
        </Grid>
    )
}

export default Navbar;
