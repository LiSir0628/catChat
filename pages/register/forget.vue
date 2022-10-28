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
			<view class="title">{{ $t('forget.title') }}</view>
			<view>
				<input class="email" v-model="email" :placeholder="$t('login.email')" />
				<input class="password" v-model="password" :placeholder="$t('login.password')" />
				<input class="password" v-model="again_password" :placeholder="$t('forget.again_password')" />
			</view>
			<view class="register">{{ $t('login.register') }}</view>
			
			<view class="login-btn">{{ $t('forget.reset') }}</view>
			
			<!-- <view class="forget">{{ $t('login.forget') }}</view>
			
			<view class="read-nav">
				<checkbox :checked="is_default" color="#ffffff" @click="switchChange" />
				<view class="read-text">{{ $t('login.read') }}</view>
			</view> -->
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
				email: "",
				password: "",
				again_password: "",
				is_default: false,
				
				area: "美国"
			}
		},
		methods: {
			switchChange(){
				this.is_default = !this.is_default
				console.log(this.is_default)
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
		/* background: linear-gradient(rgba(255,168,32,0.06) 0%, rgba(255,255,255, 0) 60%); */
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
	.email{
		margin-top: 96rpx;
		padding: 13rpx 0;
		
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		/* color: #999999; */
		border-bottom: 2rpx solid  #999999;
	}
	.password{
		margin-top: 51rpx;
		padding: 13rpx 0;
		
		font-size: 28rpx;
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
		
		font-size: 30rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #FFFFFF;
		text-align: center;
		margin-top: 65rpx;
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
