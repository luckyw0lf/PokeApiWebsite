import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      background: "",
      backgroundimage: "background-image: url('../assets/background.jpg')"
    },
    component: HomeView
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
    path: '/pokemon/:name',
    name: "pokemon",
    meta: {
      background: "#484848",
      backgroundimage: ""
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/PokemonView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
