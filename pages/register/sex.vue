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
			<view class="title">{{ $t('sex.title') }}</view>		
			<view class="icon">
				<view @click="goCindex(0)">
					<image class="icon05" v-if="cindex == 1" src="../../static/images/register/icon05.png"></image>
					<image class="icon05" v-else-if="cindex == 0" src="../../static/images/register/icon07.png"></image>
					<view class="icon-text">{{ $t('sex.boy') }}</view>
				</view>
				<view @click="goCindex(1)">
					<image class="icon06" v-if="cindex == 0" src="../../static/images/register/icon06.png"></image>
					<image class="icon06" v-else-if="cindex == 1" src="../../static/images/register/icon08.png"></image>
					<view class="icon-text">{{ $t('sex.girl') }}</view>
				</view>
			</view>
			<view class="login-btn">{{ $t('register.next') }}</view>
		</view>
		<view class="bottom">
			<view class="area">{{ $t('login.area') }} : {{area}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cindex: 0,
				
				area: "美国"
			}
		},
		methods: {
			goCindex(num) {
				this.cindex = num
			}
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
		background: linear-gradient(rgba(1,64,226,0.06) 0%, rgba(255,255,255, 0) 60%);
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
		font-size: 40rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #1A1D26;
		text-align: center;
	}
	.icon{
		margin-top: 119rpx;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.icon05{
		width: 200rpx;
		height: 200rpx;
		display: block;
	}
	.icon06{
		width: 200rpx;
		height: 200rpx;
		display: block;
	}
	.icon-text{
		font-size: 32rpx;
		line-height: 32rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		text-align: center;
		margin-top: 43rpx;
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
		margin-top: 142rpx;
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
	.area{
		font-size: 26rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #6A6A6C;
	}
</style>
