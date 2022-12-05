<template>
	<view class="container">
		<view class="top">
			<!-- <image class="banner" src="../../static/images/register/icon01.png"></image> -->
			<view class="banner"></view>
			<view class="top-right">
				<view>U.S.A</view>
				<image class="arrow" src="../../static/images/register/icon02.png"></image>
			</view>
		</view>
		<view class="content">
			<view class="title">{{ $t('register.title') }}</view>
			<view>
				<input class="phone" v-model="account" :placeholder="$t('register.number')" />
				<view class="code-nav">
					<input class="code" v-model="code" :placeholder="$t('login_phone.code')" />
					<view class="code-btn" @click="getCode">
						{{timeTitle}}
					</view>
				</view>
				<input class="password" v-model="password" :placeholder="$t('login.password')" />
			</view>
			<view class="register" @click="login">{{ $t('register.login') }}</view>
			
			<view class="login-btn" @click="sumbit">{{ $t('register.next') }}</view>
			
			<view class="read-nav">
				<checkbox :checked="is_default" color="#ffffff" @click="switchChange" />
				<view class="read-text">{{ $t('login.read') }}</view>
			</view>
		</view>
		<view class="bottom">
			<view class="icon">
				<image class="icon03" src="../../static/images/register/icon04.png"></image>
				<image class="icon04" src="../../static/images/register/icon03.png"></image>
			</view>
			<view class="area">{{ $t('login.area') }} : {{area}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				account: "",
				code: "",
				password: "",
				is_default: false,
				
				time: 59,
				setTime: null,
				timeTitle: this.$t('login_phone').obtain,
				isSumbit: true,
				
				area: "美国"
			}
		},
		mounted() {
			clearInterval(this.setTime)
		},
		methods: {
			switchChange(){
				this.is_default = !this.is_default
				console.log(this.is_default)
			},
			getCode(){
				if(!this.account){
					uni.showModal({
						title: this.$t('common').Tip,
						content: this.$t('register').account_tip,
						confirmText: this.$t('common').confirm,
						showCancel: false,
					})
					return
				} else if(!this.isSumbit){
					return
				}
				
				this.isSumbit = false
				uni.showLoading({
					title: this.$t('common').loading + '...',
					mask: true
				});
				this.$myRequest({
					method: 'POST',
					url: '/code',
					data:{
						mail: this.account
					}
				})
				.then(res=>{
					if(res.data.code == 200){
						//验证码请求发出-开启计时器
						this.openTimer()
					} else {
						this.isSumbit = true
						uni.showModal({
							title: this.$t('common').Tip,
							content: res.data.msg,
							confirmText: this.$t('common').confirm,
							showCancel: false,
						})
					}
					uni.hideLoading();
				})
				.catch(err=>{
					this.isSumbit = true
					uni.hideLoading();
					uni.showModal({
						title: this.$t('common').Tip,
						content: this.$t('common').Network,
						confirmText: this.$t('common').confirm,
						//content: err,
						showCancel: false,
					})
				})
				
			},
			openTimer() {
				//避免计时器浪费1秒
				if (this.time == 59) this.timeTitle =  60 + "s"
				//计时器计算倒计时
				this.setTime = setInterval(()=>{
					if (this.time >= 0) {
						this.timeTitle =  this.time + "s"
						this.time = this.time - 1
						this.isSumbit = false
					} else{
						this.timeTitle = this.$t('login_phone').obtain
						this.time = 59
						this.isSumbit = true
						clearInterval(this.setTime);
					} 
				}, 1000);
			},
			
			
			login() {				
				uni.navigateTo({
					url: '/pages/register/login'
				});
			},
			sumbit() {
				if(!this.account){
					uni.showModal({
						title: this.$t('common').Tip,
						content: this.$t('register').account_tip,
						confirmText: this.$t('common').confirm,
						showCancel: false,
					})
					return
				} else if(!this.password) {
					uni.showModal({
						title: this.$t('common').Tip,
						content: this.$t('register').password_tip,
						confirmText: this.$t('common').confirm,
						showCancel: false,
					})
					return
				} else if(!this.is_default){
					uni.showModal({
						title: this.$t('common').Tip,
						content: this.$t('register').read_tip,
						confirmText: this.$t('common').confirm,
						showCancel: false,
					})
					return
				}
				
				uni.showLoading({
					title: this.$t('common').loading + '...',
					mask: true
				});
				this.$myRequest({
					method: 'POST',
					url: '/signup',
					data:{
						mail: this.account,
						password: this.password,
						code: this.code,
						invite: "",
					}
				})
				.then(res=>{
					uni.hideLoading();
					if(res.data.code == 200){
						console.log(res.data.data);
						uni.setStorageSync('token', res.data.data.token);
						this.getUserList()
					} else {
						uni.showModal({
							title: this.$t('common').Tip,
							content: res.data.msg,
							confirmText: this.$t('common').confirm,
							showCancel: false,
						})
					}
				})
				.catch(err=>{
					uni.hideLoading();
					uni.showModal({
						title: this.$t('common').Tip,
						content: this.$t('common').Network,
						confirmText: this.$t('common').confirm,
						//content: err,
						showCancel: false,
					})
				})
				
			},
			getUserList() {
				uni.showLoading({
					title: this.$t('common').loading + '...',
					mask: true
				});
				// this.$myRequest({
				// 	method: 'POST',
				// 	url: '/login',
				// 	data: {
				// 		mail: this.account,
				// 		password: this.password,
				// 		code: this.code,
				// 	}
				// })
				this.$myRequest({
					method: 'GET',
					url: '/user/info',
					data: {}
				})
				.then(res => {
					uni.hideLoading();
					if (res.data.code == 200) {
						console.log(res.data.data)
						this.$store.commit('editDuomi', res.data.data)
						uni.setStorageSync('duomiList', res.data.data);
						//登录成功 跳转数据页。
						uni.navigateTo({
							url: '/pages/pair/pair'
							// url: '/pages/user/user'
						});
					} else {
						uni.showModal({
							title: this.$t('common').Tip,
							content: res.data.msg,
							confirmText: this.$t('common').confirm,
							showCancel: false,
						})
					}
				})
				.catch(err => {
					uni.hideLoading();
					uni.showModal({
						title: this.$t('common').Tip,
						content: this.$t('common').Network,
						confirmText: this.$t('common').confirm,
						//content: err,
						showCancel: false,
					})
				})
			},
			
			onUnload() {
				//页面销毁、清除定时器
				clearInterval(this.setTime);
			},
			onBeforeUnload() {
				//页面销毁、清除定时器
				clearInterval(this.setTime);
			},
		}
	}
