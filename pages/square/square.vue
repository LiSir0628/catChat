<template>
	<view class="container">
		<view class="top">
			<view class="banner"></view>
			<view class="sort-modular">
				<view class="top-left">
					<view class="sort-chat" :class="{'sort-active': cindex == 0}" @click="switchA">{{ $t('square.topic_tribe') }}</view>
					<view class="sort-friends" :class="{'sort-active': cindex == 1}" @click="switchB">{{ $t('square.communication') }}</view>
				</view>
				<view class="top-right">
					<image class="tips-logo" src="../../static/images/square/icon01.png"></image>
				</view>
			</view>
			<view class="search-modular">
				<image class="search-logo" src="../../static/images/square/icon02.png"></image>
				<input class="search-input" :placeholder="$t('square.search_placeholder')"/>
			</view>
		</view>
		<view class="recommend-user" v-if="cindex == 0">
			<!-- 这里是可滚动商品展示 -->
			<scroll-view class="scroll-logo-list" scroll-x="true" @scroll="scroll"
				:show-scrollbar="false">
				<view class="logo-list">
					<view class="logo-list-other" v-for="item,index in reTopicLists" @click="goTopic(item)">
						<view class="logo-modular">
							<image class="many-logo" :src="item.image"></image>
							<image class="topic-logo" src="../../static/images/square/icon06.png"></image>
						</view>
						<view class="topic-title">{{item.title}}</view>
					</view>
				</view>
			</scroll-view>
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
		
		
		<view class="bottom">
			<view class="bottom-list" v-for="item,index in bottomList" @click="goIndex(index)">
				<image class="bottom-logo" :style="item.styleClass" :src="item.image"></image>
				<view :class="{'bottom-nav-active': kindex == index}">{{item.name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cindex: 0,
				reTopicLists:[{
					id: 1,
					title: "reigitn sinraia aidhai isnai siaidia",
					image: "../../static/images/user/photo01.jpg",
				},{
					id: 2,
					title: "Love",
					image: "../../static/images/user/photo01.jpg"
				},{
					id: 3,
					title: "People to the sunny",
					image: "../../static/images/user/photo01.jpg"
				},{
					id: 4,
					title: "Michael jackson",
					image: "../../static/images/user/photo01.jpg"
				},{
					id: 5,
					title: "Michael jackson",
					image: "../../static/images/user/photo01.jpg"
				},{
					id: 6,
					title: "Michael jackson",
					image: "../../static/images/user/photo01.jpg"
				},{
					id: 7,
					title: "Michael jackson",
					image: "../../static/images/user/photo01.jpg"
				}],
				
				kindex: 2,
				bottomList: [{
					id: 1,
					name: this.$t('bottom').Pair,
					image: "../../static/images/user/icon03.png",
					url: "",
					styleClass: {
						width: '50rpx',
						height: '40rpx'
					},
				}, {
					id: 2,
					name: this.$t('bottom').Shop,
					image: "../../static/images/user/icon06.png",
					url: "",
					styleClass: {
						width: '41rpx',
						height: '37rpx'
					},
				}, {
					id: 3,
					name: this.$t('bottom').square,
					image: "../../static/images/user/icon24.png",
					url: "",
					styleClass: {
						width: '46rpx',
						height: '46rpx'
					},
				}, {
					id: 4,
					name: this.$t('bottom').News,
					image: "../../static/images/user/icon04.png",
					url: "",
					styleClass: {
						width: '42rpx',
						height: '39rpx'
					},
				}, {
					id: 5,
					name: this.$t('bottom').Me,
					image: "../../static/images/user/icon25.png",
					url: "/pages/user/user",
					styleClass: {
						width: '40rpx',
						height: '44rpx'
					},
				}]
			}
		},
		methods: {
			switchA() {
				this.cindex = 0
			},
			switchB() {
				this.cindex = 1
			},
			scroll(e) {
				//this.scrollLeft = e.detail.scrollLeft
				// console.log(e)
				// console.log(this.scrollLeft)
			},
			goTopic(item) {
				uni.navigateTo({
					url: 'topic?topic_name=' + item.title
				});
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
			goIndex(index) {
				if (this.kindex == index) return
				this.kindex = index
				if (!this.bottomList[index].url) return
				uni.navigateTo({
					url: this.bottomList[index].url
				});
			},
		}
	}
</script>

<style scoped>
	.container {
		padding-bottom: 120rpx;
	}
	
	.top {}
	
	.banner {
		width: 750rpx;
		height: 588rpx;
		display: block;
		/* background: linear-gradient(180deg, rgba(235,0,255,0.06) 0%, rgba(255,255,255,0) 100%); */
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
	}
	.sort-modular{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx 30rpx;
	}
	.top-left{
		display: flex;
		align-items: center;
		
	}
	.sort-chat{
		font-size: 28rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #999999;
	}
	.sort-friends{
		font-size: 28rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #999999;
		margin-left: 36rpx;
	}
	.sort-active{
		font-size: 36rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #1A1D26;
	}
	.top-right{
		display: flex;
		align-items: center;
		
	}
	.tips-logo{
		width: 60rpx;
		height: 60rpx;
	}
	
	/* 搜索框 */
	.search-modular{
		margin: 20rpx auto 0;
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
	/* 用户推荐 */
	/deep/ ::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}
	.scroll-logo-list{
		width: 690rpx;
		margin: 0 auto;
		white-space: nowrap;
	}
	.logo-list{
		display: flex;
		margin-top: 40rpx;
	}
	.logo-list-other{
		margin-right: 30rpx;
	}
	.logo-modular{
		width: 128rpx;
		height: 128rpx;
		padding: 4rpx;
		/* box-sizing: border-box; */
		border: 2rpx solid #ED4C4C;
		border-radius: 50%;
		position: relative;
	}
	.many-logo{
		width: 128rpx;
		height: 128rpx;
		display: block;
		border-radius: 50%;
		margin: 0 auto;
	}
	
	.topic-logo{
		width: 40rpx;
		height: 40rpx;
		position: absolute;
		display: block;
		bottom: 0;
		right: 0;
	}
	
	.topic-title{
		width: 140rpx;
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #000000;
		white-space: initial;
		margin-top: 12rpx;
		text-align: center;
		
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
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
	
	/* 底部 */
	.bottom {
		width: 750rpx;
		/* height: 96rpx; */
		padding: 12rpx 0;
		box-sizing: border-box;
		display: flex;
		justify-content: space-around;
		position: fixed;
		bottom: 0;
		background: #FFFFFF;
		border-top: 2rpx solid rgba(155, 155, 155, 0.1);
	
		font-size: 22rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #6A6A6C;
	}
	
	.bottom-list {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}
	
	.bottom-logo {
		width: 50rpx;
		height: 40rpx;
		display: block;
	}
	
	.bottom-nav-active {
		color: #1A1D26;
	}
</style>
