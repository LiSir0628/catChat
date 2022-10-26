<template>
	<view class="container">
		<view class="top">
			<uni-nav-bar left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000" :title="$t('occupation.occupation')">
			</uni-nav-bar>
			<view class="determine" :class="{'isRed': occupation}" @click="commit">{{ $t('occupation.determine') }}</view>
		</view>
		
		<view class="content">
			<view class="title">{{ $t('occupation.title') }}</view>
			<input class="occupation" v-model="occupation"/>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				occupation: "",
			}
		},
		methods: {
			back() {
				window.history.go(-1)
			},
			
			commit() {
				if(this.occupation){
					console.log("触发occupation:" + this.occupation)
				} else {
					console.log("不触发")
				}
			}
		}
	}
</script>

<style scoped>
	.container {
		padding-bottom: 120rpx;
	}
	
	/deep/ .uni-navbar--border {
		border-bottom-color: white;
	}
	
	.top{
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
	}
	
	.determine{
		position: absolute;
		right: 28rpx;
		top: -4rpx;
		bottom: 0;
		vertical-align: middle;
		display: flex;
		align-items: center;
		
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #999999;
	}
	
	.isRed{
		color: #F14E49;
	}
	
	.content {
		margin-top: 90rpx;
		padding: 24rpx 30rpx 0;
	}
	
	.title{
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #6A6A6C;
	}
	
	.occupation{
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #1A1D26;
		padding: 30rpx 0 20rpx 0;
		border-bottom: 2rpx solid #909090;
	}
</style>
