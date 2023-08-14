import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

// 准备actions--用于响应组件中的动作
const actions = {
  /* jia(context,value){
    context.commit('JIA',value)
  },
  jian(context,value){
    context.commit('JIAN',value)
  }, */
  jiaOdd(context,value){
    if(context.state.sum %2){
      context.commit('JIA',value)
    }
  },
  jiaWait(context,value){
    setTimeout(() => {
      context.commit('JIA',value)
    }, 500);
  }
}

// 准备mutations--用于操作数据（state）
const mutations = {
  JIA(state,value){
    state.sum += value;
  },
  JIAN(state,value){
    state.sum -= value;
  },

  ADD_PERSON(state,value){
    state.personList.unshift(value);
  }
}

// 准备state--用于存储数据
const state = {
  sum:0,
  school:'尚硅谷',
  subject:'前端',
  personList:[
    {id:'001',name:'John'}
  ]
}

// 准备gettters--用于将state中的数据进行加工
const getters = {
  bigSum(state){
    return state.sum * 10
  }
}

// 创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})