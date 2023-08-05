<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition appear>
      <h1 v-show="isShow">你好啊！</h1>
    </transition>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isShow: true,
    }
  },
}
</script>

<style>
  h1{
    background-color: orange;
  }

  .v-enter-active{
    animation: yy 1s;
  }

  .v-leave-active{
    animation: yy 1s reverse;
  }

  @keyframes yy {
    from{
      transform: translateX(-100%);
    }
    to{
      transform: translateX(0px);
    }
  }
</style>