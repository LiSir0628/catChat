<template>
	<view class="container">
		<!-- <uni-nav-bar fixed left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000" :title="$t('reward.reward')">
		</uni-nav-bar> -->
		<view class="top">
			<uni-nav-bar left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000" :title="$t('reward.reward')">
			</uni-nav-bar>
			<view class="newSort" @click="goRecord">
				{{ $t('reward.record') }}
			</view>
		</view>
		<view class="content">
			<image class="reward-photo" src="../../static/images/user/photo01.jpg"></image>
			<view class="reward-name">Andico</view>
			<input class="reward-price" :placeholder="$t('reward.reward_placeholder')">
			<view class="reward-price-lists">
				<view class="reward-price-num" v-for="item,index in goldList" :class="{'reward-active': cindex == index}" @click="goPay(index)">
					<image class="price-logo" src="../../static/images/square/icon15.png"></image>
					<view class="price-text">{{item.num}}</view>
				</view>
			</view>
			
			<view class="commit-btn">{{ $t('reward.determine') }}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cindex: 0,
				goldList:[{
					id: 1,
					num: 500
				},{
					id: 2,
					num: 1500
				},{
					id: 3,
					num: 2500
				},{
					id: 4,
					num: 3500
				},{
					id: 5,
					num: 4500
				},{
					id: 6,
					num: 5500
				},{
					id: 7,
					num: 1000000
				},{
					id: 8,
					num: 20000
				}],
			}
		},
		methods: {
			back() {
				window.history.go(-1)
			},
			
			goRecord() {
				uni.navigateTo({
					url: 'rewardRecord'
				});
			},
			
			goPay(index) {
				if(this.cindex == index) return
				this.cindex = index
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
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		
		position: absolute;
		right: 30rpx;
		top: 0;
		bottom: 0;
		vertical-align: middle;
		display: flex;
		align-items: center;
	}

	/deep/ .uni-navbar--border {
		border-bottom-color: white;
	}
	/* 主要内容 */
	.content {
		padding: 24rpx 30rpx 0;
		margin-top: 88rpx;
	}
	
	.reward-price-lists{
		width: 600rpx;
		display: flex;
		align-items: center;
		/* justify-content: space-between; */
		flex-wrap: wrap;
		margin: 80rpx auto 0;
	}
	
	.reward-price-num{
		display: flex;
		justify-content: center;
		align-items: center;
		
		min-width: 160rpx;
		padding: 0 10rpx;
		height: 120rpx;
		background: rgba(26,29,38,0.06);
		border-radius: 12rpx;
		margin: 0 10rpx 20rpx;
		
		font-size: 34rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #3CA365;
	}
	
	.reward-active{
		min-width: 156rpx;
		height: 116rpx;
		border: 2rpx solid #1A1D26;
	}
	
	.reward-photo{
		width: 160rpx;
		height: 160rpx;
		border-radius: 50%;
		display: block;
		margin: 10rpx auto 0;
		/* margin: 98rpx auto 0; */
	}
	.price-logo{
		width: 49rpx;
		height: 56rpx;
		display: block;
	}
	
	.price-text{
		margin-left: 10rpx;
	}
	
	.reward-name{
		font-size: 40rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #1A1D26;
		text-align: center;
		margin-top: 32rpx;
	}
	
	.reward-price{
		width: 590rpx;
		padding: 20rpx 20rpx 20rpx 0;
		border-bottom: 2rpx solid rgba(155,155,155,0.8);
		margin: 48rpx auto 0;
		
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		/* color: #999999; */
	}
	
	.commit-btn{
		width: 335rpx;
		height: 88rpx;
		background: #1A1D26;
		border-radius: 60rpx;
		
		font-size: 30rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #FFFFFF;
		text-align: center;
		line-height: 88rpx;
		margin: 128rpx auto 0;
	}
</style>
