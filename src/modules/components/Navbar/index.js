import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@mui/material';
import Breadcrumb from '../../common/Breadcrumb';
import { setBreadCrumbs, setActiveFolderData } from '../Dashboard/actions';
import { driveData } from '../../../data';
import lodash from 'lodash'
import deepdash from 'deepdash';
import './styles.css';

const _ = deepdash(lodash);

const Navbar = () => {
    const dispatch = useDispatch();
    const { breadcrumbs } = useSelector(state => state.dashboard);
    const handleBreadcrumbClicked = (item) => {
        let index = breadcrumbs.indexOf(item);
        const updatedBreadcrumb = breadcrumbs.slice(0, index + 1);
        dispatch(setBreadCrumbs(updatedBreadcrumb));
        let obj = {};
        _.findValueDeep(driveData, (value, key, parent) => {
            if(key === 'name' && value === item) {
                obj = parent;
                return true
            }
        },
        { leavesOnly: false });
        dispatch(setActiveFolderData(obj));
    }
    return (
        <Grid container className="navbarContainer" alignItems="center" pl={'25px'}>
            <Breadcrumb handlLinkClicked={handleBreadcrumbClicked} breadcrumb={breadcrumbs} />
        </Grid>
    )
}

export default Navbar;
