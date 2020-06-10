import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignupView from '../views/accounts/SignupView.vue'
import LoginView from '../views/accounts/LoginView.vue'
import LogoutView from '../views/accounts/LogoutView.vue'
import CreateView from '../views/articles/CreateView.vue'
import ListView from '../views/articles/ListView.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: 'accounts/signup',
    name: 'Signup',
    component: SignupView
  },
  {
    path: 'accounts/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: 'accounts/logout',
    name: 'Logout',
    component: LogoutView
  },
  {
    path: 'articles/create',
    name: 'Create',
    component: CreateView,
    // beforeEnter(from, to, next) {
    //   if (Vue.$cookies.isKey('auth-token')) {
    //     next('accounts/login')
    //   } else {
    //     next()
    //   }
    // }
  },
  {
    path: 'articles/list',
    name: 'List',
    component: ListView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const publickPages = ['Login', 'Signup', 'Home', 'List']
  const authPages = ['Login', 'Signup']

  const authRequired = !publickPages.includes(to.name) // Login 필요
  const unauthRequired = authPages.includes(to.name) //로그인 되어 있으면 안됨
  const isLoggedIn = Vue.$cookies.isKey('auth-token')

  if (unauthRequired && isLoggedIn) {
    next('/')
  }
  authRequired && !isLoggedIn ? next({ name:'Login' }) : next() 
  // if (authRequired && !isLoggedIn) {
  //   next({ name: 'Login'})
  // } else {
  //   next()
  // }
})

export default router
