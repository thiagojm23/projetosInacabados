import { createRouter, createWebHistory } from 'vue-router'
import HomePag from '../views/HomePag.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePag
    },
    {
      path: '/destination',
      name: 'destination',
      component: () => import('../views/DestinationPag.vue')
    },
    {
      path: '/crew',
      name: 'crew',
      component: () => import('../views/CrewPag.vue')
    },
    {
      path: '/technology',
      name: 'technology',
      component: () => import('../views/TechnologyPag.vue')
    }
  ]
})

export default router
