import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Brazil from '@/views/Brazil.vue'

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/destination/:id', name:'destination.show', component: () => import('@/views/DestinationShow.vue')},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active-link'
})
export default router