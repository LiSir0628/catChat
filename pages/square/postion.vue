<template>
	<view class="container">
		<uni-nav-bar fixed left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000"
			:title="$t('postion.postion')">
		</uni-nav-bar>

		<view class="content">
			<view class="topic-modular">
				<image class="search-logo" src="../../static/images/square/icon02.png"></image>
				<input class="topic" placeholder-class="topic-placeholder" v-model="nearby"
					:placeholder="$t('postion.nearby-placeholder')" @focus="goClear" />
			</view>

			<view class="address-lists">
				<view class="address-list" v-for="item in lists" @click="goArea(item)">{{item.city}} {{item.district}} {{item.business}}
				</view>
			</view>
		</view>

		<view id="l-map" v-show></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lists: [],
				nearby: "",
				
				map: "",
				
				local_name: "",
			}
		},
		mounted() {
			uni.showLoading({
				title: this.$t('common').loading + '...',
				mask: true
			});
			
			this.local_name = this.$store.state.addressList.local_name
			if(this.local_name){
				//若选择过，不进行定位。
				setTimeout(()=>{
					this.nearby = this.local_name
					uni.hideLoading();
				},1000)
			} else {
				this.getAddress()
			}
			// 百度地图API功能
			this.map = new BMap.Map("l-map");
			let ac = new BMap.Autocomplete( //建立一个自动完成的对象
				{
					"input": document.querySelector('input'),
					"location": this.map,
					"onSearchComplete": (data) => {
						ac.hide()
						this.lists = data.Yr
						console.log(data)
					}
				});
		},
		methods: {
			back() {
				window.history.go(-1)
			},
			goClear() {
				this.nearby = ""
			},
			goArea(item) {
				uni.showLoading({
					title: this.$t('common').loading + '...',
					mask: true
				});
				let value = item.city + item.district + item.business;
				let local = new BMap.LocalSearch(this.map, { //智能搜索
					onSearchComplete: () => {
						let pp = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
						console.log(local.getResults())
						console.log(pp)
						
						let addressList = {};
						addressList.local_name = value
						addressList.longitude = pp.lng
						addressList.latitude = pp.lat
						this.$store.commit('searchAddressList', addressList)
						uni.setStorageSync('addressList', addressList)
						uni.hideLoading();
						this.back()
					}
				});
				console.log(value);
				local.search(value);
			},
			getAddress() {
				let self = this;
				let geolocation = new BMap.Geolocation();
				geolocation.getCurrentPosition(function(r) {
					if(this.getStatus() == BMAP_STATUS_SUCCESS) {
						//以指定的经度与纬度创建一个坐标点
						let pt = new BMap.Point(r.point.lng, r.point.lat);
						//创建一个地理位置解析器
						let geoc = new BMap.Geocoder();
						geoc.getLocation(pt, function(rs) {
							uni.hideLoading();
							self.nearby = rs.address
							console.log(rs)
						});
					} else {
						uni.hideLoading();
						alert("定位失败");
					}
				}, {
					enableHighAccuracy: true
				});
			},
		}
	}
</script>

<style scoped>
	.container {}

	.container {
		padding-bottom: 80rpx;
	}

	/deep/ .uni-navbar--border {
		border-bottom-color: white;
	}

	.content {
		padding: 24rpx 0 0;
	}

	.topic-modular {
		width: 690rpx;
		margin: 0 30rpx;
		height: 80rpx;
		position: relative;
		display: flex;
		align-items: center;
	}

	.search-logo {
		width: 32rpx;
		height: 32rpx;
		display: block;
		position: absolute;
		top: 0;
		bottom: 0;
		margin: auto 0;
		left: 30rpx;
	}

	.topic {
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

	.topic-placeholder {
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #999999;
	}

	.address-lists {
		padding: 38rpx 30rpx;
	}

	.address-list {
		font-size: 32tpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #1A1D26;
		margin-bottom: 52rpx;
	}

	/* #l-map {
		height: 360px;
		width: 100%;
	}

	#r-result {
		width: 100%;
	} */
</style>
