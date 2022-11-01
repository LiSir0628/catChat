<template>
	<view class="container">
		<!-- <uni-nav-bar fixed left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000" :title="$t('invitation.invitation')">
		</uni-nav-bar> -->
		<uni-nav-bar fixed background-color="#ffffff">
			<block slot="left">
				<view class="back" @click="back">
					<uni-icons type="back" color="#666" size="18" />
				</view>
			</block>
			<view class="area-card-modular">
				<view class="area-card-text">九亿少女的偶像 九亿少女的偶像</view>
			</view>
			<block slot="right">
				<view class="user-btn" @click="focus">{{ $t('square.focus') }}</view>
			</block>
		</uni-nav-bar>
		<view class="content">
			<view class="chat-time">Today:3:26PM</view>
			<view class="friend-modular">
				<image class="friend-photo" src="../../static/images/user/photo01.jpg"></image>
				<view class="friend-msg">
					<view class="friend-name">九亿少女的偶像ADHKA</view>
					<view class="friend-content">It's not my birthday</view>
				</view>
			</view>
			<view class="myself-modular">
				<view class="friend-msg myself-msg">
					<view class="friend-name myself-name">九亿少女的偶像ADHKA</view>
					<view class="friend-content myself-content">这个唇釉感觉很棒，很值得购 买，你这是在哪里买呢？</view>
				</view>
				<image class="friend-photo myself-photo" src="../../static/images/user/photo01.jpg"></image>
			</view>
		</view>
		
		<view class="bottom">
			<view class="send-list">
				<image class="logo01" src="../../static/images/chat/chat/icon11.png"></image>
				<input class="send" v-model="send_text" placeholder="your message">
				<image class="logo02" src="../../static/images/chat/chat/icon09.png"></image>
				<image class="logo03" src="../../static/images/chat/chat/icon01.png"></image>
				<template v-if="!send_text">
					<image class="logo04" src="../../static/images/chat/chat/icon06.png"></image>
					<image class="logo05" src="../../static/images/chat/chat/icon12.png"></image>
				</template>
				<template v-if="send_text">
					<view class="send-btn">send</view>
				</template>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				send_text: "",
			}
		},
		methods: {
			back() {
				window.history.go(-1)
			},
			
			focus() {
				console.log("确定关注、取关")
			}
		}
	}
</script>

<style scoped>
	.container {
		padding-bottom: 180rpx;
	}
	
	.back {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		width: 160rpx;
	}
	
	.area-card-modular{
		display: flex;
		align-items: center;
	}
	
	.area-card-logo{
		width: 36rpx;
		height: 44rpx;
		display: block;
	}
	
	.area-card-text{
		width: 350rpx;
		font-size: 32rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		text-align: center;
		/* margin-left: 8rpx; */
		
		overflow: hidden;
		white-space: nowrap;
		word-wrap: normal;
		text-overflow: ellipsis;
		-o-text-overflow: ellipsis;
	}
	.user-btn{
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		
		padding: 0 20rpx;
		height: 56rpx;
		text-align: center;
		line-height: 56rpx;
		background: rgba(26,29,38,0.1);
		border-radius: 60rpx;
	}
	/deep/ .uni-navbar__header-btns-left{
		/* position: static; */
	}
	/deep/ .uni-navbar__header-container {
		justify-content: center;
		padding: 0;
	}
	/deep/ .uni-navbar__header-btns-right {
		width: 180rpx !important;
		display: flex;
		position: absolute;
		right: 20rpx;
		top: 0;
		bottom: 0;
		vertical-align: middle;
		margin: auto 0;
		
	}
	/deep/ .uniui-more-filled{
		transform: rotate(90deg);
	}
	/deep/ .uni-navbar--border {
		border-bottom-color: rgba(0,0,0,0);
	}
	/* 主要内容 */
	.content {
		padding: 0 30rpx;
	}
	
	.chat-time{
		font-size: 24rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #6A6A6C;
		text-align: center;
		margin: 24rpx 0 8rpx;
	}
	
	.friend-modular{
		display: flex;
		margin-top: 30rpx;
	}
	
	.friend-photo{
		width: 72rpx;
		height: 72rpx;
		display: block;
		border-radius: 50%;
	}
	
	.friend-msg{
		max-width: 486rpx;
		margin-left: 30rpx;
		padding: 10rpx 0 0;
	}
	
	.friend-name{
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #333333;
	}
	
	.friend-content{
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		
		background: rgba(26,29,38,0.1);
		border-radius: 20rpx;
		margin-top: 16rpx;
		padding: 26rpx 28rpx;
	}
	
	.myself-modular{
		display: flex;
		justify-content: flex-end;
		margin-top: 30rpx;
	}
	.myself-msg{
		margin-left: 0;
	}
	.myself-name{
		text-align: right;
	}
	.myself-content{
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #FFFFFF;
		
		background: #1A1D26;
	}
	.myself-photo{
		margin-left: 30rpx;
	}
	
	/* 底部样式 */
	.bottom{
		width: 750rpx;
		height: 136rpx;
		box-sizing: border-box;
		background: #FFFFFF;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
		border-top: 2rpx solid #D9D9D9;
	}
	.send-list{
		display: flex;
		align-items: center;
	}
	.send{
		width: 690rpx;
		height: 96rpx;
		box-sizing: border-box;
		background: #F5F5F5;
		border-radius: 20rpx;
		margin: 20rpx auto;
		padding: 0 320rpx 4rpx 88rpx;
		
	}
	
	.logo01{
		width: 48rpx;
		height: 48rpx;
		display: block;
		position: absolute;
		top: 0;
		bottom: 0;
		margin: auto 0;
		vertical-align: middle;
		left: 58rpx;
	}
	.logo02{
		width: 48rpx;
		height: 48rpx;
		display: block;
		position: absolute;
		right: 291rpx;
	}
	.logo03{
		width: 40rpx;
		height: 40rpx;
		display: block;
		position: absolute;
		right: 224rpx;
	}
	.logo04{
		width: 56rpx;
		height: 37rpx;
		display: block;
		position: absolute;
		right: 138rpx;
	}
	.logo05{
		width: 48rpx;
		height: 45rpx;
		display: block;
		position: absolute;
		right: 60rpx;
	}
	.send-btn{
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #FFFFFF;
		
		width: 148rpx;
		height: 60rpx;
		line-height: 60rpx;
		background: #1A1D26;
		border-radius: 200rpx;
		text-align: center;
		
		position: absolute;
		right: 50rpx;
	}
</style>
