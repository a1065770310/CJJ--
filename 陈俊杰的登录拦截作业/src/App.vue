<template>
	<div id="app">
		<router-view />
		<!-- <login></login> -->
	</div>
</template>
<script>
	// import login from './view/login/index.vue'
	export default {
		name: 'App',
		components: {
			// login:login
		},
		mounted() {
			this.$router.push({
				path: '/login'
			})
		}
	}
	

</script>

<style>
</style>
