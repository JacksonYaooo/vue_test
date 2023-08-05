<template>
	<div class="app">
		<h1>{{msg}},{{studentName}}</h1>
		<!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
		<School :getSchoolName="getSchoolName"/>
		<!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(v-on:简写为@) -->
		<!-- <Student v-on:atguigu="getStudentName" @demo="m1"/> -->

		<!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(ref 更灵活可定时器) -->
		<Student ref="student" @click.native="show"/>
	</div>
</template>

<script>
	import Student from './components/Student'
	import School from './components/School'

	export default {
		name:'App',
		components:{School,Student},
		data() {
			return {
				msg:'你好啊',
				studentName:''
			}
		},
		methods:{
			getSchoolName(name){
				console.log("app收到了学校名",name);
			},
			getStudentName(name){
				console.log("app收到了学生名",name);
				this.studentName = name
			},
			m1(){
				console.log('demo事件被触发了');
			},
			show(){
				alert(1)
			}
		},
		mounted(){
			this.$refs.student.$on('atguigu',this.getStudentName)// 绑定自定义事件
			/* !!! ↑ 这里把getStudentName函数体写在App.vue中，所以触发的this是VM，
			但如果getStudentName函数本体是写在这个括号里 ，则触发的this是student的VC
			如果想把函数本体写进括号又想用this调取VM，需要写成箭头函数 */
		}
	}
</script>

<style scoped>
	.app{
		background-color: gray;
	}
</style>
