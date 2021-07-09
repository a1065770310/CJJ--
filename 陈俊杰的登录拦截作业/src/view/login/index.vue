<template>
	<div>
		<swiper :listData="listImg" @jump="swiperParame"></swiper>
		<div>
			<input type="text" v-model="username" placeholder="请输入用户名">
		</div>
		<div>
			<input type="text" v-model="password" placeholder="请输入密码">
		</div>
		<div>
			<input type="button" @click="login" value="登录">
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
	import swiper from '../../components/swiper'

	export default {
		data() {
			return {
				userInfo: {
					username: 'a123456',
					password: '88888888',
				},
				username: '',
				password: '',
				listImg: [{
					id: '',
					text: '图片一',
					imgPath: 'https://dpic.tiankong.com/23/az/QJ6715509019.jpg@!350h'
				}]
			}
		},
		components: {
			swiper
		},
		methods: {
			swiperParame(data) {
				console.log(data)
			},
			login() {
				let json = {
					user: this.username,
					password: this.password
				}
				
				// localStorage.getItem("username", this.username);
				if (json.user == this.userInfo.username && json.password == this.userInfo.password) {
					alert('登录成功')
					this.$route.meta.flag=true
					this.$router.push({
						path: '/home'
					})
				} else {
					alert('账号或密码错误')
				}
				
				// console.log(localStorage.getItem("username", this.username))
			}
		}
	}
</script>
