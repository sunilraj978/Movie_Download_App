import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import AddPost from '../views/AddPost.vue'
import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add-post',
    name: 'add-post',
    component: AddPost
  },
  {
    path: '/movieDetail/:id',
    name: 'Detail',
    component:Detail
  },
  {
    path:'/updateMovie/:id',
    name:'updateMovie',
    component :()=>import('../views/Update')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
