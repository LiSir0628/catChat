<template>
	<view class="container">
		<uni-nav-bar fixed left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000" :title="$t('refund.apply_for_refund')">
		</uni-nav-bar>
		<view class="content">
			
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
		padding-bottom: 20rpx;
	}
	
	/deep/ .uni-navbar--border {
		border-bottom-color: white;
	}
	
	.content {
		padding: 24rpx 30rpx 0;
	}
</style>
