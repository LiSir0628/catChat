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
				<view class="reward-price-num" v-for="item,index in goldList" :class="{'reward-active': cindex == index}" @click="goSwitch(index)">
					<view class="coin-modular">
						<image v-if="cindex == index" class="price-logo" src="../../static/images/square/icon14.png"></image>
						<image v-else class="price-logo" src="../../static/images/square/icon15.png"></image>
						<view class="price-text">{{item.num}}</view>
					</view>
					<view class="price">{{ $t('reward.price') }}: $5</view>
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
					num: 500
				},{
					id: 3,
					num: 500
				},{
					id: 4,
					num: 500
				},{
					id: 5,
					num: 500
				},{
					id: 6,
					num: 500
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
			
			goSwitch(index) {
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
		padding: 112rpx 30rpx 0;
		/* margin-top: 88rpx; */
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
		width: 650rpx;
		padding: 20rpx 20rpx 20rpx 0;
		border-bottom: 2rpx solid rgba(155,155,155,0.8);
		margin: 48rpx auto 0;
		
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		/* color: #999999; */
	}
	
	.reward-price-lists{
		width: 690rpx;
		display: flex;
		align-items: center;
		/* justify-content: space-between; */
		flex-wrap: wrap;
		margin: 40rpx auto 0;
	}
	
	.reward-price-num{
		/* display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center; */
		
		min-width: 195rpx;
		padding: 35rpx 6rpx;
		background: rgba(60,163,101,0.1);
		border-radius: 12rpx;
		margin: 0 12rpx 20rpx;
		
		font-size: 34rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #3CA365;
		text-align: center;
	}
	
	.coin-modular{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.price{
		width: 100%;
		font-size: 28rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #999999;
		margin-top: 12rpx;
	}
	
	.reward-active{
		/* min-width: 156rpx; */
		/* height: 116rpx; */
		/* border: 2rpx solid #1A1D26; */
		background: #3CA365;
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
		font-size: 34rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #3CA365;
	}
	.reward-active .price-text{
		color: #fff;
	}
	.reward-active .price{
		color: #fff;
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
		/* margin: 60rpx auto 0; */
		position: fixed;
		bottom: 100rpx;
		left: 0;
		right: 0;
		margin: 0 auto;
	}
</style>
