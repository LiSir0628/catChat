<template>
	<view class="container">
		<view class="top">
			<!-- <image class="banner" src="../../static/images/register/icon01.png"></image> -->
			<view class="sort-modular">
				<view class="top-left">
					<view class="sort-chat">chat</view>
					<view class="sort-friends">friends</view>
				</view>
				<view class="top-right">
					<image class="tips-logo" src="../../static/images/chat/icon01.png"></image>
					<image class="tips-logo" src="../../static/images/chat/icon02.png"></image>
				</view>
			</view>
			<view class="search-modular">
				<image class="search-logo" src="../../static/images/chat/icon03.png"></image>
				<input class="search-input" placeholder="Find chat you like..."/>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
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
	/* 顶部数据 */
	.top{

	}
	.banner{
		width: 750rpx;
		height: 323rpx;
		display: block;
		position: absolute;
		top: 0;
		left: 0;
	}
	.sort-modular{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx 30rpx;
	}
	.top-left{
		display: flex;
		align-items: center;
		
	}
	.sort-chat{
		font-size: 36rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #1A1D26;
	}
	.sort-friends{
		font-size: 28rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #999999;
		margin-left: 36rpx;
	}
	.top-right{
		display: flex;
		align-items: center;
		
	}
	.tips-logo{
		width: 56rpx;
		height: 56rpx;
		margin-left: 30rpx;
	}
	
	/* 搜索框 */
	.search-modular{
		margin: 30rpx auto 0;
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
