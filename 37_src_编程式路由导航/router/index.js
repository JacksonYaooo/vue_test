import VueRouter from "vue-router";
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

export default new VueRouter({
  routes:[
    {
      path: '/about',
      component: About,
    },
    {
      path: '/home',
      component: Home,
      children:[
        {
          path: 'news',
          component: News,
        },
        {
          path: 'message',
          component: Message,
          children:[
            {
              name:'xiangqing',
              path:'detail',
              component: Detail,
              // props第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件
              /* props:{
                a:1,b:'hhh'
              }, */

              // props的第二种写法，值为布尔值，若布尔值为真就会把该路由收到的所有params参数以props形式传给Detail组件
              // props:true,

              // props的第三种写法，值为函数，
              /* props($route){
                return{id:$route.query.id,title:$route.query.title}
              }, */
                  // 连续解构赋值的再次简化 ↓
              props({query:{id,title}}){
                return{id:id,title:title}
              }
            }
          ]
        },
      ]
    },
  ]
})

