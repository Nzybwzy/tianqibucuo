/**
 * Created by nap on 17/5/16.
 */

export const required = (value) => {
    return typeof(value) == 'number' || value ? undefined : '此项是必填项';
}

export const maxLength = (max) => {
    return (value) => {
        return value && value.length > max ? `必须小于 ${max} 个字符` : undefined;
    };
}

export const minLength = (min) => {
    return (value) => {
        return value && value.length < min ? (`必须大于 ${min} 个字符`) : undefined;
    };
}

export const onlyNumberOretter = (value) => {
    return /[^\d\w]+/g.test(value) ? '只能是数字或字母' : undefined;
}

export const number = (value) => {
    return value && isNaN(Number(value)) ? '必须是一个数字' : undefined;
}

export const minValue = (min) => {
    return (value) => {
        return value && value < min ? `最小值不小于 ${min}` : undefined;
    }
}

export const email = (value) => {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        '请输入正确的Email地址' : undefined;
}

export const mobile = (value) => {
    return value && !/^(17[0-9]|13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i.test(value) ?
        '请输入正确的手机号码' : undefined;
}

export const startCharacter = (value) => {
    return value && !/^[A-Za-z]+[A-Za-z0-9]*$/i.test(value) ?
        '此项必须以字母开头' : undefined;
}

export const account = (value) => {
    return value && !/^[a-z][a-zA-Z0-9]{3,17}$/i.test(value) ?
        '企业专属域名必须以小写字母开头，只能是数字和字母，长度大于3位,小于18位' : undefined;
}