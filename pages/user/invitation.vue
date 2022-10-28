<template>
	<view class="container">
		<uni-nav-bar fixed left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000" :title="$t('invitation.invitation')">
		</uni-nav-bar>
		
		<view class="content">
			<view class="invitation-msg">
				<view class="invitation-id">{{ $t('invitation.id') }}：89596665</view>
				<image class="copy-logo" src="../../static/images/user/icon18.png" @click="copy('89596665')"></image>
			</view>
			<input class="search-id" :placeholder="$t('invitation.placeholder')">
			
			<!-- <view class="banner">
				<image class="banner-logo" src="../../static/images/user/wallet/icon01.png"></image>
				<view class="gold-coins">
					<view class="gold-coins-title">
						<view class="gold-coins-title-text">{{ $t('wallet.coins') }}</view>
						<image class="gold-coins-title-arrow" src="../../static/images/user/wallet/icon03.png"></image>
					</view>
					<view class="gold-coins-price">1000</view>
				</view>
				<view class="fund">
					<view class="gold-coins-title">
						<view class="gold-coins-title-text">{{ $t('wallet.fund') }}</view>
						<image class="gold-coins-title-arrow" src="../../static/images/user/wallet/icon03.png"></image>
					</view>
					<view class="gold-coins-price">2.81</view>
				</view>
			</view> -->
			
			<view class="invitation-record">
				<view class="record-title">{{ $t('invitation.my_invitation') }}</view>
				<view class="record-lists">
					<view class="record-list">
						<image class="photo" src="../../static/images/user/photo01.jpg"></image>
						<view class="user-msg">
							<view class="user-name">九亿少女的偶像ADHKA</view>
							<view class="invitation-time">Today:3:26PM</view>
						</view>
						<view class="score">+100</view>
					</view>
					<view class="record-list">
						<image class="photo" src="../../static/images/user/photo01.jpg"></image>
						<view class="user-msg">
							<view class="user-name">九亿少女的偶像ADHKA</view>
							<view class="invitation-time">Today:3:26PM</view>
						</view>
						<view class="score">+100</view>
					</view>
					<view class="record-list">
						<image class="photo" src="../../static/images/user/photo01.jpg"></image>
						<view class="user-msg">
							<view class="user-name">九亿少女的偶像ADHKA</view>
							<view class="invitation-time">Today:3:26PM</view>
						</view>
						<view class="score">+100</view>
					</view>
					<view class="record-list">
						<image class="photo" src="../../static/images/user/photo01.jpg"></image>
						<view class="user-msg">
							<view class="user-name">九亿少女的偶像ADHKA</view>
							<view class="invitation-time">Today:3:26PM</view>
						</view>
						<view class="score">+100</view>
					</view>
					<view class="record-list">
						<image class="photo" src="../../static/images/user/photo01.jpg"></image>
						<view class="user-msg">
							<view class="user-name">九亿少女的偶像ADHKA</view>
							<view class="invitation-time">Today:3:26PM</view>
						</view>
						<view class="score">+100</view>
					</view>
				</view>		
			</view>
		</view>
		
		<notice-top ref="noticeTop" :text="text"></notice-top>
	</view>
</template>

<script>
	import noticeTop from '@/pages/common/noticeTop.vue'
	export default {
		data() {
			return {
				text: this.$t('invitation').clipboard,
			}
		},
		components: {
			noticeTop
		},
		methods: {
			back() {
				window.history.go(-1)
			},
			copy(text) {
				text = text.replace(/<[^>]+>/g, '').replace(/&nbsp;/ig, '').replace(/\s/g, '')
				// #ifdef H5
				this.$copyText(text).then(
					res => {
						this.$refs.noticeTop.open()
						// uni.showToast({
						// 	title: this.$t('common').success
						// })
					}
				)
				// #endif
				// #ifndef H5
				uni.setClipboardData({
					data: text,
					success: () => {
						this.$refs.noticeTop.open()
						// uni.showToast({
						// 	title: this.$t('common').success
						// })
					}
				})
				// #endif
			},
		}
	}
</script>

<style scoped>
	.container {
		padding-bottom: 20rpx;
	}
	/deep/ .uni-navbar--border {
		border-bottom-color: white;
	}
	.content {
		padding: 24rpx 30rpx 0;
	}
	
	.invitation-msg{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.invitation-id{
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #1A1D26;
	}
	.copy-logo{
		width: 30rpx;
		height: 34rpx;
		display: block;
	}
	
	.search-id{
		margin-top: 16rpx;
		padding: 18rpx 20rpx 18rpx 0;
		border-bottom: 2rpx solid #9B9B9B;
		
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		/* color: #999999; */
	}
	/* 金币 */
	.banner{
		width: 690rpx;
		margin: 50rpx auto 0;
		position: relative;
	}
	
	.banner-logo{
		width: 690rpx;
		height: 200rpx;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		display: block;
	}
	
	.gold-coins{
		position: absolute;
		top: 49rpx;
		left: 28rpx;
	}
	
	.fund{
		position: absolute;
		top: 49rpx;
		left: 386rpx;
		/* right: 117rpx; */
	}
	
	.gold-coins-title{
		display: flex;
		align-items: center;
	}
	
	.gold-coins-title-text{
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: rgba(255,255,255,0.8);
		line-height: 33rpx;
	}
	
	.gold-coins-title-arrow{
		width: 12rpx;
		height: 22rpx;
		margin-left: 8rpx;
	}
	
	.gold-coins-price{
		font-size: 40rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #FFFFFF;
		line-height: 47rpx;
		margin-top: 20rpx;
	}
	
	/* 邀请列表 */
	.invitation-record{
		margin-top: 54rpx;
	}
	.record-title{
		font-size: 30rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #000000;
	}
	.record-lists{
		margin-top: 20rpx;
	}
	.record-list{
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 30rpx;
		padding-bottom: 30rpx;
		border-bottom: 2rpx solid #D9D9D9;
	}
	.record-list:nth-last-child(1){
		border-bottom: none;
	}
	.photo{
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
		display: block;
	}
	.user-msg{
		width: 370rpx;
		margin-left: 20rpx;
	}
	.user-name{
		font-size: 28rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #333333;
	}
	.invitation-time{
		font-size: 24rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #6A6A6C;
		margin-top: 20rpx;
	}
	.score{
		width: 180rpx;
		text-align: right;
		word-break: break-all;
	}
	
</style>
