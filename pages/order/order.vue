<template>
	<view class="container">
		<uni-nav-bar fixed left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000" :title="$t('order.order')"></uni-nav-bar>
		<view class="state-list">
			<view class="state-style" :class="{'state-active-style': cindex == index}" v-for="item,index in stateList" @click="switchState(index)">{{item.name}} {{item.num}}</view>
		</view>
		<view class="content">
			<view class="order-lists">
				<view v-if="state == 0">
					<view class="whole-modular" v-for="item,index in newOrderList">
						<view v-if="item.sp_lists.length == 1">
							<view class="whole-state-modular">
								<view v-if="item.state == 7" class="whole-state">{{ $t('order.transaction_closure') }}</view>
								<view v-else-if="item.state == 5 || item.state == 6" class="whole-state">{{ $t('order.order_completion') }}</view>
								<view v-if="item.state == 7" class="refund">Refund succeeded</view>
							</view>
							
							<view class="whole-content">
								<image class="whole-order-logo" :src="item.sp_lists[0].url"></image>
								<view class="whole-msg">
									<view class="whole-sp-name">{{item.sp_lists[0].title}}</view>
									<view class="whole-sp-specs">{{item.sp_lists[0].specs.name}}</view>
								</view>
								<view class="whole-num">x{{item.sp_lists[0].num}}</view>
							</view>
							<view class="whole-price">{{ $t('order.price') }}:<text class="whole-price-num">${{item.total_price}}</text></view>
							<view class="all-btn">
								<view class="buy-btn">{{ $t('order.buy_again') }}</view>
								<view v-if="item.state == 5" class="evaluate-btn">{{ $t('order.to_evaluate') }}</view>
							</view>
						</view>
						<view v-if="item.sp_lists.length > 1">
							
						</view>
					</view>
				</view>
				<view v-else>
					<view class="order-list" v-for="item,index in orderList" v-if="state == item.state">
						<image class="order-logo" :src="item.url"></image>
						<view class="order-msg">
							<view class="order-title">{{item.title}}</view>
							<view class="order-price">${{item.price}}</view>
							<view v-if="item.state == 1" class="order-method" @click="goPayment">{{ $t('order.payment') }}</view>
							<!-- <view v-else-if="item.state == 2" class="order-method"></view> -->
							<view class="wait" v-else-if="item.state == 3">
								<view class="order-method logistics">{{ $t('order.logistics') }}</view>
								<view class="order-method determine">{{ $t('order.determine') }}</view>
							</view>
							<view v-else-if="item.state == 4" class="order-method">{{ $t('order.cancel') }}</view>
							<view v-else-if="item.state == 5" class="order-method">{{ $t('order.evaluate') }}</view>
						</view>
					</view>
				</view>
			</view>
			
			<view class="recommend">
				<view class="scribing-A">-</view>
				<view class="scribing-B">-</view>
				<view class="recommend-title">{{ $t('order.recommend') }}</view>
				<view class="scribing-B">-</view>
				<view class="scribing-A">-</view>
			</view>
			
			<view class="sp-lists">
				<view class="sp-list">
					<image class="sp-logo" src="../../static/images/user/photo02.png"></image>
					<view class="sp-msg">
						<view class="sp-price">$6.33</view>
						<image v-if="!isShowLove" class="love" src="../../static/images/order/icon01.png"></image>
						<image v-else class="love" src="../../static/images/order/icon02.png"></image>
					</view>
					<view class="score-data">
						<view class="score">4.7 {{ $t('order.points') }}</view>
						<view class="sales">{{ $t('order.sales') }} 56236</view>
					</view>
					<view class="sp-title">Contrast Polo Collar Piiii llover Polo collar Pulli Contrast Polo Collar Piiii llover Polo collar Pulli</view>
				</view>
				
				<view class="sp-list">
					<image class="sp-logo" src="../../static/images/user/photo02.png"></image>
					<view class="sp-msg">
						<view class="sp-price">$6.33</view>
						<image v-if="!isShowLove" class="love" src="../../static/images/order/icon01.png"></image>
						<image v-else class="love" src="../../static/images/order/icon02.png"></image>
					</view>
					<view class="score-data">
						<view class="score">4.7 {{ $t('order.points') }}</view>
						<view class="sales">{{ $t('order.sales') }} 56236</view>
					</view>
					<view class="sp-title">Contrast Polo Collar Piiii llover Polo collar Pulli Contrast Polo Collar Piiii llover Polo collar Pulli</view>
				</view>
				
				<view class="sp-list">
					<image class="sp-logo" src="../../static/images/user/photo02.png"></image>
					<view class="sp-msg">
						<view class="sp-price">$6.33</view>
						<image v-if="!isShowLove" class="love" src="../../static/images/order/icon01.png"></image>
						<image v-else class="love" src="../../static/images/order/icon02.png"></image>
					</view>
					<view class="score-data">
						<view class="score">4.7 {{ $t('order.points') }}</view>
						<view class="sales">{{ $t('order.sales') }} 56236</view>
					</view>
					<view class="sp-title">Contrast Polo Collar Piiii llover Polo collar Pulli Contrast Polo Collar Piiii llover Polo collar Pulli</view>
				</view>
			</view>
		</view>
		
		<payment ref="payment"></payment>
	</view>
