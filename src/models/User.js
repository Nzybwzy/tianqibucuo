import { USER } from '../constants/ActionTypes';
import * as Constants from '../constants/Constants';
import { Storage } from '../utils/common';
import { routerRedux } from 'dva/router';
import { resumeGetEducations, resumeGetTrains, resumeGetJobs, resumeGetProjects, resumeGetIntentions, resumeGetEvaluation } from '../services/user';

export default {
    
    namespace: USER.ROOT,
    
    state: {
        educations : [],
        trains     : [],
        jobs       : [],
        projects   : [],
        intentions : [],
        evaluations: []
    },
    
    subscriptions: {
        setup({dispatch, history}) {  // eslint-disable-line
            //dispatch({type: USER.LOAD_RESUME_MORE});
        },
    },
    
    effects: {
        
        *[USER.LOAD_RESUME_MORE]({payload}, {call, put}){
            
            try {
                //Education
                //Train
                //Job
                //Project
                //Intention
                //Evaluation
                
                const educations = yield call(resumeGetEducations);
                const trains = yield call(resumeGetTrains);
                const jobs = yield call(resumeGetJobs);
                const projects = yield call(resumeGetProjects);
                const intentions = yield call(resumeGetIntentions);
                const evaluations = yield call(resumeGetEvaluation);
                //
                console.log(educations, trains, jobs, projects, intentions, evaluations);
                
                yield put({type: USER.SAVE_RESUME_MORE, payload: {educations, trains, jobs, projects, intentions, evaluations}});
                
            } catch (e) {
                console.log(e);
                //throw e;
            }
            
            
        }
    },
    
    reducers: {
        [USER.SAVE_USERINFO](state, {payload}) {
            const user = {...state, ...payload};
            Storage.setItem(Constants.LOCAL_STORAGE, {user});
            return user;
        },
        
        [USER.SAVE_RESUME](state, {payload:resume}){
            
            let n = {};
            for (let i in resume) {
                try {
                    if (JSON.parse(resume[i]) > 0) {
                        n[i] = resume[i];
                    } else {
                        n[i] = null;
                    }
                } catch (e) {
                    n[i] = resume[i];
                }
            }
            
            const user = {...state, resume: n};
            Storage.setItem(Constants.LOCAL_STORAGE, {user});
            return user;
        },
        
        [USER.CLEAR_USERINFO](state, {payload: title}) {
            return {};
        },
        
        [USER.SAVE_RESUME_MORE](state, {payload}){
            return {...state, ...payload};
        },
        [USER.ENTERPRISE_INFO](state, {payload}) {
            const user = {...state, enterprise_info: payload}; 
            Storage.setItem(Constants.LOCAL_STORAGE, {user});
            return user;
        },
        
    },
    
};
