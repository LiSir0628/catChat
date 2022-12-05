<template>
	<view class="container" :class="{'bg-color': cindex == 1}">
		<view class="top" :class="{'bg-color': cindex == 1}">
			<!-- <view class="banner"></view> -->
			<view class="sort-modular">
				<view class="top-left">
					<view class="sort-chat" :class="{'sort-active': cindex == 0}" @click="switchA">
						{{ $t('matching.matching') }}
					</view>
					<view class="sort-friends" :class="{'sort-active02': cindex == 1}" @click="switchB">
						{{ $t('matching.choicest') }}
					</view>
				</view>
			</view>
		</view>
		<view v-if="cindex == 0">
			<!-- <view class="chat-sort">
				<view class="chat01">
					<view class="chat-title">{{ $t('matching.voice_chat') }}</view>
					<view class="times">{{ $t('matching.remaining_times') }}:8</view>
					<view class="go-chat">{{ $t('matching.go_chat') }}</view>
				</view>
				<view class="chat02">
					<view class="chat-title">{{ $t('matching.video_chat') }}</view>
					<view class="times">{{ $t('matching.remaining_times') }}:0 </view>
					<view class="go-chat">{{ $t('matching.exchange') }}</view>
				</view>
			</view> -->
			
			<view class="chat-sort"></view>
			
			<view class="banner01">
				<image class="banner-logo" src="../../static/images/pair/icon04.png"></image>
				<view class="banner-title">{{ $t('matching.wave_hello') }}</view>
				<view class="banner-tip">{{ $t('matching.heart') }}</view>
				<view class="banner-start">{{ $t('matching.start_greeting') }}</view>
			</view>
			<view class="banner02">
				<image class="banner-logo" src="../../static/images/pair/icon05.png"></image>
				<view class="banner-title">{{ $t('matching.real_matching') }}</view>
				<view class="banner-tip">{{ $t('matching.remaining_today') }}:10</view>
				<view class="banner-start banner-start02">{{ $t('matching.start_matching') }}</view>
			</view>
			<view class="rank-modular">
				<view class="rank">
					<view class="rank-title">{{ $t('matching.rankings') }}</view>
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
							<image class="rank-logo" v-if="index == 0" src="../../static/images/pair/icon01.png"></image>
							<image class="rank-logo" v-else-if="index == 1" src="../../static/images/pair/icon02.png"></image>
							<image class="rank-logo" v-else-if="index == 2" src="../../static/images/pair/icon03.png"></image>
							<view class="logo-modular">
								<image class="many-logo" :src="item.image"></image>
							</view>
							<view class="topic-title-name">{{item.name}}</view>
							<view class="topic-title" v-if="aindex == 0">{{ $t('matching.value') }}：{{item.charisma_val}}</view>
							<view class="topic-title" v-else-if="aindex == 1">{{ $t('matching.value') }}：{{item.magnificence_val}}</view>
							<view class="topic-title" v-else-if="aindex == 2">{{ $t('matching.value') }}：{{item.vitality_val}}</view>
						</view>
					</view>
				</scroll-view>
				<view class="more">{{ $t('matching.view_more') }}</view>
			</view>
		</view>
		<view class="cover-modular" v-else>
			<view class="cover-list">
				<image class="cover" src="../../static/images/user/photo06.jpg"></image> 
				<view class="online-state">
					<template>
						<view class="circle-green"></view>
						<view class="online-title">{{ $t('matching.online') }}</view>
					</template>
					<!-- <template>
						<view class="circle-green circle-gary"></view>
						<view class="online-title">{{ $t('matching.no_online') }}</view>
					</template> -->
				</view>
				<view class="user-msg">
					<view class="user-msg-left">
						<view class="user-name">Rika 26</view>
						<view class="user-des">Like playing games, playing ...</view>
					</view>
					<image class="love" src="../../static/images/pair/icon07.png"></image>
				</view>
				<view class="mask"></view>
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
				
				aindex: 0,
				rankLists:[{id: 1,name: this.$t('matching').charisma},{id: 2,name: this.$t('matching').magnificence},{id: 3,name: this.$t('matching').vitality}],
						
				reTopicLists: [{
					id: 1,
					image: "../../static/images/user/photo01.jpg",
					name: "reigitn sinraia aidhai isnai siaidia",
					charisma_val: 100,
					magnificence_val: 200,
					vitality_val: 300,
				},{
					id: 1,
					image: "../../static/images/user/photo01.jpg",
					name: "reigitn sinraia aidhai isnai siaidia",
					charisma_val: 100,
					magnificence_val: 200,
					vitality_val: 300,
				},{
					id: 1,
					image: "../../static/images/user/photo01.jpg",
					name: "reigitn sinraia aidhai isnai siaidia",
					charisma_val: 100,
					magnificence_val: 200,
					vitality_val: 300,
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
		min-height: 100%;
		background-color: #1A1D26;
		position: relative;
		padding-bottom: 140rpx;
	}
	
	.top {
		width: 750rpx;
		position: fixed;
		top: 0;
		left: 0;
		background-color: #1A1D26;
		z-index: 100;
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
		margin: 6rpx auto 0;
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
		width: 344rpx;
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
		/* margin-top: 30rpx; */
		position: absolute;
		left: 26rpx;
		bottom: 30rpx;
		
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
		padding-bottom: 6rpx;
		border-bottom: 3rpx solid #FFFFFF;
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
		margin: 30rpx auto 0;
		white-space: nowrap;
	}
	
	.logo-list {
		display: flex;
	}
	
	.logo-list-other {
		width: 100%;
		/* margin-right: 30rpx; */
		white-space: initial;
		margin-right: 20rpx;
		
		width: 260rpx;
		height: 293rpx;
		background: rgba(255,255,255,0.1);
		border-radius: 20rpx;
		text-align: center;
		padding: 50rpx 20rpx;
		box-sizing: border-box;
		position: relative;
	}
	
	.rank-logo {
		width: 84rpx;
		height: 48rpx;
		display: block;
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.logo-modular {
		width: 80rpx;
		height: 80rpx;
		/* box-sizing: border-box; */
		/* border: 2rpx solid #ED4C4C; */
		border-radius: 50%;
		position: relative;
		margin: 0 auto;
	}
	
	.many-logo {
		width: 80rpx;
		height: 80rpx;
		display: block;
		border-radius: 50%;
		margin: 0 auto;
	}
	
	.topic-title-name{
		width: 220rpx;
		font-size: 32rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #FFFFFF;
		margin-top: 24rpx;
		
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
	.topic-title {
		width: 220rpx;
		font-size: 28rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #FFFFFF;
		margin-top: 8rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
	.more{
		width: 600rpx;
		height: 88rpx;
		box-sizing: border-box;
		background: #FFFFFF;
		border-radius: 60rpx;
		
		font-size: 32rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #1A1D26;
		text-align: center;
		line-height: 88rpx;
		margin: 40rpx auto;
	}
	/* 封面 */
	.cover-modular{
		text-align: center;
		padding: 106rpx 0 0;
	}
	.cover-list{
		position: relative;
		margin-bottom: 20rpx;
	}
	.cover{
		width: 690rpx;
		height: 1000rpx;
		border-radius: 60rpx;
		display: block;
		margin: 0 auto;
	}
	.online-state{
		/* width: 142rpx;
		height: 48rpx; */
		width: max-content;
		background: #1A1D26;
		border-radius: 50rpx;
		padding: 8rpx 20rpx;
		display: flex;
		align-items: center;
		position: absolute;
		top: 40rpx;
		left: 70rpx;
		z-index: 2;
	}	.circle-green{
		width: 10rpx;
		height: 10rpx;
		background: #01E25B;
		border-radius: 50%;
	}
	.circle-gary{
		background: #E9E9EA;
	}	.online-title{
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #FFFFFF;
		margin-left: 8rpx;
	}	.user-msg{
		width: 630rpx;
		position: absolute;
		bottom: 64rpx;
		left: 60rpx;
		right: 30rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		text-align: left;
		z-index: 2;
	}	.user-msg-left{
		
	}	.user-name{
		font-size: 46rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #FFFFFF;
	}	.user-des{
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #FFFFFF;
		margin-top: 6rpx;
	}	.love{
		width: 120rpx;
		height: 120rpx;
	}
	.mask{
		width: 690rpx;
		height: 285rpx;
		background: linear-gradient(180deg, rgba(26,29,38,0) 0%, rgba(26,29,38,0.67) 100%);
		border-radius: 0rpx 0rpx 60rpx 60rpx;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
		z-index: 0;
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
		z-index: 100;
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
