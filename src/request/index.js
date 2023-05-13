/*
 *@description: 这是一个封装请求的文件
 *@author: zhenlin.lv
 *@date: 2023-02-19 00:37:38
 *@version: V1.0.0
*/
import axios from "axios"
import validate from "../util/validate"
import api from "./api.js"

const baseURL = location.origin
const service = axios.create({
  baseURL: baseURL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application-json/x-www-form-urlencoded;charset=utf-8',
  }
});

// 请求拦截器
service.interceptors.request.use(function (config) {

  return config;
}, function (error) {

  return Promise.reject(error);
});

// 响应拦截器
service.interceptors.response.use(function (response) {

  return response;
}, function (error) {
  
  return Promise.reject(error);
});

let apis = api;
function request(url = '', data = {}, callback){
  if(apis[url] && apis[url].url && apis[url].method && validate.isDataType(data, 'Object')){
    let config = {
      url: apis[url].url,
      method: apis[url].method,
    }
    config[`${['post','put','patch'].includes(apis[url].method.toLowerCase) ? 'data' : 'params'}`] = data;
    return service(config).then(res => {
      callback && validate.isDataType(callback, 'Function') && callback(res)
    },err => {
      callback && validate.isDataType(callback, 'Function') && callback(err)
    }).catch( error => {
      callback && validate.isDataType(callback, 'Function') && callback(error)
    })
  }else{
    alert("发送请求失败")
  }
}

export default request