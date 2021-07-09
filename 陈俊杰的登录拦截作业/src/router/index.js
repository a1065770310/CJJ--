//  1 没有得路由跳转到404页面
//  2 次页面是否需要登录
//  3 如果页面需要登录 并且没有登录的状态 返回登录页面


import Vue from 'vue'
import Router from 'vue-router'
import login from '../view/login'
import home from '../view/home'
import goods from '../view/goods'
Vue.use(Router)

//虚拟dom

export default new Router({
	// mode:'history',
	routes: [{
			path: '/login',
			name: 'login',
			component: login,
			meta:{
				flag: false
			}
		},
		{
			path: '/home',
			name: 'home',
			component: home,
			meta: {
				flag: true
			}
		},
		{
			path: '/goods',
			name: 'goods',
			component: goods,
			meta: {
				flag: false
			}
		}
	]
})


// Router.beforeEach((to, from, next) => {
	
// })
// Router.beforeEach((to, from,next) => {
// 	let token = localStorage.getItem('username')
// 	if (to.meta.flag == true) {
// 		if (token) {
// 			next()
// 		} else {
// 			next({
// 				path: '/login',
// 			})
// 		}
// 	} else {
// 		next()
// 	}
// })
