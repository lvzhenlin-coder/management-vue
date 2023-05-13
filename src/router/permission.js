/*
 *@description: 这是处理路由拦截处理的方法
 *@author: zhenlin.lv
 *@date: 2023-02-19 00:43:05
 *@version: V1.0.0
*/
export default async function beforeEach(to, from ,next) {
    if(to.name != 'login' && !sessionStorage.getItem('admin')){
        next({ name: 'login' }) 
    }else{
        next()
    }
}