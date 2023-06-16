import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import User from '../views/User'
import Main from '../views/Main'
import Mall from '../views/Mall'
import pageOne from '../views/pageOne'
import pageTwo from '../views/pageTwo'

Vue.use(VueRouter)

// 1.创建路由组件
// 2.将路由与组件进行映射
const routes = [
    {  //主路由
        path:'/',
        component:Main,
        redirect:'/home',//重定向
        children:[
            // 子路由
            {path:'home',component:Home},//首页
            {path:'user',component:User},//用户管理
            {path:'mall',component:Mall},//商品管理
            {path:'page1',component:pageOne},//页面1
            {path:'page2',component:pageTwo},//页面2
        ]
    },

    
]
// 3.创建router实例
const router = new VueRouter({
    routes //(缩写) 相当于routes：routes
});

//将router实例对外进行暴露 
export default router
