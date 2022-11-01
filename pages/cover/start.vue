<template>
	<view class="container">
		<image class="start-logo" src="../../static/images/start/icon01.png"></image>
		<view class="start-text">{{ $t('start.start_text') }}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		mounted() {
			setTimeout(()=>{
				uni.navigateTo({
					url: "cover"
				});
			},3000)
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	page{
		width: 100%;
		height: 100%;
		background: #1A1D26;
	}
	.container {
		
	}
	.start-logo{
		width: 420rpx;
		height: 420rpx;
		display: block;
		padding: 180rpx 0 0;
		margin: 0 auto;
	}
	.start-text{
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #FFFFFF;
		position: absolute;
		left: 0;
		right: 0;
		margin: 0 auto;
		text-align: center;
		bottom: 94rpx;
	}
</style>
