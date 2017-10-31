import * as types from '../constants/ActionTypes';

import {} from '../services/common.js';


const {USER} = types;

export const saveUserinfo = (info) => {
    return {
        type   : `${USER.ROOT}/${USER.SAVE_USERINFO}`,
        payload: info
    };
};


export const clearUserinfo = () => {
    return {
        type: `${USER.ROOT}/${USER.CLEAR_USERINFO}`,
    };
};


export const saveResume = (info) => {
    return {
        type   : `${USER.ROOT}/${USER.SAVE_RESUME}`,
        payload: info
    };
};

export const loadResumeDetail = () => {
    return {
        type: `${USER.ROOT}/${USER.LOAD_RESUME_MORE}`
    };
};

export const enterpriseInfo = (info) => {
    return {
        type   : `${USER.ROOT}/${USER.ENTERPRISE_INFO}`,
        payload: info
    };
};