</script>

<style scoped>
	.container {
		
	}
	.top{
		
	}
	.banner{
		width: 750rpx;
		height: 323rpx;
		display: block;
		/* background: linear-gradient(rgba(1,64,226,0.06) 0%, rgba(255,255,255, 0) 60%); */
	}
	.top-right{
		display: flex;
		align-items: center;
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		
		position: absolute;
		top: 50rpx;
		right: 20rpx;
	}
	.arrow{
		margin-left: 4rpx;
		width: 36rpx;
		height: 36rpx;
	}
	/* 标题输入账号信息 */
	.content{
		padding: 0 55rpx;
	}
	.title{
		font-size: 46rpx;
		font-family: Inter-Black;
		font-weight: bold;
		color: #1A1D26;
		text-align: center;
	}
	.phone{
		margin-top: 96rpx;
		padding: 13rpx 0;
		
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		/* color: #999999; */
		border-bottom: 2rpx solid  #999999;
	}
	.code-nav{
		display: flex;
		align-items: center;
		margin-top: 51rpx;
	}
	.code{
		width: 460rpx;
		padding: 13rpx 0;	
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		/* color: #999999; */
		border-bottom: 2rpx solid  #999999;
	}
	.code-btn{
		width: 160rpx;
		height: 64rpx;
		line-height: 64rpx;
		margin-left: 20rpx;
		background: #1A1D26;
		border-radius: 200rpx 200rpx 200rpx 200rpx;
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #FFFFFF;
		text-align: center;
	}
	.password{
		margin-top: 51rpx;
		padding: 13rpx 0;
		
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		/* color: #999999; */
		border-bottom: 2rpx solid  #999999;
	}
	.register{
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		margin-top: 24rpx;
		text-align: right;
	}
	.login-btn{
		width: 640rpx;
		height: 88rpx;
		line-height: 88rpx;
		background: #1A1D26;
		border-radius: 60rpx 60rpx 60rpx 60rpx;
		opacity: 1;
		
		font-size: 36rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #FFFFFF;
		text-align: center;
		margin-top: 44rpx;
	}
	
	.forget{
		font-size: 26rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #333333;
		margin-top: 35rpx;
		text-align: center;
	}
	
	.read-nav{
		margin-top: 30rpx;
		font-size: 26rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #333333;
		display: flex;
		align-items: center;
	}
	/deep/ .uni-checkbox-input{
		width: 30rpx;
		height: 30rpx;
		opacity: 1;
		border: 2rpx solid #999999;
		border-radius: 50%;
	}
	/deep/ .uni-checkbox-input-checked{
		background: #000000;
	}
	/deep/ .uni-checkbox-input.uni-checkbox-input-checked:before{
		font-size: 24rpx !important;
	}
	/* 底部样式 */
	.bottom{
		position: absolute;
		bottom: 26rpx;
		left: 0;
		right: 0;
		margin: 0 auto;
		text-align: center;
	}
	.icon{
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 39rpx;
	}
	.icon03,.icon04{
		width: 88rpx;
		height: 88rpx;
	}
	.icon04{
		margin-left: 60rpx;
	}
	.area{
		font-size: 26rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #6A6A6C;
	}
</style>
