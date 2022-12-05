<template>
	<view class="country-mask">
		<uni-popup class="country-popup" ref="popupCountry" @maskClick="close">
			<view class="country-card">
				<view class="country-top">
					<view class="country-title">
						Select country
					</view>
					<view class="country-close" @click="close">+</view>
				</view>

				<view class="countryList">
					<radio-group @change="radioChange">
						<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in countryList"
							:key="item.value">
							<image class="country-logo" :src="item.image"></image>
							<view class="country-msg">
								<view class="country-name">{{item.name}}</view>
								<view>
									<radio :value="item.value" :checked="index == current" />
								</view>
							</view>
						</label>
					</radio-group>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: undefined,
				countryList: [{
					id: 1,
					value: "1",
					name: "U.S.A",
					image: "../../static/images/user/photo01.jpg"
				},{
					id: 2,
					value: "2",
					name: "English",
					image: "../../static/images/user/photo02.png"
				},{
					id: 3,
					value: "3",
					name: "Itanin",
					image: "../../static/images/user/photo03.jpg"
				}],
			}
		},
		props: {
			countryId: {
				type: String,
				default: ""
			},
		},
		created() {
			
		},
		mounted() {
			
		},
		methods: {
			radioChange(evt) {
				for (let i = 0; i < this.countryList.length; i++) {
					if (this.countryList[i].value === evt.detail.value) {
						this.current = i;
						break;
					}
				}
				// 国家选择 缓存、取值
				this.$store.commit('editChatCountry', this.countryList[this.current].value)
				uni.setStorageSync('chatCountryId', this.countryList[this.current].value)
				this.$emit("countryValue")
				this.$refs.popupCountry.close()
			},
			
			open() {
				//重新打开
				this.$refs.popupCountry.open("bottom")
				if(this.countryId) this.current = parseInt(this.countryId) - 1
			},
			
			close() {
				this.$refs.popupCountry.close()
			},
		}
	}
</script>

<style scoped>
	/deep/ .uni-popup .uni-popup__wrapper {
		border-radius: 50rpx;
	}

	/deep/ .uni-popup {
		z-index: 1000;
	}

	/* 遮罩样式 */
	.country-mask {}

	.country-popup {
		border-radius: 50rpx;
		/* z-index: 1000; */
	}

	.country-card {
		width: 750rpx;
		height: 1080rpx;
		padding: 32rpx 0 0 0;
		background: #FFFFFF;
		border-radius: 20rpx 20rpx 0 0;
		box-sizing: border-box;
		position: relative;
	}

	.country-top {
		width: 750rpx;
		position: relative;
		padding: 0 0 36rpx 0;
		border-bottom: 2rpx solid rgba(155, 155, 155, 0.4);
		box-sizing: border-box;
		text-align: center;
	}

	.country-title {
		font-size: 34rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #000000;
		line-height: 40rpx;
	}

	.country-close {
		font-size: 60rpx;
		line-height: 32rpx;
		color: #1A1D26;
		position: absolute;
		top: 0;
		right: 30rpx;
		transform: rotate(45deg);
	}
	
	.countryList{
		height: 496rpx;
		padding: 0 32rpx;
		box-sizing: border-box;
		overflow: hidden;
		overflow-y: auto;
	}
	
	.countryList::-webkit-scrollbar {
	  display: none;
	}
	
	.uni-list-cell{
		padding: 30rpx 0;
		border-bottom: 2rpx solid #D9D9D9;
	}
	.uni-list-cell-active{
		margin-bottom: 20rpx;
	}
	.uni-list-cell-pd{
		display: flex;
		align-items: center;
	}
	/deep/ uni-radio .uni-radio-wrapper{
		margin-top: -8rpx;
	}
	/deep/ .uni-radio-input{
		width: 30rpx;
		height: 30rpx;
		background: #ffffff;
		border-color: rgba(155, 155, 155, 0.4) !important;
	}
	/deep/ .uni-radio-input-checked{
		background: #1A1D26 !important;
		border-color: #1A1D26 !important;
		 
	}
	.country-logo{
		width: 90rpx;
		height: 60rpx;
		border-radius: 10rpx;
	}
	.country-msg{
		width: 596rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.country-name{
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		margin-left: 28rpx;
	}
</style>
