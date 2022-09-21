import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Bob from '@/views/BobView.vue'
import Teste1 from '@/views/Teste1.vue'
import Teste2 from '@/views/Teste2.vue'
import Pagg from '@/views/Pagg.vue'
import Pagg2 from '@/views/Pagg2.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/pagg2',
    name: 'pagg2',
    component: Pagg2
  },
  {
    path: '/pagg',
    name: 'pagg',
    component: Pagg
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/bob',
    name: 'bob',
    children: [
      {
        path: '/bob/teste1',
        name: 'teste1',
        component: Teste1
    },
      {
        path: '/bob/teste2',
        name: 'teste2',
        component: Teste2
    }
  ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Bob
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
