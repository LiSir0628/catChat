<template>
	<view class="container">
		<uni-nav-bar fixed left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000"
			:title="$t('wallet.wallet')"></uni-nav-bar>
		<view class="banner">
			<image class="banner-logo" src="../../static/images/user/wallet/icon01.png"></image>
			<view class="gold-coins-modular">
				<view class="top">
					<view class="gold-coins">
						<view class="gold-coins-title">
							<view class="gold-coins-title-text">{{ $t('wallet.coins') }}</view>
							<image class="gold-coins-title-arrow" src="../../static/images/user/wallet/icon03.png">
							</image>
						</view>
						<view class="gold-coins-price">1000</view>
					</view>
					<view class="fund">
						{{ $t('wallet.withdrawal') }}
					</view>
				</view>
				<view class="bottom">
					<view class="tip">152 {{ $t('wallet.non_withdrawable') }}</view>
					<view class="look">{{ $t('wallet.see_why') }}</view>
				</view>
			</view>
		</view>
		<view class="top-up">{{ $t('wallet.top_up_title') }}</view>
		<view class="content">
			<view class="reward-price-lists">
				<view class="reward-price-num" v-for="item,index in goldList" :class="{'reward-active': cindex == index}" @click="goSwitch(index)">
					<view class="coin-modular">
						<image v-if="cindex == index" class="price-logo" src="../../static/images/square/icon14.png"></image>
						<image v-else class="price-logo" src="../../static/images/square/icon15.png"></image>
						<view class="price-text">{{item.coin}}</view>
					</view>
					<view class="price">{{ $t('wallet.price') }}: {{item.price_smbol}}</view>
				</view>
			</view>
			<input type="number" class="reward-price" v-model="gold_num" :placeholder="$t('wallet.recharge_placeholder')" @input="input">
			<view v-if="gold_num" class="total-price-tips">{{gold_num}} {{ $t('wallet.gold_coin') }}: {{total_price}}</view>
			<view class="commit-btn" @click="goPay">{{ $t('wallet.top_up_btn') }}</view>
		</view>
		
		<web-view v-if="pay_url" :src="pay_url" @message="message"></web-view>
		<view class="des">
			<view class="des-title">{{ $t('wallet.question01') }}</view>
			<view class="des-modular">
				<view class="des-modular-top">
					<image class="ok-logo" src="../../static/images/user/wallet/icon08.png"></image>
					<view class="rule-title">{{ $t('wallet.des_title01') }}</view>
				</view>
				<view class="rule">{{ $t('wallet.des01') }}</view>
			</view>
			<view class="des-modular">
				<view class="des-modular-top">
					<image class="ok-logo" src="../../static/images/user/wallet/icon08.png"></image>
					<view class="rule-title">{{ $t('wallet.des_title02') }}</view>
				</view>
				<view class="rule">{{ $t('wallet.des02') }}</view>
			</view>
			<view class="des-modular">
				<view class="des-modular-top">
					<image class="ok-logo" src="../../static/images/user/wallet/icon08.png"></image>
					<view class="rule-title">{{ $t('wallet.des_title03') }}</view>
				</view>
				<view class="rule">{{ $t('wallet.des03') }}</view>
			</view>
			
			<view class="des-title des-title02">{{ $t('wallet.question02') }}</view>
			<view class="des-modular">
				<view class="des-modular-top">
					<image class="ok-logo" src="../../static/images/user/wallet/icon08.png"></image>
					<view class="rule-title">{{ $t('wallet.des_title04') }}</view>
				</view>
				<view class="rule">{{ $t('wallet.des04') }}</view>
			</view>
			<view class="des-modular">
				<view class="des-modular-top">
					<image class="ok-logo" src="../../static/images/user/wallet/icon08.png"></image>
					<view class="rule-title">{{ $t('wallet.des_title05') }}</view>
				</view>
				<view class="rule">{{ $t('wallet.des05') }}</view>
			</view>
			<view class="des-modular">
				<view class="des-modular-top">
					<image class="ok-logo" src="../../static/images/user/wallet/icon08.png"></image>
					<view class="rule-title">{{ $t('wallet.des_title06') }}</view>
				</view>
				<view class="rule">{{ $t('wallet.des06') }}</view>
			</view>
		</view>
		<payment ref="payment" :objList="objList"></payment>
	</view>
</template>

