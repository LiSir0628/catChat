<template>
	<view class="container">
		<view class="uni-margin-wrap">
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration" :current="current" @change="goSwitch">
				<swiper-item>
					<image class="icon01" mode="widthFix" src="../../static/images/cover/icon01.png"></image>
					<view class="tips">
						<view>{{ $t('cover.remind01') }}</view>
						<view>{{ $t('cover.remind02') }}</view>
					</view>
					<view class="remind03">{{ $t('cover.remind03') }}</view>
					<view class="swiper-nav">
						<view class="swiper-left">
							<view class="ellipse ellipse-active"></view>
							<view class="ellipse" @click="goNext(1)"></view>
							<view class="ellipse" @click="goNext(2)"></view>
						</view>
						<image class="icon02" mode="widthFix" src="../../static/images/cover/icon02.png" @click="goNext(1)"></image>
					</view>
				</swiper-item>
				
				<swiper-item>
					<image class="icon01" mode="widthFix" src="../../static/images/cover/icon03.png"></image>
					<view class="tips">
						<view>{{ $t('cover.remind04') }}</view>
					</view>
					<view class="remind05">{{ $t('cover.remind05') }}</view>
					<view class="swiper-nav">
						<view class="swiper-left">
							<view class="ellipse" @click="goNext(0)"></view>
							<view class="ellipse ellipse-active"></view>
							<view class="ellipse" @click="goNext(2)"></view>
						</view>
						<image class="icon02" mode="widthFix" src="../../static/images/cover/icon02.png" @click="goNext(2)"></image>
					</view>
				</swiper-item>
				
				<swiper-item>
					<image class="icon01" mode="widthFix" src="../../static/images/cover/icon04.png"></image>
					<view class="tips remind06">
						<view>{{ $t('cover.remind06') }}</view>
					</view>
					<view class="remind07">{{ $t('cover.remind07') }}</view>
					<view class="swiper-nav">
						<view class="swiper-left">
							<view class="ellipse" @click="goNext(0)"></view>
							<view class="ellipse" @click="goNext(1)"></view>
							<view class="ellipse ellipse-active"></view>
						</view>
						<image class="icon02" mode="widthFix" src="../../static/images/cover/icon02.png" @click="goIndex"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indicatorDots: false,
				autoplay: true,
				interval: 30000,
				duration: 500,
				current: 0
			}
		},
		methods: {
			goNext(num) {
				this.current = num
				this.$forceUpdate()
			},
			goIndex() {
				console.log("进入主页")
			},
			goSwitch(e) {
				this.current = e.detail.current
			},
		}
	}
</script>

<style scoped>
	page{
		width: 100%;
		height: 100%;
	}
	.container {
		position: fixed;
		width: 100%;
		height: 100%;
	}
	.uni-margin-wrap{
		width: 100% !important;
		height: 100% !important;
	}
	/deep/ .uni-margin-wrap{
		width: 100% !important;
		height: 100% !important;
	}
	.swiper{
		padding: 0 !important;
		width: 100% !important;
		height: 100% !important;
	}
	/deep/ .swiper{
		padding: 0 !important;
		width: 100% !important;
		height: 100% !important;
	}
	.icon01{
		width: 750rpx;
		height: 733rpx;
		display: block;
	}
	
	.tips{
		margin-left: 50rpx;
		font-size: 40rpx;
		line-height: 40rpx;
		font-family: Inter-Regular, Inter;
		/* font-weight: 400; */
		font-weight: bold;
		color: #222222;
	}
	
	.remind03{
		padding: 58rpx 42rpx 0 50rpx;
		font-size: 28rpx;
		font-family: Inter-Regular, Inter;
		font-weight: 400;
		color: #333333;
		line-height: 46rpx;
	}
	.remind05,.remind07{
		padding: 49rpx 42rpx 0 50rpx;
		font-size: 28rpx;
		font-family: Inter-Regular, Inter;
		font-weight: 400;
		color: #333333;
		line-height: 46rpx;
	}
	.remind06{
		margin-top: 55rpx;
	}
	/* 滚动样式 */
	.swiper-nav{
		width: 100%;
		position: absolute;
		bottom: 64rpx;
		padding: 0 40rpx 0 50rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.swiper-left{
		display: flex;
		align-items: center;
	}
	
	.ellipse{
		width: 32rpx;
		height: 8rpx;
		background: #000000;
		border-radius: 8rpx 8rpx 8rpx 8rpx;
		opacity: 0.4;
		margin-right: 20rpx;
	}
	
	.ellipse-active{
		background: #000000;
		opacity: 1;
	}
	
	.icon02{
		width: 80rpx;
		height: 80rpx;
	}
</style>
