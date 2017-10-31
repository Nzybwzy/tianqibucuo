import fetch from '../utils/fetch';
import * as Constants from '../constants/Constants';


//获取园区简介
export const getParkMes = (data) => {
    return fetch.post('/api/info/getparkintroduction', data);
};


//获取新闻资讯、政策指南
export const getNews = (data) => {
    return fetch.post('/api/info/getnewlist', data);
};

//获取新闻资讯--详情
export const getNewsDetail = (data) => {
    return fetch.post('/api/info/getnewshow', data);
};

//获取服务之窗列表
export const getService = (data) => {
    return fetch.post('/api/service/getservicelist', data);
};

//获取服务之窗--详情
export const getServiceDetail = (data) => {
    return fetch.post('/api/service/getserviceshow', data);
};


//获取入驻企业
export const getSelledList = (data) => {
    return fetch.post('/api/settledenterprise/getselledlist', data);
};


//入驻申请
export const entryApply = (data) => {
    return fetch.post('/api/settledenterprise/addapply', data);
};
//投诉建议
export const postComplain = (data) => {
    return fetch.post('/api/complaint/addsuggest', data);
};

//获取 轮播图
export const getCarousel = () => {
    return fetch.get('/api/info/getcarouselfigure');
};



//获取 入驻流程
export const getProgress = () => {
    return fetch.get('/api/settledenterprise/getprocess');
};
//搜索新闻 政策
export const searchFun = (data) => {
    return fetch.post('/api/info/searchList', data);
};


//首页服务列表
export const getServicesList = (data) => {
    return fetch.post('/api/sell/categorylist', data, {}, true);
    // {}, true  自动带有token
};
// 获取单个服务的列表
export const getServiceOfTotal = (data) => {
    return fetch.post('/api/sell/list', data);
};

//                                                  ------》  供求关系


// 获取职位--列表
export const getPositionList = (data) => {
    return fetch.post('/api/job/getjoblist', data);
};
// 获取职位详情列表
export const getPositionDetail = (data) => {
    return fetch.post('/api/job/getjobshow', data);
};

// 获取用户发布职位详情
export const getUsePosiDetail = (data) => {
    return fetch.post('/api/job/getuserjobshow', data, {}, true);
};

// 获取供求信息---服务类目--其中一条的详情
export const getShellDetail = (data) => {
    return fetch.post('/api/sell/details', data);
};

// 获取职位-服务类目详情中根据id找到企业相关信息
export const getEnterpriseDetail = (data) => {
    return fetch.post('/api/job/getenterpriseinfo', data);
};



// 获取培训信息--列表
export const getTrainlist = (data) => {
    return fetch.post('/api/personresume/gettrains', data, {}, true);
};
// 获取培训信息--详情
export const getTrainDetail = (data) => {
    return fetch.post('/api/personresume/gettrain', data, {}, true);
};


// 获取入驻企业列表
export const getEnterPrise = (data) => {
    return fetch.post('/api/settledenterprise/getselledlist', data);
};






//    用户中心   ------------》    


// 获取用户发布的职位list
export const getCenterPosiList = (data) => {
    return fetch.post('/api/job/getuserjoblist', data,{}, true);
};


// 获取用户某个职位简历list
export const getCenterPosiResume = (data) => {
    return fetch.post('/api/job/getuserresume', data,{}, true);
};
// 职位上下线
export const jobUpAndDown = (data) => {
    return fetch.post('/api/job/upstatus', data,{}, true);
};

//供求信息个人中心list
export const sellSearchList = (data) => {
    return fetch.post('/api/sell/search', data,{}, true);
};

//职位详情中的投递简历
export const sendResume = (data) => {
    return fetch.post('/api/delivery/addresume', data, {}, true);
};
////////////////////////供求信息 start///////////////////////////////////////


//供求信息个人中心搜索
export const sellSearch = (data) => {
    return fetch.post('/api/sell/search', data);
};


//供求信息首页搜索
export const sellList = (data) => {
    return fetch.post('/api/sell/list', data);
};


//详情
export const sellDetails = (data) => {
    return fetch.post('/api/sell/details', data);
};


//添加供求信息
export const sellAdd = (data) => {
    return fetch.post('/api/sell/add', data, {}, true);
};


//修改供求信息
export const sellUpdate = (data) => {
    return fetch.post('/api/sell/update', data, {}, true);
};


//供求信息上下线
export const sellUpdateStatus = (data) => {
    return fetch.post('/api/sell/upstatus', data, {}, true);
};


//添加供求信息基础数据
export const sellDatalist = (data) => {
    return fetch.post('/api/sell/datalist', data);
};


//首页服务类别列表
export const sellCategoryList = (data) => {
    return fetch.post('/api/sell/categorylist', data);
};


////////////////////////供求信息 end///////////////////////////////////////

////////////////////////职位管理 start///////////////////////////////////////


//新增职位
export const jobaAddJob = (data) => {
    return fetch.post('/api/job/addjob', data, {}, true);
};

//获取用户发布的职位
export const jobGetUserJobList = (data) => {
    return fetch.post('/api/job/getuserjoblist', data, {}, true);
};

//获取职位列表
export const jobGetJobList = (data) => {
    return fetch.post('/api/job/getjoblist', data, {}, true);
};

//获取用户发布职位详情
export const jobGetUserJobShow = (data) => {
    return fetch.post('/api/job/getuserjobshow', data, {}, true);
};

//获取职位详情
export const jobGetJobShow = (data) => {
    return fetch.post('/api/job/getjobshow', data, {}, true);
};

//招聘信息上下线
export const jobUpstatus = (data) => {
    return fetch.post('/api/job/upstatus', data, {}, true);
};

//更新职位
export const jobUpjob = (data) => {
    return fetch.post('/api/job/upjob', data, {}, true);
};

//获取用户投递的简历
export const jobGetUserResume = (data) => {
    return fetch.post('/api/job/getuserresume', data, {}, true);
};


////////////////////////职位管理 end///////////////////////////////////////


////////////////////////社保服务 end///////////////////////////////////////

//获取服务流程
export const getServiceProcess = (data) => {
    return fetch.post('/api/ss/getprocess', data);
};
//获取服务网点
export const getServiceWork = (data) => {
    return fetch.post('/api/ss/getnetwork', data);
};
//获取定点医院
export const getFixedHospital = (data) => {
    return fetch.post('/api/ss/gethospital', data);
};
////////////////////////社保服务 end///////////////////////////////////////
