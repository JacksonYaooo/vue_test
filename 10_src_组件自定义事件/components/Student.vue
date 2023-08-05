<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div class="student">
		<h2>学生姓名：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
		<button @click="sendStudentName">把学生名给App</button>
		<button @click="unbind">解绑自定义事件</button>
	</div>
</template>

<script>
	export default {
		// name:'S-tudent',
		data() {
			return {
				name:'张三',
				sex:'男'
			}
		},
		methods:{
			sendStudentName(){
				// 触发Student组件实例VC身上的atguigu事件，不用props接受了
				this.$emit('atguigu',this.name)
				// this.$emit('demo')
			},
			unbind(){
				this.$off(['atguigu'])// 解绑一个自定义事件
				// this.$off(['atguigu','demo'])// 解绑多个自定义事件
				// this.$off()// 解绑所有自定义事件
			}
		}
	}
</script>

<style lang="less" scoped>
	.student{
		background-color: pink;
		padding: 5px;
		margin-top: 30px;
	}
</style>
