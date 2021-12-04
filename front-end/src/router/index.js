import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Riddles from '../views/Riddles.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, 
{
  path: '/riddles',
  name: 'Riddles',
  component: Riddles
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
