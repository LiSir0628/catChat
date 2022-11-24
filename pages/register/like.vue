<template>
	<view class="container">
		<uni-nav-bar fixed left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000">
		</uni-nav-bar>
		<view class="content">
			<view class="title">{{ $t('like.title') }}</view>
			
			<view class="modular-nav">
				<view class="modular-lists">
					<view class="modular" v-for="item,index in lists" @longpress="longpress(index)">
						{{item.name}}
						<image v-if="isShowDel" class="del-logo" src="../../static/images/register/icon09.png" @click="del(index)"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="login-btn" @click="goAdd">{{ $t('like.add') }}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShowDel: false,
				cindex: 0,
				lists: [],
			}
		},
		onLoad(option) {
			//this.getHttpList()
		},
		onShow() {
			this.getLike()
		},
		mounted() {
			
		},
		methods: {
			back() {
				window.history.go(-1)
			},
			getLike() {
				this.lists = this.$store.state.duomiList.hobbies
				let obj = ""
				let arr = []
				for(let i in this.lists){
					obj = {}
					obj.value = i
					obj.name = this.lists[i]
					arr.push(obj)
				}
				this.lists = arr
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
						name: 'hobbies'
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
							this.lists.push(obj)
						}
						console.log(res)
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
			longpress(index) {
				//长按删除
				
				// this.isShowDel = !this.isShowDel
			},
			del(index) {
				this.lists.splice(index, 1)
				this.$forceUpdate()
				console.log(this.lists)
				
			},
			goAdd() {
				uni.navigateTo({
					url: 'searchLike'
				});
			},
		}
	}
</script>

<style scoped>
	.container {
		
	}
	/deep/ .uni-navbar--border {
		border-bottom-color: white;
	}
	/* 标题输入账号信息 */
	.content{
		padding: 58rpx 0 0;
	}
	.title{
		font-size: 34rpx;
		/* font-family: Inter-Extra Bold, Inter; */
		font-family: Inter-Bold;
		font-weight: normal;
		color: #1A1D26;
		text-align: left;
		padding: 0 48rpx;
	}
	.modular-nav{
		height: 762rpx;
		overflow: hidden;
		overflow-y: auto;
		margin-top: 42rpx;
		padding: 20rpx 48rpx;
	}
	.modular-lists{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		/* justify-content: space-evenly; */
	}
	.modular-nav::-webkit-scrollbar {
	  display: none;
	}
	.modular{
		font-size: 28rpx;
		line-height: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		padding: 11rpx 19rpx;
		background: rgba(26,29,38,0.1);
		border-radius: 60rpx 60rpx 60rpx 60rpx;
		margin: 0 10rpx 30rpx 10rpx;
		/* margin: 0 20rpx 30rpx 0; */
		position: relative;
	}
	.del-logo{
		width: 40rpx;
		height: 40rpx;
		display: block;
		position: absolute;
		top: -20rpx;
		right: -20rpx;
	}
	
	.login-btn{
		width: 335rpx;
		height: 88rpx;
		line-height: 88rpx;
		background: #1A1D26;
		border-radius: 60rpx 60rpx 60rpx 60rpx;
		opacity: 1;
		
		font-size: 30rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #FFFFFF;
		text-align: center;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 120rpx;
		margin: 0 auto;
	}
</style>
