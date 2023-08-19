<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue RouterDemo</h2>
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    back(){
      this.$router.back()
    },
    forward(){
      this.$router.forward()
    }
  }
}
</script>