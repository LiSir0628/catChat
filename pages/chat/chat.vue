<template>
	<view class="container" @longpress="long" @click.stop="close">
		<!-- <uni-nav-bar fixed left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000" :title="$t('invitation.invitation')">
		</uni-nav-bar> -->
		<uni-nav-bar fixed background-color="#ffffff">
			<block slot="left">
				<view class="back" @click="back">
					<uni-icons type="back" color="#666" size="18" />
				</view>
			</block>
			<view class="area-card-modular">
				<view class="area-card-text">九亿少女的偶像 九亿少女的偶像</view>
			</view>
			<block slot="right">
				<view class="user-btn" @click="focus">{{ $t('square.focus') }}</view>
			</block>
		</uni-nav-bar>
		<view class="content">
			<view class="chat-time">Today:3:26PM</view>
			<view class="friend-modular" @longpress="longpress(0)">
				<image class="friend-photo" src="../../static/images/user/photo01.jpg"></image>
				<view class="friend-msg">
					<view class="friend-name">九亿少女的偶像ADHKA</view>
					<view class="friend-content">It's not my birthday</view>
				</view>
			</view>
			<view class="myself-modular">
				<view class="friend-msg myself-msg">
					<view class="friend-name myself-name">九亿少女的偶像ADHKA</view>
					<view class="friend-content myself-content">这个唇釉感觉很棒，很值得购 买，你这是在哪里买呢？</view>
				</view>
				<image class="friend-photo myself-photo" src="../../static/images/user/photo01.jpg"></image>
			</view>
			
			<view class="friend-modular">
				<image class="friend-photo" src="../../static/images/user/photo01.jpg"></image>
				<view class="friend-msg">
					<view class="friend-name">九亿少女的偶像ADHKA</view>
					<view class="friend-content action-content">
						<!-- <image class="video-logo" src="../../static/images/chat/chat/icon07.png"></image> -->
						<image class="audio-logo" src="../../static/images/chat/chat/icon04.png"></image>
						<view>已取消</view>
					</view>
				</view>
			</view>
			<view class="friend-modular">
				<image class="friend-photo" src="../../static/images/user/photo01.jpg"></image>
				<view class="friend-msg">
					<view class="friend-name">九亿少女的偶像ADHKA</view>
					<view class="friend-content action-content">
						<image class="video-logo" src="../../static/images/chat/chat/icon07.png"></image>
						<!-- <image class="audio-logo" src="../../static/images/chat/chat/icon04.png"></image> -->
						<view>已取消</view>
					</view>
				</view>
			</view>
			<view class="myself-modular">
				<view class="friend-msg myself-msg">
					<view class="friend-name myself-name">九亿少女的偶像ADHKA</view>
					<view class="friend-content myself-content action-content">
						<image class="video-logo" src="../../static/images/chat/chat/icon02.png"></image>
						<view>已取消</view>
					</view>
				</view>
				<image class="friend-photo myself-photo" src="../../static/images/user/photo01.jpg"></image>
			</view>
			<!-- 图片 -->
			<!-- <view class="friend-modular">
				<image class="friend-photo" src="../../static/images/user/photo01.jpg"></image>
				<view class="friend-msg">
					<view class="friend-name">九亿少女的偶像ADHKA</view>
					<image class="msg-logo" mode="widthFix" src="../../static/images/chat/chat/ceshi01.jpg"></image>
				</view>
			</view>
			<view class="myself-modular">
				<view class="friend-msg myself-msg">
					<view class="friend-name myself-name">九亿少女的偶像ADHKA</view>
					<image class="msg-logo" mode="widthFix" src="../../static/images/chat/chat/ceshi02.jpg"></image>
				</view>
				<image class="friend-photo myself-photo" src="../../static/images/user/photo01.jpg"></image>
			</view> -->
		</view>
		<view class="press">
			<!-- <view style="margin: 0 auto;text-align: center;"> -->
				<zb-tooltip placement="bottom" ref="tooltip" color="#47494E" :visible.sync="isShow">
					<view slot="content">
						<view class="content-nav">
							<view class="features-list">
								<image class="features-logo" src="../../static/images/chat/chat/icon10.png"></image>
								<view class="features-name">Translate</view>
							</view>
							<view class="features-list" @click.stop="del">
								<image class="features-logo" src="../../static/images/chat/chat/icon10.png"></image>
								<view class="features-name">Delete</view>
							</view>
							<view class="features-list">
								<image class="features-logo" src="../../static/images/chat/chat/icon10.png"></image>
								<view class="features-name">Copy</view>
							</view>
						</view>
						<view class="choose-language" @click.stop="configs">
							选择其他语言
						</view>
					</view>
				</zb-tooltip>
			<!-- </view> -->
		</view>
		<view class="bottom">
			<view class="send-list">
				<image class="logo01" src="../../static/images/chat/chat/icon11.png"></image>
				<input class="send" v-model="send_text" placeholder="your message" @confirm="send">
				<!-- <textarea class="send" v-model="send_text" placeholder="your message"></textarea> -->
				<image class="logo02" src="../../static/images/chat/chat/icon09.png"></image>
				<image class="logo03" src="../../static/images/chat/chat/icon01.png"></image>
				<template v-if="!send_text">
					<image class="logo04" src="../../static/images/chat/chat/icon06.png"></image>
					<image class="logo05" src="../../static/images/chat/chat/icon12.png"></image>
				</template>
				<template v-if="send_text">
					<view class="send-btn" @click="send">Send</view>
				</template>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lists: [],
				send_text: "",
				
				isShow: false,
				
				roomId: 0,
				userId: 0,
				
				setTime: null,
			}
		},
		onLoad(option) {
			if (option.roomId) this.roomId = option.roomId
			if (option.userId) this.userId = option.userId
		},
		created() {
			if(uni.getStorageSync('isWebsocketLogin') != 1){
				//websocket关闭 不允许发送消息
				uni.showLoading({
					title: this.$t('common').loading + '...',
					mask: true
				});
				//计时器判断是否开启,开启后关闭遮罩
				this.setTime = setInterval(()=>{
					if(uni.getStorageSync('isWebsocketLogin') == 1){
						// uni.hideLoading()
						this.getHttpLists()
						clearInterval(this.setTime)
					}
				}, 300);
			} else {
				uni.showLoading({
					title: this.$t('common').loading + '...',
					mask: true
				});
				this.getHttpLists()
			}
		},
		onPageScroll(res){
			// console.log(res.scrollTop);
			// 滑动时关闭长按事件弹窗
			this.close()
		},
		methods: {
			back() {
				window.history.go(-1)
			},
			
			getHttpLists() {
				this.$myRequest({
					method: 'GET',
					url: 'https://test.mini.zhishukongjian.com/api/readmsg',
					data: {
						id: this.$store.state.duomiList.id,
						uid: this.userId
					}
				})
				.then(res => {
					uni.hideLoading();
					if (res.data.code == 200) {
						this.lists = res.data.data
						for(let i in this.lists){		
							var now = new Date(this.lists[i].last_time*1000),
							y = now.getFullYear(),
							m = now.getMonth() + 1,
							d = now.getDate(),
							x = y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0, 5);
							//x = y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0, 8); // 2018-05-18 00:00:00
							this.lists[i].last_time = x
							this.$forceUpdate()
						}
						console.log(this.lists)
					} else {
						uni.showModal({
							title: this.$t('common').Tip,
							content: res.data.msg,
							confirmText: this.$t('common').confirm,
							showCancel: false,
						})
					}
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
			long() {
				console.log("长按事件")
			},
			longpress(id) {
				console.log(id)
				this.isShow = true
				this.$forceUpdate()
			},
			close() {
				this.isShow = false
				//this.$refs['tooltip'].close()
			},
			del() {
				this.isShow = false
				uni.showModal({
					content: this.$t('common').is_delete,
					cancelText: this.$t('common').no,
					confirmText: this.$t('common').ok,
					success: (res) =>{
						if(res.confirm){
							console.log('确定删除')
						} else {
							console.log('不删除')
						}
					}
				})
			},
			configs() {
				this.close()
			},

			
			focus() {
				console.log("确定关注、取关")
			},
			
			send() {
				if(!this.send_text) return
				
				if(uni.getStorageSync('isWebsocketLogin') != 1){
					//websocket关闭 不允许发送消息
					uni.showLoading({
						title: this.$t('common').loading + '...',
						mask: true
					});
					//计时器判断是否开启,开启后关闭遮罩
					this.setTime = setInterval(()=>{
						if(uni.getStorageSync('isWebsocketLogin') == 1){
							// uni.hideLoading()
							this.send()
							clearInterval(this.setTime)
						}
					}, 300);	
					return
				}
				
				let testobj = this.$protoRoot.lookup("Chat").create({
					Id: "1",
					From: this.$store.state.duomiList.id,
					To: this.userId, //群聊发0
					Room: this.roomId,
					Data: {
						Data: this.send_text,
						Type: "1",
						Size: "1"
					}
				});
				let testObjBuffer = this.$protoRoot.lookup("Chat").encode(testobj).finish(); //encode数据
				//console.log("编译:", testObjBuffer);
				let testdata = this.$protoRoot.lookup("Chat").decode(testObjBuffer); //decode数据
				//console.log("反编译:", testdata);
				this.$store.state.socketTask.send(testObjBuffer);
				
				uni.hideLoading()
				this.send_text = ""
			},
			
			onUnload() {
				//页面销毁、清除定时器
				clearInterval(this.setTime);
			},
			onBeforeUnload() {
				//页面销毁、清除定时器
				clearInterval(this.setTime);
			},
		}
	}
</script>

<style scoped>
	.container {
		padding-bottom: 180rpx;
	}
	
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
		width: 350rpx;
		font-size: 32rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		text-align: center;
		/* margin-left: 8rpx; */
		
		overflow: hidden;
		white-space: nowrap;
		word-wrap: normal;
		text-overflow: ellipsis;
		-o-text-overflow: ellipsis;
	}
	.user-btn{
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		
		padding: 0 20rpx;
		height: 56rpx;
		text-align: center;
		line-height: 56rpx;
		background: rgba(26,29,38,0.1);
		border-radius: 60rpx;
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
		border-bottom-color: white;
	}
	/* 主要内容 */
	.content {
		padding: 0 30rpx;
	}
	
	.chat-time{
		font-size: 24rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #6A6A6C;
		text-align: center;
		margin: 24rpx 0 14rpx;
	}
	
	.friend-modular{
		display: flex;
		padding: 16rpx 0;
	}
	
	.friend-photo{
		width: 72rpx;
		height: 72rpx;
		display: block;
		border-radius: 50%;
	}
	
	.friend-msg{
		max-width: 486rpx;
		margin-left: 30rpx;
		padding: 10rpx 0 0;
	}
	
	.friend-name{
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #333333;
	}
	
	.friend-content{
		width: fit-content;
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		
		background: rgba(26,29,38,0.1);
		border-radius: 20rpx;
		margin-top: 16rpx;
		padding: 26rpx 28rpx;
	}
	
	.myself-modular{
		display: flex;
		justify-content: flex-end;
		padding: 16rpx 0;
	}
	.myself-msg{
		margin-left: 0;
	}
	.myself-name{
		text-align: right;
	}
	.myself-content{
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #FFFFFF;
		
		background: #1A1D26;
		margin: 16rpx 0 0 auto;
	}
	.myself-photo{
		margin-left: 30rpx;
	}
	
	.msg-logo{
		/* max-width: 300rpx;
		max-height: 400rpx; */
		width: 100%;
		
		margin-top: 10px;
		border-radius: 20rpx;
	}
	.action-content{
		display: flex;
		align-items: center;
	}
	.video-logo{
		width: 48rpx;
		height: 32rpx;
		margin-right: 14rpx;
	}
	.audio-logo{
		width: 39rpx;
		height: 39rpx;
		margin-right: 14rpx;
	}
	/* 底部样式 */
	.bottom{
		width: 750rpx;
		height: 136rpx;
		box-sizing: border-box;
		background: #FFFFFF;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
		border-top: 2rpx solid #D9D9D9;
	}
	.send-list{
		display: flex;
		align-items: center;
	}
	.send{
		width: 690rpx;
		height: 96rpx;
		box-sizing: border-box;
		background: #F5F5F5;
		border-radius: 20rpx;
		margin: 20rpx auto;
		padding: 0 320rpx 4rpx 88rpx;
		
	}
	
	.logo01{
		width: 48rpx;
		height: 48rpx;
		display: block;
		position: absolute;
		top: 0;
		bottom: 0;
		margin: auto 0;
		vertical-align: middle;
		left: 58rpx;
	}
	.logo02{
		width: 48rpx;
		height: 48rpx;
		display: block;
		position: absolute;
		right: 291rpx;
	}
	.logo03{
		width: 40rpx;
		height: 40rpx;
		display: block;
		position: absolute;
		right: 224rpx;
	}
	.logo04{
		width: 56rpx;
		height: 37rpx;
		display: block;
		position: absolute;
		right: 138rpx;
	}
	.logo05{
		width: 48rpx;
		height: 45rpx;
		display: block;
		position: absolute;
		right: 60rpx;
	}
	.send-btn{
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: bold;
		color: #FFFFFF;
		
		width: 148rpx;
		height: 60rpx;
		line-height: 60rpx;
		background: #1A1D26;
		border-radius: 200rpx;
		text-align: center;
		
		position: absolute;
		right: 50rpx;
	}
	
	/* 长按功能 */
	.content-mask {
		display: flex;
		flex-direction: column;
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		top: 0;
	}
	.press{
		width: 690rpx;
		margin: 0 auto;
		text-align: center;
	}
	/deep/ .zb_tooltip__popper{
		padding: 30rpx 0 0;
		border-radius: 20rpx;
	}
	/deep/ .zb-tooltip{
		/* background: red; */
		/* display: grid; */
	}
	/deep/ .zb_tooltip_content{
		display: flex;
		justify-content: center;
	}
	.content-nav{
		display: flex;
		align-items: center;
		text-align: center;
		padding: 0 26rpx 30rpx;
	}
	.features-list{
		width: 30%;
		margin: 0 20rpx;
	}
	.features-logo{
		width: 30rpx;
		height: 34rpx;
	}
	.features-name{
		font-size: 26rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #FFFFFF;
		margin-top: 14rpx;
		letter-spacing: 1rpx;
	}
	.choose-language{
		font-size: 28rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #FFFFFF;
		text-align: center;
		padding: 28rpx 0 26rpx;
		border-top: 2rpx solid #666666;
		letter-spacing: 2rpx;
	}
</style>
