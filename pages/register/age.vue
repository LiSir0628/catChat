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
			<view class="title">{{ $t('age.title') }}</view>
			<view>
				<input class="nickname" v-model="nickname" :placeholder="$t('age.nickname')" />
				
				<view class="age" @click="open" >{{age}}</view>
				
				<input class="invitation" v-model="invitation" :placeholder="$t('age.invitation')" />
			</view>

			<view class="read-text">* {{ $t('age.tip') }}</view>

			<view class="login-btn">{{ $t('register.next') }}</view>
		</view>
		<view class="bottom">
			<view class="area">{{ $t('login.area') }} : {{area}}</view>
		</view>
		<uni-popup ref="popup" background-color="#fff" type="bottom" @maskClick="close">
			<view class="popup-ok" @click="close">determine</view>
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
				
				nickname: "",
				age: this.$t('age').age,
				invitation: "",
				area: "美国",
			}
		},
		methods: {
			open() {
				this.$refs.popup.open("bottom")
			},
			close() {
				console.log("我选择咯")
				this.$refs.popup.close()
			},
			bindChange(e) {
				const val = e.detail.value
				this.year = this.years[val[0]]
				this.month = this.months[val[1]].toString().length == 2 ? this.months[val[1]] : "0" + this.months[val[1]]
				this.day = this.days[val[2]].toString().length == 2 ? this.days[val[2]] : "0" + this.days[val[2]]
				this.age = this.year + "/" + this.month + "/" + this.day
			}
		}
	}
</script>

<style scoped>
	.container {}

	.top {}

	.banner {
		width: 750rpx;
		height: 323rpx;
		display: block;
		/* background: linear-gradient(rgba(1, 64, 226, 0.06) 0%, rgba(255, 255, 255, 0) 60%); */
	}

	.top-right {
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

	.arrow {
		margin-left: 4rpx;
		width: 36rpx;
		height: 36rpx;
	}

	/* 标题输入账号信息 */
	.content {
		padding: 0 55rpx;
	}

	.title {
		font-size: 46rpx;
		font-family: Inter-Black;
		font-weight: bold;
		color: #1A1D26;
		text-align: center;
	}

	.nickname {
		margin-top: 96rpx;
		padding: 13rpx 0;
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #999999;
		border-bottom: 2rpx solid #999999;
	}

	.age {
		padding: 13rpx 0;
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #999999;
		border-bottom: 2rpx solid #999999;
		margin-top: 51rpx;
	}

	.invitation {
		margin-top: 51rpx;
		padding: 13rpx 0;

		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #999999;
		border-bottom: 2rpx solid #999999;
	}

	.read-text {
		font-size: 26rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #333333;
		margin: 54rpx auto 0;
		text-align: center;
	}

	.login-btn {
		width: 640rpx;
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
		margin-top: 118rpx;
	}

	/* 底部样式 */
	.bottom {
		position: absolute;
		bottom: 26rpx;
		left: 0;
		right: 0;
		margin: 0 auto;
		text-align: center;
	}

	.area {
		font-size: 26rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #6A6A6C;
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