<script>
	import payment from "@/pages/common/payment.vue"
	export default {
		data() {
			return {
				cindex: 0,
				goldList: [],
				// goldList:[{
				// 	id: 1,
				// 	coin: 500
				// },{
				// 	id: 2,
				// 	coin: 500
				// },{
				// 	id: 3,
				// 	coin: 500
				// },{
				// 	id: 4,
				// 	coin: 500
				// },{
				// 	id: 5,
				// 	coin: 500
				// },{
				// 	id: 6,
				// 	coin: 500
				// }],
				
				gold_num: "",
				pay_url: "",
				timer: null,
				total_price: "",
				
				objList: {}, //付款订单信息
			}
		},
		components: {
			payment
		},
		created() {
			this.getHttpLists()
		},
		methods: {
			back() {
				window.history.go(-1)
			},
			getHttpLists() {
				uni.showLoading({
					title: this.$t('common').loading + '...',
					mask: true
				});
				this.$myRequest({
					method: 'GET',
					url: '/discount',
					data: {}
				})
				.then(res => {
					uni.hideLoading();
					if (res.data.code == 200) {
						this.goldList = res.data.data
					} else {
						uni.showModal({
							title: this.$t('common').Tip,
							content: res.data.msg,
							confirmText: this.$t('common').confirm,
							showCancel: false,
						})
					}
				})
				.catch(err => {
					uni.hideLoading();
					uni.showModal({
						title: this.$t('common').Tip,
						content: this.$t('common').Network,
						confirmText: this.$t('common').confirm,
						//content: err,
						showCancel: false,
					})
				})
			},
			getPrice(number) {
				// uni.showLoading({
				// 	title: this.$t('common').loading + '...',
				// 	mask: true
				// });
				this.$myRequest({
					method: 'GET',
					url: '/discount/price',
					data: {
						number: number
					}
				})
				.then(res => {
					// uni.hideLoading();
					if (res.data.code == 200) {
						console.log(res.data.data)
						this.total_price = res.data.data.price_symbol
					} else {
						uni.showModal({
							title: this.$t('common').Tip,
							content: res.data.msg,
							confirmText: this.$t('common').confirm,
							showCancel: false,
						})
					}
				})
				.catch(err => {
					// uni.hideLoading();
					uni.showModal({
						title: this.$t('common').Tip,
						content: this.$t('common').Network,
						confirmText: this.$t('common').confirm,
						//content: err,
						showCancel: false,
					})
				})
			},
			goSwitch(index) {
				if(this.cindex == index) return
				clearInterval(this.timer);
				this.cindex = index
				this.gold_num = ""
			},
			input() {
				clearInterval(this.timer);
				this.cindex = undefined
				this.total_price = ""
				this.timer = setTimeout(()=>{
					this.getPrice(this.gold_num)
				},1200)
			},
			goPay() {
				let id = "";
				let price = "";
				let num = "";
				if((this.cindex || this.cindex === 0) && this.cindex != undefined){
					//选择优惠充值，填值充值则无效
					id = this.goldList[this.cindex].id
					
					// price = this.goldList[this.cindex].price
					// num = this.goldList[this.cindex].coin
					// console.log("价格：" + this.goldList[this.cindex].price)
					// console.log("金币数量：" + this.goldList[this.cindex].coin)
				} else {
					//选择填值充值，优惠充值则无效
					num = this.gold_num
					
					//console.log("gold_num(金币数量): " + this.gold_num)
				}
				this.objList = {};
				this.objList.id = id
				this.objList.price = price
				this.objList.num = num
				this.$refs.payment.open()
			},
			message(val) {
				console.log("order_id：" + val.detail.data[0].order_id)
			},
		}
	}
</script>

