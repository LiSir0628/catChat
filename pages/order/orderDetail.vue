<template>
	<view class="container">
		<uni-nav-bar fixed left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000" :title="$t('order_detail.received')">
		</uni-nav-bar>
		<view class="product-information">
			<view class="product-information-title">{{ $t('order_detail.product_information') }}</view>
			
			<view class="whole-content" v-for="item in list.sp_lists">
				<image class="whole-order-logo" :src="item.url"></image>
				<view class="whole-msg">
					<view class="whole-sp-name">{{item.title}}</view>
					<view class="whole-sp-specs">
						<template v-for="citem in item.specs">
							{{citem.name}}
						</template>
					</view>
					<view class="whole-price">${{item.price}}</view>
				</view>
				<view class="whole-num">x{{item.num}}</view>
			</view>
			
			<view class="delivery">
				<view class="delivery-title">{{ $t('order_detail.delivery_service') }}</view>
				<view class="delivery-state">{{ $t('order_detail.free') }}</view>
			</view>
			
			<view class="remarks">
				<view class="remarks-title">{{ $t('order_detail.remarks') }}</view>
				<view class="remark">{{ $t('order_detail.no_remarks') }}</view>
			</view>
			
			<view class="remarks">
				<view class="remarks-title">{{ $t('order_detail.number') }}</view>
				<view class="remark">
					21212114141144125412|
					<text class="copy">{{ $t('order_detail.copy') }}</text>
				</view>
			</view>
			
			<view class="remarks">
				<view class="remarks-title">{{ $t('order_detail.time') }}</view>
				<view class="remark">2022-10-08 08:09:10</view>
			</view>
			
			<view class="tips">
				<image class="tips-logo" src="../../static/images/order/icon05.png"></image>
				<view class="tips-title">{{ $t('order_detail.rule') }}</view>
			</view>
		</view>
		
		<view class="sp-msg">
			<view class="sp-modular">
				<view class="total">{{ $t('order_detail.total') }}</view>
				<view class="total-num">$50</view>
			</view>
			
			<view class="sp-modular">
				<view class="discount">{{ $t('order_detail.discount') }}</view>
				<view class="discount-num">-$3</view>
			</view>
			
			<view class="sp-modular">
				<view class="gold-coin">{{ $t('order_detail.gold_coin') }}</view>
				<view class="gold-coin-num">-$3</view>
			</view>
			
			<view class="sp-modular">
				<view class="freight">{{ $t('order_detail.freight') }}</view>
				<view class="freight-num">+$0</view>
			</view>
		</view>
		
		<view class="bottom">
			<!-- 待收货 -->
			<template v-if="list.state == 3">
				<view class="refund-btn">{{ $t('order_detail.refund') }}</view>
				<view class="logistics-btn">{{ $t('order_detail.view_logistics') }}</view>
			</template>
			<template v-if="list.state == 2">
				<view class="refund-btn">{{ $t('order_detail.refund') }}</view>
			</template>
			
			<template v-if="list.state == 1">
				<view class="refund-btn">{{ $t('order_detail.cancel_order') }}</view>
				<view class="logistics-btn" @click="goPay">{{ $t('order_detail.payment') }}</view>
			</template>
			<template v-if="list.state == 4">
				<view class="logistics-btn">{{ $t('order_detail.cancel_refund') }}</view>
			</template>
			<template v-if="list.state == 5">
				<view class="logistics-btn">{{ $t('order_detail.evaluate') }}</view>
			</template>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: {
					order_id: 3,
					state: 1,// 1待支付  2待发货  3待接收  4取消退款  5已完成-待评论 6已完成-已评价 7.已完成-退款(不可评价)
					total_price: 500,
					total_num: 30,
					sp_lists:[{
						product_id: 1,
						url: '../../static/images/user/photo02.png',
						title: 'Liziqi Liuzhou snail powderLiziqi Liuzhou snail powder',
						price: '10',
						num: 10,
						specs: [{
							specs_id: 1,
							name: "升级款白色（送电池）"
						}],
					},{
						product_id: 2,
						url: '../../static/images/user/photo02.png',
						title: 'Liziqi Liuzhou snail powderLiziqi Liuzhou snail powder',
						price: '20',
						num: 20,
						specs: [{
							specs_id: 1,
							name: "升级款白色（送电池）"
						}],
					},{
						product_id: 1,
						url: '../../static/images/user/photo02.png',
						title: 'Liziqi Liuzhou snail powderLiziqi Liuzhou snail powder',
						price: '10',
						num: 10,
						specs: [{
							specs_id: 1,
							name: "升级款白色（送电池）"
						}],
					},{
						product_id: 2,
						url: '../../static/images/user/photo02.png',
						title: 'Liziqi Liuzhou snail powderLiziqi Liuzhou snail powder',
						price: '20',
						num: 20,
						specs: [{
							specs_id: 1,
							name: "升级款白色（送电池）"
						}],
					},{
						product_id: 1,
						url: '../../static/images/user/photo02.png',
						title: 'Liziqi Liuzhou snail powderLiziqi Liuzhou snail powder',
						price: '10',
						num: 10,
						specs: [{
							specs_id: 1,
							name: "升级款白色（送电池）"
						}],
					},{
						product_id: 2,
						url: '../../static/images/user/photo02.png',
						title: 'Liziqi Liuzhou snail powderLiziqi Liuzhou snail powder',
						price: '20',
						num: 20,
						specs: [{
							specs_id: 1,
							name: "升级款白色（送电池）"
						}],
					}]
					// sp_lists:[{
					// 	product_id: 1,
					// 	url: '../../static/images/user/photo02.png',
					// 	title: 'Liziqi Liuzhou snail powderLiziqi Liuzhou snail powder',
					// 	price: '5.6',
					// 	num: 10,
					// 	specs: [{
					// 		specs_id: 1,
					// 		name: "升级款白色（送电池）"
					// 	}],
					// }]
				},
				
			}
		},
		methods: {
			back() {
				window.history.go(-1)
			},
			
			goPay() {
				uni.navigateTo({
					url: '/pages/user/balance'
				});
			},
		}
	}
