import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import Test from '../views/Test.vue'
import Login from '../views/Login.vue'
import store from '../store/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'App',
    component: App,
    beforeEnter (to, from, next) {
      if (store.state.idToken) {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter (to, from, next) {
      if (!store.state.idToken) {
        next()
      } else {
        next('/')
      }
  }
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
