/**
 * Created by nap on 17/8/10.
 */
import _ from 'underscore';
const storage = localStorage;

const getValue = (key) => {
    let v = storage.getItem(key);
    try {
        v = JSON.parse(v);
        return v;
    } catch (e) {
        return v;
    }
};


export const Storage = {
    
    setItem(key, value){
        
        let v = getValue(key);
        
        if (_.isObject(value) || _.isArray(value)) {
            storage.setItem(key, JSON.stringify({...v, ...value}));
        } else {
            storage.setItem(key, value);
        }
    },
    
    getItem: getValue,
    
    removeItem(key){
        storage.removeItem(key);
    },
    
    clear(){
        storage.clear();
    }
};


export const getOptions = (opt) => {
    return _.map(opt, (v, k) => {
        return {
            uuid: k,
            name: v
        };
    });
};


export const getOptionsValue = (k, opts) => {  //用于供求信息详情的各类_id转化为中文的方法
    for (let i in opts) {
        if (i === k) {
            return opts[i];
        }
    }
};


export const getMultipleValue = (values, opts) => {
    let result = [];
    console.log(values, opts);
    const getValue = (k, os) => {
        os = os || [];
        for (let i = 0; i < os.length; i++) {
            if (os[i].value === k) {
                return os[i];
            }
        }
        return null;
    };
    
    let opt = [...opts];
    for (let i = 0; i < values.length; i++) {
        opt = getValue(values[i], opt);
        if (opt === null) {
            result.push(values[i]);
        } else {
            result.push(opt.label);
            opt = opt.children;
        }
    }
    
    return result.join('/');
    
};