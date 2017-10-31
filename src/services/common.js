import fetch from '../utils/fetch';


////////////////////////短信验证码、图片验证码、图片 start////////////////////////////////

//获取短信验证码
export const sendCode = async(phone, type) => {
    return fetch.post('/api/sms/sendcode', {phone, type});
};

//验证短信验证码
export const verifyCode = async(phone, code, type) => {
    return fetch.post('/api/sms/verifycode');
};

////获取图片验证码   /validatecode/code/uuid/{uuid}
//export async function () {
//
//}

//验证图片验证码
export const validateCodeCheckCode = (data) => {
    return fetch.post('/api/validatecode/checkcode', data);
};


//上传图片
export const uploadImage = (file) => {
    return fetch.postFormData('/api/images/uplodeimage', {image: file});
};
/////////////////////////短信验证码、图片验证码、图片 end///////////////////////////////

////////////////////基础信息接口 start////////////////////////

//获取企业性质
export const getEnterpriseNature = () => {
    return fetch.get('/api/basics/getenterprisenature');
};


//获取行业
export const getIndustry = () => {
    return fetch.get('/api/basics/getindustry');
};


//获取职位
export const getPosition = (parent_id) => {
    return fetch.post('/api/basics/getposition', {parent_id});
};


//获取城市
export const getArea = (parent_id) => {
    return fetch.post('/api/basics/getarea', {parent_id});
};

//获取主修专业
export const getMajor = (parent_id) => {
    return fetch.post('/api/basics/getmajor', {parent_id});
};

//获取公司规模
export const getCompanySize = () => {
    return fetch.get('/api/basics/getcompanysize');
};

//获取职位级别
export const getJobLevel = () => {
    return fetch.get('/api/basics/getjoblevel');
};

//获取学历
export const getEducation = () => {
    return fetch.get('/api/basics/geteducation');
};

//获取健康状况
export const getHealthy = () => {
    return fetch.get('/api/basics/gethealthy');
};

//获取工作年限
export const getWorkLife = () => {
    return fetch.get('/api/basics/getworklife');
};

//获取当前状态
export const getCurrentState = () => {
    return fetch.get('/api/basics/getcurrentstate');
};

//获取期望薪水
export const getSalary = () => {
    return fetch.get('/api/basics/getsalary');
};

//擅长外语
export const getGoodatLanguage = () => {
    return fetch.get('/api/basics/getgoodatlanguage');
};

//婚育状态
export const getMaritalStatus = () => {
    return fetch.get('/api/basics/getmaritalstatus');
};

////////////////////基础信息接口 end////////////////////////
