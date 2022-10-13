<template>
	<view class="container">
		<uni-nav-bar fixed left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000" :title="$t('balance.balance')">
		</uni-nav-bar>
		<view class="content">
			<view class="recharge" v-if="isShowRecharge">{{ $t('balance.recharge_title') }}</view>
			<view class="recharge" v-else>{{ $t('balance.withdrawal_title') }}</view>
			<view class="quota">
				<view class="symbol" v-if="price">$</view>
				<input type="number" class="price" v-model="price" :placeholder="$t('balance.quota')" />
			</view>
			
			<view class="bank-list">
				<image class="bank-logo" :class="{'bank-logo-active': cindex === index}" v-for="item,index in bankList" :src="item.url" @click="openPay(item,index,'one')"></image>
			</view>
			
			<view class="online-bank">
				<view class="online-title">{{ $t('balance.banking') }}</view>
				<view class="bank-list">
					<image class="bank-logo" :class="{'bank-logo-active': kindex === index}" v-for="item,index in onlineBankList" :src="item.url" @click="openPay(item,index)"></image>
				</view>
			</view>
			
			<view class="card-upload" @click="goAdd">
				<image class="upload" src="../../static/images/user/balance/icon08.png"></image>
				<view class="card">{{ $t('balance.card') }}</view>
			</view>
		</view>
		
		<view class="withdrawal" v-if="isShowRecharge" @click="goSwitch">{{ $t('balance.withdrawal') }}</view>
		<view class="withdrawal" v-else @click="goSwitch">{{ $t('balance.recharge') }}</view>
		<!-- <view class="bottom">
			<view class="withdrawal">{{ $t('balance.withdrawal') }}</view>
		</view> -->
		
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
				isShowRecharge: false,  //Recharge充值  Withdrawal提现
				price: "0.00",
				bankList: [{
					id: 0,
					name: "",
					url: "../../static/images/user/balance/icon10.png"
				},{
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
				}]
			}
		},
		components: {
			pay,
			payAdd,
		},
		mounted() {
			// this.$refs.payAdd.open()
		},
		methods: {
			back() {
				window.history.go(-1)
			},
			openPay(item, index, type) {
				console.log(item)
				this.$refs.pay.open()
				if(type == "one"){
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
			goSwitch() {
				this.isShowRecharge = !this.isShowRecharge
			},
			goAdd() {
				this.$refs.payAdd.open()
			}
		}
	}
</script>

<style scoped>
	.container {}

	/deep/ .uni-navbar--border {
		border-bottom-color: white;
	}
	
	.content{
		padding-bottom: 280rpx;
	}
	
	.recharge {
		margin: 24rpx 0 0 0;
		padding: 0 38rpx;

		font-size: 28rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #1A1D26;
		line-height: 33rpx;
	}
	.quota{
		width: 690rpx;
		min-height: 128rpx;
		box-sizing: border-box;
		position: relative;
		margin: 66rpx 30rpx 0;
	}
	.symbol{
		position: absolute;
		top: 8rpx;
		left: 6rpx;
		
		font-size: 76rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #000000;
		line-height: 89rpx;
	}
	.price {
		position: absolute;
		top: 0;
		padding: 0 6rpx 20rpx 56rpx;
		border-bottom: 2rpx solid rgba(155, 155, 155, 0.4);

		font-size: 76rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #000000;
		line-height: 89rpx;
	}

	/* 银行列表 */
	.bank-list {
		margin-top: 63rpx;
		padding: 0 26rpx;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}

	.bank-logo {
		width: 96rpx;
		height: 96rpx;
		display: block;
		margin: 0 14rpx 20rpx;
	}
	.bank-logo-active{
		border: 6rpx solid #1A1D26;
		border-radius: 20rpx;
		box-sizing: border-box;
	}

	.online-bank {
		margin-top: 32rpx;
	}

	.online-bank .bank-list {
		margin-top: 40rpx;
	}

	.online-title {
		margin: 0 14rpx;
		padding: 0 26rpx;
		
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #1A1D26;
		line-height: 35rpx;
	}
	
	/* 卡片选择 */
	.card-upload{
		display: flex;
		align-items: center;
		padding: 0 40rpx;
		margin-top: 40rpx;
	}
	.upload{
		width: 56rpx;
		height: 56rpx;
		display: block;
	}
	.card{
		font-size: 28rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #1A1D26;
		line-height: 33rpx;
		margin-left: 20rpx;
	}
	
	
	/* .bottom{
		padding: 0 0 120rpx;
		margin: 220rpx auto 0;
		text-align: center;
	} */
	
	.withdrawal{
		width: 335rpx;
		height: 88rpx;
		background: #1A1D26;
		border-radius: 60rpx 60rpx 60rpx 60rpx;
		
		font-size: 30rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #FFFFFF;
		line-height: 88rpx;
		text-align: center;
		margin: 0 auto;
		position: fixed;
		bottom: 120rpx;
		left: 0;
		right: 0;
		margin: 0 auto;	
	}
</style>
