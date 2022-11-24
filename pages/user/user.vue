<template>
	<view class="container">
		<image class="icon05" src="../../static/images/user/icon05.png"></image>
		<view class="top">
			<view>
				<image class="top-logo left-logo" src="../../static/images/user/icon31.png" @click="editSet"></image>
				<image class="top-logo" src="../../static/images/user/icon14.png" @click="invitationBtn"></image>
			</view>
			<!-- <image class="top-logo" src="../../static/images/user/icon02.png"></image> -->
		</view>

		<view class="user-msg">
			<view class="user-left">
				<view class="name-modular">
					<view class="nickname">{{userList.nickname}}</view>
					<image class="edit-logo" src="../../static/images/user/icon32.png" @click="goEdit"></image>
				</view>

				<view class="age">
					{{userList.sex}} , {{userList.age}} {{ $t('user.old') }}
				</view>

				<view class="inviter">
					<!-- <image class="photo-small" src="../../static/images/user/photo02.png"></image>
					<view>Mi Qiren</view> -->
					<view class="state-modular" @click="goState"> +{{ $t('user.state') }} </view>
					<view v-if="userList.hobbies && userList.hobbies.length > 0" class="interest-modular"  @click="interest">
						<view class="state-modular"> +{{userList.hobbies[0]}} </view>
						<view class="more">...</view>
					</view>
					<view v-else class="interest-modular" @click="interest">
						<view class="state-modular"> +{{ $t('user.interest') }} </view>
						<view class="more">...</view>
					</view>
				</view>
			</view>
			<image class="photo" :src="userList.avatar"></image>
		</view>

		<view class="content">
			<view class="level-modular" v-if="isMember">
				<image class="icon01" src="../../static/images/user/icon01.png"></image>
				<view class="level">
					<view class="level-text"> {{ $t('user.level') }} </view>
					<view class="level-num"> 4 </view>
				</view>
			</view>
			<view class="level-modular" v-else>
				<image class="icon01" src="../../static/images/user/icon17.png"></image>
				<view class="no-level">
					<view class="level-text"> {{ $t('user.not') }} </view>
					<view class="level-open"> {{ $t('user.Go') }} </view>
				</view>
			</view>
			<!-- <view class="nav-list">
				<view class="logo-modular" v-for="item in navList" @click="goUrl(item)">
					<image class="nav-logo" :style="item.styleClass" :src="item.image"></image>
					<view>{{item.name}}</view>
				</view>
			</view> -->
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay"
				:interval="interval" :duration="duration">
				<swiper-item class="swiper-list">
					<view class="logo-modular" v-for="item,index in navList" @click="goUrl(item)" v-if="index < 4">
						<image class="nav-logo" :style="item.styleClass" :src="item.image"></image>
						<view>{{item.name}}</view>
					</view>
				</swiper-item>
				<swiper-item class="swiper-list">
					<view class="logo-modular" v-for="item,index in navList" @click="goUrl(item)" v-if="index >= 4">
						<image class="nav-logo" :style="item.styleClass" :src="item.image"></image>
						<view>{{item.name}}</view>
					</view>
				</swiper-item>
			</swiper>

			<view class="scrib"></view>

			<view class="video-modular">
				<!-- <view class="video-nav">
					<view class="video-nav-list">
						<view class="video-text" :class="{'video-text-active': cindex == index }"
							v-for="item,index in videoList" @click="switchTab(index)">
							{{item.name}}
						</view>
					</view>
				</view> -->
				<scroll-view class="video-nav" scroll-x="true" @scroll="scroll"
					:show-scrollbar="false">
					<view class="video-nav-list">
						<view class="video-text" v-for="item,index in videoList" :class="{'video-text-active': cindex == index}" @click="switchTab(index)">
							{{item.name}}
						</view>
					</view>
				</scroll-view>

				<view class="meny-list all-list" v-if="cindex == 0">
					<view class="meny">
						<view class="meny-time">2022-08-08</view>
						<view class="meny-comment">Very beautiful scenery</view>
						<image class="meny-logo" src="../../static/images/user/photo03.jpg" @click="previewImage"></image>
						<view class="talk-modular">
							<view class="talk-list">
								<image class="talk-logo" src="../../static/images/user/icon19.png"></image>
								<view class="talk-text">15</view>
							</view>
							<view class="talk-list">
								<image class="talk-logo" src="../../static/images/user/icon26.png"></image>
								<view class="talk-text">15</view>
							</view>
						</view>
					</view>
					<view class="meny">
						<view class="meny-time">2022-08-08</view>
						<view class="meny-comment">Very beautiful scenery</view>
						<image class="meny-logo" src="../../static/images/user/photo03.jpg"></image>
						<view class="talk-modular">
							<view class="talk-list">
								<image class="talk-logo" src="../../static/images/user/icon19.png"></image>
								<view class="talk-text">15</view>
							</view>
							<view class="talk-list">
								<image class="talk-logo" src="../../static/images/user/icon26.png"></image>
								<view class="talk-text">15</view>
							</view>
						</view>
					</view>
				</view>

				<view class="camera-list all-list" v-else-if="cindex == 1">
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

				<view class="video-list all-list" v-else-if="cindex == 2">
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

				<view class="collection-list all-list" v-else-if="cindex == 3">
					<view class="collection">
						<image class="collection-logo" src="../../static/images/user/photo03.jpg"></image>
						<view class="collection-modular">
							<view class="collection-name">Pink Stripe short sleeve Pink Stripe short sleeve</view>
							<view class="collection-price">$50.9</view>
							<image class="love" src="../../static/images/user/icon15.png"></image>
						</view>
					</view>
					<view class="collection">
						<image class="collection-logo" src="../../static/images/user/photo03.jpg"></image>
						<view class="collection-modular">
							<view class="collection-name">Pink Stripe short sleeve Pink Stripe short sleeve</view>
							<view class="collection-price">$50.9</view>
							<image class="love" src="../../static/images/user/icon15.png"></image>
						</view>
					</view>
				</view>
				
				<view class="square-lists" v-else-if="cindex == 4">
					<view class="user-list">
						<view class="focus-user">
							<image class="focus-user-photo" src="../../static/images/user/photo01.jpg"></image>
							<view class="focus-user-msg">
								<view class="focus-user-name">九亿少女的偶像ADHKA</view>
								<view class="focus-user-gender">Handsome boy</view>
							</view>
						</view>
						<view class="close-focus">{{ $t('user.close') }}</view>
					</view>
					<view class="user-list">
						<view class="focus-user">
							<image class="focus-user-photo" src="../../static/images/user/photo01.jpg"></image>
							<view class="focus-user-msg">
								<view class="focus-user-name">九亿少女的偶像ADHKA</view>
								<view class="focus-user-gender">Handsome boy</view>
							</view>
						</view>
						<view class="close-focus">{{ $t('user.focus') }}</view>
					</view>
				</view>
				
				<view class="square-lists" v-else-if="cindex == 5">
					<view class="user-list">
						<view class="focus-user">
							<image class="focus-user-photo" src="../../static/images/user/photo01.jpg"></image>
							<view class="focus-user-msg">
								<view class="focus-user-name">九亿少女的偶像ADHKA</view>
								<view class="focus-user-gender">Handsome boy</view>
							</view>
						</view>
						<view class="close-focus">{{ $t('user.close') }}</view>
					</view>
					<view class="user-list">
						<view class="focus-user">
							<image class="focus-user-photo" src="../../static/images/user/photo01.jpg"></image>
							<view class="focus-user-msg">
								<view class="focus-user-name">九亿少女的偶像ADHKA</view>
								<view class="focus-user-gender">Handsome boy</view>
							</view>
						</view>
						<view class="close-focus">{{ $t('user.focus') }}</view>
					</view>
				</view>
				
				<view class="square-lists" v-else-if="cindex == 6">
					<view class="user-list">
						<view class="focus-user">
							<image class="focus-user-photo" src="../../static/images/user/photo01.jpg"></image>
							<view class="focus-user-msg">
								<view class="focus-user-name">九亿少女的偶像ADHKA</view>
								<view class="focus-user-gender">+500 {{ $t('user.gold_coin') }}</view>
							</view>
						</view>
						<view class="close-focus">{{ $t('user.close') }}</view>
					</view>
					<view class="user-list">
						<view class="focus-user">
							<image class="focus-user-photo" src="../../static/images/user/photo01.jpg"></image>
							<view class="focus-user-msg">
								<view class="focus-user-name">九亿少女的偶像ADHKA</view>
								<view class="focus-user-gender">+500 {{ $t('user.gold_coin') }}</view>
							</view>
						</view>
						<view class="close-focus">{{ $t('user.focus') }}</view>
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
		
		<user-msg ref="userMsg" :userList="userList"></user-msg>
	</view>
