import Vue from 'vue'
import VueRouter from 'vue-router'
import Page from './page'

Vue.use(VueRouter)

const routes = Page

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
