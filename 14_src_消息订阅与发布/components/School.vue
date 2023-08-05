<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
	import pubsub from "pubsub-js";
	export default {
		// name:'S-chool',
		data() {
			return {
				name:'尚硅谷',
				address:'北京',
			}
		},
		mounted(){
			this.pubid = pubsub.subscribe('hello', (msgName,data) => {
				console.log("有人发布了",msgName,data);
			})
		},
		beforeDestroy(){
			pubsub.unsubscribe(this.pubid);
		}
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px;
		margin-top: 30px;
	}
</style>