<template>
	<view class="container">
		<view class="top">
			<!-- <image class="banner" src="../../static/images/register/icon01.png"></image> -->
			<view class="banner"></view>
			<view class="top-right">
				<view>U.S.A</view>
				<image class="arrow" src="../../static/images/register/icon02.png"></image>
			</view>
		</view>
		<view class="content">
			<view class="title">{{ $t('like.title') }}({{this.num}}/{{this.allNum}})</view>
			
			<view class="modular-lists">
				<view class="modular" :class="{'modular-active': item.isActive}" v-for="item,index in lists" @click="goChoose(index)">
					{{item.title}}
				</view>
			</view>
			
			<view class="login-btn">{{ $t('like.Done') }}</view>
			
		</view>
		<view class="bottom">
			
			<view class="area">{{ $t('login.area') }} : {{area}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: "",
				code: "",
				password: "",
				is_default: false,
				lists:[{
					id: 1,
					title: 'Social expert',
					isActive: true
				},{
					id: 2,
					title: 'Handsome boy',
					isActive: false
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
				},{
					id: 10,
					title: 'Get your hair done before you go out',
					isActive: true
				},{
					id: 11,
					title: 'go in for sports',
					isActive: false
				},{
					id: 12,
					title: 'maximal exercise/X-games',
					isActive: false
				},{
					id: 13,
					title: 'Travel at least once a year',
					isActive: false
				},{
					id: 14,
					title: 'Handyman',
					isActive: true
				},{
					id: 15,
					title: 'Travel at least once a year',
					isActive: false
				},{
					id: 16,
					title: 'shutterbug',
					isActive: false
				}],
				num: 3,
				allNum: 5,
				area: "美国",
				
			}
		},
		mounted() {
			this.check()
		},
		methods: {
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
		
	}
	.top{
		
	}
	.banner{
		width: 750rpx;
		height: 169rpx;
		display: block;
		/* background: linear-gradient(rgba(1,64,226,0.06) 0%, rgba(255,255,255, 0) 100%); */
	}
	.top-right{
		display: flex;
		align-items: center;
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		
		position: absolute;
		top: 50rpx;
		right: 20rpx;
	}
	.arrow{
		margin-left: 4rpx;
		width: 36rpx;
		height: 36rpx;
	}
	/* 标题输入账号信息 */
	.content{
		padding: 0 48rpx;
	}
	.title{
		font-size: 46rpx;
		font-family: Inter-Black;
		font-weight: bold;
		color: #1A1D26;
		text-align: center;
	}
	
	.modular-lists{
		width: 100%;
		height: 572rpx;
		overflow: hidden;
		overflow-y: auto;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-evenly;
		margin-top: 92rpx;
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
		border-radius: 60rpx 60rpx 60rpx 60rpx;
		margin: 0 0 30rpx 0;
		/* margin: 0 20rpx 30rpx 0; */
	}
	.modular-active{
		background: #1A1D26;
		color: #FFFFFF;
	}
	
	.login-btn{
		width: 640rpx;
		height: 88rpx;
		line-height: 88rpx;
		background: #1A1D26;
		border-radius: 60rpx 60rpx 60rpx 60rpx;
		opacity: 1;
		
		font-size: 36rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #FFFFFF;
		text-align: center;
		margin: 73rpx auto 0;
	}
	
	
	/* 底部样式 */
	.bottom{
		position: absolute;
		bottom: 26rpx;
		left: 0;
		right: 0;
		margin: 0 auto;
		text-align: center;
	}
	.area{
		font-size: 26rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #6A6A6C;
	}
</style>
