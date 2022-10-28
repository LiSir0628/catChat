<template>
	<view class="container">
		<uni-nav-bar fixed left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000"
			:title="$t('refund.apply_for_refund')">
		</uni-nav-bar>
		<view class="content">
			<view class="refund-msg">
				<view class="goods-title">{{ $t('refund.cargo_status') }}</view>
				<view class="goods-msg" @click="cargoStatus">
					<input disabled class="goods-status" v-model="cargo_status"
						:placeholder="$t('refund.please_select')" />
					<image class="arrow" src="../../static/images/order/icon06.png"></image>
				</view>
			</view>

			<view class="refund-msg">
				<view class="goods-title">{{ $t('refund.refund_reason') }}</view>
				<view class="goods-msg" @click="refundReason">
					<input disabled class="goods-status" v-model="refund_reason"
						:placeholder="$t('refund.please_select')" />
					<image class="arrow" src="../../static/images/order/icon06.png"></image>
				</view>
			</view>
			
			<view class="sp-msg">
				<view class="price-title">{{ $t('refund.refund_amount') }}</view>
				<view class="price">$92.5</view>
			</view>
			
			<view class="evaluate">
				<view class="evaluate-top">
					<view class="evaluate-title">{{ $t('refund.des_title') }}</view>
				</view>
				
				<textarea maxlength="150" class="textarea" placeholder-class="textarea-placeholder" v-model="refund_description" :placeholder="$t('refund.description')" />
			
				<view>
					<image v-if="refund_images" class="evaluate-logo" :src="refund_images" @click="photo"></image>
					<image v-else class="evaluate-logo" src="../../static/images/order/evaluate/icon03.png" @click="photo"></image>
				</view>
			</view>
			
			<view class="btn" @click="submit">
				{{ $t('refund.submit') }}
			</view>
		</view>
		
		<select-state ref="selectState" :isCurrent="isCurrent" :stateList="stateList" :stateStyle="stateStyle" @stateValue="stateValue"></select-state>
	</view>
</template>

<script>
	import selectState from "@/pages/common/selectState.vue"
	// import {
	// 	pathToBase64,
	// 	base64ToPath
	// } from 'image-tools'
	export default {
		data() {
			return {
				stateStyle: "", //1 = cargoList  2 = refundList
				stateList: [],
				
				cargoList:[{
					value: "11",
					name: this.$t('refund').no_goods
				},{
					value: "22",
					name: this.$t('refund').receive_goods
				}],
				
				refundList:[{
					value: "111",
					name: this.$t('refund').does_not_meet
				},{
					value: "222",
					name: this.$t('refund').dissatisfaction
				},{
					value: "333",
					name: this.$t('refund').breakage
				},{
					value: "444",
					name: this.$t('refund').send_wrong
				}],
				
				isCurrent: "0",
				cargo_status: "", // 货物状态-名称
				cargo_status_val: "",
				refund_reason: "", // 退款理由-名称
				refund_reason_val: "",
				
				refund_description: "",
				refund_images: "",
			}
		},
		components:{
			selectState,
		},
		mounted() {
		},
		methods: {
			back() {
				window.history.go(-1)
			},
			stateValue(valObj) {
				//console.log(valObj)
				//stateStyle: 1是货物状态 2是退款理由
				if(valObj.stateStyle == 1){
					this.cargo_status = this.cargoList[valObj.current].name
					this.cargo_status_val = valObj.stateVal
				} else {
					this.refund_reason = this.refundList[valObj.current].name
					this.refund_reason_val = valObj.stateVal
				}
			},
			cargoStatus() {
				this.stateStyle = "1"
				this.isCurrent = "0"
				this.stateList = this.cargoList
				for(let i in this.stateList){
					if(this.cargo_status_val == this.stateList[i].value){
						this.isCurrent = i.toString()
						break
					}
				}
				this.$refs.selectState.open()
			},
			refundReason() {
				this.stateStyle = "2"
				this.isCurrent = "0"
				this.stateList = this.refundList
				for(let i in this.stateList){
					if(this.refund_reason_val == this.stateList[i].value){
						this.isCurrent = i.toString()
						break
					}
				}
				this.$refs.selectState.open()
			},
			photo() {
				let _this = this;
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['camera'], //拍照选择
					success: function(res) {
						const tempFilePaths = res.tempFilePaths;
						_this.refund_images = res.tempFilePaths[0]
						console.log(_this.refund_images)
						// pathToBase64(res.tempFilePaths[0])
						// .then(path => {
						// 	_this.backend = path
						// })
						// .catch(error => {
						// 	console.error(error)
						// })
					}
				});
			},
			submit() {
				console.log("货物状态:" + this.cargo_status_val)
				console.log("退款理由:" + this.refund_reason_val)
				console.log("退款描述:" + this.refund_description)
				console.log(this.refund_images)
			}
		}
	}
</script>

<style scoped>
	.container {
		padding-bottom: 200rpx;
	}

	/deep/ .uni-navbar--border {
		border-bottom-color: white;
	}

	.content {
		padding: 24rpx 30rpx 0;
	}

	.refund-msg {
		margin-bottom: 50rpx;
	}

	.goods-title {
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #1A1D26;
	}

	.goods-msg {
		position: relative;
		margin-top: 30rpx;
	}

	.goods-status {
		width: 630rpx;
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		/* color: #999999; */
		border-bottom: 2rpx solid #9B9B9B;
		padding: 0rpx 60rpx 20rpx 0;
	}

	.arrow {
		width: 28rpx;
		height: 28rpx;
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		margin: auto 0;
		padding-bottom: 20rpx;
	}
	
	.sp-msg{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.price-title{
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #1A1D26;
	}
	.price{
		font-size: 36rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #ED4C4C;
	}
	
	/* 评论环节 */
	.evaluate{
		margin-top: 47rpx;
	}
	.evaluate-top{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.evaluate-title{
		font-size: 32rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #1A1D26;
		line-height: 38rpx;
	}
	.evaluate-thumbs{
		display: flex;
	}
	.thumbs-logo{
		width: 36rpx;
		height: 36rpx;
		display: block;
		margin-left: 20rpx;
	}
	
	.textarea{
		width: 690rpx;
		height: 400rpx;
		background: #F5F5F5;
		border-radius: 20rpx;
		padding: 26rpx 30rpx;
		box-sizing: border-box;
		margin-top: 28rpx;
		
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		/* color: #6A6A6C; */
	}
	.textarea-placeholder{
		color:#6A6A6C;
		font-size: 28rpx;
		font-family: Inter-Regular;
	}
	
	.evaluate-logo{
		width: 160rpx;
		height: 160rpx;
		margin-top: 30rpx;
		border-radius: 10px;
	}
	
	.btn{
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
		position: fixed;
		bottom: 76rpx;
		left: 0;
		right: 0;
		margin: 0 auto;
	}
</style>
