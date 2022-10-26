<template>
	<view class="container">
		<view class="top-modular">
			<view class="top">
				<view class="top-title">
					<uni-nav-bar left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000" :title="title">
					</uni-nav-bar>
					<view class="new-sort" @click="close">
						{{ $t('topic.close') }}
					</view>
				</view>
				<view class="search-modular">
					<image class="search-logo" src="../../static/images/square/icon02.png"></image>
					<input class="search-input" :placeholder="$t('square.search_placeholder')"/>
				</view>
			</view>
			
			<image class="banner" src="../../static/images/square/topic/icon03.png"></image>
			
			<view class="look-modular">
				<view class="look-style">
					<view class="look-num">48.3k views</view>
					<view class="published-num">150 Number of people published</view>
				</view>
				<image class="share-logo" src="../../static/images/square/topic/icon02.png" @click="toShare"></image>
			</view>
		</view>
		<view class="content">
			<view class="nav-list">
				<view class="nav-sort" :class="{'nav-sort-active': cindex == 0}" @click="goSort(0)">Recommend</view>
				<view class="nav-sort" :class="{'nav-sort-active': cindex == 1}" @click="goSort(1)">Follow</view>
			</view>
			
			<view class="square-lists">
				<view class="square-list" @click="goDetail">
					<image class="user-logo" src="../../static/images/user/photo02.png"></image>
					<view class="user-notice">
						<view class="user-msg">
							<view class="user-msg-top"> 
								<view class="user-name">九亿少女的偶像ADHKA</view>
								<view class="user-time">2022-08-02 22:12:12</view>
							</view>
							<view class="user-btn">{{ $t('square.focus') }}</view>
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
							<view class="reward-sm">105 {{ $t('square.people_rewarded') }}</view>
						</view>
						
						<view class="talk-modular">
							<view class="area-modular">
								<image class="area-logo" src="../../static/images/square/icon05.png"></image>
								<view class="area-text">Fuzhou City</view>
							</view>
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
				
				<view class="square-list">
					<image class="user-logo" src="../../static/images/user/photo02.png"></image>
					<view class="user-notice">
						<view class="user-msg">
							<view class="user-msg-top"> 
								<view class="user-name">九亿少女的偶像ADHKA</view>
								<view class="user-time">2022-08-02 22:12:12</view>
							</view>
							<view class="user-btn">{{ $t('square.focus') }}</view>
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
							<view class="reward-sm">Total 105 people rewarded</view>
						</view>
						
						<view class="talk-modular">
							<view class="area-modular">
								<image class="area-logo" src="../../static/images/square/icon05.png"></image>
								<view class="area-text">Fuzhou City</view>
							</view>
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
		</view>
		<view class="comment-bottom">
			<input disabled class="comment-text" :placeholder="$t('square_details.comment_placeholder')"/>
		</view>
		
		<share ref="share"></share>
	</view>
</template>

<script>
	import share from '@/pages/common/share.vue'
	export default {
		data() {
			return {
				title: "#话题部落",
				cindex: 0,
			}
		},
		components: {
			share,
		},
		onLoad(option) {
			//如果参数有值，渠道入口-请求
			//如果首页、分类特殊值有值-请求（不与上方同时触发）
			if (option.topic_name) this.title = "#" + option.topic_name
		},
		mounted() {
			
		},
		methods: {
			back() {
				window.history.go(-1)
			},
			
			close() {
				console.log("取消关注")
			},
			
			goSort(index) {
				if(this.cindex == index) return
				this.cindex = index
			},
			toShare() {
				this.$refs.share.open()
			},
			goDetail() {
				uni.navigateTo({
					url: 'squareDetails'
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
		padding-bottom: 100rpx;
	}
	
	/* 分类 */
	.top-modular{
		border-bottom: 16rpx solid rgba(26,29,38,0.08);
	}
	
	.top{
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		background: #ffffff;
		padding-bottom: 30rpx;
	}
	
	.top-title{
		position: relative;
	}
	
	.new-sort{
		min-width: 100rpx;
		padding: 0 10rpx;
		height: 56rpx;
		background: rgba(26,29,38,0.1);
		border-radius: 60rpx;
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		position: absolute;
		right: 30rpx;
		top: 0;
		bottom: 0;
		margin: auto;
		vertical-align: middle;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	/deep/ .uni-navbar--border {
		border-bottom-color: white;
	}
	
	/* 搜索框 */
	.search-modular{
		margin: 24rpx auto 0;
		position: relative;
	}
	.search-logo{
		width: 32rpx;
		height: 32rpx;
		position: absolute;
		left: 60rpx;
		top: 0;
		bottom: 0;
		margin: auto;
		vertical-align: middle;
	}
	.search-input{
		width: 690rpx;
		height: 88rpx;
		box-sizing: border-box;
		background: #F5F5F5;
		border-radius: 60rpx;
		margin: 0 auto;
		padding: 0 80rpx;
		
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #999999;
	}
	
	.banner{
		width: 690rpx;
		height: 200rpx;
		display: block;
		border-radius: 20rpx;
		margin: 232rpx auto 0;
	}
	
	.look-modular{
		width: 690rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0 auto;
		padding: 32rpx 0 40rpx;
	}
	
	.look-style{
		
	}
	
	.look-num{
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #6A6A6C;
	}
	
	.published-num{
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #6A6A6C;
		margin-top: 12rpx;
	}
	
	.share-logo{
		width: 56rpx;
		height: 56rpx;
	}
	
	/* 主要内容 */
	.content {
		padding: 32rpx 30rpx 0;
	}
	.nav-list{
		display: flex;
		align-items: center;
		border-bottom: 2rpx solid rgba(155,155,155,0.4);
	}
	
	.nav-sort{
		font-size: 28rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #999999;
		margin-right: 36rpx;
		padding: 0 0 14rpx;
	}
	
	.nav-sort-active{
		font-size: 32rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #1A1D26;
		border-bottom: 4rpx solid #1A1D26;
	}
	
	/* 广场话题 */
	.square-lists{
		width: 690rpx;
		margin: 50rpx auto 0;
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
		width: 420rpx;
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
		justify-content: space-between;
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
		margin-left: 35rpx;
	}
	
	.area-modular{
		display: flex;
		align-items: center;
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
		width: 690rpx;
		height: 80rpx;
		background: #F5F5F5;
		border-radius: 60rpx;
		
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #999999;
		padding: 0 30rpx;
		box-sizing: border-box;
	}
	/* .commit-btn{
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
	} */
</style>
