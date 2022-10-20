<template>
	<view class="noticeTop-mask">
		<uni-popup ref="message" type="message">
			<uni-popup-message type="success" :message="text" :duration="3000"></uni-popup-message>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props:{
			text:{
				type: String,
				default: ""
			}
		},
		components: {

		},
		created() {

		},
		mounted() {

		},
		methods: {
			open() {
				this.$refs.message.open()
			}
		}
	}
</script>

<style scoped>
	/deep/ .uni-popup .uni-popup__wrapper {
		border-radius: 50rpx;
	}

	/deep/ .uni-popup {
		z-index: 1000;
	}

	/* 遮罩样式 */
	.noticeTop-mask {}

	/deep/ .uni-popup__success {
		background-color: #1A1D26;
	}

	/deep/ .uni-popup__success-text {
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #FFFFFF;
	}

	/deep/ .uni-popup-message__box {
		padding: 30rpx;
	}
</style>