<style scoped>
	.container {}

	/deep/ .uni-navbar--border {
		border-bottom-color: white;
	}

	.banner {
		width: 690rpx;
		margin: 24rpx auto 0;
		position: relative;
	}

	.banner-logo {
		width: 690rpx;
		height: 253rpx;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		display: block;
	}

	.gold-coins-modular {
		width: 634rpx;
		box-sizing: border-box;
		position: absolute;
		top: 40rpx;
		left: 0;
		right: 0;
		margin: 0 auto;
	}

	.top {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.gold-coins {
		/* position: absolute;
		top: 40rpx;
		left: 28rpx; */
	}

	.gold-coins-title {
		display: flex;
		align-items: center;
	}

	.gold-coins-title-text {
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: rgba(255, 255, 255, 0.8);
		line-height: 33rpx;
	}

	.gold-coins-title-arrow {
		width: 12rpx;
		height: 22rpx;
		margin-left: 8rpx;
	}

	.gold-coins-price {
		font-size: 40rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #FFFFFF;
		line-height: 47rpx;
		margin-top: 18rpx;
	}

	.fund {
		background: #FFFFFF;
		border-radius: 60rpx;

		font-size: 30rpx;
		font-family: Inter-SemiBold;
		font-weight: bold;
		color: #1A1D26;
		padding: 15rpx 32rpx;
		/* right: 117rpx; */
	}

	/* 钱包提示不可用金额 */
	.bottom {
		display: flex;
		align-items: center;
		justify-content: space-between;

		margin-top: 20rpx;
		font-size: 28rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: rgba(255, 255, 255, 0.4);
		padding: 0 30rpx 0 0;
	}

	.tip {
		width: 400rpx;
	}

	.look {}
	
	/* 金币充值 */
	.top-up{
		font-size: 32rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #1A1D26;
		
		margin: 33rpx auto 0;
		text-align: center;
	}
	
	/* 主要内容 */
	.content {
		padding: 0 30rpx 0;
		/* margin-top: 88rpx; */
	}
	
	.reward-price{
		width: 650rpx;
		padding: 0 20rpx 20rpx 0;
		border-bottom: 2rpx solid rgba(155,155,155,0.8);
		margin: 28rpx auto 0;
		
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		/* color: #999999; */
	}
	
	.reward-price-lists{
		width: 690rpx;
		display: flex;
		align-items: center;
		/* justify-content: space-between; */
		flex-wrap: wrap;
		margin: 40rpx auto 0;
	}
	
	.reward-price-num{
		/* display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center; */
		
		min-width: 195rpx;
		padding: 35rpx 6rpx;
		background: rgba(60,163,101,0.1);
		border-radius: 12rpx;
		margin: 0 12rpx 20rpx;
		
		font-size: 34rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #3CA365;
		text-align: center;
	}
	
	.coin-modular{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.price{
		width: 100%;
		font-size: 28rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #999999;
		margin-top: 12rpx;
	}
	
	.reward-active{
		/* min-width: 156rpx; */
		/* height: 116rpx; */
		/* border: 2rpx solid #1A1D26; */
		background: #3CA365;
	}
	
	.price-logo{
		width: 49rpx;
		height: 56rpx;
		display: block;
	}
	
	.price-text{
		margin-left: 10rpx;
		font-size: 34rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #3CA365;
	}
	.reward-active .price-text{
		color: #fff;
	}
	.reward-active .price{
		color: #fff;
	}
	
	.total-price-tips{
		font-size: 24rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #3CA365;
		margin: 12rpx 0 0 10rpx;
	}
	
	.commit-btn{
		width: 640rpx;
		height: 88rpx;
		line-height: 88rpx;
		background: #1A1D26;
		border-radius: 60rpx;
		
		font-size: 36rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #FFFFFF;
		text-align: center;
		margin: 50rpx auto 0;
	}
	
	/* 金币介绍 */
	.des{
		margin-top: 50rpx;
		padding: 42rpx 0 40rpx 0;
		border-top: 20rpx solid #F3F3F3;
	}
	.des-title{
		font-size: 32rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #1A1D26;
		text-align: center;
		margin-bottom: 40rpx;
	}
	.des-title02{
		margin-top: 44rpx;
	}
	.des-modular{
		width: 690rpx;
		/* height: 198px; */
		background: rgba(26,29,38,0.1);
		border-radius: 26rpx;
		box-sizing: border-box;
		margin: 0 auto 20rpx;
		padding: 34rpx 26rpx 38rpx 26rpx;
	}	.des-modular-top{
		display: flex;
		align-items: center;
	}	.ok-logo{
		width: 26rpx;
		height: 19rpx;
	}	.rule-title{
		font-size: 30rpx;
		font-family: Inter-SemiBold;
		font-weight: normal;
		color: #1A1D26;
		margin-left: 18rpx;
	}	.rule{
		font-size: 28rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #6A6A6C;
		margin-left: 44rpx;
		margin-top: 18rpx;
	}
</style>
