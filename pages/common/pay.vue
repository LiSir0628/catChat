<template>
	<view class="pay-mask">
		<uni-popup class="pay-mask-popup" ref="popupPay" @maskClick="close">
			<view class="pay-card">
				<view class="pay-top">
					<view class="password" v-for="item,index in passList">
						<!-- <text>{{item.val}}</text> -->
						<view v-if="item.val" class="circle"></view>
					</view>
					<!-- <view class="password">
						<text>2</text>
					</view>
					<view class="password">
						<view class="circle"></view>
					</view>
					<view class="password">
						<view class="circle"></view>
					</view>
					<view class="password">
						<view class="circle"></view>
					</view>
					<view class="password">
						<view class="circle"></view>
					</view> -->
				</view>
				<view class="pay-content">
					<view class="pay-modular-A">
						<view class="modular-btn" @click="keyCode(1)">1</view>
						<view class="modular-btn" @click="keyCode(2)">2</view>
						<view class="modular-btn" @click="keyCode(3)">3</view>
						<view class="modular-btn" @click="del">
							<image class="del-logo" src="../../static/images/user/balance/icon09.png"></image>
						</view>
					</view>
					<view class="pay-modular-B">
						<view class="pay-modular-left">
							<view class="modular-btn" @click="keyCode(4)">4</view>
							<view class="modular-btn" @click="keyCode(5)">5</view>
							<view class="modular-btn" @click="keyCode(6)">6</view>
							<view class="modular-btn" @click="keyCode(7)">7</view>
							<view class="modular-btn" @click="keyCode(8)">8</view>
							<view class="modular-btn" @click="keyCode(9)">9</view>
							<view class="modular-btn-zero" @click="keyCode(0)">0</view>
							<view class="modular-btn" @click="keyCode('.')">.</view>
						</view>
						<view class="pay-modular-right" @click="confirm">
							{{ $t('pay.confirm') }}
						</view>
					</view>
					
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				passList: [{
					id: 1,
					val: ""
				},{
					id: 2,
					val: ""
				},{
					id: 3,
					val: ""
				},{
					id: 4,
					val: ""
				},{
					id: 5,
					val: ""
				},{
					id: 6,
					val: ""
				}],
			}
		},
		created() {

		},
		mounted() {

		},
		methods: {
			keyCode(val) {
				for(let i in this.passList){
					if(!this.passList[i].val){
						this.passList[i].val = val
						//if(i == 5) this.confirm()
						break
					}
				}
			},
			del() {
				for(let i in this.passList){
					if(!this.passList[i].val && i == 0) {
						console.log(this.passList)
						break
					} else if(this.passList[i].val && i == 5) {
						this.passList[i].val = ""
						break
					} else if(!this.passList[i].val && i > 0) {
						this.passList[i-1].val = ""
						break
					}
				}
			},
			confirm() {
				let passVal = ""
				for(let i in this.passList){
					if(this.passList[i].val){
						passVal = passVal + this.passList[i].val.toString()
					}
				}
				if(passVal.length == 6){
					// 进行支付
					console.log("输入成功")
					console.log(passVal)
					this.close()
				} else {
					console.log("输入失败")
					console.log(passVal)
				}
			},
			
			open(){
				for(let i in this.passList){
					this.passList[i].val = ""
				}
				this.$refs.popupPay.open("bottom")
			},
			close() {
				this.$refs.popupPay.close()
				this.$emit("goClose", "")
			},
		}
	}
</script>

<style scoped>
	/deep/ .uni-popup .uni-popup__wrapper{
		border-radius: 50rpx;
	}
	/* 遮罩样式 */
	.pay-mask{
		/* position: fixed;
		width: 100%;
		height: 100%;
		margin: 0 auto;
		top: 0;
		left: 0;
		z-index: 1000; */
	}
	.pay-mask-popup{
		border-radius: 50rpx;
		z-index: 1000;
	}
	.pay-card{
		width: 750rpx;
		height: 618rpx;
		background: #FFFFFF;
		border-radius: 40rpx 40rpx 0px 0px;
		
		margin: 0 auto;
		text-align: center;
		line-height: normal;
		padding: 40rpx 28rpx 30rpx;
		box-sizing: border-box;
		position: relative;
	}
	.pay-top{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.password{
		width: 96rpx;
		height: 96rpx;
		box-sizing: border-box;
		line-height: 96rpx;
		background: #F7F7F7;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		opacity: 1;
		border: 2rpx solid rgba(26,29,38,0.1);
		position: relative;
	}
	.circle{
		width: 28rpx;
		height: 28rpx;
		box-sizing: border-box;
		background: #1A1D26;
		border: 2rpx solid rgba(26,29,38,0.1);
		border-radius: 50%;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;	
		bottom: 0;
		margin: auto;
		
	}
	/* 模拟键盘 */
	.pay-content{
		margin-top: 40rpx;
	}
	.pay-modular-A{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.modular-btn{
		width: 158rpx;
		height: 88rpx;
		box-sizing: border-box;
		line-height: 88rpx;
		background: #F7F7F7;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		border: 2rpx solid rgba(26,29,38,0.1);
		display: flex;
		align-items: center;
		justify-content: center;
		
		font-size: 32rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #000000;
	}
	.modular-btn-zero{
		width: 336rpx;
		height: 88rpx;
		box-sizing: border-box;
		line-height: 88rpx;
		background: #F7F7F7;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		opacity: 1;
		border: 2rpx solid rgba(26,29,38,0.1);
	}
	.del-logo{
		width: 32rpx;
		height: 32rpx;
		display: block;
	}
	/* 键盘下半部分 */
	.pay-modular-B{
		display: flex;
		justify-content: space-between;
		margin-top: 20rpx;
	}
	
	.pay-modular-left{
		width: 514rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		align-items: center;
	}
	.pay-modular-right{
		width: 158rpx;
		height: 304rpx;
		box-sizing: border-box;
		line-height: 304rpx;
		background: #1A1D26;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		border: 2rpx solid rgba(26,29,38,0.1);
		
		font-size: 32rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #FFFFFF;
	}
</style>
