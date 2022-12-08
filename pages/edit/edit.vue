<template>
	<view class="container">
		<view class="top">
			<uni-nav-bar left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000" :title="$t('edit.edit') + ' ' + title">
			</uni-nav-bar>
			<view class="determine" :class="{'isRed': value || value02}" @click="commit">{{ $t('edit.complete') }}</view>
		</view>
		
		<view class="content">
			<template v-if="style == 2">
				<view class="content-list">
					<view class="title">{{ $t('edit.height') }}/{{$t('common.cm')}}</view>
					<input @focus="goClear(1)" class="occupation" v-model="value" :placeholder="$t('edit.please_enter_your') + ' ' + $t('edit.height')"/>
				</view>
				<view class="content-list">
					<view class="title">{{ $t('edit.weight') }}/{{$t('common.kg')}}</view>
					<input @focus="goClear(2)" class="occupation" v-model="value02" :placeholder="$t('edit.please_enter_your') + ' ' + $t('edit.weight')"/>
				</view>
			</template>
			<template v-else>
				<input class="occupation" v-model="value" :placeholder="$t('edit.please_enter_your') + ' ' + title"/>
			</template>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: "",
				value02: "",
				
				style: "",
				title: "",
			}
		},
		onLoad(option) {
			if (!option.style) return
			
			this.style = option.style
			if(option.style == 1){
				this.title = this.$t('edit').nickname
			} else if(option.style == 2){
				this.title = this.$t('edit').height_and_weight
				if(option.height) this.value = option.height
				if(option.weight) this.value02 = option.weight
			} else if(option.style == 3){
				this.title = this.$t('edit').signature
			}
			
		},
		methods: {
			back() {
				window.history.go(-1)
			},
			
			goClear(val) {
				// if(val == 1) this.value = ""
				// if(val == 2) this.value02 = ""
			},
			commit() {
				if(this.value || this.value02){
					let obj = {}
					if(this.style == 1) obj.nickname = this.value
					if(this.style == 2) {
						if(this.value) obj.heigh = this.value
						if(this.value02) obj.weight = this.value02
					}
					if(this.style == 3) obj.signature = this.value
					uni.showLoading({
						title: this.$t('common').loading + '...',
						mask: true
					});
					this.$myRequest({
						method: 'POST',
						url: '/user/editer',
						data: obj
						// data: {}
					})
					.then(res => {
						uni.hideLoading();
						if (res.data.code == 200) {
							if(this.style == 1){
								this.$store.commit('editName', this.value)
							}
							if(this.style == 2) {
								if(this.value) this.$store.commit('editHeight', this.value)
								if(this.value02) this.$store.commit('editWeight', this.value02)
							}
							if(this.style == 3) {
								this.$store.commit('editSignature', this.value)
							}
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
						this.$forceUpdate()
						uni.showModal({
							title: this.$t('common').Tip,
							content: this.$t('common').Network,
							confirmText: this.$t('common').confirm,
							//content: err,
							showCancel: false,
						})
					})
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
		/* margin-top: 90rpx; */
		padding: 114rpx 30rpx 0;
	}
	
	.content-list{
		margin-bottom: 50rpx;
	}
	
	.title{
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #6A6A6C;
	}
	
	.occupation{
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #1A1D26;
		padding: 30rpx 0 20rpx 0;
		border-bottom: 2rpx solid #909090;
	}
</style>
