<template>
	<view class="container">
		<uni-nav-bar fixed left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000" :title="$t('information.information')">
		</uni-nav-bar>
		
		<view class="content">
			<view class="information-msg">
				<view class="information-left">
					<view class="information-title">{{ $t('information.completed') }}</view>
					<view class="information-tips">{{ $t('information.meeting') }}</view>
				</view>
				<image class="music-logo" src="../../static/images/order/information/icon01.png"></image>
			</view>
			
			<view class="sp-information">
				<view class="sp-information-title">{{ $t('information.product_information') }}</view>
				
				<view class="whole-content" v-for="item in list.sp_lists">
					<image class="whole-order-logo" :src="item.url"></image>
					<view class="whole-msg">
						<view class="whole-sp-name">{{item.title}}</view>
						<view class="whole-sp-specs">
							<template v-for="citem in item.specs">
								{{citem.name}}
							</template>
						</view>
					</view>
					<view class="whole-num">x{{item.num}}</view>
				</view>
				
				<view class="whole-price">
					{{ $t('information.pieces') }}: <text class="price-num">$962</text>
				</view>
				
				<view class="remarks">
					<view class="remarks-title">{{ $t('information.receipt') }}:</view>
					<view class="remark-state">大榕树创意园一号楼12号楼1002 九亿少女的偶像,12345678910</view>
				</view>
				
				<view class="remarks">
					<view class="remarks-title">{{ $t('information.number') }}:</view>
					<view class="remark">
						21212114141144125412|
						<text class="copy">{{ $t('information.copy') }}</text>
					</view>
				</view>
				
				<view class="remarks">
					<view class="remarks-title">{{ $t('information.method') }}:</view>
					<view class="remark">
						<image class="bank-logo" src="../../static/images/user/balance/icon10.png"></image>
					</view>
				</view>
				
				<view class="remarks">
					<view class="remarks-title">{{ $t('information.remarks') }}:</view>
					<view class="remark">{{ $t('information.no_remarks') }}</view>
				</view>
				
				<view class="remarks">
					<view class="remarks-title">{{ $t('information.create_time') }}:</view>
					<view class="remark">2022-10-08 08:09:10</view>
				</view>
				
				<view class="remarks">
					<view class="remarks-title">{{ $t('information.payment_time') }}:</view>
					<view class="remark">2022-10-08 08:09:10</view>
				</view>
				
				<view class="remarks">
					<view class="remarks-title">{{ $t('information.close_time') }}:</view>
					<view class="remark">2022-10-08 08:09:10</view>
				</view>		
			</view>
		</view>
		
		<view class="bottom">
			<!-- 待评价 -->
			<template v-if="list.state == 5">
				<view class="logistics-btn">{{ $t('information.to_evaluate') }}</view>
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
					state: 5,// 1待支付  2待发货  3待接收  4取消退款  5已完成-待评论 6已完成-已评价 7.已完成-退款(不可评价)
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
		}
	}
</script>

<style scoped>
	.container {
		padding-bottom: 180rpx;
	}
	/deep/ .uni-navbar--border {
		border-bottom-color: white;
	}
	.content {
		padding: 24rpx 30rpx 0;
	}
	
	.information-msg{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 38rpx;
		border-bottom: 2rpx solid rgba(155,155,155,0.4);
	}	.information-left{
		
	}	.information-title{
		font-size: 40rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #ED4C4C;
		line-height: 47rpx;
	}	.information-tips{
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		line-height: 35rpx;
		margin-top: 12rpx;
	}	.music-logo{
		width: 72rpx;
		height: 72rpx;
	}
	
	/* 商品信息 */
	.sp-information{
		margin-top: 36rpx;
	}
	.sp-information-title{
		font-size: 32rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #1A1D26;
		line-height: 38rpx;
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
		color: #1A1D26;
		line-height: 35rpx;
		
		margin-top: 28rpx;
		text-align: right;
	}
	
	.price-num{
		font-weight: bold;
		color: #ED4C4C;
	}
	
	/* 订单信息 */
	.remarks{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 46rpx;
	}
	.remarks-title{
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #6A6A6C;
		line-height: 35rpx;
	}
	.remark-state{
		width: 460rpx;
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
	
	.bank-logo{
		width: 64rpx;
		height: 64rpx;
	}
	
	.copy{
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #1A1D26;
		line-height: 35rpx
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
		padding: 0 30rpx;
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