</template>

<script>
	import payment from "@/pages/common/payment.vue"
	export default {
		data() {
			return {
				cindex: 0,
				state: 0,
				stateList:[{
					id: 1,
					name: this.$t('order').whole,
					num: "",
					state: 0
				},{
					id: 2,
					name: this.$t('order').paid,
					num: 2,
					state: 1
					
				},{
					id: 3,
					name: this.$t('order').shipped,
					num: 10,
					state: 2
				},{
					id: 4,
					name: this.$t('order').received,
					num: 12,
					state: 3
				},{
					id: 5,
					name: this.$t('order').refund,
					num: 20,
					state: 4
				},{
					id: 6,
					name: this.$t('order').evaluate,
					num: 15,
					state: 5
				}],
				newOrderList: [{
					order_id: 1,
					state: 5,// 1待支付  2待发货  3待接收  4取消退款  5已完成-待评论 6已完成-已评价 7.已完成-退款(不可评价)
					total_price: '50.6',
					sp_lists:[{
						id: 1,
						url: '../../static/images/user/photo02.png',
						title: 'Liziqi Liuzhou snail powderLiziqi Liuzhou snail powder',
						price: '5.6',
						num: 10,
						specs: {
							name: "升级款白色（送电池）"
						},
					}]
				},{
					order_id: 2,
					state: 7,// 1待支付  2待发货  3待接收  4取消退款  5已完成-待评论 6已完成-已评价 7.已完成-退款(不可评价)
					total_price: '500.6',
					sp_lists:[{
						id: 1,
						url: '../../static/images/user/photo02.png',
						title: 'Liziqi Liuzhou snail powderLiziqi Liuzhou snail powder',
						price: '5.6',
						num: 100,
						specs: {
							name: "升级款白色（送电池）"
						},
					}]
				}],
				orderList:[{
					order_id: 1,
					url: '../../static/images/user/photo02.png',
					title: 'Liziqi Liuzhou snail powderLiziqi Liuzhou snail powder',
					price: '50.6',
					state: 1
				},{
					order_id: 2,
					url: '../../static/images/user/photo02.png',
					title: 'Liziqi Liuzhou snail powderLiziqi Liuzhou snail powder',
					price: '150.6',
					state: 2
				},{
					order_id: 3,
					url: '../../static/images/user/photo02.png',
					title: 'Liziqi Liuzhou snail powderLiziqi Liuzhou snail powder',
					price: '250.6',
					state: 3
				},{
					order_id: 4,
					url: '../../static/images/user/photo02.png',
					title: 'Liziqi Liuzhou snail powderLiziqi Liuzhou snail powder',
					price: '350.6',
					state: 4
				},{
					order_id: 5,
					url: '../../static/images/user/photo02.png',
					title: 'Liziqi Liuzhou snail powderLiziqi Liuzhou snail powder',
					price: '450.6',
					state: 5
				}],
				
				isShowLove: false,
			}
		},
		components: {
			payment,
		},
		mounted() {
			//this.$refs.payment.open()
		},
		methods: {
			back() {
				window.history.go(-1)
			},
			switchState(index) {
				if(this.cindex == index) return
				this.cindex = index
				this.state = this.stateList[index].state
			},
			goPayment() {
				this.$refs.payment.open()
			}
		}
	}
</script>

