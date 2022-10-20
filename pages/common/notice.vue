<template>
	<view class="notice-mask">
		<uni-popup class="notice-popup" ref="popupNotice" @maskClick="close">
			<view class="notice-card">
				<view class="notice-msg"> {{text}} </view>
				<view class="notice-btn">
					<view class="cancel-btn" @click="close">{{ $t('notice.cancel') }}</view>
					<view class="determine-btn" @click="ok">{{ $t('notice.determine') }}</view>
				</view>
			</view>
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
				//default: this.$t('pro_detail').successful
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
				this.$refs.popupNotice.open("center")
			},
			close() {
				this.$refs.popupNotice.close()
				//this.$emit("goClose", "")
			},
			ok() {
				window.history.go(-1)
				console.log("确定了-返回上一页")
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
	.notice-mask {}

	.notice-popup {
		border-radius: 50rpx;
		/* z-index: 1000; */
	}

	.notice-card {
		width: 510rpx;
		min-height: 250rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		box-sizing: border-box;
		position: relative;
	}
	
	.notice-msg{
		min-height: 146rpx;
		box-sizing: border-box;
		font-size: 30rpx;
		font-family: Inter-SemiBold;
		font-weight: normal;
		color: #1A1D26;
		line-height: 42rpx;
		padding: 30rpx 30rpx 24rpx 38rpx;
		border-bottom: 2rpx solid #F5F5F5;
	}
	
	.notice-btn{
		min-height: 102rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding: 32rpx 38rpx;
	}
	
	.cancel-btn{
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #F14E49;
		line-height: 42rpx;
	}
	
	.determine-btn{
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #F14E49;
		line-height: 42rpx;
		margin-left: 46rpx;
	}
</style>
