import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Refer from '../views/Refer.vue'
import Script from '../views/Script.vue'
import Site from '../views/Site.vue'
import Ani from '../views/Ani.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/reference',
    name: 'Refer',
    component: Refer
  },
  {
    path: '/script',
    name: 'Script',
    component: Script
  },
  {
    path: '/site',
    name: 'Site',
    component: Site
  },
  {
    path: '/animation',
    name: 'Ani',
    component: Ani
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
