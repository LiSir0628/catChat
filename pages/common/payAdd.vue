<template>
	<view class="pay-add-mask">
		<uni-popup class="pay-add-mask-popup" ref="popupPayAdd" @maskClick="close">
			<view class="pay-add-card">
				<view class="pay-add-top">
					<view class="pay-add-title">{{ $t('payAdd.methid') }}</view>
					<view class="pay-add-close" @click="close">+</view>
				</view>
				<view class="card-number" :class="{'danger': isNumber}">
					<input v-if="!isNumber" class="card-number-text" type="number" v-model="number" :placeholder="$t('payAdd.number')" />
					<input v-else class="card-number-text" type="number" v-model="number" :placeholder="$t('payAdd.number')" placeholder-class="danger-text"/>
					<image v-if="isNumber" class="danger-logo" src="../../static/images/user/balance/icon11.png"></image>
				</view>
				<view class="card-number card-expiration" :class="{'danger': isExpiration}">
					<input v-if="!isExpiration" disabled class="card-number-text" v-model="expiration" :placeholder="$t('payAdd.expiration')" @click="openTime" />
					<input v-else disabled class="card-number-text" v-model="expiration" :placeholder="$t('payAdd.expiration')" @click="openTime" placeholder-class="danger-text"/>
					<image v-if="isExpiration" class="danger-logo" src="../../static/images/user/balance/icon11.png"></image>
				</view>
				<view class="card-number card-code" :class="{'danger': isCode}">
					<input v-if="!isCode" class="card-number-text" type="number" v-model="code" :placeholder="$t('payAdd.code')" />
					<input v-else class="card-number-text" type="number" v-model="code" :placeholder="$t('payAdd.code')" placeholder-class="danger-text"/>
					<image v-if="isCode" class="danger-logo" src="../../static/images/user/balance/icon11.png"></image>
				</view>
				<view class="card-number card-name" :class="{'danger': isName}">
					<input v-if="!isName" class="card-number-text" v-model="name" :placeholder="$t('payAdd.name')" />
					<input v-else class="card-number-text" v-model="name" :placeholder="$t('payAdd.name')" placeholder-class="danger-text"/>
					<image v-if="isName" class="danger-logo" src="../../static/images/user/balance/icon11.png"></image>
				</view>
				<view class="continue" @click="commit">{{ $t('payAdd.continue') }}</view>
			</view>
		</uni-popup>
		
		<uni-popup class="popup-time" ref="popupTime" background-color="#fff" type="bottom" @maskClick="closeTime">
			<view class="popup-ok" @click="closeTime">determine</view>
			<picker-view v-if="visible" :indicator-style="indicatorStyle" :value="value" @change="bindChange"
				class="picker-view">
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
				value: [month - 1, day - 1],
				visible: true,
				indicatorStyle: `height: 50px;`,
				
				number: "",
				expiration: "",
				code: "",
				name: "",
				
				isNumber: false,
				isExpiration: false,
				isCode: false,
				isName: false,
			}
		},
		created() {

		},
		mounted() {

		},
		methods: {	
			open(){	
				this.number = ""
				this.expiration = ""
				this.code = ""
				this.name = ""
				
				this.isNumber = false
				this.isExpiration = false
				this.isCode = false
				this.isName = false
				this.$refs.popupPayAdd.open("bottom")
			},
			close() {
				this.$refs.popupPayAdd.close()
				//this.$emit("goClose", "")
			},
			
			openTime() {
				this.$refs.popupTime.open("bottom")
			},
			closeTime() {
				this.$refs.popupTime.close()
			},
			bindChange(e) {
				const val = e.detail.value
				console.log(e.detail.value)
				this.month = this.months[val[0]].toString().length == 2 ? this.months[val[0]] : "0" + this.months[val[0]]
				this.day = this.days[val[1]].toString().length == 2 ? this.days[val[1]] : "0" + this.days[val[1]]
				this.expiration = this.month + "/" + this.day
			},
			
			commit() {
				if(!this.number){
					console.log("无数据number")
					this.isNumber = true
				} else {
					this.isNumber = false
				}
				if(!this.expiration){
					console.log("无数据expiration")
					this.isExpiration = true
				} else {
					this.isExpiration = false
				}
				if(!this.code){
					console.log("无数据code")
					this.isCode = true
				} else {
					this.isCode = false
				}
				if(!this.name){
					console.log("无数据name")
					this.isName = true
				} else {
					this.isName = false
				}
			}
		}
	}
</script>

<style scoped>
	/deep/ .uni-popup .uni-popup__wrapper{
		border-radius: 50rpx;
	}
	/* 遮罩样式 */
	.pay-add-mask{

	}
	.pay-add-mask-popup{
		border-radius: 50rpx;
		/* z-index: 1000; */
	}
	.pay-add-card{
		width: 750rpx;
		height: 970rpx;
		background: #FFFFFF;
		border-radius: 40rpx 40rpx 0px 0px;
		padding: 32rpx 0 0 0;
		margin: 0 auto;
		text-align: center;
		line-height: normal;
		box-sizing: border-box;
		position: relative;
	}
	.pay-add-top{
		position: relative;
		padding: 0 0 36rpx 0;
		border-bottom: 2rpx solid rgba(155,155,155,0.4);
		margin-bottom: 73rpx;
	}
	.pay-add-title{
		font-size: 34rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #000000;
		line-height: 40rpx;
	}
	.pay-add-close{
		font-size: 60rpx;
		line-height: 32rpx;
		color: #1A1D26;
		position: absolute;
		top: 0;
		right: 30rpx;
		transform: rotate(45deg);
	}
	
	.card-number{
		width: 690rpx;
		padding: 0 8rpx 16rpx;
		border-bottom: 2rpx solid rgba(155,155,155,0.8);
		box-sizing: border-box;
		margin: 0 auto;
		text-align: left;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.card-number-text{
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #999999;
	}
	.card-expiration,.card-code,.card-name{
		margin-top: 90rpx;
	}
	.danger{
		border-bottom: 2rpx solid #ED4C4C;
	}
	.danger-text{
		color: #ED4C4C;
	}
	.danger-logo{
		width: 32rpx;
		height: 32rpx;
	}
	.continue{
		width: 335rpx;
		height: 88rpx;
		line-height: 88rpx;
		background: #1A1D26;
		border-radius: 60rpx;
		
		font-size: 30rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #FFFFFF;
		margin: 85rpx auto 0;
	}
	
	/* 日期选择 */
	.popup-time{
		/* z-index: 10001; */
	}
	
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
