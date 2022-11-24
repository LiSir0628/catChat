<template>
	<view class="state-mask">
		<uni-popup class="state-popup" ref="popupState" @maskClick="close">
			<view class="state-card">
				<view class="state-top">
					<view class="state-title">
						<template v-if="stateStyle == 1">{{ $t('refund.cargo_status') }}</template>
						<template v-else-if="stateStyle == 2">{{ $t('refund.refund_reason') }}</template>
						<template v-else-if="stateStyle == 3">Select {{ $t('personal.education') }}</template>
						<template v-else-if="stateStyle == 4">Select {{ $t('personal.revenue') }}</template>
						<template v-else-if="stateStyle == 5">Select {{ $t('personal.gender') }}</template>
						<template v-else-if="stateStyle == 6">Select {{ $t('personal.emotional_state') }}</template>
					</view>
					<view class="state-close" @click="close">+</view>
				</view>

				<view class="stateList">
					<radio-group @change="radioChange">
						<label class="uni-list-cell uni-list-cell-pd" :class="{'uni-list-cell-active': stateStyle == 6}" v-for="(item, index) in stateList"
							:key="item.value">
							<view>
								<radio :value="item.value" :checked="index == current" />
							</view>
							<view class="state-name">{{item.name}}</view>
						</label>
					</radio-group>
				</view>

				<view class="continue" @click="commit">{{ $t('refund.determine') }}</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0
			}
		},
		props: {
			stateList: {
				type: Array,
				default: ""
			},
			stateStyle: {
				type: String,
				default: ""
			},
			isCurrent: {
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
			radioChange(evt) {
				for (let i = 0; i < this.stateList.length; i++) {
					if (this.stateList[i].value === evt.detail.value) {
						this.current = i;
						break;
					}
				}
			},
			
			open() {
				this.$refs.popupState.open("bottom")
				this.$nextTick(()=>{
					if(this.isCurrent) this.current = this.isCurrent
				})
			},
			
			close() {
				this.$refs.popupState.close()
			},
			
			commit() {
				let valObj = {};
				valObj.stateStyle = this.stateStyle
				valObj.current = this.current
				valObj.stateVal = this.stateList[this.current].value
				this.$emit('stateValue', valObj);
				
				this.$refs.popupState.close()
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
	.state-mask {}

	.state-popup {
		border-radius: 50rpx;
		/* z-index: 1000; */
	}

	.state-card {
		width: 750rpx;
		height: 800rpx;
		padding: 32rpx 0 0 0;
		background: #FFFFFF;
		border-radius: 20rpx 20rpx 0 0;
		box-sizing: border-box;
		position: relative;
	}

	.state-top {
		width: 750rpx;
		position: relative;
		padding: 0 0 36rpx 0;
		border-bottom: 2rpx solid rgba(155, 155, 155, 0.4);
		box-sizing: border-box;
		text-align: center;
	}

	.state-title {
		font-size: 34rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #000000;
		line-height: 40rpx;
	}

	.state-close {
		font-size: 60rpx;
		line-height: 32rpx;
		color: #1A1D26;
		position: absolute;
		top: 0;
		right: 30rpx;
		transform: rotate(45deg);
	}
	
	.stateList{
		height: 496rpx;
		padding: 0 32rpx;
		margin-top: 26rpx;
		box-sizing: border-box;
		overflow: hidden;
		overflow-y: auto;
	}
	
	.stateList::-webkit-scrollbar {
	  display: none;
	}
	
	.uni-list-cell{
		margin-bottom: 30rpx;
	}
	.uni-list-cell-active{
		margin-bottom: 20rpx;
	}
	.uni-list-cell-pd{
		display: flex;
		align-items: center;
	}
	/deep/ uni-radio .uni-radio-wrapper{
		margin-top: -8rpx;
	}
	/deep/ .uni-radio-input{
		width: 30rpx;
		height: 30rpx;
		background: #ffffff;
		border-color: rgba(155, 155, 155, 0.4) !important;
	}
	/deep/ .uni-radio-input-checked{
		background: #1A1D26 !important;
		border-color: #1A1D26 !important;
		 
	}
	.state-name{
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		margin-left: 8rpx;
	}
	
	.continue {
		width: 335rpx;
		height: 88rpx;
		line-height: 88rpx;
		background: #1A1D26;
		border-radius: 60rpx;
	
		font-size: 30rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #FFFFFF;
		text-align: center;
		position: fixed;
		bottom: 50rpx;
		left: 0;
		right: 0;
		margin: 0 auto;
	}
</style>
