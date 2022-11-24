<template>
	<view class="container">
		<uni-nav-bar fixed background-color="#ffffff">
			<block slot="left">
				<view class="back" @click="back">
					<uni-icons type="back" color="#666" size="18" />
				</view>
			</block>
			<view class="area-card-modular">
				<view class="area-card-text">{{ $t('search_like.add_interest') }}</view>
			</view>
			<block slot="right">
				<view @click="complete">{{ $t('search_like.complete') }}</view>
			</block>
		</uni-nav-bar>
		
		<view class="content">
			<!-- <view class="topic-modular">
				<image class="search-logo" src="../../static/images/square/icon02.png"></image>
				<input class="topic" placeholder-class="topic-placeholder" v-model="topic" :placeholder="$t('search_like.interest_placeholder')" @confirm="getReTopicLists" />
			</view> -->
			
			<view class="select-topic">
				<view class="select-modular-lists">
					<view class="select-modular modular-active" v-for="item,index in likeLists">
						<view>{{item.name}}</view>
						<image class="del-logo" src="../../static/images/square/delete.png" @click="del(index)"></image>
					</view>
				</view>
			</view>
			
			<view class="modular-lists">
				<view class="modular" :class="{'modular-active': item.isActive}" v-for="item,index in lists" @click="goChoose(index)">
					{{item.name}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				topic: "",
				
				likeLists: [],
				lists:[],
			}
		},
		created() {
			this.getLike()
			this.getReTopicLists()
		},
		mounted() {

		},
		methods: {
			back() {
				window.history.go(-1)
			},
			getLike() {
				this.likeLists = this.$store.state.duomiList.hobbies
				let obj = ""
				let arr = []
				for(let i in this.likeLists){
					obj = {}
					// obj.value = i
					obj.name = this.likeLists[i]
					arr.push(obj)
				}
				this.likeLists = arr
			},
			getReTopicLists() {
				this.lists = []
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
							obj.isActive = false
							for(let k in this.likeLists){
								if(this.likeLists[k].name == obj.name){
									this.likeLists[k].value = obj.value
									obj.isActive = true
									break
								}
							}
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
			del(index) {
				for(let i in this.lists){
					if(this.lists[i].value == this.likeLists[index].value){
						this.lists[i].isActive = false
						break
					}
				}
				this.likeLists.splice(index, 1)
				this.$forceUpdate()
			},
			goChoose(index) {
				this.lists[index].isActive = !this.lists[index].isActive
				// 判断是添加还是删除
				if(this.lists[index].isActive) {
					this.likeLists.push(this.lists[index])
				} else {
					for(let i in this.likeLists){
						if(this.likeLists[i].value == this.lists[index].value){
							this.likeLists.splice(i, 1)
							break
						}
					}
				}
				this.$forceUpdate()
			},
			complete() {
				let obj = ""
				let arr = []
				for(let i in this.likeLists){
					arr.push(this.likeLists[i].name)
					if(i < this.likeLists.length - 1){
						obj = obj + this.likeLists[i].value + ","
					} else {
						obj = obj + this.likeLists[i].value
					}
				}
				uni.showLoading({
					title: this.$t('common').loading + '...',
					mask: true
				});
				this.$myRequest({
					method: 'POST',
					url: '/user/editer',
					data: {
						hobbies: obj
					}
				})
				.then(res => {
					uni.hideLoading();
					if (res.data.code == 200) {
						this.$store.commit('editHobbies', arr)
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
				//this.back()
			}
		}
	}
</script>

<style scoped>
	.container {
		padding-bottom: 80rpx;
	}
	
	.back {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		width: 160rpx;
	}
	
	.area-card-modular{
		display: flex;
		align-items: center;
	}
	
	.area-card-logo{
		width: 36rpx;
		height: 44rpx;
		display: block;
	}
	
	.area-card-text{
		font-size: 32rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		text-align: center;
		/* margin-left: 8rpx; */
	}
	/deep/ .uni-navbar__header-btns-left{
		/* position: static; */
	}
	/deep/ .uni-navbar__header-container {
		justify-content: center;
		padding: 0;
	}
	/deep/ .uni-navbar__header-btns-right {
		width: 180rpx !important;
		display: flex;
		position: absolute;
		right: 20rpx;
		top: 0;
		bottom: 0;
		vertical-align: middle;
		margin: auto 0;
		
	}
	/deep/ .uniui-more-filled{
		transform: rotate(90deg);
	}
	/deep/ .uni-navbar--border {
		border-bottom-color: rgba(0,0,0,0);
	}
	/* 主要内容 */
	.content {
		/* padding: 24rpx 0 0; */
	}
	
	.topic-modular{
		width: 690rpx;
		margin: 0 30rpx;
		height: 80rpx;
		position: relative;
		display: flex;
		align-items: center;
	}
	.search-logo{
		width: 32rpx;
		height: 32rpx;
		display: block;
		position: absolute;
		top: 0;
		bottom: 0;
		margin: auto 0;
		left: 30rpx;
	}
	.topic{
		width: 690rpx;
		height: 80rpx;
		box-sizing: border-box;
		background: #F5F5F5;
		border-radius: 60rpx;
		padding: 0 80rpx;
		
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
	}
	
	.topic-placeholder{
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #999999;
	}
	
	.select-topic{
		width: 750rpx;
		height: 440rpx;
		overflow: hidden;
		overflow-y: auto;
		box-sizing: border-box;
		background: #F5F5F5;
		/* margin: 40rpx auto 0; */
		margin: 0 auto 0;
		padding: 50rpx 0;
	}
	
	.select-modular-lists{
		width: 690rpx;
		/* overflow: hidden;
		overflow-y: auto; */
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		margin: 0 auto;
		/* padding: 50rpx 0; */
	}
	.select-modular{
		font-size: 28rpx;
		line-height: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		padding: 16rpx 20rpx;
		background: rgba(26,29,38,0.1);
		border-radius: 60rpx;
		margin: 0 10rpx 30rpx 10rpx;
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
	/* 模块列表 */
	.modular-lists{
		width: 710rpx;
		/* overflow: hidden;
		overflow-y: auto; */
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		margin: 40rpx auto;
	}
	.modular-lists::-webkit-scrollbar {
	  display: none;
	}
	.modular{
		font-size: 28rpx;
		line-height: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		padding: 16rpx 20rpx;
		background: rgba(26,29,38,0.1);
		border-radius: 60rpx;
		margin: 0 10rpx 30rpx 10rpx;
	}
	.modular-active{
		background: #1A1D26;
		color: #FFFFFF;
	}
</style>
