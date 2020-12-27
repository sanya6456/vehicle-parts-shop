import { createRouter, createWebHashHistory } from 'vue-router'
import Landing from '@/views/Landing.vue'


const routes = [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/parts',
      name: 'PartsByCar',
      component: ()=>import('@/views/PartsByCar.vue')
    },
    {
      path: '/products',
      name: 'Products',
      component: ()=>import('@/views/Products.vue')
    }
  ]
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes
  })



  export default router;