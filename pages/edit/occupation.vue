<template>
	<view class="container">
		<view class="top">
			<uni-nav-bar left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000" :title="$t('occupation.occupation')">
			</uni-nav-bar>
			
			<!-- <view class="determine" :class="{'isRed': cindex}" @click="commit">{{ $t('occupation.complete') }}</view> -->
			<view class="determine isRed" @click="commit">{{ $t('occupation.complete') }}</view>
		</view>
		
		<view class="content">
			<view class="occupation-lists">
				<view class="occupation-list" :class="{'active': cindex == index}" v-for="item,index in lists" @click="goOccupation(index)">{{item.name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				default: "",
				
				cindex: 1,
				cValue: "",
				cName: "",
				lists: [],
			}
		},
		onLoad(option) {
			// if (!option.style) return
			this.userList = this.$store.state.duomiList
			if(this.userList.job) this.cName = this.userList.job
			this.getHttpList()
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
						name: 'job'
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
			goOccupation(index) {
				this.cindex = index
				this.cValue = this.lists[index].value
				this.cName = this.lists[index].name
			},
			commit() {
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
						job: this.cValue
					}
				})
				.then(res => {
					uni.hideLoading();
					if (res.data.code == 200) {
						this.$store.commit('editJob', this.cName)
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
		padding-bottom: 120rpx;
	}
	
	/deep/ .uni-navbar--border {
		border-bottom-color: white;
	}
	
	.top{
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
	}
	
	.determine{
		position: absolute;
		right: 28rpx;
		top: -4rpx;
		bottom: 0;
		vertical-align: middle;
		display: flex;
		align-items: center;
		
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #999999;
	}
	
	.isRed{
		color: #F14E49;
	}
	
	.content {
		/* margin-top: 90rpx; */
		padding: 114rpx 20rpx 0;
	}
	
	.title{
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #6A6A6C;
	}
	
	.occupation{
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #1A1D26;
		padding: 30rpx 0 20rpx 0;
		border-bottom: 2rpx solid #909090;
	}
	.occupation-lists{
		display: flex;
		flex-wrap: wrap;
	}
	.occupation-list{
		padding: 12rpx 30rpx;
		margin: 0 10rpx 30rpx;
		background: rgba(26,29,38,0.1);
		border-radius: 60rpx;
		
		font-size: 28rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #1A1D26;
	}
	.active{
		background: #1A1D26;
		
		font-size: 28rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #FFFFFF;
	}
</style>
