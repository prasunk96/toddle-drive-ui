import { SET_ACTIVE_FOLDER, SET_BREAD_CRUMBS } from './actionTypes';

export const setBreadCrumbs = (payload) => ({
    type: SET_BREAD_CRUMBS,
    payload
});

export const setActiveFolderData = (payload) => ({
    type: SET_ACTIVE_FOLDER,
    payload
})
