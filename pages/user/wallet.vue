<template>
	<view class="container">
		<uni-nav-bar left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000" :title="$t('wallet.wallet')"></uni-nav-bar>
		<view class="banner">
			<image class="banner-logo" src="../../static/images/user/wallet/icon01.png"></image>
		</view>
		<view class="coupon-list">
			<view class="coupon-title">{{ $t('wallet.exclusive') }}</view>
			<view class="coupon">
				<image class="coupon-logo" src="../../static/images/user/wallet/icon02.png"></image>
				<view class="coupon-modular">
					<view class="coupon-text">
						<view class="text-num">500000{{ $t('wallet.money') }}</view>
						<view class="text">{{ $t('wallet.tips') }}</view>
					</view>
					<view class="coupon-price">
						<view class="price-num">$6</view>
						<view class="price-text">{{ $t('wallet.range') }}</view>
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
	.banner{
		width: 690rpx;
		margin: 24rpx auto;
	}
	
	.banner-logo{
		width: 690rpx;
		height: 200rpx;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		display: block;
	}
	
	.coupon-list{
		width: 690rpx;
		margin: 54rpx auto 0;
	}
	.coupon-title{
		font-size: 32rpx;
		font-family: Inter-Bold, Inter;
		font-weight: bold;
		color: #1A1D26;
		text-align: center;
		margin-bottom: 30rpx;
	}
	.coupon{
		width: 690rpx;
		min-height: 160rpx;
		background: #FFE1A5;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		padding: 26rpx 39rpx 26rpx 30rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		margin-bottom: 20rpx;
	}
	.coupon-logo{
		width: 108rpx;
		height: 108rpx;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		margin-right: 28rpx;
	}
	.coupon-modular{
		width: 484rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.coupon-text{
		
	}
	.text-num{
		font-size: 34rpx;
		font-family: Inter-Semi Bold, Inter;
		font-weight: normal;
		color: #1A1D26;
		line-height: 40rpx;
	}
	.text{
		font-size: 26rpx;
		font-family: Inter-Regular, Inter;
		font-weight: 400;
		color: #403620;
		line-height: 30rpx;
		margin-top: 12rpx;
	}
	.coupon-price{
		text-align: center;
	}
	.price-num{
		font-size: 26rpx;
		font-family: Inter-Regular, Inter;
		font-weight: 400;
		color: #403620;
		line-height: 30rpx;
	}
	.price-text{
		font-size: 26rpx;
		font-family: Inter-Regular, Inter;
		font-weight: 400;
		color: #403620;
		line-height: 30rpx;
		margin-top: 6rpx;
	}
</style>
