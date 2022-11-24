<template>
	<view class="container">
		<view class="background-modular">
			<image class="background" mode="widthFix" src="../../static/images/constellation/icon01.png"></image>
		</view>
		<view class="top">
			<uni-nav-bar left-icon="back" @clickLeft="back" background-color="rgba(0,0,0,0)" color="rgb(255,255,255)" :title="$t('constellation.constellation')">
			</uni-nav-bar>
			<view class="determine" @click="commit">{{ $t('constellation.complete') }}</view>
		</view>
		
		<view class="content">
			<!-- <view class="lists" :style="contentHeight"> -->
			<scroll-view class="lists" scroll-y="true" @scroll="scrollY" :scroll-top="scrollTop" :show-scrollbar="false" :style="contentHeight">
				<view class="list" :class="{'active': cindex == index}" v-for="item,index in lists" @click="goCon(index)">
					<view class="logo-modular">
						<image class="logo" :src="item.image" mode="widthFix"></image>
					</view>
					<view class="name">{{item.name}}</view>
					<view class="time">{{item.time}}</view>
				</view>
			</scroll-view>
			<!-- </view> -->
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
			let that = this;
			uni.getSystemInfo({
				success(res) {
					// #ifdef MP-WEIXIN
					if (res.windowHeight > 568) {
						
					}
					// #endif
			
					// #ifdef H5
					if (res.windowHeight > 568) {
						that.contentHeight.height = res.windowHeight - uni.upx2px(114) -  uni.upx2px(20) + "px"
					}
					// #endif
				},
			})
			
			// if (!option.style) return
			this.userList = this.$store.state.duomiList
			if(this.userList.constellation) this.cName = this.userList.constellation
			this.getHttpList()
		},
		methods: {
			back() {
				window.history.go(-1)
			},
			scrollY(e) {
				this.scrollTop = e.detail.scrollTop
				// console.log(this.scrollTop)
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
						name: 'constellation'
					}
				})
				.then(res => {
					uni.hideLoading();
					if (res.data.code == 200) {
						let obj = {};
						let mindex = ""
						res.data.data.splice(0,1)
						for(let i in res.data.data){
							obj = {};
							obj.value = parseInt(i) + 1
							obj.name = res.data.data[i]
							mindex = ""
							mindex = parseInt(i) + 2;
							if(mindex < 10) mindex = "0" + mindex
							obj.image = require("../../static/images/constellation/icon" + mindex + ".png")
							
							if( i ==0 ) obj.time = "1.20~2.18"
							if( i ==1 ) obj.time = "2.19~3.20"
							if( i ==2 ) obj.time = "3.21~4.19"
							if( i ==3 ) obj.time = "4.20~5.20"
							if( i ==4 ) obj.time = "5.21~6.21"
							if( i ==5 ) obj.time = "6.22~7.22"
							if( i ==6 ) obj.time = "7.23~8.22"
							if( i ==7 ) obj.time = "8.23~9.22"
							if( i ==8 ) obj.time = "9.23~10.23"
							if( i ==9 ) obj.time = "10.24~11.21"
							if( i ==10 ) obj.time = "11.22~12.21"
							if( i ==11 ) obj.time = "12.22~1~1.19"
							
							this.lists.push(obj)
						}
						let arr = []
						arr = this.lists.splice(0,2)
						this.lists = this.lists.concat(arr)
						// console.log(this.lists)
						
						for(let i in this.lists){
							if(this.cName && this.cName == this.lists[i].name){
								this.default = this.cName
								this.cindex = i
								if(i >5) {
									this.$nextTick(()=>{
										this.scrollTop = uni.upx2px(2000)
									})
								} else {
									this.$nextTick(()=>{
										this.scrollTop = 0
									})
								}
								break
							}
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
			goCon(index) {
				this.cindex = index
				this.cValue = this.lists[index].value
				this.cName = this.lists[index].name
				// console.log(this.cindex)
				// console.log(this.cValue)
				// console.log(this.cName)
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
						constellation: this.cValue
					}
				})
				.then(res => {
					uni.hideLoading();
					if (res.data.code == 200) {
						this.$store.commit('editConstellation', this.cName)
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
			},
		}
	}
</script>

<style scoped>
	.container {
		/* padding-bottom: 120rpx; */
	}
	
	/deep/ .uni-navbar--border {
		border-bottom-color: rgba(0, 0, 0, 0);
	}
	
	/deep/ ::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}
	
	.background-modular{
		width: 100%;
		height: 100%;
		overflow: hidden;
		
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
	}
	
	.background{
		width: 100%;
		height: auto;
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
		color: #ffffff;
	}
	
	.content {
		/* margin-top: 90rpx; */
		padding: 114rpx 30rpx 0;
		position: relative;
	}
	
	.lists{
		width: 690rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin: 0 auto;
		position: fixed;
		top: 114rpx;
		overflow: hidden;
		overflow-y: auto;
	}
	/deep/ .uni-scroll-view-content{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.list{
		width: 330rpx;
		height: 394rpx;
		box-sizing: border-box;
		margin-bottom: 30rpx;
		text-align: center;
		border-radius: 20rpx;
		/* padding: 30rpx 0 50rpx; */
		padding: 10rpx 0 50rpx;
		border: 3rpx solid rgba(0,0,0,0);
	}
	.list:nth-child(1){
		background-image: linear-gradient(rgba(167, 125, 72, 0.08), rgba(246, 216, 145, 0.08));
	}
	.list:nth-child(2){
		background-image: linear-gradient(rgba(48, 75, 136, 0.08), rgba(172, 194, 230, 0.08));
	}
	.list:nth-child(3){
		background-image: linear-gradient(rgba(83, 10, 12, 0.08), rgba(247, 194, 193, 0.08));
	}
	.list:nth-child(4){
		background-image: linear-gradient(rgba(66, 31, 134, 0.08), rgba(144, 91, 205, 0.08));
	}
	.list:nth-child(5){
		background-image: linear-gradient(rgba(83, 10, 12, 0.08), rgba(247, 194, 193, 0.08));
	}
	.list:nth-child(6){
		background-image: linear-gradient(rgba(131, 44, 44, 0.08), rgba(203, 87, 88, 0.08));
	}
	.list:nth-child(7){
		background-image: linear-gradient(rgba(70, 131, 77, 0.08), rgba(228, 245, 207, 0.08));
	}
	.list:nth-child(8){
		background-image: linear-gradient(rgba(131, 44, 44, 0.08), rgba(203, 87, 88, 0.08));
	}
	.list:nth-child(9){
		background-image: linear-gradient(rgba(84, 14, 105, 0.08), rgba(219, 150, 236, 0.08));
	}
	.list:nth-child(10){
		background-image: linear-gradient(rgba(129, 65, 36, 0.08), rgba(249, 220, 206, 0.08));
	}
	.list:nth-child(11){
		background-image: linear-gradient(rgba(77, 194, 175, 0.08), rgba(115, 228, 206, 0.08));
	}
	.list:nth-child(12){
		background-image: linear-gradient(rgba(40, 89, 162, 0.08), rgba(141, 180, 236, 0.08));
	}
	
	.active{
		border: 3rpx solid #ffffff;
	}
	.logo-modular{
		width: 230rpx;
		/* height: 224rpx; */
		height: 244rpx;
		margin: 0 auto;
		display: flex;
		align-items: center;
	}
	.logo{
		width: 220rpx;
		height: 175rpx;
		display: block;
		margin: 0 auto;
	}
	.list:nth-child(1) .logo {
		width: 220rpx;
		height: 175rpx;
	}
	.list:nth-child(2) .logo {
		width: 200rpx;
		height: 179rpx;
	}
	.list:nth-child(3) .logo {
		width: 220rpx;
		height: 195rpx;
	}
	.list:nth-child(4) .logo {
		width: 230rpx;
		height: 169rpx;
	}
	.list:nth-child(5) .logo {
		width: 190rpx;
		height: 203rpx;
	}
	.list:nth-child(6) .logo {
		width: 220rpx;
		height: 178rpx;
	}
	.list:nth-child(7) .logo {
		width: 200rpx;
		height: 208rpx;
	}
	.list:nth-child(8) .logo {
		width: 190rpx;
		height: 210rpx;
	}
	.list:nth-child(9) .logo {
		width: 220rpx;
		height: 188rpx;
	}
	.list:nth-child(10) .logo {
		width: 190rpx;
		height: 224rpx;
	}
	.list:nth-child(11) .logo {
		width: 200rpx;
		height: 206rpx;
	}
	.list:nth-child(12) .logo {
		width: 200rpx;
		height: 170rpx;
	}
	.name{
		font-size: 34rpx;
		line-height: 36rpx;
		color: red;
		margin-bottom: 24rpx;
		text-transform: uppercase;
		/* margin: 40rpx 0 30rpx; */
	}
	.list:nth-child(1) .name {
		color: #F2CB74;
	}
	.list:nth-child(2) .name {
		color: #C7DAF1;
	}
	.list:nth-child(3) .name {
		color: #F27879;
	}
	.list:nth-child(4) .name {
		color: #DFCEFA;
	}
	.list:nth-child(5) .name {
		color: #F7C3BA;
	}
	.list:nth-child(6) .name {
		color: #FADCDB;
	}
	.list:nth-child(7) .name {
		color: #E4F5CF;
	}
	.list:nth-child(8) .name {
		color: #F5AF75;
	}
	.list:nth-child(9) .name {
		color: #E3B4EF;
	}
	.list:nth-child(10) .name {
		color: #FADDCF;
	}
	.list:nth-child(11) .name {
		color: #BDEDE4;
	}
	.list:nth-child(12) .name {
		color: #8DB4EC;
	}
	.time{
		font-size: 30rpx;
		line-height: 32rpx;
		color: #ffffff;
	}
</style>
