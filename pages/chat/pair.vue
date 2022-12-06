<template>
	<view class="container">
		<view class="top">
			<!-- <image class="banner" src="../../static/images/register/icon01.png"></image> -->
			<view class="sort-modular">
				<view class="top-left">
					<view class="search-modular">
						<image class="search-logo" src="../../static/images/chat/icon03.png"></image>
						<input class="search-input" :placeholder="$t('pair.search_placeholder')"/>
					</view>
					<!-- <view class="sort-friends" :class="{'sort-chat-active': cindex == 0}" @click="goSwitch(0)">{{ $t('pair.chat') }}</view>
					<view class="sort-friends" :class="{'sort-chat-active': cindex == 1}" @click="goSwitch(1)">{{ $t('pair.friends') }}</view> -->
				</view>
				<view class="top-right">
					<image class="tips-logo" src="../../static/images/chat/icon01.png" @click="goCountry"></image>
					<image class="tips-logo" src="../../static/images/chat/icon02.png" @click="goNotice"></image>
				</view>
			</view>
			<!-- <view class="search-modular">
				<image class="search-logo" src="../../static/images/chat/icon03.png"></image>
				<input class="search-input" :placeholder="$t('pair.search_placeholder')"/>
			</view> -->
		</view>
		<view class="content">
			<view class="user-lists" :class="{'user-list-gary': isSticky}" @click="goChat">
				<view class="user-list">
					<view class="user-photo">
						<image class="photo-logo" src="../../static/images/user/photo01.jpg"></image>
						<view class="circle-green"></view>
						<!-- <view class="circle-gray"></view> -->
					</view>
					<view class="user-msg">
						<view class="user-name">九亿少女的偶像ADHKA</view>
						<view class="msg">Welcome to my birthday party</view>
					</view>
					<view class="time-modular">
						<view class="times">35</view>
						<view class="time">3:26{{ $t('pair.pm') }}</view>
					</view>
				</view>
			</view>
			<view class="user-lists" :class="{'user-list-gary': !isSticky}">
				<view class="user-list">
					<view class="user-photo">
						<image class="photo-logo" src="../../static/images/user/photo01.jpg"></image>
						<view class="circle-green"></view>
						<!-- <view class="circle-gray"></view> -->
					</view>
					<view class="user-msg">
						<view class="user-name">九亿少女的偶像ADHKA</view>
						<view class="msg">Welcome to my birthday party</view>
					</view>
					<view class="time-modular">
						<!-- <view class="times">35</view> -->
						<view class="time">3:26{{ $t('pair.pm') }}</view>
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
		
		<select-country ref="selectCountry" :countryId="countryId" @countryValue="countryValue"></select-country>
	</view>
</template>

<script>
	import selectCountry from "../common/selectCountry.vue"
	export default {
		data() {
			return {
				cindex: 0,
				isSticky: true,
				
				countryId: "",
				
				lists: [],
				
				kindex: 3,
				bottomList: [{
					id: 1,
					name: this.$t('bottom').Pair,
					image: "../../static/images/user/icon03.png",
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
					image: "../../static/images/user/icon28.png",
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
		components: {
			selectCountry
		},
		created() {
			this.getHttpList()
		},
		mounted() {
		
		},
		onShow() {
			//国家选择id
			this.countryId = this.$store.state.chatCountryId
		},
		methods: {
			back() {
				window.history.go(-1)
			},
			countryValue(value) {
				//国家最新选择id
				this.countryId = this.$store.state.chatCountryId
			},
			goCountry() {
				this.$refs.selectCountry.open()
			},
			
			getHttpList() {
				uni.showLoading({
					title: this.$t('common').loading + '...',
					mask: true
				});
				this.$myRequest({
						method: 'GET',
						url: 'https://test.mini.zhishukongjian.com/api/chatlist',
						data: {
							id: 19
						}
					})
					.then(res => {
						uni.hideLoading();
						if (res.data.code == 200) {
							this.lists = res.data.data
							console.log(this.lists)
						} else {
							uni.showModal({
								title: this.$t('common').Tip,
								content: res.data.msg,
								confirmText: this.$t('common').confirm,
								showCancel: false,
							})
						}
					})
					.catch(err => {
						uni.hideLoading();
						uni.showModal({
							title: this.$t('common').Tip,
							content: this.$t('common').Network,
							confirmText: this.$t('common').confirm,
							//content: err,
							showCancel: false,
						})
					})
			},
			goNotice() {
				uni.navigateTo({
					url: "./notice"
				});
			},
			goChat() {
				uni.navigateTo({
					url: "./chat"
				});
			},
			goSwitch(index) {
				if(this.cindex == index) return
				this.cindex = index
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
	/* 顶部数据 */
	.top{

	}
	.banner{
		width: 750rpx;
		height: 323rpx;
		display: block;
		position: absolute;
		top: 0;
		left: 0;
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
	.sort-friends{
		font-size: 28rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #999999;
		margin-right: 36rpx;
	}
	.sort-chat-active{
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
		width: 56rpx;
		height: 56rpx;
		margin-left: 20rpx;
	}
	
	/* 搜索框 */
	.search-modular{
		margin: 0 auto 0;
		position: relative;
	}
	.search-logo{
		width: 32rpx;
		height: 32rpx;
		position: absolute;
		left: 30rpx;
		top: 0;
		bottom: 0;
		margin: auto;
		vertical-align: middle;
	}
	.search-input{
		width: 496rpx;
		height: 88rpx;
		box-sizing: border-box;
		background: #F5F5F5;
		border-radius: 60rpx;
		margin: 0 auto;
		padding: 0 80rpx;
		
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		/* color: #999999; */
	}
	
	/* 主要内容 */
	.content{
		margin: 30rpx auto;
	}
	.user-list{
		width: 690rpx;
		margin: 0 auto;
		display: flex;
		/* align-items: center; */
		justify-content: space-between;
		padding: 30rpx 0;
		border-bottom: 2rpx solid rgba(217,217,217,0.4);
	}
	.user-list-gary{
		background: rgba(217,217,217,0.2);
	}
	.user-lists:nth-last-child(1) .user-list{
		border-bottom: none;
	}
	.user-photo{
		position: relative;
	}	.photo-logo{
		width: 120rpx;
		height: 120rpx;
		display: block;
		border-radius: 50%;
	}	.circle-green{
		width: 20rpx;
		height: 20rpx;
		background: #01E25B;
		border: 2rpx solid #FFFFFF;
		border-radius: 50%;
		position: absolute;
		right: 0;
		bottom: 0;
	}
	.circle-gray{
		width: 20rpx;
		height: 20rpx;
		background: #E9E9EA;
		border: 2rpx solid #FFFFFF;
		border-radius: 50%;
		position: absolute;
		right: 0;
		bottom: 0;
	}	.user-msg{
		width: 404rpx;
		margin-left: 30rpx;
		padding: 15rpx 0 0;
	}	.user-name{
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #1A1D26;
	}	.msg{
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #6A6A6C;
		margin-top: 20rpx;
	}
	.time-modular{
		width: 136rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		padding: 20rpx 0 0;
	}
	.times{
		width: 44rpx;
		height: 44rpx;
		line-height: 44rpx;
		text-align: center;
		background: #F14E49;
		
		font-size: 26rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #FFFFFF;
		border-radius: 50%;
		margin-right: 6rpx;
		margin-bottom: 2rpx;
		margin-top: -6rpx;
	}	.time{
		font-size: 24rpx;
		font-family: Inter-Regular;
		font-weight: 400;
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
