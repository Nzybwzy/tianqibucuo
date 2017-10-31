import 'es6-promise';
import fetch from 'isomorphic-fetch';
import qs from 'qs';
import _ from 'underscore';

let rootState = {};

const requestTimeOut = 1000 * 600;


export const changeState = (store) => {
    rootState = store.getState();
};

export const syncStateToFetch = (app) => {
    changeState(app._store);
};

const checkStatus = (response) => {
    
    switch (response.status) {
        case 200:
            return response;
        case 409:
            return response;
        case 400:
            return response;
        case 302:
            return response;
        default:
            return response;
    }
    
};

const parseJSON = async(response) => {
    
    try {
        const result = await response.json();
        if (result.status === 1) {
            return result.value;
        } else if (result.status === 1000 || result.status === 1001) {
            location.href = '#/home/login';
            return Promise.reject(result);
        } else {
            return Promise.reject(result);
        }
    } catch (e) {
        return Promise.reject(result);
    }
    
};

const completeHeader = (header) => {
    
    const result = {
        ...header,
        ...{
            Accept        : 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    };
    
    return result;
};

const get = (url, query = {}, options) => {
    
    const defaultOpt = {
        method : 'get',
        timeout: requestTimeOut,
        headers: {...options}
    };
    
    defaultOpt.headers = completeHeader(defaultOpt.headers);
    
    return fetch(url.replace(/^\/api/, '/nchr') + (!_.isEmpty(query) ? `?${qs.stringify(query)}` : ''), defaultOpt).then(checkStatus).then(parseJSON);
};

const post = (url, data = {}, options, isAuth = false) => {
    
    const send = {...data};
    
    // console.log(url, rootState);
    if (isAuth) {
        send.token = rootState.user.token;
    }
    
    const defaultOpt = {
        method : 'post',
        timeout: requestTimeOut,
        body   : qs.stringify(send),
        headers: {...options}
    };
    
    defaultOpt.headers = completeHeader(defaultOpt.headers);
    
    return fetch(url.replace(/^\/api/, '/nchr'), defaultOpt).then(checkStatus).then(parseJSON);
};


const put = (url, data, options) => {
    const defaultOpt = {
        method : 'put',
        timeout: requestTimeOut,
        body   : qs.stringify(data),
        headers: {...options}
    };
    
    defaultOpt.headers = completeHeader(defaultOpt.headers);
    
    return fetch(url.replace(/^\/api/, '/nchr'), defaultOpt).then(checkStatus).then(parseJSON);
};

const del = (url, data = {}, options) => {
    
    const defaultOpt = {
        method : 'delete',
        headers: {...options},
        timeout: requestTimeOut,
        body   : qs.stringify(data)
    };
    
    defaultOpt.headers = completeHeader(defaultOpt.headers);
    
    return fetch(url.replace(/^\/api/, '/nchr'), defaultOpt).then(checkStatus).then(parseJSON);
};

const patch = (url, data, options) => {
    const defaultOpt = {
        method : 'patch',
        timeout: requestTimeOut,
        body   : qs.stringify(data),
        headers: {...options}
    };
    
    defaultOpt.headers = completeHeader(defaultOpt.headers);
    
    return fetch(url.replace(/^\/api/, '/nchr'), defaultOpt).then(checkStatus).then(parseJSON);
};

const postFormData = (url, data, options) => {
    
    const formData = new FormData();
    
    for (let i in data) {
        formData.append(i, data[i]);
    }
    
    const defaultOpt = {
        method : 'post',
        timeout: requestTimeOut,
        body   : formData,
        headers: {...options}
    };
    
    defaultOpt.headers = completeHeader(defaultOpt.headers);
    
    delete defaultOpt.headers['Content-Type'];
    
    return fetch(url.replace(/^\/api/, '/nchr'), defaultOpt).then(checkStatus).then(parseJSON);
};

export default {
    get,
    post,
    put,
    del,
    patch,
    postFormData
};
