<template>
	<view class="container">
		<!-- <uni-nav-bar fixed left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000" :title="$t('search_topic.add_topic')">
		</uni-nav-bar> -->
		<uni-nav-bar fixed background-color="#ffffff">
			<block slot="left">
				<view class="back" @click="back">
					<uni-icons type="back" color="#666" size="18" />
				</view>
			</block>
			<view class="area-card-modular">
				<view class="area-card-text">{{ $t('search_topic.add_topic') }}</view>
			</view>
			<block slot="right">
				<view @click="complete">{{ $t('search_topic.complete') }}</view>
			</block>
		</uni-nav-bar>
		
		<view class="content">
			<view class="topic-modular">
				<image class="search-logo" src="../../static/images/square/icon02.png"></image>
				<input class="topic" placeholder-class="topic-placeholder" v-model="topic" :placeholder="$t('search_topic.topic_placeholder')" @confirm="getReTopicLists" />
			</view>
			
			<view class="select-topic">
				<view class="select-modular-lists">
					<view class="select-modular modular-active" v-for="item,index in topicLists">
						<view>{{item.title}}</view>
						<image class="del-logo" src="../../static/images/square/delete.png" @click="del(index)"></image>
					</view>
				</view>
			</view>
			
			<view class="modular-lists">
				<view class="modular" :class="{'modular-active': item.isActive}" v-for="item,index in lists" @click="goChoose(index)">
					{{item.title}}
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
				
				lists:[{
					id: 1,
					title: 'Social expert',
					isActive: true
				},{
					id: 2,
					title: 'Handsome boy',
					isActive: true
				},{
					id: 3,
					title: 'lovely',
					isActive: false
				}],
				
				topicLists: [],
				num: 0,
				allNum: 5,
			}
		},
		created() {
			this.getReTopicLists()
		},
		mounted() {
			this.topicLists = this.$store.state.topicLists
			this.num = this.topicLists.length
		},
		methods: {
			back() {
				window.history.go(-1)
			},
			getReTopicLists() {
				this.lists = []
				uni.showLoading({
					title: this.$t('common').loading + '...',
					mask: true
				});
				this.$myRequest({
					method: 'GET',
					url: '/ht/topic',
					data: {
						keyword: this.topic,
						page: 1,
						limit: 20,
					}
				})
				.then(res => {
					uni.hideLoading();
					if (res.data.code == 200) {
						this.lists = res.data.data
						//判断topicLists内 是否存在lists相同值，lists的isActive变为true
						for(let i in this.topicLists){
							for(let k in this.lists){
								if(this.topicLists[i].id == this.lists[k].id){
									this.lists[k].isActive = true
									break
								}
							}
						}
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
			check() {
				// 检查选择数量
				let number = 0;
				this.num = this.topicLists.length
			},
			del(index) {
				for(let i in this.lists){
					if(this.lists[i].id == this.topicLists[index].id){
						this.lists[i].isActive = false
						break
					}
				}
				this.topicLists.splice(index, 1)
				this.check()
				this.$forceUpdate()
			},
			goChoose(index) {
				// 数量判断
				if(this.num == this.allNum && !this.lists[index].isActive){
					uni.showModal({
						title: this.$t('common').Tip,
						content: this.$t('common').limit,
						confirmText: this.$t('common').confirm,
						showCancel: false,
					})
					return
				}
				this.lists[index].isActive = !this.lists[index].isActive
				// 判断是添加还是删除
				if(this.lists[index].isActive) {
					this.topicLists.push(this.lists[index])
				} else {
					for(let i in this.topicLists){
						if(this.topicLists[i].id == this.lists[index].id){
							this.topicLists.splice(i, 1)
							break
						}
					}
				}
				console.log(this.lists)
				console.log(this.topicLists)
				this.check()
				this.$forceUpdate()
			},
			complete() {
				console.log(this.topicLists)
				this.$store.commit('searchTopicLists', this.topicLists) 
				uni.setStorageSync('topicLists', this.topicLists)
				this.back()
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
		padding: 24rpx 0 0;
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
		box-sizing: border-box;
		background: #F5F5F5;
		margin: 40rpx auto 0;
	}
	
	.select-modular-lists{
		width: 690rpx;
		/* overflow: hidden;
		overflow-y: auto; */
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		margin: 40rpx auto;
		padding: 50rpx 0;
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
		margin: 0 20rpx 30rpx 20rpx;
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
