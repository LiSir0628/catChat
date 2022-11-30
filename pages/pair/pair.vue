<template>
	<view class="container" :class="{'bg-color': cindex == 1}">
		<view class="top" :class="{'bg-color': cindex == 1}">
			<!-- <view class="banner"></view> -->
			<view class="sort-modular">
				<view class="top-left">
					<view class="sort-chat" :class="{'sort-active': cindex == 0}" @click="switchA">
						<!-- {{ $t('square.topic_tribe') }} --> Matching
					</view>
					<view class="sort-friends" :class="{'sort-active02': cindex == 1}" @click="switchB">
						Choicest
					</view>
				</view>
			</view>
		</view>
		<view v-if="cindex == 0">
			<view class="chat-sort">
				<view class="chat01">
					<view class="chat-title">语音聊天</view>
					<view class="times">今日剩余次数 8 次</view>
					<view class="go-chat">去聊天</view>
					<!-- <view class="go-chat">金币兑换</view> -->
				</view>
				<view class="chat02">
					<view class="chat-title">视频聊天</view>
					<view class="times">今日剩余次数 0 次</view>
					<!-- <view class="go-chat">去聊天</view> -->
					<view class="go-chat">金币兑换</view>
				</view>
			</view>
			
			<view class="banner01">
				<image class="banner-logo" src="../../static/images/pair/icon04.png"></image>
				<view class="banner-title">挥手招呼</view>
				<view class="banner-tip">和心灵契合的人聊天</view>
				<view class="banner-start">开始打招呼</view>
			</view>
			<view class="banner02">
				<image class="banner-logo" src="../../static/images/pair/icon05.png"></image>
				<view class="banner-title">实时匹配</view>
				<view class="banner-tip">今日剩余10次</view>
				<view class="banner-start banner-start02">开始匹配</view>
			</view>
			<view class="rank-modular">
				<view class="rank">
					<view class="rank-title">排行榜</view>
					<image class="rank-title-logo" src="../../static/images/pair/icon06.png"></image>
				</view>
				<view class="rank-sort-lists">
					<view class="rank-sort" v-for="item,index in rankLists" :class="{'rank-sort-active': aindex == index}" @click="switchRank(index)">
						{{item.name}}
					</view>
				</view>
				<!-- 这里是可滚动商品展示 -->
				<scroll-view class="scroll-logo-list" scroll-x="true" @scroll="scroll" :show-scrollbar="false">
					<view class="logo-list">
						<view class="logo-list-other" v-for="item,index in reTopicLists">
							<view class="logo-modular">
								<image class="many-logo" :src="item.image"></image>
								<image class="topic-logo" src="../../static/images/square/icon06.png"></image>
							</view>
							<view class="topic-title">{{item.name}}</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<view v-else>
			
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
				
				aindex: 0,
				rankLists:[{id: 1,name: "Charisma"},{id: 2,name: "Magnificence"},{id: 3,name: "Vitality"}],
						
				reTopicLists: [{
					id: 1,
					name: "reigitn sinraia aidhai isnai siaidia",
					image: "../../static/images/user/photo01.jpg",
				}],
						
				kindex: 0,
				bottomList: [{
					id: 1,
					name: this.$t('bottom').Pair,
					image: "../../static/images/user/icon33.png",
					url: "/pages/pair/pair",
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
					image: "../../static/images/user/icon23.png",
					url: '/pages/square/square',
					styleClass: {
						width: '46rpx',
						height: '46rpx'
					},
				}, {
					id: 4,
					name: this.$t('bottom').News,
					image: "../../static/images/user/icon04.png",
					url: "/pages/chat/pair",
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
			switchRank(index) {
				if(this.aindex == index) return
				this.aindex = index
			},
			scroll(e) {
				//this.scrollLeft = e.detail.scrollLeft
				// console.log(e)
				// console.log(this.scrollLeft)
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
	page{
		width: 100%;
		height: 100%;
	}
	.container {
		width: 100%;
		height: 100%;
		background-color: #1A1D26;
		position: relative;
		/* padding-bottom: 120rpx; */
	}
	
	.top {
		width: 750rpx;
		position: fixed;
		top: 0;
		left: 0;
		background-color: #1A1D26;
		z-index: 1;
	}
	
	.bg-color{
		background-color: #FFFFFF;
	}
	
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
	
	.sort-modular {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 28rpx 30rpx 36rpx;
	}
	
	.top-left {
		display: flex;
		align-items: center;
	
	}
	
	.sort-chat {
		font-size: 36rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #999999;
	}
	
	.sort-friends {
		font-size: 36rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #999999;
		margin-left: 36rpx;
	}
	
	.sort-active {
		font-size: 36rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #FFFFFF;
	}
	.sort-active02{
		font-size: 36rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #1A1D26;
	}
	
	/* 聊天模块 */
	.chat-sort{
		display: flex;
		padding: 114rpx 30rpx 0;
		align-items: center;
		justify-content: space-between;
	}
	.chat01{
		width: 335rpx;
		height: 300rpx;
		padding: 35rpx 30rpx 40rpx;
		box-sizing: border-box;
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(149, 226, 136, 0.1) 49%, rgba(69, 95, 188, 0.1) 78%, rgba(129, 28, 113, 0.1) 100%);
		border-radius: 20rpx;
	}
	.chat02{
		width: 335rpx;
		height: 300rpx;
		padding: 35rpx 30rpx 40rpx;
		box-sizing: border-box;
		background: linear-gradient(136deg, rgba(240, 132, 132, 0.1) 0%, rgba(121, 255, 87, 0.1) 41%, rgba(76, 7, 189, 0.1) 74%, rgba(40, 61, 255, 0.1) 100%);
		border-radius: 20rpx;
	}
	.chat-title{
		font-size: 40rpx;
		font-family: Inter-SemiBold;
		font-weight: normal;
		color: #FFFFFF;
	}
	.times{
		font-size: 28rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #FFFFFF;
		margin-top: 22rpx;
	}
	.go-chat{
		width: max-content;
		background: #FFFFFF;
		border-radius: 60rpx;
		padding: 12rpx 30rpx;
		text-align: center;
		
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		margin-top: 48rpx;
	}
	
	.banner01{
		width: 690rpx;
		height: 280rpx;
		box-sizing: border-box;
		border-radius: 20rpx;
		margin: 30rpx auto 0;
		position: relative;
		z-index: 2;	
		padding: 22rpx 26rpx 40rpx;
	}
	.banner02{
		width: 690rpx;
		height: 280rpx;
		box-sizing: border-box;
		border-radius: 20rpx;
		margin: 22rpx auto 0;
		position: relative;
		z-index: 2;
		padding: 22rpx 26rpx 40rpx;
	}
	.banner-logo{
		width: 690rpx;
		height: 280rpx;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
	}
	.banner-title{
		font-size: 40rpx;
		font-family: Inter-SemiBold;
		font-weight: normal;
		color: #FFFFFF;
	}
	.banner-tip{
		font-size: 28rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #FFFFFF;
		margin-top: 20rpx;
	}
	.banner-start{
		width: max-content;
		padding: 6rpx 31rpx;
		height: 56rpx;
		line-height: 56rpx;
		background: #FFE7E2;
		border-radius: 60rpx;
		
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #FD312D;
		text-align: center;
		margin-top: 50rpx;
	}
	.banner-start02{
		color: #3E4794;
		background: #D2D4E2;
	}
	/* 排行榜信息 */
	.rank-modular{
		margin-top: 56rpx;
		padding: 0 30rpx;
	}
	.rank{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.rank-title{
		font-size: 42rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #FFFFFF;
	}
	.rank-title-logo{
		width: 43rpx;
		height: 43rpx;
	}
	.rank-sort-lists{
		display: flex;
		align-items: center;
		
		font-size: 32rpx;
		font-family: Inter-SemiBold;
		font-weight: normal;
		color: #6A6A6C;
		margin-top: 30rpx;
	}
	.rank-sort{
		margin-right: 48rpx;
	}
	.rank-sort-active{
		color: #FFFFFF;
	}
	/* 排行榜滑动 */
	/deep/ ::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}
	
	.scroll-logo-list {
		width: 690rpx;
		margin: 0 auto;
		white-space: nowrap;
	}
	
	.logo-list {
		display: flex;
		margin-top: 40rpx;
	}
	
	.logo-list-other {
		margin-right: 30rpx;
	}
	
	.logo-modular {
		width: 128rpx;
		height: 128rpx;
		padding: 4rpx;
		/* box-sizing: border-box; */
		border: 2rpx solid #ED4C4C;
		border-radius: 50%;
		position: relative;
	}
	
	.many-logo {
		width: 128rpx;
		height: 128rpx;
		display: block;
		border-radius: 50%;
		margin: 0 auto;
	}
	
	.topic-logo {
		width: 40rpx;
		height: 40rpx;
		position: absolute;
		display: block;
		bottom: 0;
		right: 0;
	}
	
	.topic-title {
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
