import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import RadioButton from '../views/RadioButton.vue'
import TextPoint from '../views/TextPoint.vue'
import Password from '../views/Password.vue'
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
    path:'/RadioButton',
    name:'RadioButton',
    component:RadioButton
  },
  {
    path:'/TextPoint',
    name:'TextPoint',
    component:TextPoint
  },
  {
    path:'/Password',
    name:'Password',
    component:Password
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
