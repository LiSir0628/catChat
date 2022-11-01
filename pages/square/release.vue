<template>
	<view class="container">
		<uni-nav-bar fixed left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000" :title="$t('release.publishing_space')">
		</uni-nav-bar>
		
		<view class="content">
			<input class="title" placeholder-class="title-placeholder" v-model="title" :placeholder="$t('release.title_placeholder')" />
			
			<textarea maxlength="2000" class="textarea" placeholder-class="textarea-placeholder" v-model="content" :placeholder="$t('release.content_placeholder')" />
		
			<image class="upload" src="../../static/images/square/release/icon01.png"></image>
			
			<view class="option-module">
				<view class="area-left">
					<template v-if="!area_name">
						<image class="area-logo" src="../../static/images/square/release/icon03.png"></image>
						<view class="area-left-value">{{ $t('release.positon') }}</view>
					</template>
					<template v-else>
						<image class="area-logo" src="../../static/images/square/release/icon06.png"></image>
						<view class="area-left-value red">{{area_name}}</view>
					</template>
				</view>
				<view class="area-right" @click="goPostion">
					<view class="area-right-value" v-if="area_name" @click="goCancel">{{ $t('release.cancel') }}</view>
					<image class="arrow" src="../../static/images/order/icon06.png"></image>
				</view>
			</view>
			
			<view class="option-module">
				<view class="area-left">
					<template v-if="!topic_name">
						<image class="topic-logo" src="../../static/images/square/release/icon04.png"></image>
						<view class="area-left-value">{{ $t('release.add_topic') }}</view>
					</template>
					<template v-else>
						<image class="topic-logo" src="../../static/images/square/release/icon07.png"></image>
						<view class="area-left-value red">{{ $t('release.add_topic') }}</view>
					</template>
				</view>
				<view class="area-right" @click="goSearch">
					<image class="arrow" src="../../static/images/order/icon06.png"></image>
				</view>
			</view>
			
			<view class="option-module">
				<view class="area-left">
					<template v-if="!visible">
						<image class="eye-logo" src="../../static/images/square/release/icon05.png"></image>
						<view class="area-left-value">{{ $t('release.whether_public') }}</view>
					</template>
					<template v-else>
						<image class="eye-logo" src="../../static/images/square/release/icon08.png"></image>
						<view class="area-left-value red">{{ $t('release.whether_public') }}</view>
					</template>
				</view>
				<view class="area-right" @click="goSee">
					<image class="arrow" src="../../static/images/order/icon06.png"></image>
				</view>
			</view>
		</view>
		
		<view class="read-nav" @click="switchChange">
			<checkbox :checked="is_default" color="#ffffff" />
			<view class="read-text">{{ $t('release.read') }}</view>
		</view>
		
		<view class="commit-btn">
			{{ $t('release.publish') }}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "",
				content: "",
				
				area_name: "福州市",
				topic_name: "话题之家",
				visible: "123",
				
				is_default: false,
			}
		},
		methods: {
			back() {
				window.history.go(-1)
			},
			
			goCancel() {
				this.area_name = ""
			},
			goPostion() {
				uni.navigateTo({
					url: "postion"
				});
			},
			goSearch() {
				uni.navigateTo({
					url: "searchTopic"
				});
			},
			goSee() {
				uni.navigateTo({
					url: "see"
				});
			},
			switchChange(){
				this.is_default = !this.is_default
				console.log(this.is_default)
			},
		}
	}
</script>

<style scoped>
	.container {
		padding-bottom: 80rpx;
	}
	
	/deep/ .uni-navbar--border {
		border-bottom-color: white;
	}
	
	.content {
		padding: 24rpx 30rpx 0;
	}
	
	.title{
		width: 690rpx;
		height: 36rpx;
		font-size: 30rpx;
		font-family: Inter-SemiBold;
		font-weight: normal;
		/* color: #999999; */
		border-bottom: 2rpx solid #909090;
		padding-bottom: 20rpx;
	}
	.title-placeholder{
		font-size: 30rpx;
		font-family: Inter-SemiBold;
		font-weight: normal;
		color: #999999;
	}
	.textarea{
		width: 690rpx;
		height: 280rpx;
		/* background: #F5F5F5;
		border-radius: 20rpx; */
		box-sizing: border-box;
		margin-top: 34rpx;
		
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		/* color: #999999; */
	}
	.textarea-placeholder{
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #999999;
	}
	.upload{
		width: 160rpx;
		height: 160rpx;
		display: block;
		margin: 28rpx 0 20rpx;
	}
	
	/* 选项模块 */
	.option-module{
		padding: 40rpx 0 38rpx;
		border-bottom: 2rpx solid rgba(217,217,217,0.4);
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.area-left{
		display: flex;
		align-items: center;
	}
	.area-logo{
		width: 35rpx;
		height: 46rpx;
	}
	.topic-logo{
		width: 40rpx;
		height: 40rpx;
	}
	.eye-logo{
		width: 40rpx;
		height: 27rpx;
	}
	.area-left-value{
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #6A6A6C;
		margin-left: 25rpx;
	}
	.red{
		color: #ED4C4C;
	}
	.area-right{
		display: flex;
		align-items: center;
	}
	.area-right-value{
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #666666;
	}
	.arrow{
		width: 28rpx;
		height: 28rpx;
		display: block;
		margin-left: 12rpx;
	}
	/* 是否打开打赏 */
	.read-nav{
		width: 690rpx;
		margin: 38rpx auto 0;
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #6A6A6C;
		display: flex;
		align-items: center;
	}
	/deep/ .uni-checkbox-input{
		width: 30rpx;
		height: 30rpx;
		opacity: 1;
		border: 2rpx solid #999999;
		border-radius: 50%;
		margin-top: -4rpx;
	}
	/deep/ .uni-checkbox-input-checked{
		background: #000000;
	}
	/deep/ .uni-checkbox-input.uni-checkbox-input-checked:before{
		font-size: 24rpx !important;
	}
	
	.commit-btn{
		width: 335rpx;
		height: 88rpx;
		background: #1A1D26;
		border-radius: 60rpx;
		
		font-size: 30rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #FFFFFF;
		text-align: center;
		line-height: 88rpx;
		margin: 65rpx auto;
	}
</style>
