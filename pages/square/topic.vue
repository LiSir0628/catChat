<template>
	<view class="container">
		<view class="top">
			<uni-nav-bar left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000" :title="title">
			</uni-nav-bar>
			<view class="newSort" @click="close">
				{{ $t('topic.close') }}
			</view>
		</view>
		<view class="content">
			<view class="search-modular">
				<image class="search-logo" src="../../static/images/square/icon02.png"></image>
				<input class="search-input" :placeholder="$t('square.search_placeholder')"/>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "#Love"
			}
		},
		methods: {
			back() {
				window.history.go(-1)
			},
			
			close() {
				console.log("取消关注")
			},
		}
	}
</script>

<style scoped>
	.container {
		padding-bottom: 100rpx;
	}
	
	/* 分类 */
	.top{
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
	}
	
	.newSort{
		width: 120rpx;
		height: 56rpx;
		background: rgba(26,29,38,0.1);
		border-radius: 60rpx;
		
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		
		position: absolute;
		right: 30rpx;
		top: 0;
		bottom: 0;
		margin: auto;
		vertical-align: middle;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	/* /deep/ .uni-navbar__header {
		background: red !important;
	} */
	
	/deep/ .uni-navbar--border {
		border-bottom-color: white;
	}
	/* 主要内容 */
	.content {
		padding: 24rpx 0 0;
		margin-top: 88rpx;
	}
	
	/* 搜索框 */
	.search-modular{
		/* margin: 20rpx auto 0; */
		position: relative;
	}
	.search-logo{
		width: 32rpx;
		height: 32rpx;
		position: absolute;
		left: 60rpx;
		top: 0;
		bottom: 0;
		margin: auto;
		vertical-align: middle;
	}
	.search-input{
		width: 690rpx;
		height: 88rpx;
		box-sizing: border-box;
		background: #F5F5F5;
		border-radius: 60rpx;
		margin: 0 auto;
		padding: 0 80rpx;
		
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #999999;
	}
</style>
