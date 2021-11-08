import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CustomButton from '../../common/Button';
import Searchbox from '../../common/Searchbox';
import InputModal from '../../common/InputModal';
import { setActiveFolderData } from '../Dashboard/actions';

const Header = () => {
    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isNewFile, setIsNewFile] = useState(false);
    const [heading, setHeading] = useState('');
    const [placeholder, setPlaceholder] = useState('');
    const [inputLabel, setInputLabel] = useState('');
    const [btnOneText, setBtnOneText] = useState('');
    const [btnTwoText, setBtnTwoText] = useState('');
    
    const { activeFolder, totalFiles, totalFolders } = useSelector(state => state.dashboard);

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
    return (
        <Box>
            <Grid container>
                <Grid container item xs="6" direction="row" spacing={2}>
                    <Grid item xs="12">
                        <Typography fontWeight="bold" variant="h2" fontSize="24px" lineHeight="33px">{activeFolder.name}</Typography>
                    </Grid>
                    <Grid item xs="12">
                        <Typography color="var(--text-color-secondary)" variant="h4" fontSize="16px" lineHeight="22px">{`${totalFolders} Folders, ${totalFiles} Files`}</Typography>
                    </Grid>
                    <Grid item xs="12">
                        <Searchbox />
                    </Grid>
                </Grid>
                <Grid container item xs="6" justifyContent="flex-end" spacing={2}>
                    <Grid item>
                        <CustomButton handleOnClick={handleClickOnNewFolder} variant="outlined" label="New Folder" />
                    </Grid>
                    <Grid item>
                        <CustomButton handleOnClick={handleClickOnNewFile} variant="contained" label="New File" />
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
