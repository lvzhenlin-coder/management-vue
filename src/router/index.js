/*
 *@description: 这是配置路由的文件
 *@author: zhenlin.lv
 *@date: 2023-02-19 00:42:41
 *@version: V1.0.0
*/
import { createRouter, createWebHistory } from 'vue-router'
import beforeEach from './permission'
import routesList from '../assets/json/routes.json'

let routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/loginPages/login.vue')
  }
]
let iterateRoute = (list) => {
  list.forEach(item => {
    if(item.children && item.children.length){
      iterateRoute(item.children)
    }else{
      routes.push({
        "path": item.path,
        "name": item.name,
        "component": () => import(`@/views${item.route}`)
      })
    }
  })
}
if(routesList.status == 1 && routesList.data && routesList.data.length){
  iterateRoute(routesList.data)
}

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: () => import('@/views/homePages/home.vue')
//   },
//   {
//     path: '/homePage',
//     name: 'HomePage',
//     component: () => import('@/views/homePages/home.vue')
//   },
//   {
//     path: '/alumni/alumniList',
//     name: 'alumniList',
//     component: () => import('@/views/alumni/alumniList.vue')
//   },
//   {
//     path: '/content/articleList',
//     name: 'articleList',
//     component: () => import('@/views/content/articleList.vue')
//   },
//   {
//     path: '/content/articleEdit',
//     name: 'articleEdit',
//     component: () => import('@/views/content/articleEdit.vue')
//   },
//   {
//     path: '/permission/routeSetting',
//     name: 'routeSetting',
//     component: () => import('@/views/permission/routeSetting.vue')
//   }
// ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//前置路由
router.beforeEach(async (to, from, next) => {
  beforeEach(to, from, next)
})

export default router
