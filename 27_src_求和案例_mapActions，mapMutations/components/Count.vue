<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大十倍为：{{ $store.getters.bigSum }}</h3>
    <h3>我在{{ school }}学习{{ subject }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  computed: {
    ...mapState(["sum", "school", "subject"]),
    ...mapGetters(["bigSum"]),
  },
  methods: {
    // 如果是自己写代码，则绑定事件时不需传参，但是用mapMutations,mapActions方法时必须在绑定事件时传入value

    /* increment() {
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      this.$store.commit("JIAN", this.n);
    }, */

    // 借助mapMutations生成对应的方法，调用commit去联系mutations（对象写法）
    ...mapMutations({ increment: "JIA", decrement: "JIAN" }),
    // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（数组写法）
    // ...mapMutations(['JIA','JIAN']),//用这个方法的时候注意命名的统一修改
    // ----------------------------------------------------
    /* incrementOdd() {
      this.$store.dispatch("jiaOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("jiaWait", this.n);
    }, */

    // 借助mapActions生成对应的方法，调用dispatch去联系actions(对象写法)
    ...mapActions({ incrementOdd: "jiaOdd", incrementWait: "jiaWait" }),
    // 借助mapActions生成对应的方法，调用dispatch去联系actions(数组写法)
    // ...mapActions(['jiaOdd', 'jiaWait'])//用这个方法的时候注意命名的统一修改
  },
  mounted() {},
};
</script>

<style lang="css">
button {
  margin-left: 5px;
}
</style>