</script>

<style scoped>
	.container {
		padding-bottom: 120rpx;
	}
	/deep/ .uni-navbar--border {
		border-bottom-color: white;
	}
	.product-information{
		width: 690rpx;
		display: flex;
		flex-wrap: wrap;
		margin: 24rpx auto 0;
		padding: 0 0 50rpx 0;
		box-sizing: border-box;
		border-bottom: 2rpx solid rgba(155,155,155,0.4);
	}
	.product-information-title{
		font-size: 32rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #1A1D26;
		line-height: 38rpx;
	}
	/* 商品信息 */
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
	}
	.total_num{
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #6A6A6C;
		line-height: 35rpx;
	}
	.whole-content{
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 38rpx;
	}
	.whole-order-logo{
		width: 160rpx;
		height: 160rpx;
		border-radius: 20rpx;
	}
	.whole-msg{
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
	}
	.whole-num{
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
		font-weight: bold;
		color: #1A1D26;
		line-height: 35rpx;
		
		margin-top: 24rpx;
		text-align: left;
	}
	
	/* 运输 订单信息 */
	.delivery,.remarks{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 46rpx;
	}
	.delivery-title,.remarks-title{
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #6A6A6C;
		line-height: 35rpx;
	}
	.delivery-state{
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #1A1D26;
		line-height: 35rpx;
	}
	.remark{
		width: 440rpx;
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #6A6A6C;
		line-height: 35rpx;
		text-align: right;
	}
	.copy{
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #1A1D26;
		line-height: 35rpx
	}
	.tips{
		width: 100%;
		display: flex;
		align-items: center;
		margin-top: 44rpx;justify-content: flex-end;
	}
	.tips-logo{
		width: 32rpx;
		height: 32rpx;
	}
	.tips-title{
		max-width: 640rpx;
		font-size: 26rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #6A6A6C;
		line-height: 30rpx;
		margin-left: 12rpx;
	}
	
	/* 商品信息 */

	.sp-msg{
		padding: 46rpx 30rpx 57rpx;
	}
	.sp-modular{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.total{
		font-size: 30rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #1A1D26;
		line-height: 35rpx;
	}	.total-num{
		font-size: 30rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #ED4C4C;
		line-height: 35rpx;
	}	.discount, .discount-num, .gold-coin, .gold-coin-num, .freight, .freight-num{
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		line-height: 35rpx;
		margin-top: 43rpx;
	}
	
	/* 底部按钮 */
	.bottom{
		width: 750rpx;
		height: 120rpx;
		position: fixed;
		bottom: 0;
		background: #FFFFFF;
		border-radius: 0rpx;
		border-top: 2rpx solid rgba(155,155,155,0.4);
		padding: 0 20rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	
	.refund-btn{
		min-width: 180rpx;
		padding: 0 18rpx;
		box-sizing: border-box;
		height: 80rpx;
		background: #FFFFFF;
		border-radius: 60rpx;
		border: 2rpx solid rgba(26,29,38,0.4);
		
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		line-height: 78rpx;
		text-align: center;
	}
	
	.logistics-btn{
		min-width: 180rpx;
		padding: 0 18rpx;
		box-sizing: border-box;
		height: 80rpx;
		background: #1A1D26;
		border-radius: 60rpx;
		border: 2rpx solid #1A1D26;
		
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 78rpx;
		text-align: center;
		margin-left: 20rpx;
	}
</style>
