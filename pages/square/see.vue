<template>
	<view class="container">
		<!-- <uni-nav-bar fixed left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000" :title="$t('see.who_can_see')">
		</uni-nav-bar> -->
		<uni-nav-bar fixed background-color="#ffffff">
			<block slot="left">
				<view class="back" @click="back">
					<uni-icons type="back" color="#666" size="18" />
				</view>
			</block>
			<view class="area-card-modular">
				<view class="area-card-text">{{ $t('see.who_can_see') }}</view>
			</view>
			<block slot="right">
				<view @click="complete">{{ $t('see.complete') }}</view>
			</block>
		</uni-nav-bar>
		
		<view class="content">
			<radio-group @change="radioChange">
				<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in stateList"
					:key="item.value">
					<view>
						<radio :value="item.value" :checked="index == current" />
					</view>
					<view class="state-name">{{item.title}}</view>
				</label>
			</radio-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				value: "", //值
				stateList: [{
					value : "111",
					title: this.$t('see').public,
				},{
					value : "222",
					title: this.$t('see').friends,
				},{
					value : "333",
					title: this.$t('see').yourself,
				}]
			}
		},
		methods: {
			back() {
				window.history.go(-1)
			},
			
			radioChange(evt) {
				for (let i = 0; i < this.stateList.length; i++) {
					if (this.stateList[i].value === evt.detail.value) {
						this.value = this.stateList[i].value
						this.current = i;
						break;
					}
				}
			},
			complete() {
				console.log("确定")
				console.log(this.value)
				this.back()
			}
		}
	}
</script>

<style scoped>
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
		padding: 24rpx 30rpx 0;
	}
	
	.uni-list-cell{
		margin-bottom: 60rpx;
	}
	.uni-list-cell-pd{
		display: flex;
		align-items: center;
	}
	/deep/ uni-radio .uni-radio-wrapper{
		margin-top: -8rpx;
	}
	/deep/ .uni-radio-input{
		width: 32rpx;
		height: 32rpx;
		background: #ffffff;
		border-color: rgba(155, 155, 155, 0.4) !important;
	}
	/deep/ .uni-radio-input-checked{
		background: #1A1D26 !important;
		border-color: #1A1D26 !important;
		 
	}
	.state-name{
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		margin-left: 8rpx;
	}
</style>
