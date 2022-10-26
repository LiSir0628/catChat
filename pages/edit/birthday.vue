<template>
	<view class="container">
		<view class="top">
			<uni-nav-bar left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000" :title="$t('birthday.birthday')">
			</uni-nav-bar>
			<view class="determine" :class="{'isRed': birthday}" @click="commit">{{ $t('birthday.determine') }}</view>
		</view>
		
		<view class="content">
			<view class="title">{{ $t('birthday.date') }}</view>
			<!-- <view class="age" @click="open" >{{age}}</view> -->
			<input disabled class="birthday" v-model="birthday" @click="open"/>
		</view>
		
		<uni-popup ref="popup" background-color="#fff" type="bottom" @maskClick="close">
			<view class="popup-ok" @click="close">{{ $t('birthday.determine') }}</view>
			<picker-view v-if="visible" :indicator-style="indicatorStyle" :value="value" @change="bindChange"
				class="picker-view">
				<picker-view-column>
					<view class="item" v-for="(item,index) in years" :key="index">{{item}}</view>
				</picker-view-column>
				<picker-view-column>
					<view class="item" v-for="(item,index) in months" :key="index">{{item}}</view>
				</picker-view-column>
				<picker-view-column>
					<view class="item" v-for="(item,index) in days" :key="index">{{item}}</view>
				</picker-view-column>
			</picker-view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			const date = new Date()
			const years = []
			const year = date.getFullYear()
			const months = []
			const month = date.getMonth() + 1
			const days = []
			const day = date.getDate()
			for (let i = 1900; i <= date.getFullYear(); i++) {
				years.push(i)
			}
			for (let i = 1; i <= 12; i++) {
				months.push(i)
			}
			for (let i = 1; i <= 31; i++) {
				days.push(i)
			}
			return {
				years,
				year,
				months,
				month,
				days,
				day,
				value: [9999, month - 1, day - 1],
				visible: true,
				indicatorStyle: `height: 50px;`,
				
				birthday: "",
			}
		},
		methods: {
			back() {
				window.history.go(-1)
			},
			
			open() {
				this.$refs.popup.open("bottom")
			},
			close() {
				console.log(this.birthday)
				this.$refs.popup.close()
			},
			bindChange(e) {
				const val = e.detail.value
				this.year = this.years[val[0]]
				this.month = this.months[val[1]].toString().length == 2 ? this.months[val[1]] : "0" + this.months[val[1]]
				this.day = this.days[val[2]].toString().length == 2 ? this.days[val[2]] : "0" + this.days[val[2]]
				this.birthday = this.year + "/" + this.month + "/" + this.day
			},
			
			commit() {
				if(this.birthday){
					console.log("触发" + this.birthday)
				} else {
					console.log("不触发")
				}
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
		margin-top: 90rpx;
		padding: 24rpx 30rpx 0;
	}
	
	.title{
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #6A6A6C;
	}
	
	.birthday{
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #1A1D26;
		padding: 30rpx 0 20rpx 0;
		border-bottom: 2rpx solid #909090;
	}
	
	/* 时间选择 */
	.popup-ok{
		width: 750rpx;
		text-align: right;
		padding: 20rpx 30rpx;
		font-size: 28rpx;
		background: #ffffff;
		top: -70rpx;
		right: 0;
		position: absolute;
		z-index: 100;
	}
	.picker-view {
		width: 750rpx;
		height: 600rpx;
		margin-top: 20rpx;
	}
	
	.item {
		height: 50px;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
</style>
