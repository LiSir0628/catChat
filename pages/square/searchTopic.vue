<template>
	<view class="container">
		<uni-nav-bar fixed left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000" :title="$t('search_topic.add_topic')">
		</uni-nav-bar>
		
		<view class="content">
			<view class="topic-modular">
				<image class="search-logo" src="../../static/images/square/icon02.png"></image>
				<input class="topic" placeholder-class="topic-placeholder" v-model="topic" :placeholder="$t('search_topic.topic-placeholder')" />
			</view>
			
			<view class="select-topic">
				
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
				},{
					id: 4,
					title: 'literature',
					isActive: false
				},{
					id: 5,
					title: 'dance',
					isActive: false
				},{
					id: 6,
					title: 'Punk',
					isActive: false
				},{
					id: 7,
					title: 'Cook',
					isActive: true
				},{
					id: 8,
					title: 'Walking food strategy',
					isActive: false
				},{
					id: 9,
					title: 'Always lose weight',
					isActive: false
				}],
				num: 3,
				allNum: 5,
			}
		},
		methods: {
			back() {
				window.history.go(-1)
			},
			
			check() {
				// 检查选择数量
				let number = 0;
				for(let i in this.lists){
					if(this.lists[i].isActive){
						number = number + 1
					}
				}
				this.num = number
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
				this.check()
				this.$forceUpdate()
			}
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
		padding: 11rpx 19rpx;
		background: rgba(26,29,38,0.1);
		border-radius: 60rpx;
		margin: 0 10rpx 30rpx 10rpx;
	}
	.modular-active{
		background: #1A1D26;
		color: #FFFFFF;
	}
</style>
