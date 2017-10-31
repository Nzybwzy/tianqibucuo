/**
 * Created by nap on 17/8/8.
 */
import fetch from '../utils/fetch';
import * as Constants from '../constants/Constants';

///////////////////////////////个人注册 start///////////////////////////////////////

//注册
export const personRegister = (data) => {
    return fetch.post('/api/person/reg', data);
};

//登录
export const personLogin = (data) => {
    return fetch.post('/api/person/login', data);
};


//重置密码
export const personResetPassword = (data) => {
    return fetch.post('/api/person/resetpwd', data);
};


//更新个人信息
export const personUpdateBaseinfo = (data) => {
    return fetch.post('/api/person/updbaseinfo', data, {}, true);
};


//创建修改个人简历基本信息
export const resumeBasic = (data) => {
    return fetch.post('/api/personresume/basic', data, {}, true);
};

//获取个人简历基本信息
export const resumeGetBasic = () => {
    return fetch.post('/api/personresume/getbasic', {}, {}, true);
};

//创建或修改教育背景
export const resumeEducation = (data) => {
    return fetch.post('/api/personresume/education', data, {}, true);
};

//删除教育背景
export const resumeDelEducation = (id) => {
    return fetch.post('/api/personresume/deleducation', {id}, {}, true);
};

//获取教育背景信息
export const resumeGetEducation = (data) => {
    return fetch.post('/api/personresume/geteducation', data, {}, true);
};

//获取教育背景信息列表
export const resumeGetEducations = () => {
    return fetch.post('/api/personresume/geteducations', {}, {}, true);
};

//创建或修改培训信息
export const resumeTrain = (data) => {
    return fetch.post('/api/personresume/train', data, {}, true);
};

//获取培训信息
export const resumeGetTrain = (data) => {
    return fetch.post('/api/personresume/gettrain', data, {}, true);
};

//获取培训信息列表
export const resumeGetTrains = () => {
    return fetch.post('/api/personresume/gettrains', {}, {}, true);
};

//删除培训信息
export const resumeDelTrain = (id) => {
    return fetch.post('/api/personresume/deltrain', {id}, {}, true);
};


//创建或修改工作经验
export const resumeJob = (data) => {
    return fetch.post('/api/personresume/job', data, {}, true);
};

//获取工作经验
export const resumeGetJob = () => {
    return fetch.post('/api/personresume/getjob', {}, {}, true);
};

//删除工作经验
export const resumeDelJob = (id) => {
    return fetch.post('/api/personresume/deljob', {id}, {}, true);
};

//获取工作经验列表
export const resumeGetJobs = () => {
    return fetch.post('/api/personresume/getjobs', {}, {}, true);
};

//创建或修改项目经验
export const resumeProject = (data) => {
    return fetch.post('/api/personresume/project', data, {}, true);
};

//获取项目经验
export const resumeGetProject = () => {
    return fetch.post('/api/personresume/getproject', {}, {}, true);
};

//删除项目经验
export const resumeDelProject = (id) => {
    return fetch.post('/api/personresume/delproject', {id}, {}, true);
};

//获取项目经验列表
export const resumeGetProjects = () => {
    return fetch.post('/api/personresume/getprojects', {}, {}, true);
};

//创建或修改求职意向
export const resumeIntention = (data) => {
    return fetch.post('/api/personresume/intention', data, {}, true);
};

//获取求职意向
export const resumeGetIntention = () => {
    return fetch.post('/api/personresume/getintention', {}, {}, true);
};


//删除求职意向
export const resumeDelIntention = (id) => {
    return fetch.post('/api/personresume/delintention', {id}, {}, true);
};

//获取单个简历
export const getOneResume = (id) => {
    return fetch.post('/api/personresume/getresume', {id}, {}, true);
};


//获取求职意向列表
export const resumeGetIntentions = () => {
    return fetch.post('/api/personresume/getintentions', {}, {}, true);
};


//创建或修改自我评价
export const resumeEvaluation = (data) => {
    return fetch.post('/api/personresume/evaluation', data, {}, true);
};


//获取自我评价
export const resumeGetEvaluation = () => {
    return fetch.post('/api/personresume/getevaluation', {}, {}, true);
};


///////////////////////////////个人注册 end///////////////////////////////////////


///////////////////////////////企业注册 start///////////////////////////////////////

//注册
export const enterpriseRegister = (data) => {
    return fetch.post('/api/enterprise/reg', data);
};

//登录
export const enterpriseLogin = (data) => {
    return fetch.post('/api/enterprise/login', data);
};


//重置密码
export const enterpriseResetPassword = (data) => {
    return fetch.post('/api/enterprise/resetpwd', data);
};


//更新个人信息
export const enterpriseUpdateBaseinfo = (data) => {
    return fetch.post('/api/enterprise/updbaseinfo', data);
};


///////////////////////////////企业注册 end///////////////////////////////////////