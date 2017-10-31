/**
 * Created by nap on 17/4/21.
 */


//model action types


//environment

export const ENV = {
    ROOT: 'env'
};

export const USER = {
    ROOT: 'user',
    
    SAVE_USERINFO   : 'SAVE_USERINFO',
    CLEAR_USERINFO  : 'CLEAR_USERINFO',
    SAVE_RESUME     : 'SAVE_RESUME',
    LOAD_RESUME_MORE: 'LOAD_RESUME_MORE',
    SAVE_RESUME_MORE: 'SAVE_RESUME_MORE',
    ENTERPRISE_INFO: 'ENTERPRISE_INFO', // 企业信息
};


export const BASICS_CONFIG = {
    ROOT: 'basics',
    
    LOAD_ENTERPRISE_NATURE: 'LOAD_ENTERPRISE_NATURE',
    LOAD_INDUSTRY         : 'LOAD_INDUSTRY',
    LOAD_COMPANY_SIZE     : 'LOAD_COMPANY_SIZE',  //公司规模
    LOAD_JOB_LEVEL        : 'LOAD_JOB_LEVEL',//职位级别
    LOAD_EDUCATION        : 'LOAD_EDUCATION', //学历
    LOAD_HEALTHY          : 'LOAD_HEALTHY',//健康状况
    LOAD_WORKLIFE         : 'LOAD_WORKLIFE', //工作年限
    LOAD_CURRENTSTATE     : 'LOAD_CURRENTSTATE',//当前状态
    LOAD_SALARY           : 'LOAD_SALARY',//期望薪水,
    LOAD_GOOD_LANGUAGE    : 'LOAD_GOOD_LANGUAGE',
    LOAD_MARITAL_STATUS   : 'LOAD_MARITAL_STATUS',//婚育状态
    LOAD_CATEGORY_LIST    : 'LOAD_CATEGORY_LIST',//服务类别
    
    LOAD_POSITION: 'LOAD_POSITION', //职位
    LOAD_CITY    : 'LOAD_CITY',//城市
    LOAD_MAJOR   : 'LOAD_MAJOR',//专业
    
};

export const HOME = {
    ROOT: 'home',
    
    LOAD_ENTERPRISE_NATURE: 'LOAD_ENTERPRISE_NATURE',
    LOAD_INDUSTRY         : 'LOAD_INDUSTRY',
    
    
    CHANGE_NEWS_AC: 'CHANGE_NEWS_AC', //更改新闻nav的active状态
    LOAD_NAVS     : 'LOAD_NAVS', //保存供求服务类目
    LOAD_POSITION : 'LOAD_POSITION', //保存职位的需求

    // by jeremy 2017-08-16
    CHANGE_WINDOW_AC : 'CHANGE_WINDOW_AC', //服务之窗ac状态
    SAVE_WINDOW_DATA : 'SAVE_WINDOW_DATA', //服务之窗数据
    CHANGE_PARK_AC : 'CHANGE_PARK_AC', //服务之窗数据
    SERVICE_TOTAL: "SERVICE_TOTAL", // 服务之窗total
};
export const CENTER = {
    ROOT: 'center'
};

