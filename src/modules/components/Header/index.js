import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Skeleton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CustomButton from '../../common/Button';
import Searchbox from '../../common/Searchbox';
import InputModal from '../../common/InputModal';
import { setActiveFolderData, setLoading } from '../Dashboard/actions';
import * as _ from 'lodash';
import { driveData } from '../../../data';
import { findDeepObjectAndReturn } from '../../../utils';

import './style.css';

const Header = () => {
    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isNewFile, setIsNewFile] = useState(false);
    const [heading, setHeading] = useState('');
    const [placeholder, setPlaceholder] = useState('');
    const [inputLabel, setInputLabel] = useState('');
    const [btnOneText, setBtnOneText] = useState('');
    const [btnTwoText, setBtnTwoText] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    
    const { activeFolder, totalFiles, totalFolders, loading } = useSelector(state => state.dashboard);

    const handleModalCancel = () => {
        setIsModalOpen(false);
    }

    const handleClickOnNewFolder = () => {
        setHeading('Create a new folder');
        setPlaceholder('Enter folder name');
        setInputLabel('Name of the folder');
        setBtnOneText('Cancel');
        setBtnTwoText('Create Folder');
        setIsNewFile(false);
        setIsModalOpen(true);
    }

    const handleClickOnNewFile = () => {
        setHeading('Create a new file');
        setPlaceholder('Enter file name');
        setInputLabel('Name of the file');
        setBtnOneText('Cancel');
        setBtnTwoText('Create file');
        setIsNewFile(true);
        setIsModalOpen(true);
    }

    const handleModalSave = (value) => {
        let activeFolderCopy = { ...activeFolder };
        if(isNewFile) {
            const id = new Date();
            let nameArr = value.split('.');
            const newFile = {
                    name: nameArr[0],
                    type: nameArr[1],
                    id: id.toISOString()
            }
            activeFolderCopy.files.splice(0, 0, newFile);
        } else {
            const id = new Date();
            const newFolder = {
                    name: value,
                    folders: [],
                    files: [],
                    id: id.toISOString()
            }
            activeFolderCopy.folders.splice(0, 0, newFolder);
        }
        dispatch(setActiveFolderData(activeFolderCopy));
        setIsModalOpen(false);
    }

    const handleSearch = (query) => {
        let activeFolderCopy = { ...activeFolder };
        dispatch(setLoading(true));
        if(query.length > 3) {
            const filteredFolders = _.filter(activeFolder.folders, (folder) => folder.name.toLowerCase().includes(query.toLowerCase()))
            const filteredFiles = _.filter(activeFolder.files, (file) => file.name.toLowerCase().includes(query.toLowerCase()));
            activeFolderCopy.folders = filteredFolders;
            activeFolderCopy.files = filteredFiles;
        } else {
            activeFolderCopy = findDeepObjectAndReturn(driveData, activeFolderCopy.name);
        }
        dispatch(setActiveFolderData(activeFolderCopy));
        setTimeout(() => dispatch(setLoading(false)), 500);
    }

    const handleSearchQueryChange = (query) => {
        setSearchQuery(query);
        const debouncedSearch = _.debounce(handleSearch, 800);
        debouncedSearch(query);
    }

    return (
        <Box>
            <Grid container>
                <Grid container item xs="12" md="6" direction="row" spacing={2}>
                    <Grid item xs="12" id="dashboardHeading">
                        <Typography fontWeight="bold" variant="h2" fontSize="24px" lineHeight="33px" width="380px">{loading ? <Skeleton variant="h2" height={24} /> : activeFolder.name}</Typography>
                    </Grid>
                    <Grid item xs="12" id="dashboardSubHeading">
                        <Typography color="var(--text-color-secondary)" variant="h4" fontSize="16px" lineHeight="22px">{loading ? <Skeleton variant="text" height={24} width="50%" /> : `${totalFolders} Folders, ${totalFiles} Files`}</Typography>
                    </Grid>
                    <Grid item xs="12">
                        {loading ? <Skeleton variant="text" height={50} width={280} /> : <Searchbox query={searchQuery} onChangeQuery={handleSearchQueryChange}  />}
                    </Grid>
                </Grid>
                <Grid id="dashboardActions" container item xs="12" md="6" justifyContent="flex-end" spacing={2}>
                    <Grid item>
                        {loading ? <Skeleton variant="text" height={70} width={100} /> : <CustomButton handleOnClick={handleClickOnNewFolder} variant="outlined" label="New Folder" />}
                    </Grid>
                    <Grid item>
                        {loading ? <Skeleton variant="text" height={70} width={100} /> : <CustomButton handleOnClick={handleClickOnNewFile} variant="contained" label="New File" />}
                    </Grid>
                </Grid>
            </Grid>
            <InputModal
                open={isModalOpen}
                heading={heading}
                inputLabel={inputLabel}
                placeholder={placeholder}
                btnOneText={btnOneText}
                btnTwoText={btnTwoText}
                btnOneClick={handleModalCancel}
                btnTwoClick={handleModalSave}
            />
        </Box>
    )
}

export default Header;
