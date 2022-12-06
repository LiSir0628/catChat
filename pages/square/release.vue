<template>
	<view class="container">
		<uni-nav-bar fixed left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000" :title="$t('release.publishing_space')">
		</uni-nav-bar>
		
		<view class="content">
			<input class="title" placeholder-class="title-placeholder" v-model="title" :placeholder="$t('release.title_placeholder')" />
			
			<textarea maxlength="2000" class="textarea" placeholder-class="textarea-placeholder" v-model="content" :placeholder="$t('release.content_placeholder')" />
			
			<view class="upload-lists">
				<view class="upload-image-list" v-for="item,index in picLists">
					<image class="upload" :src="item"></image>
				</view>
				<view class="upload-image-list" @click="upload">
					<image class="upload" src="../../static/images/square/release/icon01.png"></image>
				</view>
			</view>
			
			<view class="option-module">
				<view class="area-left">
					<template v-if="!local_name">
						<image class="area-logo" src="../../static/images/square/release/icon03.png"></image>
						<view class="area-left-value">{{ $t('release.positon') }}</view>
					</template>
					<template v-else>
						<image class="area-logo" src="../../static/images/square/release/icon06.png"></image>
						<view class="area-left-value red local_name">{{local_name}}</view>
					</template>
				</view>
				<view class="area-right" @click="goPostion">
					<view class="area-right-value" v-if="local_name" @click.stop="goCancel">{{ $t('release.cancel') }}</view>
					<image class="arrow" src="../../static/images/order/icon06.png"></image>
				</view>
			</view>
			
			<view class="option-module">
				<view class="area-left">
					<template v-if="!topic || topic.length <= 0">
						<image class="topic-logo" src="../../static/images/square/release/icon04.png"></image>
						<view class="area-left-value">{{ $t('release.add_topic') }}</view>
					</template>
					<template v-else>
						<image class="topic-logo" src="../../static/images/square/release/icon07.png"></image>
						<view class="area-left-value red">{{ $t('release.add_topic') }}</view>
					</template>
				</view>
				<view class="area-right" @click="goSearch">
					<view class="area-right-value">{{topic_name}}</view>
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
					<view class="area-right-value">{{visible_name}}</view>
					<image class="arrow" src="../../static/images/order/icon06.png"></image>
				</view>
			</view>
		</view>
		
		<view class="read-nav" @click="switchChange">
			<checkbox :checked="reward" color="#ffffff" />
			<view class="read-text">{{ $t('release.read') }}</view>
		</view>
		
		<view class="commit-btn" @click="commit">
			{{ $t('release.publish') }}
		</view>
	</view>
</template>

