<template>
	<view class="container">
		<uni-nav-bar fixed left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000" :title="$t('notice.notice')">
		</uni-nav-bar>
		<view class="content">
			<view class="user-lists" @click="goChat">
				<view class="user-list">
					<view class="user-photo">
						<image class="photo-logo" src="../../static/images/user/photo01.jpg"></image>
						<image class="love-logo" src="../../static/images/chat/notice/icon01.png"></image>
					</view>
					<view class="user-msg">
						<view class="user-name">九亿少女的偶像ADHKA</view>
						<view class="msg">心动异性</view>
					</view>
					<view class="time-modular">
						<view class="times">35</view>
						<view class="time">22/10/13</view>
					</view>
				</view>
			</view>
			<view class="user-lists">
				<view class="user-list">
					<view class="user-photo">
						<image class="photo-logo" src="../../static/images/user/photo01.jpg"></image>
					</view>
					<view class="user-msg">
						<view class="user-name">九亿少女的偶像ADHKA</view>
						<view class="msg">等待关注</view>
					</view>
					<view class="time-modular">
						<view class="state">obsolete</view>
						<view class="time">22/10/13</view>
					</view>
				</view>
			</view>
			<view class="user-lists">
				<view class="user-list">
					<view class="user-photo">
						<image class="photo-logo" src="../../static/images/chat/notice/icon02.png"></image>
					</view>
					<view class="user-msg">
						<view class="user-name">官方客服小贝</view>
						<view class="msg">您好，请输入您的问题...</view>
					</view>
					<view class="time-modular">
						<view class="times">1</view>
						<view class="time">22/10/13</view>
					</view>
				</view>
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
		mounted() {
			
		},
		methods: {
			back() {
				window.history.go(-1)
			},
			
			goChat() {
				uni.navigateTo({
					url: "./chat"
				});
			},
		}
	}
</script>

<style scoped>
	.container {
		
	}
	
	/deep/ .uni-navbar--border {
		border-bottom-color: white;
	}
	
	/* 主要内容 */
	.content{
		/* margin: 30rpx auto; */
		margin: 0 auto;
	}
	.user-list{
		width: 690rpx;
		margin: 0 auto;
		display: flex;
		/* align-items: center; */
		justify-content: space-between;
		padding: 30rpx 0;
		border-bottom: 2rpx solid rgba(217,217,217,0.4);
	}
	.user-list-gary{
		background: rgba(217,217,217,0.2);
	}
	.user-lists:nth-last-child(1) .user-list{
		border-bottom: none;
	}
	.user-photo{
		position: relative;
	}
	.photo-logo{
		width: 120rpx;
		height: 120rpx;
		display: block;
		border-radius: 50%;
	}
	.circle-green{
		width: 20rpx;
		height: 20rpx;
		background: #01E25B;
		border: 2rpx solid #FFFFFF;
		border-radius: 50%;
		position: absolute;
		right: 0;
		bottom: 0;
	}
	.love-logo{
		width: 38rpx;
		height: 38rpx;
		border-radius: 50%;
		position: absolute;
		right: 0;
		bottom: 0;
	}
	.circle-gray{
		width: 20rpx;
		height: 20rpx;
		background: #E9E9EA;
		border: 2rpx solid #FFFFFF;
		border-radius: 50%;
		position: absolute;
		right: 0;
		bottom: 0;
	}
	.user-msg{
		width: 404rpx;
		margin-left: 30rpx;
		padding: 15rpx 0 0;
	}
	.user-name{
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #1A1D26;
	}
	.msg{
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #6A6A6C;
		margin-top: 20rpx;
	}
	.time-modular{
		width: 136rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		padding: 20rpx 0 0;
	}
	.times{
		width: 44rpx;
		height: 44rpx;
		line-height: 44rpx;
		text-align: center;
		background: #F14E49;
		
		font-size: 26rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #FFFFFF;
		border-radius: 50%;
		margin-right: 6rpx;
		margin-bottom: 2rpx;
		margin-top: -6rpx;
	}
	.time{
		font-size: 24rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #6A6A6C;
	}
	.state{
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #999999;
	}
</style>
