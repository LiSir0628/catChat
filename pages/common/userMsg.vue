<template>
	<view class="user-mask">
		<uni-popup class="user-popup" ref="popupUser" @maskClick="close">
			<view class="user-card">
				<view class="user-top">
					<image class="user-photo" :src="userList.avatar"></image>
					<view class="user-msg">
						<view class="user-name">
							<view class="nickname">{{userList.nickname}}</view>
							<image class="sex-logo" src="../../static/images/user/icon12.png"></image>
						</view>
						<view class="user-id">ID:{{userList.id}}</view>
					</view>
					<image class="user-close" src="../../static/images/user/icon22.png" @click="close"></image>
				</view>
				
				<image class="ewm" src="../../static/images/user/code.png"></image>
				
				<view class="user-btn" @click="save">{{ $t('user.save_to_album') }}</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>

	export default {
		data() {
			return {

			}
		},
		props:{
			userList:{
				type: Object,
				default: ""
			}
		},
		components: {
			
		},
		created() {

		},
		mounted() {
			console.log(this.userList)
		},
		methods: {
			save() {
				console.log("保存相册")
			},
			open() {
				this.$refs.popupUser.open("center")
			},
			close() {
				this.$refs.popupUser.close()
				//this.$emit("goClose", "")
			}
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
	.user-mask {}

	.user-popup {
		border-radius: 50rpx;
		/* z-index: 1000; */
	}

	.user-card {
		width: 640rpx;
		min-height: 870rpx;
		padding: 40rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		box-sizing: border-box;
		position: relative;
	}
	.user-top{
		display: flex;
		justify-content: space-between;
	}
	.user-photo{
		width: 96rpx;
		height: 96rpx;
		border-radius: 18rpx;
		box-shadow: 0rpx 6rpx 10rpx 0rpx rgba(0,0,0,0.2);
	}
	.user-msg{
		width: 404rpx;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		margin-left: 18rpx;
	}
	.user-name{
		width: 100%;
		font-size: 34rpx;
		line-height: 36rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #1A1D26;
		display: flex;
		align-items: center;
	}
	.nickname{
		max-width: 300rpx;
		overflow: hidden;
		white-space: nowrap;
		word-wrap: normal;
		text-overflow: ellipsis;
		-o-text-overflow: ellipsis;
	}
	.sex-logo{
		width: 40rpx;
		height: 40rpx;
		margin-left: 14rpx;
	}
	.user-id{
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #333333;
		margin-top: 6rpx;
	}
	.user-close{
		width: 38rpx;
		height: 38rpx;
	}
	
	.ewm{
		width: 560rpx;
		height: 560rpx;
		margin-top: 40rpx;
		display: block;
	}
	
	.user-btn{
		width: max-content;
		height: 64rpx;
		line-height: 64rpx;
		text-align: center;
		background: #1A1D26;
		border-radius: 60rpx;
		
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #FFFFFF;
		margin: 30rpx auto 0;
		padding: 0 20rpx;
	}
</style>
