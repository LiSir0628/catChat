<template>
	<view class="container">
		<uni-nav-bar fixed left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000" :title="$t('square_details.content_details')">
		</uni-nav-bar>
		
		<view class="content" :style="contentHeight">
			<view class="square-list">
				<image class="user-logo" src="../../static/images/user/photo02.png"></image>
				<view class="user-notice">
					<view class="user-msg">
						<view class="user-msg-top"> 
							<view class="user-name">九亿少女的偶像ADHKA</view>
							<view class="user-time">2022-08-02 22:12:12</view>
						</view>
						<view class="user-btn">{{ $t('square_details.focus') }}</view>
					</view>
				</view>
			</view>
			
			<view class="meny-list">
				<view class="meny">
					<view class="space-title">你见过最阴暗的事是什么？</view>
					<view class="space-content">
						<view class="space-text">我有个女性朋友，叫许晴，在西南某大学读 研，然后去云南旅游的时候被人贩子差点给骗了</view>
					</view>
					<view class="space-images" @click.stop="previewImage">
						<view class="space-image-list">
							<image class="space-image" mode="widthFix" src="../../static/images/user/photo03.jpg"></image>
						</view>
						<view class="space-image-list">
							<image class="space-image" mode="widthFix" src="../../static/images/user/photo04.jpg"></image>
						</view>
						<view class="space-image-list">
							<image class="space-image" mode="widthFix" src="../../static/images/user/photo05.jpg"></image>
						</view>
						<view class="space-image-list">
							<image class="space-image" mode="widthFix" src="../../static/images/user/photo06.jpg"></image>
						</view>
					</view>
					<view class="space-topic-lists">
						<view class="space-topic">#痛苦的事</view>
						<view class="space-topic">#内心深处的秘密</view>
						<view class="space-topic">#痛苦的事</view>
						<view class="space-topic">#内心深处的秘密</view>
					</view>
					<!-- <view class="meny-comment">Very beautiful scenery</view>
					<image class="meny-logo" src="../../static/images/user/photo03.jpg" @click="previewImage"></image> -->
					<view class="reward-modular">
						<view class="talk-modular">
							<view class="talk-list">
								<image class="talk-logo" src="../../static/images/user/icon19.png"></image>
								<view class="talk-text">150</view>
							</view>
							<view class="talk-list">
								<image class="talk-logo" src="../../static/images/user/icon26.png"></image>
								<view class="talk-text">150</view>
							</view>
							<view class="talk-list">
								<image class="talk-logo-zan" src="../../static/images/square/icon07.png"></image>
								<!-- <image class="talk-logo" src="../../static/images/square/icon08.png"></image> -->
								<view class="talk-text">150</view>
							</view>
							<view class="talk-list">
								<image class="talk-logo-zan" src="../../static/images/square/icon09.png"></image>
								<!-- <image class="talk-logo" src="../../static/images/square/icon10.png"></image> -->
								<view class="talk-text">150</view>
							</view>
						</view>
					</view>
					<view class="reward">{{ $t('square_details.reward') }}</view>
					<view class="rewarded-num">105 {{ $t('square_details.people_rewarded') }}</view>
					<view class="reward-user">
						<image class="reward-user-logo" src="../../static/images/user/photo02.png"></image>
						<image class="reward-user-logo" src="../../static/images/user/photo02.png"></image>
						<image class="reward-user-logo" src="../../static/images/user/photo02.png"></image>
						<image class="reward-user-logo" src="../../static/images/user/photo02.png"></image>
						<image class="reward-user-logo" src="../../static/images/user/photo02.png"></image>
						<view>...</view>
					</view>
				</view>
			</view>
			
			<view class="comment-modular">
				<view class="comment-title">{{ $t('square_details.comments') }} 163</view>
				<view class="comment-lists">
					<view class="comment-list">
						<view class="comment-top">
							<image class="comment-user-logo" src="../../static/images/user/photo01.jpg"></image>
							<view class="comment-user-msg">
								<view class="comment-user-name">宋亚轩最粗的腿毛</view>
								<view class="comment-user-topic">我发现了出一部电视剧，就一大堆 的无脑cp粉在嗑</view>
								<view class="comment-user-addressList">
									<view class="comment-user-address">05-03 {{ $t('square_details.ip') }} 广州</view>
									<view class="comment-user-reply">{{ $t('square_details.reply') }}</view>
								</view>
							</view>
							<view class="love-modluar">
								<!-- <image class="love-logo" src="../../static/images/square/icon11.png"></image> -->
								<image class="love-logo" src="../../static/images/square/icon12.png"></image>
								<view class="love-num">8.7w</view>
							</view>
						</view>
						<view class="comment-more">
							<view class="comment-top-more">
								<image class="comment-user-logo" src="../../static/images/user/photo01.jpg"></image>
								<view class="comment-user-msg-more">
									<view class="comment-user-name">宋亚轩最粗的腿毛</view>
									<view class="comment-user-topic">我发现了出一部电视剧，就一大堆 的无脑cp粉在嗑</view>
									<view class="comment-user-addressList">
										<view class="comment-user-address">05-03 {{ $t('square_details.ip') }} 广州</view>
										<view class="comment-user-reply">{{ $t('square_details.reply') }}</view>
									</view>
								</view>
								<view class="love-modluar">
									<image class="love-logo" src="../../static/images/square/icon11.png"></image>
									<!-- <image class="love-logo" src="../../static/images/square/icon12.png"></image> -->
									<view class="love-num">8.7w</view>
								</view>
							</view>
							<view class="more-modular">
								<view class="more">{{ $t('square_details.expand_more_reviews') }}</view>
								<image class="arrow-logo" src="../../static/images/square/icon13.png"></image>
							</view>
						</view>
					</view>
					
					<view class="comment-list">
						<view class="comment-top">
							<image class="comment-user-logo" src="../../static/images/user/photo01.jpg"></image>
							<view class="comment-user-msg">
								<view class="comment-user-name">宋亚轩最粗的腿毛</view>
								<view class="comment-user-topic">我发现了出一部电视剧，就一大堆 的无脑cp粉在嗑</view>
								<view class="comment-user-addressList">
									<view class="comment-user-address">05-03 {{ $t('square_details.ip') }} 广州</view>
									<view class="comment-user-reply">{{ $t('square_details.reply') }}</view>
								</view>
							</view>
							<view class="love-modluar">
								<!-- <image class="love-logo" src="../../static/images/square/icon11.png"></image> -->
								<image class="love-logo" src="../../static/images/square/icon12.png"></image>
								<view class="love-num">8.7w</view>
							</view>
						</view>
						<view class="comment-more">
							<view class="comment-top-more">
								<image class="comment-user-logo" src="../../static/images/user/photo01.jpg"></image>
								<view class="comment-user-msg-more">
									<view class="comment-user-name">宋亚轩最粗的腿毛</view>
									<view class="comment-user-topic">我发现了出一部电视剧，就一大堆 的无脑cp粉在嗑</view>
									<view class="comment-user-addressList">
										<view class="comment-user-address">05-03 {{ $t('square_details.ip') }} 广州</view>
										<view class="comment-user-reply">{{ $t('square_details.reply') }}</view>
									</view>
								</view>
								<view class="love-modluar">
									<image class="love-logo" src="../../static/images/square/icon11.png"></image>
									<!-- <image class="love-logo" src="../../static/images/square/icon12.png"></image> -->
									<view class="love-num">8.7w</view>
								</view>
							</view>
							<view class="more-modular">
								<view class="more">{{ $t('square_details.expand_more_reviews') }}</view>
								<image class="arrow-logo" src="../../static/images/square/icon13.png"></image>
							</view>
						</view>
					</view>
					
					<view class="no_more">{{ $t('square_details.no_more') }}</view>
				</view>
			</view>
			
			<view class="comment-bottom">
				<input class="comment-text" :placeholder="$t('square_details.comment_placeholder')"/>
				<view class="commit-btn">{{ $t('square_details.published') }}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				contentHeight: {
					'height': '1080rpx'
				},
			}
		},
		onLoad(option) {
			var that = this;
			uni.getSystemInfo({
				success(res) {
					// #ifdef MP-WEIXIN
					if (res.windowHeight > 568) {
						// that.showListActive.height = (res.windowHeight - 52 - 90 - 27 - 10) + "px"
					}
					// #endif
			
					// #ifdef H5
					if (res.windowHeight > 568) {
						that.contentHeight.height = (res.windowHeight - 44 - 60) + "px"
					}
					// #endif
				},
			})
		},
		methods: {
			back() {
				window.history.go(-1)
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
		/* padding-bottom: 120rpx; */
	}
	
	/* /deep/ .uni-navbar{
		width: 750rpx;
		margin: 0 auto;
	}
	/deep/ .uni-navbar__content{
		width: 750rpx;
		margin: 0 auto;
	}
	/deep/ .uni-navbar__header{
		width: 710rpx;
		margin: 0 auto;
	} */
	
	/deep/ .uni-navbar--border {
		border-bottom-color: white;
	}
	
	.content {
		width: 690rpx;
		position: fixed;
		top: 88rpx;
		left: 0;
		right: 0;
		margin: 0 auto;
		padding: 24rpx 30rpx 120rpx;
		/* padding: 24rpx 30rpx 0; */
		overflow: hidden;
		overflow-y: auto;
	}
	
	/* 广场话题 */
	.square-lists{
		width: 690rpx;
		margin: 50rpx auto 0;
	}
	.square-list{
		display: flex;
		margin-bottom: 34rpx;
	}
	.user-logo{
		width: 88rpx;
		height: 88rpx;
		border-radius: 50%;
		margin-right: 28rpx;
	}
	.user-notice{
		width: 574rpx;
		box-sizing: border-box;
	}
	.user-msg{
		height: 88rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.user-msg-top{
		
	}
	.user-name{
		font-size: 28rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #6A6A6C;
	}
	.user-time{
		font-size: 24rpx;
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
	
	.meny-list {
		width: 690rpx;
		margin: 0 auto;
		padding-bottom: 80rpx;
		text-align: left;
		border-bottom: 2rpx solid rgba(217,217,217,0.5);
	}
	
	.meny{
		/* margin-bottom: 54rpx; */
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
		width: 690rpx;
		max-height: 600rpx;
		overflow: hidden;
		border-radius: 20rpx;
		margin: 0 10rpx 10rpx 0;
	}
	.space-image{
		width: 690rpx;
		/* height: 210rpx; */
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
	
	.meny-time {
		font-size: 28rpx;
		line-height: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #6A6A6C;
	}
	
	.meny-comment {
		font-size: 30rpx;
		line-height: 35rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		margin-top: 16rpx;
	}
	
	.meny-logo {
		width: 690rpx;
		max-height: 690rpx;
		margin-top: 29rpx;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		display: block;
	}
	.reward-modular{
		display: flex;
		justify-content: space-between;
		margin-top: 30rpx;
	}
	.reward{
		width: max-content;
		padding: 0 30rpx;
		/* width: 160rpx; */
		height: 64rpx;
		background: #1A1D26;
		border-radius: 100rpx;
		
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #FFFFFF;
		text-align: center;
		line-height: 64rpx;
		
		margin: 60rpx auto 0;
	}
	.rewarded-num{
		font-size: 32rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #1A1D26;
		margin-top: 40rpx;
		text-align: center;
	}
	.reward-user{
		display: flex;
		justify-content: center;
		align-items: flex-end;
		margin-top: 38rpx;
	}
	.reward-user-logo{
		width: 72rpx;
		height: 72rpx;
		border-radius: 50%;
		margin-right: 10rpx;
		display: block;
	}
	
	.talk-modular{
		width: 690rpx;
		/* background-color: red; */
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.talk-list{
		/* width: 345rpx; */
		display: flex;
		align-items: center;
		/* margin-left: 28rpx; */
	}
	.talk-logo{
		width: 48rpx;
		height: 48rpx;
		display: block;
	}
	.talk-logo-zan{
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
	
	/* 评论模块 */
	.comment-modular{
		padding: 60rpx 0;
	}
	.comment-title{
		font-size: 34rpx;
		font-family: Inter-SemiBold;
		font-weight: normal;
		color: #000000;
	}
	.comment-lists{
		margin-top: 45rpx;
	}
	.comment-list{
		margin-bottom: 46rpx;
	}
	.comment-top{
		display: flex;
		justify-content: space-between;
	}
	.comment-more{
		width: 604rpx;
		right: 0;
		margin: 35rpx 0 0 auto;
	}
	.comment-top-more{
		display: flex;
		justify-content: space-between;
		margin-bottom: 40rpx;
	}
	.comment-user-logo{
		width: 72rpx;
		height: 72rpx;
		display: block;
		border-radius: 50%;
	}
	
	.comment-user-msg{
		width: 490rpx;
	}
	.comment-user-msg-more{
		width: 404rpx;
	}
	.comment-user-name{
		font-size: 26rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #6A6A6C;
	}
	
	.comment-user-topic{
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #1A1D26;
		margin-top: 12rpx;
	}
	
	.comment-user-addressList{
		display: flex;
		align-items: center;
		margin-top: 20rpx;
	}
	
	.comment-user-address{
		font-size: 26rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #999999;
	}
	
	.comment-user-reply{
		font-size: 26rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #1A1D26;
		margin-left: 36rpx;
	}
	
	.love-modluar{
		width: 100rpx;
		text-align: center;
	}
	.love-logo{
		width: 48rpx;
		height: 48rpx;
		display: block;
		margin: 0 auto 10rpx;
	}
	.love-num{
		font-size: 24rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #6A6A6C;
	}
	.more-modular{
		display: flex;
		align-items: center;
	}
	.more{
		font-size: 26rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #6A6A6C;
	}
	.arrow-logo{
		width: 26rpx;
		height: 15rpx;
		margin: 0rpx 0 0 9rpx;
	}
	
	.no_more{
		font-size: 26rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #999999;
		text-align: center;
	}
	
	/* 发布评论 */
	.comment-bottom {
		width: 690rpx;
		height: 78rpx;
		/* box-sizing: border-box; */
		background: #FFFFFF;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
		border-top: 2rpx solid #D9D9D9;
		display: flex;
		padding: 20rpx 30rpx;
	}
	.comment-text{
		width: 490rpx;
		height: 80rpx;
		background: #F5F5F5;
		border-radius: 60rpx;
		
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		/* color: #999999; */
		padding: 0 30rpx;
		box-sizing: border-box;
	}
	.commit-btn{
		width: 180rpx;
		height: 80rpx;
		background: #1A1D26;
		border-radius: 200rpx;
		
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #FFFFFF;
		text-align: center;
		line-height: 80rpx;
		margin-left: 20rpx;
	}
</style>
