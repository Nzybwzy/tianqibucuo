import fetch from '../utils/fetch';
import * as Constants from '../constants/Constants';


// 修改企业基础信息
export const updatebaseinfo = (data) => {
    return fetch.post('/api/enterprise/updbaseinfo', data, {}, true);
};
