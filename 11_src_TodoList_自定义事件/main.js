// 该文件是整个项目的入口文件
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // 将APP组件放入容器中
  render: h => h(App),
}).$mount('#app')
// 上面这个相当于el:'#app'
