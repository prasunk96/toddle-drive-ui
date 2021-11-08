import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Folder from '../../common/Folder';
import File from '../../common/File';
import { setActiveFolderData, setBreadCrumbs } from '../Dashboard/actions';
import Modal from '../../common/Modal';
import InputModal from '../../common/InputModal';
import * as _ from 'lodash';

const Main = () => {
    const dispatch = useDispatch();
    const { activeFolder, breadcrumbs, totalFiles, totalFolders } = useSelector(state => state.dashboard);

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isRenameModalOpen, setIsRenameModalOpen] = useState(false);
    const [isDeletingFolder, setIsDeletingFolder] = useState(false);
    const [isRenamingFolder, setIsRenamingFolder] = useState(false);
    const [folderInFocus, setFolderInFocus] = useState({});
    const [fileInFocus, setFileInFocus] = useState({});
    const [heading, setHeading] = useState('');
    const [placeholder, setPlaceholder] = useState('');
    const [inputLabel, setInputLabel] = useState('');
    const [btnOneText, setBtnOneText] = useState('');
    const [btnTwoText, setBtnTwoText] = useState('');
    const [subText, setSubText] = useState('');

    const handleClickOnFolder = (folder) => {
        dispatch(setBreadCrumbs([...breadcrumbs, folder.name]));
        dispatch(setActiveFolderData(folder));
    }

    const handleFolderOptionClicked = (folder, value) => {
        setFolderInFocus(folder);
        if(value === 'delete') {
            setHeading(`Delete ${folder.name} folder?`);
            setSubText('Are you sure you want to delete this folder? This is a permanent action and can\'t be undon.');
            setBtnOneText('Cancel');
            setBtnTwoText('Delete folder');
            setIsDeletingFolder(true);
            setIsDeleteModalOpen(true);
        } else if(value === 'rename') {
            setHeading('Rename a folder');
            setPlaceholder('Enter folder name');
            setInputLabel('Name of the folder');
            setBtnOneText('Cancel');
            setBtnTwoText('Rename folder');
            setIsRenamingFolder(true);
            setIsRenameModalOpen(true);
        } else if(value === 'duplicate') {
            handleMakeDuplicate('folder', folder);
        }
    };

    const handleFilesOptionClicked = (file, value) => {
        setFileInFocus(file);
        if(value === 'delete') {
            setHeading(`Delete ${file.name} file?`);
            setSubText('Are you sure you want to delete this file? This is a permanent action and can\'t be undon.');
            setBtnOneText('Cancel');
            setBtnTwoText('Delete file');
            setIsDeletingFolder(false);
            setIsDeleteModalOpen(true);
        } else if(value === 'rename') {
            setHeading('Rename a file');
            setPlaceholder('Enter file name');
            setInputLabel('Name of the file');
            setBtnOneText('Cancel');
            setBtnTwoText('Rename file');
            setIsRenamingFolder(false);
            setIsRenameModalOpen(true);
        } else if(value === 'duplicate') {
            handleMakeDuplicate('file', file);
        }
    };

    const handleModalCancel = (modal) => {
        if(modal === 'delete') {
            setIsDeleteModalOpen(false);
        }   else {
            setIsRenameModalOpen(false);
        }
    }

    const handleMakeDuplicate = (type, data) => {
        let activeFolderCopy = { ...activeFolder };
        if(type === 'folder') {
            const index =  _.findIndex(activeFolderCopy.folders, { name: data.name });
            if(index > -1) {
                const id = new Date();
                const newFolder = {
                        name: data.name,
                        folders: data.folders,
                        files: data.files,
                        id: id.toISOString()
                }
                activeFolderCopy.folders.splice(index, 0, newFolder);
            };
        } else {
            const index =  _.findIndex(activeFolderCopy.files, { name: data.name });
            if(index > -1) {
                const id = new Date();
                const newFile = {
                        name: data.name,
                        type: data.type,
                        id: id.toISOString()
                }
                activeFolderCopy.files.splice(index, 0, newFile);
            };
        }
        dispatch(setActiveFolderData(activeFolderCopy));
    }

    const handleDeleteModalConfirmation = () => {
        let activeFolderCopy = { ...activeFolder };
        if(isDeletingFolder) {
            _.remove(activeFolderCopy.folders, { name: folderInFocus.name });
        } else {
            _.remove(activeFolderCopy.files, { name: fileInFocus.name });
        }
        dispatch(setActiveFolderData(activeFolderCopy));
        setIsDeleteModalOpen(false);
    }

    const handleRenameModalConfirmation = (value) => {
        let activeFolderCopy = { ...activeFolder };
        if(isRenamingFolder) {
            activeFolderCopy.folders.forEach(item => {
                if(item.name === folderInFocus.name) {
                    item.name = value;
                }
            });
        } else {
            activeFolderCopy.files.forEach(item => {
                if(item.name === fileInFocus.name) {
                    item.name = value;
                }
            });
        }
        dispatch(setActiveFolderData(activeFolderCopy));
        setIsRenameModalOpen(false);
    }

    return (
        <Box mt={4}>
            <Grid container spacing={3} direction="row">
                <Grid container item xs="12" spacing={2} direction="row">
                    <Grid item><Typography variant="h6" lineHeight="24px" fontSize="16px">{`${totalFolders} folders`}</Typography></Grid>
                    <Grid container item spacing={2}>
                        {Object.keys(activeFolder).length && activeFolder.folders.map((folder, index) => <Grid item key={`${folder.name}-${index}`} >
                            <Folder
                                folder={folder}
                                name={folder.name}
                                handleOnFolderClick={handleClickOnFolder}
                                handleOptionClicked={handleFolderOptionClicked}
                            />
                            </Grid>)}
                    </Grid>
                </Grid>
                <Grid container item xs="12" spacing={1} direction="row">
                    <Grid item><Typography variant="h6" lineHeight="24px" fontSize="16px">{`${totalFiles} files`}</Typography></Grid>
                    <Grid container item spacing={2}>
                    {Object.keys(activeFolder).length && activeFolder.files.map((file, index) => <Grid item key={`${file.name}-${index}`} >
                            <File
                                file={file}
                                name={file.name}
                                fileType={file.type}
                                handleOptionClicked={handleFilesOptionClicked}
                            />
                            </Grid>)}
                    </Grid>
                </Grid>
            </Grid>
            <Modal
                open={isDeleteModalOpen}
                heading={heading}
                subText={subText}
                btnOneText={btnOneText}
                btnTwoText={btnTwoText}
                btnOneClick={() => handleModalCancel('delete')}
                btnTwoClick={handleDeleteModalConfirmation}
            />
            <InputModal
                open={isRenameModalOpen}
                heading={heading}
                inputLabel={inputLabel}
                placeholder={placeholder}
                btnOneText={btnOneText}
                btnTwoText={btnTwoText}
                btnOneClick={() => handleModalCancel('rename')}
                btnTwoClick={handleRenameModalConfirmation}
            />
        </Box>
    )
}

export default Main;
