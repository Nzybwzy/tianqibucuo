import fetch from '../utils/fetch';

export const getData = () => {
    return fetch.get('/api/data.json');
};
