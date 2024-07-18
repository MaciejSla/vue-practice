import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const mainTitle = 'Vue Practice'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: `${mainTitle} | Home`
      }
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('../views/EventsView.vue'),
      meta: {
        title: `${mainTitle} | Events`
      }
    },
    {
      path: '/causes',
      name: 'causes',
      component: () => import('../views/CausesView.vue'),
      meta: {
        title: `${mainTitle} | Causes`
      }
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../views/GalleryView.vue'),
      meta: {
        title: `${mainTitle} | Gallery`
      }
    },
    {
      path: '/sermons',
      name: 'sermons',
      component: () => import('../views/SermonsView.vue'),
      meta: {
        title: `${mainTitle} | Sermons`
      }
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'),
      meta: {
        title: `${mainTitle} | Blog`
      }
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/ShopView.vue'),
      meta: {
        title: `${mainTitle} | Shop`
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: {
        title: `${mainTitle} | Contact`
      }
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/CheckoutView.vue'),
      meta: {
        title: `${mainTitle} | Checkout`
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue'),
      meta: {
        title: `${mainTitle} | Cart`
      }
    },
    {
      path: '/products/:id',
      name: 'product',
      component: () => import('../views/ProductView.vue'),
      meta: {
        title: `${mainTitle} | Product`
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return to.hash
    } else if (from.path === to.path) {
      return {}
    }
    return { top: 0, left: 0 }
  }
})

router.beforeEach((to, _from, next) => {
  document.title = to.meta.title || mainTitle
  next()
})

import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
  }
}

export default router
