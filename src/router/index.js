import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Brazil from '@/views/Brazil.vue'

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/about', name: 'About', component: About},
  {path: '/brazil', name: 'Brazil', component: ()=> import('@/views/Brazil.vue')},
  {path: '/jamaica', name: 'jamaica', component: ()=> import('@/views/Jamaica.vue')},
  {path: '/hawaii', name: 'hawaii', component: ()=> import('@/views/Hawaii.vue')},

  {path: '/panama', name: 'panama', component: ()=> import('@/views/Panama.vue')},


  {path: '/'}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router