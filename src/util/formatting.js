/*
 *@description: 这是书写数据格式化公共方法的文件
 *@author: zhenlin.lv
 *@date: 2023-02-19 00:48:18
 *@version: V1.0.0
*/
const format = {}

/**
 * utc或时间戳转年月日时分秒格式
 * @param {String} data 时间
 * @param {String} param 格式 如：yyyy-mm-dd或yyyy-mm-dd hh:nn:ss 
 * @returns 格式化时间
 */
format.utcTransTime = (data, param) => {
    let date = new Date(data);
    let doubleDigit = (num) => {
        return num < 10 ? `0${num}` : num;
    }
    return param.replace(/yyyy|mm|dd|hh|nn|ss/g, (target) => {
        switch(target){
            case 'yyyy':
                return date.getFullYear();
                break;
            case 'mm':
                return doubleDigit(date.getMonth() + 1);
                break;
            case 'dd':
                return doubleDigit(date.getDate());
                break;
            case 'hh':
                return doubleDigit(date.getHours());
                break;
            case 'nn':
                return doubleDigit(date.getMinutes());
                break;
            case 'ss':
                return doubleDigit(date.getSeconds());
                break;
            default:
                return '';
        }
    })
}


export default format