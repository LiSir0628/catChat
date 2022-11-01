<template>
	<view class="container">
		<image class="banner" src="../../static/images/user/card/icon01.png"></image>
		<!-- <uni-nav-bar fixed background-color="rgba(0,0,0,0)"> -->
		<uni-nav-bar fixed background-color="rgb(245,247,249)">
			<block slot="left">
				<view class="back" @click="back">
					<uni-icons type="back" color="#666" size="18" />
				</view>
			</block>
			<view class="area-card-modular">
				<image class="area-card-logo" src="../../static/images/square/icon05.png"></image>
				<view class="area-card-text">Fuzhou City</view>
			</view>
			<block slot="right">
				<uni-icons type="more-filled" color="#666" size="18" />	
			</block>
		</uni-nav-bar>
		
		<view class="user-card-msg">
			<image class="user-card-photo" src="../../static/images/user/photo01.jpg"></image>
			<view class="user-card-name-modular">
				<view class="user-card-name">Michael jackson</view>
				<image class="grade-logo" src="../../static/images/user/card/icon02.png"></image>
			</view>
			<view class="user-card-age">{{ $t('user_card.female') }} , 26 {{ $t('user_card.years_old') }} , {{ $t('user_card.single') }}</view>
			<view class="span-lists">
				<view class="span-list">Social expert</view>
				<view class="span-list">Handsome boy</view>
				<view class="span-list">lovely</view>
				...
			</view>
		</view>
		
		<view class="content">
			<scroll-view class="nav-lists" scroll-x="true" @scroll="scroll"
				:show-scrollbar="false">
				<view class="nav-list">
					<view class="nav-sort" v-for="item,index in sortList" :class="{'nav-sort-active': cindex == index}" @click="goSort(index)">
						{{item.title}}
					</view>
				</view>
			</scroll-view>
			
			<view class="square-lists" v-if="cindex == 0">
				<view class="square-list" @click="goDetail">
					<!-- <image class="user-logo" src="../../static/images/user/photo02.png"></image> -->
					<view class="user-notice">
						<view class="user-msg">
							<view class="user-msg-top"> 
								<view class="user-time">2022-08-02 22:12:12</view>
							</view>
						</view>
						<view class="space-title">你见过最阴暗的事是什么？</view>
						<view class="space-content">
							<view class="space-text">我有个女性朋友，叫许晴，在西南某大学读 研，然后去云南旅游的时候被人贩子差点给骗了</view>
						</view>
						<view class="space-images" @click.stop="previewImage">
							<view class="space-image-list">
								<image class="space-image" src="../../static/images/user/photo03.jpg"></image>
							</view>
							<view class="space-image-list">
								<image class="space-image" src="../../static/images/user/photo04.jpg"></image>
							</view>
							<view class="space-image-list">
								<image class="space-image" src="../../static/images/user/photo05.jpg"></image>
							</view>
							<view class="space-image-list">
								<image class="space-image" src="../../static/images/user/photo06.jpg"></image>
							</view>
						</view>
						<view class="space-topic-lists">
							<view class="space-topic">#痛苦的事</view>
							<view class="space-topic">#内心深处的秘密</view>
							<view class="space-topic">#痛苦的事</view>
							<view class="space-topic">#内心深处的秘密</view>
						</view>
						
						<view class="reward-modular">
							<view class="reward-user">
								<image class="reward-user-logo" src="../../static/images/user/photo02.png"></image>
								<image class="reward-user-logo" src="../../static/images/user/photo02.png"></image>
								<image class="reward-user-logo" src="../../static/images/user/photo02.png"></image>
								<image class="reward-user-logo" src="../../static/images/user/photo02.png"></image>
								<image class="reward-user-logo" src="../../static/images/user/photo02.png"></image>
							</view>
							<view class="reward-sm">105 {{ $t('user_card.people_rewarded') }}</view>
						</view>
						
						<view class="talk-modular">
							<!-- <view class="area-modular">
								<image class="area-logo" src="../../static/images/square/icon05.png"></image>
								<view class="area-text">Fuzhou City</view>
							</view> -->
							<view class="talk-lists">
								<view class="talk-list">
									<image class="talk-logo" src="../../static/images/square/icon07.png"></image>
									<!-- <image class="talk-logo" src="../../static/images/square/icon08.png"></image> -->
									<view class="talk-text">15</view>
								</view>
								<view class="talk-list">
									<image class="talk-logo" src="../../static/images/square/icon09.png"></image>
									<!-- <image class="talk-logo" src="../../static/images/square/icon10.png"></image> -->
									<view class="talk-text">15</view>
								</view>
							</view>
						</view>
					</view>
				</view>	
			</view>
			
			<view class="square-lists" v-if="cindex == 1">
				<view class="user-list">
					<view class="focus-user">
						<image class="focus-user-photo" src="../../static/images/user/photo01.jpg"></image>
						<view class="focus-user-msg">
							<view class="focus-user-name">九亿少女的偶像ADHKA</view>
							<view class="focus-user-gender">Handsome boy</view>
						</view>
					</view>
					<view class="close-focus">{{ $t('user_card.close') }}</view>
				</view>
				<view class="user-list">
					<view class="focus-user">
						<image class="focus-user-photo" src="../../static/images/user/photo01.jpg"></image>
						<view class="focus-user-msg">
							<view class="focus-user-name">九亿少女的偶像ADHKA</view>
							<view class="focus-user-gender">Handsome boy</view>
						</view>
					</view>
					<view class="close-focus">{{ $t('user_card.focus') }}</view>
				</view>
			</view>
			
			<view class="square-lists" v-if="cindex == 2">
				<view class="user-list">
					<view class="focus-user">
						<image class="focus-user-photo" src="../../static/images/user/photo01.jpg"></image>
						<view class="focus-user-msg">
							<view class="focus-user-name">九亿少女的偶像ADHKA</view>
							<view class="focus-user-gender">Handsome boy</view>
						</view>
					</view>
					<view class="close-focus">{{ $t('user_card.close') }}</view>
				</view>
				<view class="user-list">
					<view class="focus-user">
						<image class="focus-user-photo" src="../../static/images/user/photo01.jpg"></image>
						<view class="focus-user-msg">
							<view class="focus-user-name">九亿少女的偶像ADHKA</view>
							<view class="focus-user-gender">Handsome boy</view>
						</view>
					</view>
					<view class="close-focus">{{ $t('user_card.focus') }}</view>
				</view>
			</view>
			
			<view class="square-lists" v-if="cindex == 3">
				<view class="user-list">
					<view class="focus-user">
						<image class="focus-user-photo" src="../../static/images/user/photo01.jpg"></image>
						<view class="focus-user-msg">
							<view class="focus-user-name">九亿少女的偶像ADHKA</view>
							<view class="focus-user-gender">+500 {{ $t('user_card.gold_coin') }}</view>
						</view>
					</view>
					<view class="close-focus">{{ $t('user_card.close') }}</view>
				</view>
				<view class="user-list">
					<view class="focus-user">
						<image class="focus-user-photo" src="../../static/images/user/photo01.jpg"></image>
						<view class="focus-user-msg">
							<view class="focus-user-name">九亿少女的偶像ADHKA</view>
							<view class="focus-user-gender">+500 {{ $t('user_card.gold_coin') }}</view>
						</view>
					</view>
					<view class="close-focus">{{ $t('user_card.focus') }}</view>
				</view>
			</view>
			
			<view class="camera-lists" v-if="cindex == 4">
				<view class="camera-list all-list">
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
				</view>
			</view>
			
			<view class="camera-lists" v-if="cindex == 5">
				<view class="camera-list all-list">
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
				</view>
			</view>
			
		</view>
		
		<view class="card-bottom">
			<view class="focus">{{ $t('user_card.focus') }}</view>
			<view class="message">{{ $t('user_card.message') }}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cindex: 0,
				sortList: [{
					id: 1,
					title: this.$t('user_card').menyedihkan
				},{
					id: 2,
					title: this.$t('user_card').focus
				},{
					id: 3,
					title: this.$t('user_card').getting_noticed
				},{
					id: 4,
					title: this.$t('user_card').reward
				},{
					id: 5,
					title: this.$t('user_card').album
				},{
					id: 6,
					title: this.$t('user_card').video
				}]
			}
		},
		methods: {
			back() {
				window.history.go(-1)
			},
			
			scroll(e) {
				//this.scrollLeft = e.detail.scrollLeft
				// console.log(e)
				// console.log(this.scrollLeft)
			},
			
			goSort(index) {
				if(this.cindex == index ) return
				this.cindex = index
			},
			
			goDetail() {
				uni.navigateTo({
					url: '/pages/square/squareDetails'
				});
			},
			previewImage() {
				uni.previewImage({
					current: "https://api.domefish.com/storage/banner/6a3b5aeb6638e3c3eb166cf173cc4efe.png",
					urls: ["https://api.domefish.com/storage/banner/6a3b5aeb6638e3c3eb166cf173cc4efe.png","https://api.domefish.com/storage/banner/7c29347477ba440a4ad17e9e3adc1e6e.png","https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/3639a3488a93425ca108e9ce85cc6f40~tplv-dx0w9n1ysr-origin-jpeg.jpeg"],
				});
			},
		}
	}
