import VueRouter from "vue-router";
import About from '../components/About.vue'
import Home from '../components/Home.vue'

export default new VueRouter({
  routes:[
    {
      path: '/About',
      component: About,
    },
    {
      path: '/Home',
      component: Home,
    },
  ]
})