</template>

<script>
	import userMsg from "@/pages/common/userMsg.vue"
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: false,
				interval: 60000,
				duration: 500,
				
				userList: {
					id: 89596665,
					name: "Michael jackson",
					tel: "152xxxxxxx",
					photo: "../../static/images/user/photo01.jpg",
				},
				isMember: false,
				
				cindex: 0,
				navList: [{
					id: 1,
					name: this.$t('user').wallet,
					url: 'wallet',
					image: "../../static/images/user/icon10.png",
					styleClass: {
						width: '58rpx',
						height: '52rpx'
					},
				}, {
					id: 2,
					name: this.$t('user').order,
					url: '/pages/order/order',
					image: "../../static/images/user/icon07.png",
					styleClass: {
						width: '46rpx',
						height: '50rpx'
					},
				}, {
					id: 3,
					name: this.$t('user').browse,
					url: '',
					image: "../../static/images/user/icon09.png",
					styleClass: {
						width: '55rpx',
						height: '55rpx'
					},
				}, {
					id: 4,
					name: this.$t('user').invitation,
					url: 'invitation',
					image: "../../static/images/user/icon13.png",
					styleClass: {
						width: '56rpx',
						height: '53rpx'
					},
				}, {
					id: 5,
					name: this.$t('user').gift,
					url: '',
					image: "../../static/images/user/icon29.png",
					styleClass: {
						width: '56rpx',
						height: '53rpx'
					},
				}, {
					id: 6,
					name: this.$t('user').reward,
					url: '/pages/square/reward',
					image: "../../static/images/user/icon30.png",
					styleClass: {
						width: '54rpx',
						height: '55rpx'
					},
				}],
				videoList: [{
					id: 1,
					name: this.$t('user').Menyedihkan
				}, {
					id: 2,
					name: this.$t('user').Album
				}, {
					id: 3,
					name: this.$t('user').Video
				}, {
					id: 4,
					name: this.$t('user').Collection
				},{
					id: 5,
					name: this.$t('user').focus
				},{
					id: 6,
					name: this.$t('user').getting_noticed
				},{
					id: 7,
					name: this.$t('user').reward
				}],

				kindex: 4,
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
					image: "../../static/images/user/icon11.png",
					url: "/pages/user/user",
					styleClass: {
						width: '40rpx',
						height: '44rpx'
					},
				}]
			}
		},
		components:{
			userMsg,
		},
		onShow() {
			this.userList = this.$store.state.duomiList
		},
		mounted() {
			
		},
		methods: {
			back() {
				window.history.go(-1)
			},
			editSet() {
				console.log("设置")
			},
			goEdit() {
				uni.navigateTo({
					url: "personal"
				});
			},
			invitationBtn() {
				this.$refs.userMsg.open()
			},
			goState() {
				
			},
			interest() {
				uni.navigateTo({
					url: "/pages/register/like"
				});
			},
			goUrl(item) {
				uni.navigateTo({
					url: item.url
				});
			},
			switchTab(index) {
				if (this.cindex == index) return
				this.cindex = index
			},
			previewImage() {
				uni.previewImage({
					current: "https://api.domefish.com/storage/banner/6a3b5aeb6638e3c3eb166cf173cc4efe.png",
					urls: ["https://api.domefish.com/storage/banner/6a3b5aeb6638e3c3eb166cf173cc4efe.png","https://api.domefish.com/storage/banner/7c29347477ba440a4ad17e9e3adc1e6e.png","https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/3639a3488a93425ca108e9ce85cc6f40~tplv-dx0w9n1ysr-origin-jpeg.jpeg"],
				});
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
	page {
		width: 100%;
		height: 100%;
	}

	.container {
		position: relative;
	}

	::-webkit-scrollbar {
		display: none;
	}

	.icon05 {
		width: 750rpx;
		height: 422rpx;
		display: block;
	}

	.top {
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 27rpx 30rpx 36rpx 30rpx;
		position: absolute;
		top: 0;
		box-sizing: border-box;
	}

	.top-logo {
		width: 56rpx;
		height: 56rpx;
	}

	.left-logo {
		margin-right: 30rpx;
	}

	/*  用户信息 */
	.user-msg {
		width: 750rpx;
		display: flex;
		justify-content: space-between;
		padding: 0 30rpx;
		position: absolute;
		top: 126rpx;
		box-sizing: border-box;
	}

	.user-left {}

	.name-modular {
		display: flex;
		align-items: center;
		font-size: 34rpx;
		line-height: 38rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #1A1D26;
	}
	.nickname{
		max-width: 480rpx;
		overflow: hidden;
		white-space: nowrap;
		word-wrap: normal;
		text-overflow: ellipsis;
		-o-text-overflow: ellipsis;
	}
	.edit-logo {
		width: 28rpx;
		height: 28rpx;
		margin-left: 14rpx;
	}

	.age {
		font-size: 28rpx;
		line-height: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #333333;
		margin: 16rpx 0 20rpx 0;
	}

	.inviter {
		display: flex;
		align-items: center;
		font-size: 28rpx;
		line-height: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #6A6A6C;
	}
	
	.state-modular {
		font-size: 26rpx;
		border-radius: 60rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #1A1D26;
		padding: 8rpx 20rpx;
		background: rgba(26,29,38,0.1);
	}
	
	.interest-modular {
		display: flex;
		align-items: flex-end;
		margin-left: 20rpx;
	}
	
	.more{
		margin-left: 20rpx;
		padding-bottom: 8rpx;
	}
	
	.photo-small {
		width: 48rpx;
		height: 48rpx;
		border-radius: 50%;
		margin-right: 14rpx;
	}


	.photo {
		width: 140rpx;
		height: 140rpx;
		box-shadow: 0rpx 6rpx 10rpx 0rpx rgba(0, 0, 0, 0.2);
		border-radius: 30rpx 30rpx 30rpx 30rpx;
	}

	/* 主要内容 */
	.content {
		width: 750rpx;
		background: #FFFFFF;
		border-radius: 40rpx 40rpx 0px 0px;
		opacity: 1;
		padding: 34rpx 0 0 0;
		position: absolute;
		top: 310rpx;
		text-align: center;
	}

	.level-modular {
		width: 690rpx;
		margin: 0 auto;
		position: relative;
	}

	.icon01 {
		width: 690rpx;
		height: 140rpx;
		display: block;
	}

	.level {
		width: 690rpx;
		padding: 10rpx 38rpx 0 30rpx;
		box-sizing: border-box;
		position: absolute;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.no-level {
		width: 690rpx;
		padding: 53rpx 27rpx 0 30rpx;
		box-sizing: border-box;
		position: absolute;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.level-text {
		font-size: 34rpx;
		font-family: Inter-Bold;
		font-weight: normal;
		color: #FFFFFF;
	}
	
	.level-open{
		font-size: 34rpx;
		font-family: Inter-SemiBold;
		font-weight: normal;
		color: #FFFFFF;
	}
	
	.level-num {
		font-size: 80rpx;
		font-family: Inter-Medium;
		font-weight: normal;
		color: #FFFFFF;
	}


	.nav-list {
		width: 750rpx;
		padding: 0 65rpx;
		box-sizing: border-box;
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		display: flex;
		justify-content: space-between;
		text-align: center;
		margin: 50rpx auto 0;
	}

	.logo-modular {
		width: 20%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 0 2.5%;
	}

	.nav-logo {
		width: 58rpx;
		height: 52rpx;
		display: block;
		margin: 0 auto 25rpx;
		text-align: center;
	}
	
	.swiper{
		width: 750rpx;
		height: 184rpx;
		padding: 0 30rpx;
		box-sizing: border-box;
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		display: flex;
		justify-content: space-between;
		text-align: center;
		margin: 50rpx auto 0;
	}
	
	.swiper-list{
		display: flex;
		flex-wrap: wrap;
		/* justify-content: space-between; */
		align-items: start;
	}
	
	/deep/ .uni-swiper-dot{
		width: 32rpx;
		height: 8rpx;
		background: rgba(0,0,0,0.4);
		border-radius: 8rpx;
	} 
	
	/deep/ .uni-swiper-dot-active{
		width: 32rpx;
		height: 8rpx;
		background: #000000;
		border-radius: 8rpx;
	}
	
	.scrib {
		width: 690rpx;
		height: 2rpx;
		background: rgba(155, 155, 155, 0.4);
		border-radius: 0px 0px 0px 0px;
		margin: 30rpx auto 32rpx;
	}

	/* 相册管理 */
	.video-modular {
		/* width: 750rpx;
		height: 1232rpx;
		position: fixed;
		top: 0;
		background: #ffffff; */
	}

	.video-nav {
		width: 690rpx;
		margin: 0 auto;
		padding-top: 20rpx;
		white-space: nowrap;
	}

	.video-nav-list {
		width: 690rpx;
		display: flex;
		justify-content: space-between;
	}
	/deep/ ::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}
	
	.video-text {
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #6A6A6C;
		margin-right: 54rpx;
	}

	.video-text-active {
		font-size: 30rpx;
		font-family: Inter-SemiBold;
		font-weight: normal;
		color: #1A1D26;
		padding-bottom: 21rpx;
		border-bottom: 6rpx solid #1A1D26;
	}

	.all-list {
		/* height: 1096rpx;
		overflow: hidden;
		overflow-y: scroll; */
	}

	.meny-list {
		width: 690rpx;
		margin: 44rpx auto 0;
		padding-bottom: 120rpx;
		text-align: left;
	}
	
	.meny{
		margin-bottom: 54rpx;
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
	
	.talk-modular{
		display: flex;
		align-items: center;
		justify-content: flex-end;
		margin-top: 30rpx;
	}	.talk-list{
		display: flex;
		align-items: center;
		margin-left: 28rpx;
	}	.talk-logo{
		width: 48rpx;
		height: 48rpx;
		display: block;
	}	.talk-text{
		margin-left: 8rpx;
		font-size: 28rpx;
		font-family: Inter-Regular;
		color: #6A6A6C;
	}
	/* 相册 */
	.camera-list {
		width: 690rpx;
		margin: 50rpx auto 0;
		display: flex;
		flex-wrap: wrap;
		padding-bottom: 120rpx;
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

	.collection-list {
		width: 670rpx;
		margin: 50rpx auto 0;
		display: flex;
		flex-wrap: wrap;
		padding-bottom: 120rpx;
	}
	
	.collection{
		display: flex;
		margin-bottom: 30rpx;
	}
	
	.collection-logo{
		width: 240rpx;
		height: 160rpx;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		display: block;
	}
	.collection-modular{
		width: 402rpx;
		margin-left: 28rpx;
		text-align: left;
		position: relative;
	}
	.collection-name{
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #1A1D26;
		line-height: 35rpx;
		
		overflow: hidden;
		white-space: nowrap;
		word-wrap: normal;
		text-overflow: ellipsis;
		-o-text-overflow: ellipsis;
	}
	.collection-price{
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		line-height: 33rpx;
		margin-top: 26rpx;
	}
	.love{
		width: 40rpx;
		height: 38rpx;
		display: block;
		position: absolute;
		bottom: 0;
		right: 0;
	}
	/* 被关注用户列表 */
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
	}
	.focus-user-photo{
		width: 112rpx;
		height: 112rpx;
		display: block;
		border-radius: 50%;
	}
	.focus-user-msg{
		width: 380rpx;
		margin-left: 20rpx;
		text-align: left;
	}
	.focus-user-name{
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #000000;
	}
	.focus-user-gender{
		font-size: 26rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #6A6A6C;
		margin-top: 16rpx;
	}
	.close-focus{
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
