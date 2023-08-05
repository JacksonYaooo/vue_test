<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div class="student">
		<h2>学生姓名：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
		<button @click="sendStudentName">把数据传给学校</button>
	</div>
</template>

<script>
	import pubsub from "pubsub-js";
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
				pubsub.publish('hello',this.name)
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