</script>

<style scoped>
	.container {
		padding-bottom: 140rpx;
	}
	
	.banner{
		width: 750rpx;
		height: 886rpx;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
	}

	.back {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		width: 160rpx;
		margin-left: 4px;
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
		font-size: 32rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #ED4C4C;
		margin-left: 8rpx;
	}
	
	/deep/ .uni-navbar__header-container {
		justify-content: flex-end;
		padding: 0;
	}
	/deep/ .uni-navbar__header-btns-right {
		width: 48rpx !important;
		display: flex;
	}
	/deep/ .uniui-more-filled{
		transform: rotate(90deg);
	}
	/deep/ .uni-navbar--border {
		border-bottom-color: rgba(0,0,0,0);
	}
	
	/* 用戶信息 */
	.user-card-msg{
		padding: 60rpx 0;
	}
	.user-card-photo{
		width: 140rpx;
		height: 140rpx;
		display: block;
		box-shadow: 0rpx 6rpx 10rpx 0rpx rgba(0,0,0,0.2);
		border-radius: 30rpx;
		margin:0 auto;
	}
	.user-card-name-modular{
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 40rpx;
	}
	.user-card-name{
		font-size: 34rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #1A1D26;
	}
	.grade-logo{
		width: 42rpx;
		height: 42rpx;
		display: block;
		margin-left: 12rpx;
	}
	.user-card-age{
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #333333;
		margin: 18rpx auto;
		text-align: center;
	}
	.span-lists{
		margin: 10rpx auto 0;
		display: flex;
		justify-content: center;
	}
	.span-list{
		padding: 0 19rpx;
		height: 56rpx;
		line-height: 56rpx;
		background: rgba(26,29,38,0.1);
		border-radius: 60rpx;
		
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		text-align: center;
		margin-right: 20rpx;
	}
	/* 主要內容 */
	.content{	
		width: 750rpx;
		min-height: 600rpx;
		padding: 40rpx 30rpx 0;
		background: #ffffff;
		box-sizing: border-box;
		border-radius: 40rpx 40rpx 0rpx 0rpx
	}
	
	/deep/ ::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}
	
	.nav-lists{
		width: 690rpx;
		white-space: nowrap;
		border-bottom: 2rpx solid rgba(155,155,155,0.4);
	}
	
	.nav-list{
		display: flex;
	}
	
	.nav-sort{
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #6A6A6C;
		margin-right: 52rpx;
		padding: 0 0 14rpx;
	}
	
	.nav-sort-active{
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #1A1D26;
		border-bottom: 4rpx solid #1A1D26;
	}
	
	/* 广场话题 */
	.square-lists{
		width: 690rpx;
		margin: 40rpx auto 0;
		padding: 0 10rpx;
		box-sizing: border-box;
	}
	.square-list{
		display: flex;
		margin-bottom: 60rpx;
	}
	.user-logo{
		width: 88rpx;
		height: 88rpx;
		border-radius: 50%;
		margin-right: 28rpx;
	}
	.user-notice{
		width: 670rpx;
		box-sizing: border-box;
	}
	.user-msg{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.user-msg-top{
		width: 600rpx;
	}
	.user-name{
		font-size: 28rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #6A6A6C;
		overflow: hidden;
		white-space: nowrap;
		word-wrap: normal;
		text-overflow: ellipsis;
		-o-text-overflow: ellipsis;
	}
	.user-time{
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #6A6A6C;
		margin-top: 8rpx;
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
	/* 话题说说 */
	.space-title{
		font-size: 34rpx;
		font-family: Inter-SemiBold;
		font-weight: bold;
		color: #1A1D26;
		margin-top: 20rpx;
		padding-bottom: 12rpx;
		
		overflow: hidden;
		white-space: nowrap;
		word-wrap: normal;
		text-overflow: ellipsis;
		-o-text-overflow: ellipsis;
	}
	.space-content{
		padding: 6rpx 0 10rpx 0;
	}
	.space-text{
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #333333;
		/* margin-top: 16rpx; */
		
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	.space-images{
		display: flex;
		flex-wrap: wrap;
		margin-top: 10rpx;
	}
	.space-image-list{
		width: 210rpx;
		height: 210rpx;
		overflow: hidden;
		border-radius: 20rpx;
		margin: 0 10rpx 10rpx 0;
	}
	.space-image{
		width: 210rpx;
		height: 210rpx;
		border-radius: 20rpx;
		display: block;
		margin: 0 10rpx 10rpx 0;
	}
	.space-topic-lists{
		display: flex;
		flex-wrap: wrap;
		margin-top: 20rpx;
	}
	.space-topic{
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		padding: 8rpx 20rpx;
		margin: 0 10rpx 10rpx 0;
		
		background: #FFFFFF;
		border-radius: 40rpx;
		border: 2rpx solid rgba(106,106,108,0.4);
	}
	
	.reward-modular{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-top: 20rpx;
		padding-bottom: 12rpx;
	}
	
	.reward-user{
		display: flex;
		align-items: center;
	}
	
	.reward-user-logo{
		width: 56rpx;
		height: 56rpx;
		border: 2rpx solid #ffffff;
		box-sizing: border-box;
		border-radius: 50%;
		margin-right: -26rpx;
	}
	
	.reward-sm{
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		margin-left: 38rpx;
	}
	
	.area-modular{
		display: flex;
		align-items: center;
		display: none;
	}
	
	.area-logo{
		width: 36rpx;
		height: 44rpx;
		display: block;
	}
	
	.area-text{
		font-size: 32rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #ED4C4C;
		margin-left: 8rpx;
	}
	
	.talk-modular{
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 26rpx;
	}
	.talk-lists{
		display: flex;
		align-items: center;
		margin: 0 0 0 auto;
	}
	.talk-list{
		display: flex;
		align-items: center;
		margin-left: 28rpx;
	}
	.talk-logo{
		width: 42rpx;
		height: 38rpx;
		display: block;
	}
	.talk-text{
		margin-left: 8rpx;
		font-size: 28rpx;
		font-family: Inter-Regular;
		color: #6A6A6C;
	}
	
	/* 被关注用户列表 */
	.user-list{
		width: 690rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 30rpx;
		border-bottom: 2rpx solid rgba(217,217,217,0.4);
		margin-bottom: 30rpx;
	}
	.user-list:nth-last-child(1) {
		border-bottom: none;
	}
	.focus-user{
		width: 512rpx;
		display: flex;
		align-items: center;
	}	.focus-user-photo{
		width: 112rpx;
		height: 112rpx;
		display: block;
		border-radius: 50%;
	}	.focus-user-msg{
		width: 380rpx;
		margin-left: 20rpx;
	}	.focus-user-name{
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #000000;
	}	.focus-user-gender{
		font-size: 26rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #6A6A6C;
		margin-top: 16rpx;
	}	.close-focus{
		min-width: 100rpx;
		padding: 0 10rpx;
		height: 56rpx;
		background: rgba(26,29,38,0.1);
		border-radius: 60rpx;
		
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		text-align: center;
		line-height: 56rpx;
	}
	/* 相册 */
	.camera-lists{
		width: 690rpx;
		margin: 40rpx auto 0;
		box-sizing: border-box;
	}
	.camera-list {
		width: 690rpx;
		margin: 50rpx auto 0;
		display: flex;
		flex-wrap: wrap;
		padding-bottom: 60rpx;
	}
	
	.camera {
		width: 210rpx;
		height: 280rpx;
		margin: 0 10rpx 20rpx;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
	}
	
	.video-list {
		width: 690rpx;
		margin: 50rpx auto 0;
		display: flex;
		flex-wrap: wrap;
		padding-bottom: 120rpx;
	}
	
	/* 底部按鈕 */
	.card-bottom{
		width: 690rpx;
		padding: 0 30RPX;
		height: 128rpx;
		background: #FFFFFF;
		
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: fixed;
		bottom: 0;
		border-top: 2rpx solid #E9E9EA;
	}
	.focus{
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
	}
	.message{
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
	}
</style>