<script>
	import {
		pathToBase64,
		base64ToPath
	} from 'image-tools'
	export default {
		data() {
			return {
				title: "",
				pic: "",
				//pic: "https://media.domefish.com/images/images/a4907e146f5856fb2e313fb3c4c32946.webp|https://media.domefish.com/images/images/a4907e146f5856fb2e313fb3c4c32946.webp|https://media.domefish.com/images/images/a4907e146f5856fb2e313fb3c4c32946.webp|https://media.domefish.com/images/images/a4907e146f5856fb2e313fb3c4c32946.webp",
				content: "",
				longitude: "",
				latitude: "",
				local_name: "",
				visible: "1",
				reward: "1",
				topic: "",
				
				visible_name: "",
				visibleList: [{
					value : "1",
					title: this.$t('see').public,
				},{
					value : "2",
					title: this.$t('see').friends,
				},{
					value : "3",
					title: this.$t('see').yourself,
				}],
				topic_name: "",
				
				fileLists: [],
				picLists: [],
			}
		},
		created() {
			
		},
		onShow() {
			//可见范围
			this.visible = this.$store.state.visible
			for(let i in this.visibleList){
				if(this.visibleList[i].value == this.visible){
					this.visible_name = this.visibleList[i].title
					break
				}
			}
			
			//话题
			this.topic_name = ""
			this.topic = this.$store.state.topicLists
			let arr = [];
			let obj = {};
			for(let i in this.topic){
				obj = {}
				if(this.topic_name) this.topic_name = this.topic_name + "," + this.topic[i].title
				if(!this.topic_name) this.topic_name = this.topic[i].title
				obj.id = this.topic[i].id
				obj.title = this.topic[i].title
				arr.push(obj)
			}
			this.topic = arr
			console.log(this.topic)
			
			//经纬度
			console.log(this.$store.state)
			this.longitude = this.$store.state.addressList.longitude
			this.latitude = this.$store.state.addressList.latitude
			this.local_name = this.$store.state.addressList.local_name
		},
		mounted() {
			if(this.reward == -1){
				this.reward = false
			} else if(this.reward == 1){
				this.reward = true
			}
		},
		methods: {
			back() {
				window.history.go(-1)
			},
			
			goCancel() {
				this.longitude = ""
				this.latitude = ""
				this.local_name = ""
				this.$store.commit('searchAddressList', {})
				uni.setStorageSync('addressList', {})
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
				if(this.reward == -1){
					this.reward = true
				} else if(this.reward == 1){
					this.reward = false
				} else {
					this.reward = !this.reward
				}
				console.log(this.reward)
			},
			upload() {
				let _this = this;
				_this.fileLists = [];
				uni.chooseImage({
					count: 9, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album','camera'], //拍照选择
					success: (res)=> {
						const tempFilePaths = res.tempFilePaths;
						let imgLength = res.tempFilePaths.length;
						console.log(res.tempFilePaths)
						for(let i in res.tempFilePaths){
							pathToBase64(res.tempFilePaths[i])
							.then(path => {
								console.log(path)
								_this.fileLists.push(path)
								//上方为赋值，下方为上传
								if(i >= (imgLength -1)){
									_this.picLists = _this.picLists.concat(_this.fileLists)
									_this.setUpload()
								}
							})
							.catch(error => {
								console.error(error)
							})
						}
					}
				});
			},
			setUpload() {
				uni.showLoading({
					title: this.$t('common').loading + '...',
					mask: true
				});
				this.$myRequest({
					method: 'POST',
					url: '/upload',
					data: {
						file: this.fileLists
					}
				})
				.then(res => {
					uni.hideLoading();
					if (res.data.code == 200) {
						for(let i in res.data.data){
							if(this.pic) {
								this.pic = this.pic + "|" + res.data.data[i].path
							} else {
								this.pic = res.data.data[i].path
							}
						}
					} else {
						this.picLists.length = this.picLists.length - this.fileLists.length
						uni.showModal({
							title: this.$t('common').Tip,
							content: res.data.msg,
							confirmText: this.$t('common').confirm,
							showCancel: false,
						})
					}
					this.$forceUpdate()
				})
				.catch(err => {
					uni.hideLoading();
					this.picLists.length = this.picLists.length - this.fileLists.length
					this.$forceUpdate()
					uni.showModal({
						title: this.$t('common').Tip,
						content: this.$t('common').Network,
						confirmText: this.$t('common').confirm,
						//content: err,
						showCancel: false,
					})
				})
			},
			commit() {
				uni.showLoading({
					title: this.$t('common').loading + '...',
					mask: true
				});
				console.log(JSON.stringify(this.topic))
				this.$myRequest({
					method: 'POST',
					url: '/ht/article',
					data: {
						title: this.title,
						pic: this.pic,
						content: this.content,
						longitude: this.longitude,
						latitude: this.latitude,
						local_name: this.local_name,
						visible: this.visible,
						reward: this.reward == true ? "1" : "0",
						topic: this.topic
					}
				})
				.then(res => {
					if (res.data.code == 200) {
						uni.setStorageSync('isRefreshSquare', "1")
						//this.back()
						// uni.showModal({
						// 	title: this.$t('common').Tip,
						// 	content: res.data.data,
						// 	confirmText: this.$t('common').confirm,
						// 	showCancel: false,
						// })
						setTimeout(()=>{
							uni.hideLoading();
							this.back()
						},500)
					} else {
						uni.hideLoading();
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
	.upload-lists{
		display: flex;
		align-content: center;
		flex-wrap: wrap;
	}
	.upload-image-list {
		width: 160rpx;
		height: 160rpx;
		display: block;
		margin: 28rpx 6rpx 20rpx;
		border-radius: 20rpx;
		overflow: hidden;
	}
	.upload{
		width: 160rpx;
		height: 160rpx;
		display: block;
		/* margin: 28rpx 20rpx 20rpx 0; */
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
	.local_name{
		width: 300rpx;
		overflow: hidden;
		white-space: nowrap;
		word-wrap: normal;
		text-overflow: ellipsis;
		-o-text-overflow: ellipsis;
	}
	.area-right{
		display: flex;
		align-items: center;
	}
	.area-right-value{
		width: 280rpx;
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #666666;
		text-align: right;
		
		overflow: hidden;
		white-space: nowrap;
		word-wrap: normal;
		text-overflow: ellipsis;
		-o-text-overflow: ellipsis;
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
