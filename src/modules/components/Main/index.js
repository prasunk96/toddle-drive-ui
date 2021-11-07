import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Folder from '../../common/Folder';
import File from '../../common/File';
import { setActiveFolderData, setBreadCrumbs } from '../Dashboard/actions';

const Main = () => {
    const dispatch = useDispatch();
    const { activeFolder, breadcrumbs } = useSelector(state => state.dashboard);
    const handleClickOnFolder = (folder) => {
        dispatch(setBreadCrumbs([...breadcrumbs, folder.name]));
        dispatch(setActiveFolderData(folder));
    }
    return (
        <Box mt={4}>
            <Grid container spacing={3} direction="row">
                <Grid container item xs="12" spacing={2} direction="row">
                    <Grid item><Typography variant="h6" lineHeight="24px" fontSize="16px">Folders</Typography></Grid>
                    <Grid container item spacing={2}>
                        {Object.keys(activeFolder).length && activeFolder.folders.map(folder => <Grid item ><Folder folder={folder} name={folder.name} handleOnFolderClick={handleClickOnFolder} /></Grid>)}
                    </Grid>
                </Grid>
                <Grid container item xs="12" spacing={1} direction="row">
                    <Grid item><Typography variant="h6" lineHeight="24px" fontSize="16px">Files</Typography></Grid>
                    <Grid container item spacing={2}>
                        <Grid item ><File fileType="pdf" /></Grid>
                        <Grid item ><File fileType="ppt" /></Grid>
                        <Grid item ><File fileType="doc" /></Grid>
                        <Grid item ><File fileType="pdf" /></Grid>
                        <Grid item ><File fileType="ppt" /></Grid>
                        <Grid item ><File fileType="doc" /></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Main;
