<template>
	<view class="container">
		<uni-nav-bar fixed left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000" :title="$t('postion.postion')">
		</uni-nav-bar>
		
		<view class="content">
			<view class="topic-modular">
				<image class="search-logo" src="../../static/images/square/icon02.png"></image>
				<input class="topic" placeholder-class="topic-placeholder" v-model="nearby" :placeholder="$t('postion.nearby-placeholder')" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nearby: "",
			}
		},
		methods: {
			back() {
				window.history.go(-1)
			},
		}
	}
</script>

<style scoped>
	.container {
		
	}
	
	.container {
		padding-bottom: 80rpx;
	}
	
	/deep/ .uni-navbar--border {
		border-bottom-color: white;
	}
	
	.content {
		padding: 24rpx 0 0;
	}
	
	.topic-modular{
		width: 690rpx;
		margin: 0 30rpx;
		height: 80rpx;
		position: relative;
		display: flex;
		align-items: center;
	}
	.search-logo{
		width: 32rpx;
		height: 32rpx;
		display: block;
		position: absolute;
		top: 0;
		bottom: 0;
		margin: auto 0;
		left: 30rpx;
	}
	.topic{
		width: 690rpx;
		height: 80rpx;
		box-sizing: border-box;
		background: #F5F5F5;
		border-radius: 60rpx;
		padding: 0 80rpx;
		
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
	}
	
	.topic-placeholder{
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #999999;
	}
</style>
