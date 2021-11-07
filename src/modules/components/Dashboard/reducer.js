/* eslint-disable import/no-anonymous-default-export */
import { SET_BREAD_CRUMBS, SET_ACTIVE_FOLDER } from './actionTypes';

const initialState = {
    breadcrumbs: [],
    activeFolder: new Map([])
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_BREAD_CRUMBS:
            return {
                ...state,
                breadcrumbs: action.payload
            };
        case SET_ACTIVE_FOLDER:
            return {
                ...state,
                activeFolder: action.payload
            }
        default: {
            return {
                ...state
            }
        }
    }
}