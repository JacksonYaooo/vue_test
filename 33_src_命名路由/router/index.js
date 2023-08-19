import VueRouter from "vue-router";
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

export default new VueRouter({
  routes:[
    {
      path: '/About',
      component: About,
    },
    {
      path: '/Home',
      component: Home,
      children:[
        {
          path: 'News',
          component: News,
        },
        {
          path: 'Message',
          component: Message,
          children:[
            {
              name:'xiangqing',
              path:'Detail',
              component: Detail,
            }
          ]
        },
      ]
    },
  ]
})

