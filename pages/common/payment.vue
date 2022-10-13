<template>
	<view class="payment-mask">
		<uni-popup class="payment-popup" ref="popupPayment" @maskClick="close">
			<view class="payment-card">
				<view class="payment-top">
					<view class="payment-title">{{ $t('payment.payment') }}</view>
					<view class="payment-close" @click="close">+</view>
				</view>
				<view class="payment-content">
					<view class="payment-bank-list">
						<image class="payment-bank-logo" :class="{'payment-bank-logo-active': cindex === index}"
							v-for="item,index in bankList" :src="item.url" @click="openPay(item,index,'one')"></image>
					</view>
						
					<view class="payment-balance-modular">
						<view class="payment-balance-title">{{ $t('payment.balance_deduction') }}</view>
						<view class="amount-msg">
							<image class="payment-bank-logo" src="../../static/images/order/icon03.png" @click="goPay"></image>
							<view class="deduction-modular">
								<view class="deduction-amount">{{ $t('payment.deductible_gold_coins') }}$2.66</view>
								<view class="dissatisfaction" v-if="isInsufficient">
									<image class="danger-logo" src="../../static/images/order/icon04.png"></image>
									<view class="balance-state">{{ $t('payment.insufficient_amount') }}</view>
								</view>
							</view>
						</view>
					</view>
					
					<view class="payment-online-bank">
						<view class="payment-online-title">{{ $t('balance.banking') }}</view>
						<view class="payment-bank-list">
							<image class="payment-bank-logo" :class="{'payment-bank-logo-active': kindex === index}"
								v-for="item,index in onlineBankList" :src="item.url" @click="openPay(item,index)">
							</image>
						</view>
					</view>

					<view class="payment-card-upload" @click="goAdd">
						<image class="payment-upload" src="../../static/images/user/balance/icon08.png"></image>
						<view class="payment-card-title">{{ $t('balance.card') }}</view>
					</view>
				</view>
				<view class="determine" @click="commit">{{ $t('payment.determine') }}</view>
			</view>
		</uni-popup>

		<pay ref="pay" @goClose="goClose"></pay>
		<pay-add ref="payAdd"></pay-add>
	</view>
</template>

<script>
	import pay from '@/pages/common/pay.vue'
	import payAdd from '@/pages/common/payAdd.vue'
	export default {
		data() {
			return {
				cindex: "",
				kindex: "",
				bankList: [{
					id: 0,
					name: "",
					url: "../../static/images/user/balance/icon10.png"
				}, {
					id: 1,
					name: "测试01",
					url: "../../static/images/user/balance/icon05.png"
				}, {
					id: 2,
					name: "测试02",
					url: "../../static/images/user/balance/icon06.png"
				}, {
					id: 3,
					name: "测试03",
					url: "../../static/images/user/balance/icon03.png"
				}, {
					id: 4,
					name: "测试04",
					url: "../../static/images/user/balance/icon04.png"
				}],
				onlineBankList: [{
					id: 1,
					name: "测试01",
					url: "../../static/images/user/balance/icon01.png"
				}, {
					id: 2,
					name: "测试02",
					url: "../../static/images/user/balance/icon02.png"
				}],
				
				isInsufficient: true, //true为不足  false为足够
			}
		},
		components: {
			pay,
			payAdd,
		},
		created() {

		},
		mounted() {

		},
		methods: {
			open() {
				this.$refs.popupPayment.open("bottom")
			},
			close() {
				this.$refs.popupPayment.close()
				//this.$emit("goClose", "")
			},

			openPay(item, index, type) {
				console.log(item)
				this.$refs.pay.open()
				if (type == "one") {
					this.cindex = index
					this.kindex = ""
				} else {
					this.cindex = ""
					this.kindex = index
				}
			},
			goClose() {
				this.cindex = ""
				this.kindex = ""
			},
			goAdd() {
				this.$refs.payAdd.open()
			},
			goPay() {
				if(!this.isInsufficient){
					console.log("我是足够付款哦")
					this.$refs.pay.open()
				} else {
					console.log("我不够付款，提示提示")
				}
			},
			commit() {

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
	.payment-mask {}

	.pay-add-mask-popup {
		border-radius: 50rpx;
		/* z-index: 1000; */
	}

	.payment-card {
		width: 750rpx;
		height: 1000rpx;
		background: #FFFFFF;
		border-radius: 40rpx 40rpx 0px 0px;
		padding: 32rpx 0 0 0;
		margin: 0 auto;
		/* text-align: center; */
		line-height: normal;
		box-sizing: border-box;
		position: relative;
	}

	.payment-top {
		position: relative;
		padding: 0 0 36rpx 0;
		border-bottom: 2rpx solid rgba(155, 155, 155, 0.4);
	}

	.payment-title {
		font-size: 34rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #000000;
		line-height: 40rpx;
		text-align: center;
	}

	.payment-close {
		font-size: 60rpx;
		line-height: 32rpx;
		color: #1A1D26;
		position: absolute;
		top: 0;
		right: 30rpx;
		transform: rotate(45deg);
	}

	/* 银行列表 */
	.payment-content {
		width: 750rpx;
		height: 730rpx;
		padding: 34rpx 24rpx;
		box-sizing: border-box;
		overflow: hidden;
		overflow-y: auto;
	}
	::-webkit-scrollbar {
	  display: none;
	}
	.payment-bank-list {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}

	.payment-bank-logo {
		width: 96rpx;
		height: 96rpx;
		display: block;
		margin: 0 14rpx 20rpx;
	}

	.payment-bank-logo-active {
		border: 6rpx solid #1A1D26;
		border-radius: 20rpx;
		box-sizing: border-box;
	}
	
	
	/* 余额抵扣 */
	.payment-balance-modular {
		
	}
	.payment-balance-title {
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #1A1D26;
		line-height: 35rpx;
		margin: 37rpx 14rpx 0;
	}
	.amount-msg{
		margin-top: 40rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.payment-online-bank {
		margin-top: 54rpx;
	}
	
	.deduction-modular{
		width: 570rpx;
		display: flex;
		justify-content: flex-end;
		flex-wrap: wrap;
		align-items: center;
	}
	.deduction-amount{
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #ED4C4C;
		line-height: 35rpx;
		margin-bottom: 20rpx;
	}
	.dissatisfaction{
		display: flex;
		align-items: center;
		margin-left: 28rpx;
		margin-bottom: 20rpx;
	}
	.danger-logo{
		width: 32rpx;
		height: 32rpx;
		display: block;
	}
	.balance-state{
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #6A6A6C;
		line-height: 32rpx;
		margin-left: 12rpx;
	}
	
	/* 在线银行 */
	
	.payment-online-bank .payment-bank-list {
		margin-top: 40rpx;
	}

	.payment-online-title {
		margin: 0 14rpx;

		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #1A1D26;
		line-height: 35rpx;
	}

	/* 卡片选择 */
	.payment-card-upload {
		display: flex;
		align-items: center;
		margin: 40rpx 14rpx 0;
	}

	.payment-upload {
		width: 56rpx;
		height: 56rpx;
		display: block;
	}

	.payment-card-title {
		font-size: 28rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #1A1D26;
		line-height: 33rpx;
		margin-left: 20rpx;
	}

	.determine {
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
		bottom: 40rpx;
		left: 0;
		right: 0;
		margin: 0 auto;
	}
</style>
