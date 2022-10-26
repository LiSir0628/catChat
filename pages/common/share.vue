<template>
	<view class="share-mask">
		<uni-popup class="share-popup" ref="popupShare" @maskClick="close">
			<view class="share-card">
				<view class="share-top">
					<!-- <view class="share-title">{{ $t('share.share') }}</view> -->
					<view class="share-title">{{ $t('share.share') }}</view>
					<view class="share-close" @click="close">+</view>
				</view>
				<view>
					<scroll-view class="uesr-lists" scroll-x="true" @scroll="scroll"
						:show-scrollbar="false">
						<view class="uesr-list">
							<view class="user-msg" v-for="item,index in userLists" @click="goShare(item)">
								<view class="user-logo-modular">
									<image class="user-logo" :src="item.image"></image>
								</view>
								<view class="user-name">{{item.name}}</view>
							</view>
						</view>
					</scroll-view>
				</view>
				<view>
					<scroll-view class="app-lists" scroll-x="true" @scroll="scroll"
						:show-scrollbar="false">
						<view class="uesr-list">
							<view class="user-msg" v-for="item,index in appLists" @click="goShare(item)">
								<view class="user-logo-modular">
									<image class="user-logo" :src="item.image"></image>
								</view>
								<view class="app-name">{{item.name}}</view>
							</view>
						</view>
					</scroll-view>
				</view>
				<view class="copy">
					<image class="copy-logo" src="../../static/images/square/topic/icon09.png"></image>
					<view class="copy-name">{{ $t('share.copy_link') }}</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userLists:[{
					id: 1,
					name: "reigitn sinraia aidhai isnai siaidia",
					image: "../../static/images/user/photo01.jpg",
				},{
					id: 2,
					name: "Love",
					image: "../../static/images/user/photo01.jpg"
				},{
					id: 3,
					name: "People to the sunny",
					image: "../../static/images/user/photo01.jpg"
				},{
					id: 4,
					name: "Michael jackson",
					image: "../../static/images/user/photo01.jpg"
				},{
					id: 5,
					name: "Michael jackson",
					image: "../../static/images/user/photo01.jpg"
				},{
					id: 6,
					name: "Michael jackson",
					image: "../../static/images/user/photo01.jpg"
				},{
					id: 7,
					name: "Michael jackson",
					image: "../../static/images/user/photo01.jpg"
				}],
				appLists:[{
					id: 1,
					name: "Facebook",
					image: "../../static/images/square/topic/icon04.png",
				},{
					id: 2,
					name: "Youtube",
					image: "../../static/images/square/topic/icon05.png",
				},{
					id: 3,
					name: "Twitter",
					image: "../../static/images/square/topic/icon06.png",
				},{
					id: 4,
					name: "WhatsApp",
					image: "../../static/images/square/topic/icon07.png",
				},{
					id: 5,
					name: "Instagram",
					image: "../../static/images/square/topic/icon08.png",
				}]
			}
		},
		methods: {
			open() {
				this.$refs.popupShare.open("bottom")
			},
			close() {
				this.$refs.popupShare.close()
				//this.$emit("goClose", "")
			},
			
			scroll(e) {
				//this.scrollLeft = e.detail.scrollLeft
				// console.log(e)
				// console.log(this.scrollLeft)
			},
			goShare(item) {
				console.log("我选中分享给他了")
			},
		}
	}
</script>

<style scoped>
	/deep/ .uni-popup .uni-popup__wrapper {
		border-radius: 50rpx;
	}
	
	/deep/ .uni-popup {
		z-index: 1000;
	}
	
	/* 遮罩样式 */
	.share-mask {}
	
	.share-card {
		width: 750rpx;
		height: 890rpx;
		background: #FFFFFF;
		border-radius: 40rpx 40rpx 0px 0px;
		padding: 32rpx 0 0 0;
		margin: 0 auto;
		/* text-align: center; */
		line-height: normal;
		box-sizing: border-box;
		position: relative;
	}
	
	.share-top {
		position: relative;
		padding: 0 0 36rpx 0;
		border-bottom: 2rpx solid rgba(155, 155, 155, 0.4);
	}
	
	.share-title {
		font-size: 34rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #000000;
		line-height: 40rpx;
		text-align: center;
	}
	
	.share-close {
		font-size: 60rpx;
		line-height: 32rpx;
		color: #1A1D26;
		position: absolute;
		top: 0;
		right: 30rpx;
		transform: rotate(45deg);
	}
	
	/* 用户推荐 */
	/deep/ ::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}
	.uesr-lists{
		width: 690rpx;
		margin: 30rpx auto 0;
		white-space: nowrap;
		padding-bottom: 30rpx;
		border-bottom: 2rpx solid rgba(217,217,217,0.8);
	}
	.uesr-list{
		display: flex;
	}
	.user-msg{
		margin-right: 10rpx;
	}
	.user-logo-modular{
		margin: 0 10rpx;
	}
	.user-logo{
		width: 112rpx;
		height: 112rpx;
		display: block;
		border-radius: 50%;
		margin: 0 auto;
	}

	.user-name{
		/* width: 140rpx; */
		font-size: 28rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #1A1D26;
		white-space: initial;
		margin-top: 27rpx;
		text-align: center;
		
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
	
	/* app */
	.app-lists{
		width: 690rpx;
		margin: 40rpx auto 0;
		white-space: nowrap;
		padding-bottom: 40rpx;
		border-bottom: 2rpx solid rgba(217,217,217,0.8);
	}
	.app-name{
		font-size: 28rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #1A1D26;
		white-space: initial;
		margin-top: 32rpx;
		text-align: center;
		
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
	
	.copy{
		width: 132rpx;
		margin: 40rpx 0 0 30rpx;
		text-align: left;
	}
	.copy-logo{
		width: 112rpx;
		height: 112rpx;
		display: block;
		border-radius: 50%;
		margin: 0 auto;
	}
	.copy-name{
		font-size: 28rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #1A1D26;
		white-space: initial;
		margin-top: 35rpx;
		text-align: center;
		
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
</style>
