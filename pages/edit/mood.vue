<template>
	<view class="container">
		<uni-nav-bar fixed left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000">
		</uni-nav-bar>		
		<view class="content">
			<view class="set">
				<view class="set-status">{{ $t('mood.set_status') }}</view>
				<view class="confirm" @click="commit">{{ $t('mood.determine') }}</view>
			</view>
			<view class="no-state" :class="{'active': cindex == 0}" @click="goIndex">{{ $t('mood.no_status') }}</view>
			<scroll-view class="scroll-container" scroll-y="true" @scroll="scrollY"
				:scroll-top="scrollTop" :show-scrollbar="false" :style="contentHeight">
				<view class="mood-lists">
					<template v-for="item,index in lists">
						<view v-if="index>0" class="mood-list" :class="{'active': cindex == index}" @click="goMood(index)">{{item.name}}</view>
					</template>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				contentHeight: {
					'height': '1080rpx'
				},
				
				default: "",
				
				cindex: 0,
				cValue: "",
				cName: "",
				lists: [],
			}
		},
		onLoad(option) {
			// if (!option.style) return
			this.userList = this.$store.state.duomiList
			if(this.userList.mood) this.cName = this.userList.mood
			this.getHttpList()
			
			let that = this;
			uni.getSystemInfo({
				success(res) {
					// #ifdef MP-WEIXIN
					if (res.windowHeight > 568) {
						// that.showListActive.height = (res.windowHeight - 52 - 90 - 27 - 10) + "px"
					}
					// #endif
			
					// #ifdef H5
					if (res.windowHeight > 568) {
						that.contentHeight.height = res.windowHeight - uni.upx2px(90) - uni.upx2px(252) + "px"
					}
					// #endif
				},
			})
		},
		methods: {
			back() {
				window.history.go(-1)
			},	
			getHttpList() {
				uni.showLoading({
					title: this.$t('common').loading + '...',
					mask: true
				});
				this.$myRequest({
					method: 'GET',
					url: '/user/attrs',
					data:{
						name: 'mood'
					}
				})
				.then(res => {
					uni.hideLoading();
					if (res.data.code == 200) {
						let obj = {};
						for(let i in res.data.data){
							obj = {};
							obj.value = i
							obj.name = res.data.data[i]
							if(this.cName && this.cName == obj.name){
								this.default = this.cName
								this.cindex = i
							}
							this.lists.push(obj)
						}
						
						this.cValue = this.lists[this.cindex].value
						this.cName = this.lists[this.cindex].name
						
						this.$nextTick(()=>{
							this.scrollTop = Math.ceil(Math.ceil(Math.floor(this.cindex)/3-2) * uni.upx2px(240))
						})
					} else {
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
					uni.showModal({
						title: this.$t('common').Tip,
						content: this.$t('common').Network,
						confirmText: this.$t('common').confirm,
						//content: err,
						showCancel: false,
					})
				})
			},
			scrollY(e) {
				this.scrollTop = e.detail.scrollTop
				// console.log(this.scrollTop)
			},
			goIndex() {
				this.cindex = 0
				this.cValue = this.lists[0].value
				this.cName = this.lists[0].name
				//console.log(this.cindex)
			},
			goMood(index) {
				this.cindex = index
				this.cValue = this.lists[index].value
				this.cName = this.lists[index].name
				//console.log(this.cindex)
			},
			commit() {
				// console.log(this.cindex)
				if(this.default == this.cName){
					//没有变化，无需重复请求
					this.back()
					return
				}	
				uni.showLoading({
					title: this.$t('common').loading + '...',
					mask: true
				});
				this.$myRequest({
					method: 'POST',
					url: '/user/editer',
					data: {
						mood: this.cValue
					}
				})
				.then(res => {
					uni.hideLoading();
					if (res.data.code == 200) {
						this.$store.commit('editMood', this.cName)
						uni.setStorageSync('duomiList', this.$store.state.duomiList)
						this.back()
					} else {
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
					uni.showModal({
						title: this.$t('common').Tip,
						content: this.$t('common').Network,
						confirmText: this.$t('common').confirm,
						//content: err,
						showCancel: false,
					})
				})
			}
		}
	}
</script>

<style scoped>
	.container {
		padding-bottom: 20rpx;
	}
	
	/deep/ .uni-navbar--border {
		border-bottom-color: white;
	}
	
	/deep/ ::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}
	
	.content {
		/* margin-top: 90rpx; */
		padding: 24rpx 30rpx 0;
	}
	.set{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.set-status{
		font-size: 40rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #1A1D26;
	}
	.confirm{
		padding: 12rpx 32rpx 13rpx;
		background: #1A1D26;
		border-radius: 60rpx;
		
		line-height: 28rpx;
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #FFFFFF;
	}
	.no-state{
		width: 690rpx;
		height: 88rpx;
		box-sizing: border-box;
		line-height: 88rpx;
		background: rgba(26,29,38,0.04);
		border-radius: 20rpx;
		margin: 40rpx auto 30rpx;
		
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #1A1D26;
		text-align: center;
	}
	
	.mood-lists{
		display: flex;
		flex-wrap: wrap;
	}
	.mood-list{
		width: 210rpx;
		height: 210rpx;
		box-sizing: border-box;
		
		padding: 12rpx 30rpx;
		margin: 0 10rpx 30rpx;
		background: rgba(26,29,38,0.04);
		border-radius: 20rpx;
		
		display: flex;
		justify-content: center;
		align-items: center;
		
		font-size: 56rpx;
		
	}
	.active{
		background: #1A1D26;
		color: #ffffff;
	}
</style>
