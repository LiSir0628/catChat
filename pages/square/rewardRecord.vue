<template>
	<view class="container">
		<uni-nav-bar fixed left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000" :title="$t('reward_record.reward_record')">
		</uni-nav-bar>
		
		<view class="content">
			<view class="user-list">
				<image class="reward-photo" src="../../static/images/user/photo01.jpg"></image>
				<view class="reward-msg">
					<view class="reward-name">九亿少女的偶像ADHKA</view>
					<view class="reward-price">{{ $t('reward_record.reward_coins') }} 50</view>
				</view>
				<view class="reward-time">22/10/13</view>
			</view>
			
			<view class="user-list">
				<image class="reward-photo" src="../../static/images/user/photo01.jpg"></image>
				<view class="reward-msg">
					<view class="reward-name">九亿少女的偶像ADHKA</view>
					<view class="reward-price">{{ $t('reward_record.reward_coins') }} 50</view>
				</view>
				<view class="reward-time">22/10/13</view>
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
	
	/deep/ .uni-navbar--border {
		border-bottom-color: white;
	}
	
	.content {
		padding: 24rpx 30rpx 0;
		overflow: hidden;
		overflow-y: auto;
	}
	
	.user-list{
		display: flex;
		padding: 10rpx 0 30rpx;
		border-bottom: 2rpx solid #D9D9D9;
		margin-bottom: 20rpx;
	}
	
	.reward-photo{
		width: 104rpx;
		height: 104rpx;
		border-radius: 50%;
		display: block;
	}
	
	.reward-msg{
		width: 390rpx;
		margin-left: 20rpx;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.reward-name{
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #000000;
	}
	
	.reward-price{
		font-size: 28rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #6A6A6C;
	}
	
	.reward-time{
		width: 150rpx;
		font-size: 24rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #6A6A6C;
		margin-left: 26rpx;
		text-align: right;
		margin: auto 0 0 auto;
	}
</style>
