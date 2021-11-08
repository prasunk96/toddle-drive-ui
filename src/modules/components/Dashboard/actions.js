import { SET_ACTIVE_FOLDER, SET_BREAD_CRUMBS, SET_LOADING } from './actionTypes';

export const setBreadCrumbs = (payload) => ({
    type: SET_BREAD_CRUMBS,
    payload
});

export const setActiveFolderData = (payload) => ({
    type: SET_ACTIVE_FOLDER,
    payload
});

export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload
});