<style scoped>
	.container {
		
	}
	
	/deep/ .uni-navbar--border {
		border-bottom-color: white;
	}
	
	.state-list{
		margin-top: 24rpx;
		display: flex;
		flex-wrap: wrap;
		padding: 0 20rpx;
	}
	
	.state-style{
		min-width: 120rpx;
		height: 56rpx;
		line-height: 56rpx;
		padding: 0 20rpx;
		box-sizing: border-box;
		background: rgba(26,29,38,0.1);
		border-radius: 60rpx 60rpx 60rpx 60rpx;
		
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		margin: 0 10rpx 20rpx 10rpx;
		text-align: center;
	}
	.state-active-style{
		background: #1A1D26;
		color: #FFFFFF;
	}
	
	/* 主要商品展示 */
	
	.content{
		padding: 20rpx 30rpx;
	}
	/* 全部区域展示 */
	.whole-modular{
		padding-bottom: 40rpx;
		margin-top: 32rpx;
		border-bottom: 2rpx solid rgba(217,217,217,0.6);
	}
	.whole-modular:nth-child(1){
		margin-top: 0;
	}
	.whole-state-modular{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.whole-state{
		font-size: 32rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #1A1D26;
		line-height: 38rpx;
	}
	.refund{
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #ED4C4C;
		line-height: 35rpx;
	}	.whole-content{
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 38rpx;
	}	.whole-order-logo{
		width: 160rpx;
		height: 160rpx;
		border-radius: 20rpx;
	}	.whole-msg{
		width: 360rpx;
		min-height: 160rpx;
		/* background: red; */
		margin-left: 30rpx;
		
		font-size: 30rpx;
		font-family: Inter-SemiBold;
		font-weight: normal;
		color: #1A1D26;
		line-height: 35rpx;
	}
	.whole-sp-name{
		overflow: hidden;
		white-space: nowrap;
		word-wrap: normal;
		text-overflow: ellipsis;
		-o-text-overflow: ellipsis;
	}
	.whole-sp-specs{
		width: 302rpx;
		height: 48rpx;
		background: rgba(26,29,38,0.1);
		border-radius: 60rpx;
		box-sizing: border-box;
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #6A6A6C;
		line-height: 48rpx;
		text-align: center;
		padding: 0 20rpx;
		margin-top: 20rpx;
		
		overflow: hidden;
		white-space: nowrap;
		word-wrap: normal;
		text-overflow: ellipsis;
		-o-text-overflow: ellipsis;
	}	.whole-num{
		width: 130rpx;
		margin-left: 10rpx;
		text-align: right;
		font-size: 26rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #6A6A6C;
		line-height: 30rpx;
		word-break: break-all;
	}
	
	.whole-price{
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		line-height: 35rpx;
		
		margin-top: 28rpx;
		text-align: right;
	}
	.whole-price-num{
		font-weight: bold;
		margin-left: 8rpx;
	}	.all-btn{
		margin-top: 30rpx;
		text-align: center;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
	}	.buy-btn{
		/* width: 174rpx; */
		height: 56rpx;
		line-height: 56rpx;
		background: #FFFFFF;
		border-radius: 60rpx;
		border: 2rpx solid rgba(26,29,38,0.4);
		
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		padding: 0 22rpx;
	}	.evaluate-btn{
		/* width: 128rpx; */
		height: 56rpx;
		line-height: 56rpx;
		background: #1A1D26;
		border-radius: 60rpx;
		border: 2rpx solid #1A1D26;
		
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #FFFFFF;
		margin-left: 20rpx;
		padding: 0 22rpx;
	}
	
	.order-lists{
		width: 690rpx;
		box-sizing: border-box;
		padding: 0 0 70rpx;
	}
	.order-list{
		display: flex;
		/* align-items: center; */
		/* justify-content: space-between; */
		margin-top: 20rpx;
	}
	.order-logo{
		width: 160rpx;
		height: 160rpx;
		border-radius: 20rpx;
		margin-right: 28rpx;
		display: block;
	}
	.order-msg{
		width: 500rpx;
		box-sizing: border-box;
	}
	.order-title{
		font-size: 30rpx;
		font-family: Inter-SemiBold;
		font-weight: normal;
		color: #1A1D26;
		line-height: 35rpx;
		
		overflow: hidden;
		white-space: nowrap;
		word-wrap: normal;
		text-overflow: ellipsis;
		-o-text-overflow: ellipsis;
	}
	.order-price{
		font-size: 30rpx;
		font-family: Inter-SemiBold;
		font-weight: 400;
		color: #1A1D26;
		line-height: 35rpx;
		margin-top: 25rpx;
	}
	.order-method{
		width: max-content;
		padding: 0 22rpx;
		height: 56rpx;
		line-height: 58rpx;
		text-align: center;
		background: #FFFFFF;
		border-radius: 60rpx;
		border: 2rpx solid rgba(26,29,38,0.4);
		
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		margin: auto 0 0 auto;
	}
	
	.wait{
		display: flex;
		justify-content: flex-end;
		flex-wrap: wrap;
	}
	.wait .order-method{
		margin: 0;
		word-break: break-all;
	}
	.logistics{
		margin-bottom: 8rpx !important;
	}
	.determine{
		margin-left: 16rpx !important;
		margin-bottom: 8rpx !important;
	}
	.recommend{
		display: flex;
		justify-content: center;
		font-size: 32rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: rgb(237,76,76);
		line-height: 38rpx;
	}
	.recommend-title{
		margin: 0 16rpx;
	}
	.scribing-A{
		color: rgba(237,76,76,0.2);
	}
	.scribing-B{
		color: rgba(237,76,76,0.6);
	}
	
	.sp-lists{
		display: flex;
		/* align-items: center; */
		justify-content: space-between;
		flex-wrap: wrap;
		padding: 33rpx 0;
	}
	.sp-list{
		width: 335rpx;
		margin-bottom: 48rpx;
	}
	.sp-logo{
		width: 335rpx;
		height: 335rpx;
		display: block;
		border-radius: 20rpx 20rpx 0rpx 0rpx;
	}
	.sp-msg{
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 26rpx;
	}
	.sp-price{
		font-size: 36rpx;
		font-family: Inter-SemiBold;
		font-weight: normal;
		color: #1A1D26;
	}
	.love{
		width: 38rpx;
		height: 38rpx;
		display: block;
	}
	.score-data{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		align-items: center;
		margin-top: 16rpx;
	}
	.score{
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #6262EB;
		line-height: 40rpx;
	}
	.sales{
		font-size: 26rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #999999;
		line-height: 40rpx;
	}
	.sp-title{
		font-size: 28rpx;
		line-height: 40rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #6A6A6C;
		margin-top: 4rpx;
		
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
</style>
