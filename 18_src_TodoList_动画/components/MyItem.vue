<template>
  <transition name="todo" appear>
    <li>
      <label>
        <input
          type="checkbox"
          :checked="todo.done"
          @change="handleCheck(todo.id)"
        />
        <span v-show="!todo.isEdit">{{ todo.name }}</span>
        <input
          v-show="todo.isEdit"
          type="text"
          :value="todo.name"
          @blur="handleBlur(todo, $event)"
          ref="inputName"
        />
      </label>
      <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
      <button
        class="btn btn-edit"
        @click="handleEdit(todo)"
        v-show="!todo.isEdit"
      >
        编辑
      </button>
    </li>
  </transition>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  // name: "MyItem",
  props: ["todo"],
  methods: {
    // 勾选、取消勾选
    handleCheck(id) {
      // 通知APP组件将相应id的item的done值取反
      // this.checkTodo(id)
      this.$bus.$emit("checkTodo", id);
    },
    // 删除
    handleDelete(id) {
      if (confirm("确定删除吗？")) {
        pubsub.publish("deleteTodo", id);
      }
    },
    handleEdit(todo) {
      if (todo.isEdit !== undefined) {
        todo.isEdit = true;
      } else {
        this.$set(todo, "isEdit", true);
      }
      this.$nextTick(function() {
        this.$refs.inputName.focus()
      })
    },
    // 失去焦点回调（真正执行修改逻辑）
    handleBlur(todo, e) {
      todo.isEdit = false;
      if(e.target.value.trim() === '') return alert('输入不能为空！')
      this.$bus.$emit("updateTodo", todo.id, e.target.value);
    },
  },
};
</script>

<style>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: rgb(128, 212, 212);
}

li:hover button {
  display: block;
}

.todo-enter-active{
		animation: atguigu 0.5s linear;
	}

.todo-leave-active{
  animation: atguigu 0.5s linear reverse;
}

@keyframes atguigu {
  from{
    transform: translateX(100%);
  }
  to{
    transform: translateX(0px);
  }
}
</style>
