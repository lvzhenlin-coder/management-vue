/*
 *@description: 这是书写校验数据公共方法的文件
 *@author: zhenlin.lv
 *@date: 2023-02-19 00:45:44
 *@version: V1.0.0
*/
const validate = {}

/**
 * 判断数据类型
 * @param {*} data 数据
 * @param {*} type 类型名称
 * @returns true | false
 */
validate.isDataType = (data, type) => {
    switch(type.toLowerCase()){
        case 'string':
            return Object.prototype.toString.call(data) === '[object String]'
            break;
        case 'number':
            return Object.prototype.toString.call(data) === '[object Number]'
            break;
        case 'boolean':
            return Object.prototype.toString.call(data) === '[object Boolean]'
            break;
        case 'object':
            return Object.prototype.toString.call(data) === '[object Object]'
            break;
        case 'array':
            return Object.prototype.toString.call(data) === '[object Array]'
            break;
        case 'function':
            return Object.prototype.toString.call(data) === '[object Function]'
            break;
        case 'undefined':
            return Object.prototype.toString.call(data) === '[object Undefined]'
            break;
        case 'null':
            return Object.prototype.toString.call(data) === '[object Null]'
            break;
        case 'date':
            return Object.prototype.toString.call(data) === '[object Date]'
            break;
        default:
            return false
    }
        
}

/**
 * 正则判断字符串是否以某个参数开头
 * @param {*} data 判断数据
 * @param {*} pram 参数
 * @returns 
 */
validate.isStartPrams = (data, pram) => {
    return new RegExp(`^${pram}`).test(data)
}

export default validate