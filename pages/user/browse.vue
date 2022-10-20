<template>
	<view class="container">
		<uni-nav-bar fixed left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000" :title="$t('browse.browse')">
		</uni-nav-bar>
		
		<view class="content">
			<view class="time-modular" :class="{'time-modular-active': !isShowOne}">
				<view class="time-title">{{ $t('browse.three_days_ago') }}</view>
				<image v-if="isShowOne" class="arrow" src="../../static/images/user/browse/icon01.png" @click="arrowClick(false,'one')"></image>
				<image v-else class="arrow" src="../../static/images/user/browse/icon02.png" @click="arrowClick(true,'one')"></image>
			</view>
			
			<view class="sp-modular" v-if="isShowOne">
				<view class="sp-list">
					<image class="sp-logo" src="../../static/images/user/photo01.jpg"></image>
					<view class="price">$50.6</view>
				</view>
				<view class="sp-list">
					<image class="sp-logo" src="../../static/images/user/photo01.jpg"></image>
					<view class="price">$50.6</view>
				</view>
				<view class="sp-list">
					<image class="sp-logo" src="../../static/images/user/photo01.jpg"></image>
					<view class="price">$50.6</view>
				</view>
				<view class="sp-list">
					<image class="sp-logo" src="../../static/images/user/photo01.jpg"></image>
					<view class="price">$50.6</view>
				</view>
			</view>
			
			<view class="time-modular" :class="{'time-modular-active': !isShowTwo}">
				<view class="time-title">{{ $t('browse.seven_days_ago') }}</view>
				<image v-if="isShowTwo" class="arrow" src="../../static/images/user/browse/icon01.png" @click="arrowClick(false,'two')"></image>
				<image v-else class="arrow" src="../../static/images/user/browse/icon02.png" @click="arrowClick(true,'two')"></image>
			</view>
			
			<view class="sp-modular" v-if="isShowTwo">
				<view class="sp-list">
					<image class="sp-logo" src="../../static/images/user/photo01.jpg"></image>
					<view class="price">$50.6</view>
				</view>
				<view class="sp-list">
					<image class="sp-logo" src="../../static/images/user/photo01.jpg"></image>
					<view class="price">$50.6</view>
				</view>
				<view class="sp-list">
					<image class="sp-logo" src="../../static/images/user/photo01.jpg"></image>
					<view class="price">$50.6</view>
				</view>
				<view class="sp-list">
					<image class="sp-logo" src="../../static/images/user/photo01.jpg"></image>
					<view class="price">$50.6</view>
				</view>
			</view>
			
			<view class="time-modular" :class="{'time-modular-active': !isShowThree}">
				<view class="time-title">{{ $t('browse.a_month_ago') }}</view>
				<image v-if="isShowThree" class="arrow" src="../../static/images/user/browse/icon01.png" @click="arrowClick(false,'three')"></image>
				<image v-else class="arrow" src="../../static/images/user/browse/icon02.png" @click="arrowClick(true,'three')"></image>
			</view>
			
			<view class="sp-modular" v-if="isShowThree">
				<view class="sp-list">
					<image class="sp-logo" src="../../static/images/user/photo01.jpg"></image>
					<view class="price">$50.6</view>
				</view>
				<view class="sp-list">
					<image class="sp-logo" src="../../static/images/user/photo01.jpg"></image>
					<view class="price">$50.6</view>
				</view>
				<view class="sp-list">
					<image class="sp-logo" src="../../static/images/user/photo01.jpg"></image>
					<view class="price">$50.6</view>
				</view>
				<view class="sp-list">
					<image class="sp-logo" src="../../static/images/user/photo01.jpg"></image>
					<view class="price">$50.6</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShowOne: true,
				isShowTwo: true,
				isShowThree: true,
			}
		},
		methods: {
			back() {
				window.history.go(-1)
			},
			arrowClick(state,type) {
				console.log(11111111)
				if(type == 'one'){
					this.isShowOne = state
				} else if(type == 'two'){
					this.isShowTwo = state
				} else if(type == 'three'){
					this.isShowThree = state
				}
			}
		}
	}
</script>

<style scoped>
	.container {
		padding-bottom: 20rpx;
	}
	/deep/ .uni-navbar--border {
		border-bottom-color: white;
	}
	.content {
		padding: 24rpx 15rpx 0;
	}
	
	.time-modular{
		display: flex;
		align-items: center;
		padding: 0 15rpx;
	}
	
	.time-modular-active{
		margin-bottom: 52rpx;
	}
	
	.time-title{
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #1A1D26;
		line-height: 35rpx;
	}
	
	.arrow{
		width: 38rpx;
		height: 38rpx;
		margin-left: 18rpx;
	}
	
	.sp-modular{
		padding: 30rpx 0 0;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}
	
	.sp-list{
		margin: 0 15rpx 36rpx;
	}
	
	.sp-logo{
		width: 210rpx;
		height: 210rpx;
		border-radius: 20rpx;
		display: block;
	}
	
	.price{
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		line-height: 35rpx;
		margin: 16rpx 0 0 19rpx;
	}
</style>
