<template>
	<view class="container">
		<image class="icon05" src="../../static/images/user/icon05.png"></image>
		<view class="top">
			<view>
				<image class="top-logo left-logo" src="../../static/images/user/icon08.png"></image>
				<image class="top-logo" src="../../static/images/user/icon14.png"></image>
			</view>
			<image class="top-logo" src="../../static/images/user/icon02.png"></image>
		</view>

		<view class="user-msg">
			<view class="user-left">
				<view class="name-modular">
					<view>Michael jackson</view>
					<image class="sex-logo" src="../../static/images/user/icon12.png"></image>
				</view>

				<view class="age">26 {{ $t('user.old') }}</view>

				<view class="inviter">
					<image class="photo-small" src="../../static/images/user/photo02.png"></image>
					<view>Mi Qiren</view>
				</view>
			</view>
			<image class="photo" src="../../static/images/user/photo01.jpg"></image>
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
			<view class="nav-list">
				<view class="logo-modular" v-for="item in navList">
					<image class="nav-logo" :style="item.styleClass" :src="item.url"></image>
					<view>{{item.name}}</view>
				</view>
			</view>

			<view class="scrib"></view>

			<view class="video-modular">
				<view class="video-nav">
					<view class="video-nav-list">
						<view class="video-text" :class="{'video-text-active': cindex == index }"
							v-for="item,index in videoList" @click="switchTab(index)">
							{{item.name}}
						</view>
					</view>
				</view>

				<view class="meny-list all-list" v-if="cindex == 0">
					<view class="meny">
						<view class="meny-time">2022-08-08</view>
						<view class="meny-comment">Very beautiful scenery</view>
						<image class="meny-logo" src="../../static/images/user/photo03.jpg"></image>
					</view>
					<view class="meny">
						<view class="meny-time">2022-08-08</view>
						<view class="meny-comment">Very beautiful scenery</view>
						<image class="meny-logo" src="../../static/images/user/photo03.jpg"></image>
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
			</view>
		</view>

		<view class="bottom">
			<view class="bottom-list" v-for="item,index in bottomList" @click="goIndex(index)">
				<image class="bottom-logo" :style="item.styleClass" :src="item.url"></image>
				<view :class="{'bottom-nav-active': kindex == index}">{{item.name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isMember: false,
				
				cindex: 3,
				navList: [{
					id: 1,
					name: this.$t('user').wallet,
					url: "../../static/images/user/icon10.png",
					styleClass: {
						width: '58rpx',
						height: '52rpx'
					},
				}, {
					id: 2,
					name: this.$t('user').order,
					url: "../../static/images/user/icon07.png",
					styleClass: {
						width: '46rpx',
						height: '50rpx'
					},
				}, {
					id: 3,
					name: this.$t('user').browse,
					url: "../../static/images/user/icon09.png",
					styleClass: {
						width: '55rpx',
						height: '55rpx'
					},
				}, {
					id: 4,
					name: this.$t('user').invitation,
					url: "../../static/images/user/icon13.png",
					styleClass: {
						width: '56rpx',
						height: '53rpx'
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
				}],

				kindex: 3,
				bottomList: [{
					id: 1,
					name: this.$t('bottom').Pair,
					url: "../../static/images/user/icon03.png",
					styleClass: {
						width: '50rpx',
						height: '40rpx'
					},
				}, {
					id: 2,
					name: this.$t('bottom').Shop,
					url: "../../static/images/user/icon06.png",
					styleClass: {
						width: '41rpx',
						height: '37rpx'
					},
				}, {
					id: 3,
					name: this.$t('bottom').News,
					url: "../../static/images/user/icon04.png",
					styleClass: {
						width: '42rpx',
						height: '39rpx'
					},
				}, {
					id: 4,
					name: this.$t('bottom').Me,
					url: "../../static/images/user/icon11.png",
					styleClass: {
						width: '40rpx',
						height: '44rpx'
					},
				}]
			}
		},
		methods: {
			back() {
				window.history.go(-1)
			},
			switchTab(index) {
				if (this.cindex == index) return
				this.cindex = index
			},
			goIndex(index) {
				if (this.kindex == index) return
				this.kindex = index
				console.log("我要去:" + index)
			}
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
		line-height: 34rpx;
		font-family: Inter-Bold, Inter;
		font-weight: bold;
		color: #1A1D26;
	}

	.sex-logo {
		width: 40rpx;
		height: 40rpx;
		margin-left: 14rpx;
	}

	.age {
		font-size: 28rpx;
		line-height: 28rpx;
		font-family: Inter-Regular, Inter;
		font-weight: 400;
		color: #333333;
		margin: 16rpx 0 15rpx 0;
	}

	.inviter {
		display: flex;
		align-items: center;
		font-size: 28rpx;
		line-height: 28rpx;
		font-family: Inter-Regular, Inter;
		font-weight: 400;
		color: #6A6A6C;
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
		padding: 43rpx 27rpx 0 30rpx;
		box-sizing: border-box;
		position: absolute;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.level-text {
		font-size: 34rpx;
		font-family: Inter-Bold Italic, Inter;
		font-weight: normal;
		color: #FFFFFF;
	}
	
	.level-open{
		font-size: 34rpx;
		font-family: Inter-Semi Bold, Inter;
		font-weight: normal;
		color: #FFFFFF;
	}
	
	.level-num {
		font-size: 80rpx;
		font-family: Inter-Medium Italic, Inter;
		font-weight: normal;
		color: #FFFFFF;
	}


	.nav-list {
		width: 750rpx;
		padding: 0 65rpx;
		box-sizing: border-box;
		font-size: 30rpx;
		font-family: Inter-Regular, Inter;
		font-weight: 400;
		color: #1A1D26;
		display: flex;
		justify-content: space-between;
		text-align: center;
		margin: 50rpx auto 0;
	}

	.logo-modular {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.nav-logo {
		width: 58rpx;
		height: 52rpx;
		display: block;
		margin: 0 auto 25rpx;
		text-align: center;
	}

	.scrib {
		width: 690rpx;
		height: 2rpx;
		background: rgba(155, 155, 155, 0.4);
		border-radius: 0px 0px 0px 0px;
		margin: 45rpx auto 32rpx;
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
	}

	.video-nav-list {
		width: 690rpx;
		display: flex;
		justify-content: space-between;
	}

	.video-text {
		font-size: 30rpx;
		font-family: Inter-Medium, Inter;
		font-weight: 500;
		color: #6A6A6C;
	}

	.video-text-active {
		font-size: 30rpx;
		font-family: Inter-Semi Bold, Inter;
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
		margin-bottom: 30rpx;
	}
	
	.meny-time {
		font-size: 28rpx;
		line-height: 30rpx;
		font-family: Inter-Regular, Inter;
		font-weight: 400;
		color: #6A6A6C;
	}

	.meny-comment {
		font-size: 30rpx;
		line-height: 35rpx;
		font-family: Inter-Regular, Inter;
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
		font-family: Inter-Medium, Inter;
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
		font-family: Inter-Regular, Inter;
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
		font-family: Inter-Regular, Inter;
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
