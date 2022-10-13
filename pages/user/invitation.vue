<template>
	<view class="container">
		<uni-nav-bar fixed left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000" :title="$t('invitation.detailed')">
		</uni-nav-bar>
		<view class="content">
			<view class="lists" v-for="item in lists">
				<view class="lists-left">
					<view class="title">{{item.title}}</view>
					<view class="time">{{item.time}}</view>
				</view>
				<view class="amount" v-if="item.state == 0">-{{item.amount}}</view>
				<view class="amount" v-else-if="item.state == 1">+{{item.amount}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lists: [{
					id: 1,
					title: '邀请额外奖励',
					time: '2022.9.30',
					state: 1, //1增加  0减少
					amount: '100'
				},{
					id: 1,
					title: '邀请额外奖励',
					time: '2022.9.30',
					state: 0, //1增加  0减少
					amount: '100'
				},{
					id: 1,
					title: '邀请额外奖励',
					time: '2022.9.30',
					state: 1, //1增加  0减少
					amount: '1000000'
				}]
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
	.content{
		margin-top: 24rpx;
		padding: 0 30rpx;
	}
	.lists{
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 2rpx solid rgba(217,217,217,0.4);
		padding-bottom: 30rpx;
		margin-bottom: 26rpx;
	}
	.lists-left{
		
	}
	.title{
		width: 480rpx;
		font-size: 28rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #333333;
		line-height: 33rpx;
	}
	.time{
		font-size: 24rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #6A6A6C;
		line-height: 28rpx;
		margin-top: 20rpx;
	}
	.amount{
		width: 210rpx;
		font-size: 28rpx;
		font-family: Inter-SemiBold;
		font-weight: normal;
		color: #1A1D26;
		line-height: 33rpx;
		text-align: right;
		
		word-wrap: break-word;
		word-break: normal;
	}
</style>
