import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    // Siempre desplaza la ventana a la parte superior.
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/quienes-somos',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/servicios',
      name: 'services',
      component: () => import('../views/ServicesView.vue'),
    },
    {
      path: '/contacto',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/servicios/:slug',
      name: 'service-detail',
      component: () => import('../views/ServiceDetailView.vue'),
    },
  ],
})

export default router
