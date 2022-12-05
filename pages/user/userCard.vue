<template>
	<view class="container">
		<image class="banner" src="../../static/images/user/card/icon01.png"></image>
		<!-- <uni-nav-bar fixed background-color="rgba(0,0,0,0)"> -->
		<uni-nav-bar fixed background-color="rgb(245,247,249)">
			<block slot="left">
				<view class="back" @click="back">
					<uni-icons type="back" color="#666" size="18" />
				</view>
			</block>
			<view class="area-card-modular">
				<image class="area-card-logo" src="../../static/images/square/icon05.png"></image>
				<view class="area-card-text">Fuzhou City</view>
			</view>
			<block slot="right">
				<uni-icons type="more-filled" color="#666" size="18" />
			</block>
		</uni-nav-bar>

		<view class="user-card-msg">
			<image class="user-card-photo" src="../../static/images/user/photo01.jpg"></image>
			<view class="user-card-name-modular">
				<view class="user-card-name">Michael jackson</view>
				<image class="grade-logo" src="../../static/images/user/card/icon02.png"></image>
			</view>
			<view class="user-card-age">{{ $t('user_card.female') }} , 26 {{ $t('user_card.years_old') }} ,
				{{ $t('user_card.single') }}</view>
			<view class="span-lists">
				<view class="span-list">Social expert</view>
				<view class="span-list">Handsome boy</view>
				<view class="span-list">lovely</view>
				...
			</view>
		</view>

		<view class="content">
			<scroll-view class="nav-lists" :class="{'nav-lists-height': isShowTabHeight}" scroll-x="true"
				@scroll="scroll" :show-scrollbar="false">
				<view class="nav-list">
					<view class="nav-sort" v-for="item,index in sortList" :class="{'nav-sort-active': cindex == index}"
						@click="goSort(index)">
						{{item.title}}
					</view>
				</view>
			</scroll-view>

			<view class="square-lists" :class="{'square-lists-height': isShowTabHeight}" v-if="cindex == 0">
				<view class="square-list" v-for="item,index in topicLists" @click="goDetail(item)">
					<!-- <image class="user-logo" src="../../static/images/user/photo02.png"></image> -->
					<view class="user-notice">
						<view class="user-msg">
							<view class="user-msg-top">
								<!-- <view class="user-time">{{item.created_at}}</view> -->
								<view class="user-time">{{item.intl_created_at}}</view>
							</view>
						</view>
						<view class="space-title" v-if="item.title">{{item.title}}</view>
						<view class="space-content" v-if="item.content">
							<view class="space-text">{{item.content}}</view>
						</view>
						<view class="space-images" v-if="item.pic && item.pic.length > 0 && item.pic[0]">
							<view class="space-image-list" v-for="citem,cindex in item.pic"
								@click.stop="previewImage(item.pic,citem)">
								<image class="space-image" :src="citem"></image>
							</view>
						</view>
						<!-- <view class="space-images" @click.stop="previewImage">
							<view class="space-image-list">
								<image class="space-image" src="../../static/images/user/photo03.jpg"></image>
							</view>
							<view class="space-image-list">
								<image class="space-image" src="../../static/images/user/photo04.jpg"></image>
							</view>
							<view class="space-image-list">
								<image class="space-image" src="../../static/images/user/photo05.jpg"></image>
							</view>
							<view class="space-image-list">
								<image class="space-image" src="../../static/images/user/photo06.jpg"></image>
							</view>
						</view> -->
						<view class="space-topic-lists" v-if="item.topic && item.topic.length > 0">
							<view class="space-topic" v-for="kitem,kindex in item.topic" @click.stop="goTopic(kitem)">
								#{{kitem.title}}
							</view>
						</view>

						<!-- <view class="reward-modular">
							<view class="reward-user">
								<image class="reward-user-logo" src="../../static/images/user/photo02.png"></image>
								<image class="reward-user-logo" src="../../static/images/user/photo02.png"></image>
								<image class="reward-user-logo" src="../../static/images/user/photo02.png"></image>
								<image class="reward-user-logo" src="../../static/images/user/photo02.png"></image>
								<image class="reward-user-logo" src="../../static/images/user/photo02.png"></image>
							</view>
							<view class="reward-sm">{{item.reward_count}} {{ $t('topic.people_rewarded') }}</view>
						</view> -->

						<view class="talk-modular">
							<view class="area-modular" v-if="item.local_name">
								<image class="area-logo" src="../../static/images/square/icon05.png"></image>
								<view class="area-text">{{item.local_name}}</view>
							</view>
							<view class="talk-lists">
								<view class="talk-list">
									<image class="talk-logo" v-if="item.vote_up_status == 0"
										src="../../static/images/square/icon07.png" @click.stop="vote('up','on',item)">
									</image>
									<image class="talk-logo" v-else-if="item.vote_up_status == 1"
										src="../../static/images/square/icon08.png" @click.stop="vote('up','off',item)">
									</image>
									<view class="talk-text">{{item.vote_up_count}}</view>
								</view>
								<view class="talk-list">
									<image class="talk-logo" v-if="item.vote_down_status == 0"
										src="../../static/images/square/icon09.png"
										@click.stop="vote('down','on',item)">
									</image>
									<image class="talk-logo" v-else-if="item.vote_down_status == 1"
										src="../../static/images/square/icon10.png"
										@click.stop="vote('down','off',item)">
									</image>
									<view class="talk-text">{{item.vote_down_count}}</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="square-lists" :class="{'square-lists-height': isShowTabHeight}" v-if="cindex == 1">
				<view class="user-list" v-for="item,index in focusLists" v-if="item.me_follow">
					<view class="focus-user">
						<image class="focus-user-photo" :src="item.me_follow.avatar"></image>
						<view class="focus-user-msg">
							<view class="focus-user-name">{{item.me_follow.nickname}}</view>
							<view class="focus-user-gender">Handsome boy</view>
						</view>
					</view>
					<view class="close-focus" @click.stop="follow('off',item.friend_id,index)">{{ $t('user_card.close') }}</view>
				</view>
			</view>

			<view class="square-lists" :class="{'square-lists-height': isShowTabHeight}" v-if="cindex == 2">
				<view class="user-list" v-for="item,index in fanLists" v-if="item.follow_me">
					<view class="focus-user">
						<image class="focus-user-photo" :src="item.follow_me.avatar"></image>
						<view class="focus-user-msg">
							<view class="focus-user-name">{{item.follow_me.nickname}}</view>
							<view class="focus-user-gender">Handsome boy</view>
						</view>
					</view>
					<view class="close-focus" @click.stop="follow('off',item.friend_id,index)">{{ $t('user_card.close') }}</view>
				</view>
			</view>

			<view class="square-lists" :class="{'square-lists-height': isShowTabHeight}" v-if="cindex == 3">
				<view class="user-list">
					<view class="focus-user">
						<image class="focus-user-photo" src="../../static/images/user/photo01.jpg"></image>
						<view class="focus-user-msg">
							<view class="focus-user-name">九亿少女的偶像ADHKA</view>
							<view class="focus-user-gender">+500 {{ $t('user_card.gold_coin') }}</view>
						</view>
					</view>
					<view class="close-focus">{{ $t('user_card.close') }}</view>
				</view>
				<view class="user-list">
					<view class="focus-user">
						<image class="focus-user-photo" src="../../static/images/user/photo01.jpg"></image>
						<view class="focus-user-msg">
							<view class="focus-user-name">九亿少女的偶像ADHKA</view>
							<view class="focus-user-gender">+500 {{ $t('user_card.gold_coin') }}</view>
						</view>
					</view>
					<view class="close-focus">{{ $t('user_card.focus') }}</view>
				</view>
			</view>

			<view class="camera-lists" :class="{'camera-lists-height': isShowTabHeight}" v-if="cindex == 4">
				<view class="camera-list all-list">
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
				</view>
			</view>

			<view class="camera-lists" :class="{'camera-lists-height': isShowTabHeight}" v-if="cindex == 5">
				<view class="camera-list all-list">
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
					<image class="camera" src="../../static/images/user/photo03.jpg"></image>
				</view>
			</view>

		</view>

		<image v-if="isShowTop" class="sticky-logo" src="../../static/images/common/sticky.png" @click="goTop(0)"></image>

		<view class="card-bottom">
			<view class="focus">{{ $t('user_card.focus') }}</view>
			<view class="message">{{ $t('user_card.message') }}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cindex: 0,
				sortList: [{
					id: 1,
					title: this.$t('user_card').menyedihkan
				}, {
					id: 2,
					title: this.$t('user_card').focus
				}, {
					id: 3,
					title: this.$t('user_card').getting_noticed
				}, {
					id: 4,
					title: this.$t('user_card').reward
				}, {
					id: 5,
					title: this.$t('user_card').album
				}, {
					id: 6,
					title: this.$t('user_card').video
				}],

				isShowTabHeight: false,
				isShowTop: false,
					
				//话题
				isRequest: true,
				keyword: "",
				page: 1,
				limit: 20,
				total_limit: 0,
				total_page: 0,
				topicLists: [],
				
				//关注列表
				focus_page: 1,
				focus_limit: 20,
				focus_total_limit: 0,
				focus_total_page: 0,
				focusLists: [], //关注列表
				
				//被关注列表
				fan_page: 1,
				fan_limit: 20,
				fan_total_limit: 0,
				fan_total_page: 0,
				fanLists: [], //被关注列表
				
				//打赏
				reward_page: 1,
				reward_limit: 20,
				reward_total_limit: 0,
				reward_total_page: 0,
				rewardLists: [],
				
				//相册
				album_page: 1,
				album_limit: 20,
				album_total_limit: 0,
				album_total_page: 0,
				albumLists: [],
				
				//视频列表
				video_page: 1,
				video_limit: 20,
				video_total_limit: 0,
				video_total_page: 0,
				videoLists: [],
						
				A_TOP: 0,
				B_TOP: 0,
				C_TOP: 0,
				D_TOP: 0,
				E_TOP: 0,
				F_TOP: 0,
			}
		},
		created() {
			this.getHttpTopic()
		},
		onShow() {
			
		},
		onReachBottom() {
			//上拉加载，请求记得限制。
			if (this.isRequest) {
				if (this.page < this.total_page && this.cindex == 0) {
					//console.log("选品页触底了,加载一下")
					this.page = this.page + 1
					this.getTopicLists()
				} else if(this.focus_page < this.focus_total_page && this.cindex == 1){
					this.focus_page = this.focus_page + 1
					this.getFocus()
				} else {
					console.log("页码已达到最大，无法再次请求")
				}
				this.$forceUpdate()
			} else {
				//console.log("正在请求，无法再次请求")
			}
		},
		mounted() {
			//this.getHttpLists("one")
			window.onscroll = (() => {
				var scroll = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
				// console.log(scroll);
				if(this.cindex == 0) this.A_TOP = scroll
				if(this.cindex == 1) this.B_TOP = scroll
				if(this.cindex == 2) this.C_TOP = scroll
				if(this.cindex == 3) this.D_TOP = scroll
				if(this.cindex == 4) this.E_TOP = scroll
				if(this.cindex == 5) this.F_TOP = scroll
				if (scroll >= uni.upx2px(472)) {
					// 分类 固定展示
					this.isShowTabHeight = true
					this.isShowTop = true
				} else {
					// 分类 不固定展示
					this.isShowTabHeight = false
					this.isShowTop = false
				}
			})
		},
		methods: {
			back() {
				window.history.go(-1)
			},

			scroll(e) {
				//this.scrollLeft = e.detail.scrollLeft
				// console.log(e)
				// console.log(this.scrollLeft)
			},

			goSort(index) {
				if (this.cindex == index) return
				this.cindex = index
				
				if(index == 0 && this.topicLists.length <= 0) {
					this.getHttpTopic()
				} else if(index == 0){
					this.$nextTick(()=>{
						this.goTop(this.A_TOP)
					})
				} else if (index == 1 && this.focusLists.length <= 0) {
					this.getHttpFocus()
				} else if (index == 1) {
					this.$nextTick(()=>{
						this.goTop(this.B_TOP)
					})
				} else if (index == 2 && this.fanLists.length <= 0) {
					this.getHttpFan()
				} else if (index == 2) {
					this.$nextTick(()=>{
						this.goTop(this.C_TOP)
					})
				} else if (index == 3 && this.rewardLists.length <= 0) {
					//this.getHttpFan()
				} else if (index == 3) {
					this.$nextTick(()=>{
						this.goTop(this.D_TOP)
					})
				} else if (index == 4 && this.albumLists.length <= 0) {
					this.getHttpAlbum()
				} else if (index == 4) {
					this.$nextTick(()=>{
						this.goTop(this.E_TOP)
					})
				} else if (index == 5 && this.videoLists.length <= 0) {
					this.getHttpVideo()
				} else if (index == 5) {
					this.$nextTick(()=>{
						this.goTop(this.F_TOP)
					})
				}
			},

			getHttpTopic() {
				this.topicLists = []
				this.isRequest = true
				this.page = 1
				this.total_limit = 0
				this.total_page = 0
				this.getTopicLists()
			},
			getHttpFocus() {
				this.focusLists = []
				this.isRequest = true
				this.focus_page = 1
				this.focus_total_limit = 0
				this.focus_total_page = 0
				this.getFocus()
			},
			getHttpFan() {
				this.fanLists = []
				this.isRequest = true
				this.fan_page = 1
				this.fan_total_limit = 0
				this.fan_total_page = 0
				this.getFan()
			},
			getHttpAlbum() {
				this.albumLists = []
				this.isRequest = true
				this.album_page = 1
				this.album_total_limit = 0
				this.album_total_page = 0
				this.getAlbum()
			},
			getHttpVideo() {
				this.videoLists = []
				this.isRequest = true
				this.video_page = 1
				this.video_total_limit = 0
				this.video_total_page = 0
				this.getVideo()
			},
			getTopicLists() {
				this.isRequest = false
				uni.showLoading({
					title: this.$t('common').loading + '...',
					mask: true
				});
				this.$myRequest({
						method: 'GET',
						url: '/ht/article',
						data: {
							keyword: this.keyword,
							page: this.page,
							limit: this.limit,
							type: "mine",
							topic_id: "", //type为topic topic_id必有值

						}
					})
					.then(res => {
						this.isRequest = true
						uni.hideLoading();
						if (res.data.code == 200) {
							if (this.topicLists.length == 0) {
								this.topicLists = res.data.data.lists
							} else {
								this.topicLists = this.topicLists.concat(res.data.data.lists)
							}
							this.total_limit = res.data.data.total_limit
							this.total_page = Math.ceil(this.total_limit / this.limit)
							console.log(this.topicLists)
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
						this.isRequest = true
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
			getFocus() {
				this.isRequest = false
				uni.showLoading({
					title: this.$t('common').loading + '...',
					mask: true
				});
				this.$myRequest({
						method: 'GET',
						url: '/user/follow',
						data: {
							page: this.focus_page,
							limit: this.focus_limit,
							type: "me_follow",  //me_follow我关注的用户  //follow_me关注我的用户
						}
					})
					.then(res => {
						this.isRequest = true
						uni.hideLoading();
						if (res.data.code == 200) {
							if (this.focusLists.length == 0) {
								this.focusLists = res.data.data.lists
							} else {
								this.focusLists = this.focusLists.concat(res.data.data.lists)
							}
							this.focus_total_limit = res.data.data.total_limit
							this.focus_total_page = Math.ceil(this.focus_total_limit / this.focus_limit)
							console.log(this.focusLists)
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
						this.isRequest = true
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
			getFan() {
				this.isRequest = false
				uni.showLoading({
					title: this.$t('common').loading + '...',
					mask: true
				});
				this.$myRequest({
						method: 'GET',
						url: '/user/follow',
						data: {
							page: this.fan_page,
							limit: this.fan_limit,
							type: "follow_me",  //me_follow我关注的用户  //follow_me关注我的用户
						}
					})
					.then(res => {
						this.isRequest = true
						uni.hideLoading();
						if (res.data.code == 200) {
							if (this.fanLists.length == 0) {
								this.fanLists = res.data.data.lists
							} else {
								this.fanLists = this.fanLists.concat(res.data.data.lists)
							}
							this.fan_total_limit = res.data.data.total_limit
							this.fan_total_page = Math.ceil(this.fan_total_limit / this.fan_limit)
							console.log(this.fanLists)
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
						this.isRequest = true
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
			getAlbum() {
				this.isRequest = false
				uni.showLoading({
					title: this.$t('common').loading + '...',
					mask: true
				});
				this.$myRequest({
						method: 'GET',
						url: '/user/albums/' + 0 + '/' + 0,
						data: {
							// private: 0,  1为私密内容,0为公共内容
							// video: 0, 1为视频列表, 0为图片列表
							// id: '', 用户id,
						}
					})
					.then(res => {
						this.isRequest = true
						uni.hideLoading();
						if (res.data.code == 200) {
							if (this.albumLists.length == 0) {
								this.albumLists = res.data.data
							} else {
								this.albumLists = this.albumLists.concat(res.data.data)
							}
							this.album_total_limit = res.data.data.total_limit
							this.album_total_page = Math.ceil(this.album_total_limit / this.album_limit)
							console.log(this.albumLists)
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
						this.isRequest = true
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
			getVideo() {
				this.isRequest = false
				uni.showLoading({
					title: this.$t('common').loading + '...',
					mask: true
				});
				this.$myRequest({
						method: 'GET',
						url: '/user/albums/' + 0 + '/' + 1,
						data: {
							// private: 0,  1为私密内容,0为公共内容
							// video: 0, 1为视频列表, 0为图片列表
							// id: '', 用户id,
						}
					})
					.then(res => {
						this.isRequest = true
						uni.hideLoading();
						if (res.data.code == 200) {
							if (this.videoLists.length == 0) {
								this.videoLists = res.data.data
							} else {
								this.videoLists = this.videoLists.concat(res.data.data)
							}
							this.video_total_limit = res.data.data.total_limit
							this.video_total_page = Math.ceil(this.video_total_limit / this.video_limit)
							console.log(this.videoLists)
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
						this.isRequest = true
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
			goDetail(item) {
				uni.navigateTo({
					url: '/pages/square/squareDetails?article_id=' + (item.id || 3)
				});
			},
			follow(status, uid,index) {
				uni.showLoading({
					title: this.$t('common').loading + '...',
					mask: true
				});
				this.$myRequest({
						method: 'POST',
						url: '/user/follow',
						data: {
							friend_id: uid,
							status: status
						}
					})
					.then(res => {
						uni.hideLoading();
						if (res.data.code == 200) {
							this.focusLists.splice(index,1)
							this.$forceUpdate()
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
			goTopic(item) {
				let id = item.topic_id || item.id
				uni.navigateTo({
					url: '/pages/square/topic?topic_name=' + item.title + "&topic_id=" + id
				});
			},
			previewImage() {
				uni.previewImage({
					current: "https://api.domefish.com/storage/banner/6a3b5aeb6638e3c3eb166cf173cc4efe.png",
					urls: ["https://api.domefish.com/storage/banner/6a3b5aeb6638e3c3eb166cf173cc4efe.png",
						"https://api.domefish.com/storage/banner/7c29347477ba440a4ad17e9e3adc1e6e.png",
						"https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/3639a3488a93425ca108e9ce85cc6f40~tplv-dx0w9n1ysr-origin-jpeg.jpeg"
					],
				});
			},
			vote(type, status, item) {
				if (status == "on" && (item.vote_up_status == 1 || item.vote_down_status == 1)) {
					uni.showModal({
						title: this.$t('common').Tip,
						content: this.$t('common').kudos_reminder,
						confirmText: this.$t('common').confirm,
						showCancel: false,
					})
					return
				}
				uni.showLoading({
					title: this.$t('common').loading + '...',
					mask: true
				});
				this.$myRequest({
						method: 'POST',
						url: '/ht/article/vote',
						data: {
							article_id: item.id,
							type: type,
							status: status
						}
					})
					.then(res => {
						uni.hideLoading();
						if (res.data.code == 200) {
							if (type == "up") {
								if (status == "off") {
									item.vote_up_status = 0
								} else {
									item.vote_up_status = 1
								}
								item.vote_up_count = res.data.data
							} else if (type = "down") {
								if (status == "off") {
									item.vote_down_status = 0
								} else {
									item.vote_down_status = 1
								}
								item.vote_down_count = res.data.data
							}
							this.$forceUpdate()
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
			goTop(value) {
				uni.pageScrollTo({
					scrollTop: value,
					duration: 0
				});
			},
		}
	}
</script>

<style scoped>
	.container {
		padding-bottom: 140rpx;
	}

	.banner {
		width: 750rpx;
		height: 886rpx;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
	}

	.back {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		width: 160rpx;
		margin-left: 4px;
	}

	.area-card-modular {
		display: flex;
		align-items: center;
	}

	.area-card-logo {
		width: 36rpx;
		height: 44rpx;
		display: block;
	}

	.area-card-text {
		font-size: 32rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #ED4C4C;
		margin-left: 8rpx;
	}

	/deep/ .uni-navbar__header-container {
		justify-content: flex-end;
		padding: 0;
	}

	/deep/ .uni-navbar__header-btns-right {
		width: 48rpx !important;
		display: flex;
	}

	/deep/ .uniui-more-filled {
		transform: rotate(90deg);
	}

	/deep/ .uni-navbar--border {
		border: none;
	}

	/* 用戶信息 */
	.user-card-msg {
		padding: 60rpx 0;
	}

	.user-card-photo {
		width: 140rpx;
		height: 140rpx;
		display: block;
		box-shadow: 0rpx 6rpx 10rpx 0rpx rgba(0, 0, 0, 0.2);
		border-radius: 30rpx;
		margin: 0 auto;
	}

	.user-card-name-modular {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 40rpx;
	}

	.user-card-name {
		max-width: 580rpx;
		font-size: 34rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #1A1D26;
		
		overflow: hidden;
		white-space: nowrap;
		word-wrap: normal;
		text-overflow: ellipsis;
		-o-text-overflow: ellipsis;
	}

	.grade-logo {
		width: 42rpx;
		height: 42rpx;
		display: block;
		margin-left: 12rpx;
	}

	.user-card-age {
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #333333;
		margin: 18rpx auto;
		text-align: center;
	}

	.span-lists {
		margin: 10rpx auto 0;
		display: flex;
		justify-content: center;
	}

	.span-list {
		padding: 0 19rpx;
		height: 56rpx;
		line-height: 56rpx;
		background: rgba(26, 29, 38, 0.1);
		border-radius: 60rpx;

		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		text-align: center;
		margin-right: 20rpx;
	}

	/* 主要內容 */
	.content {
		width: 750rpx;
		min-height: 600rpx;
		/* padding: 0 30rpx 0; */
		background: #ffffff;
		box-sizing: border-box;
		border-radius: 40rpx 40rpx 0rpx 0rpx
	}

	/deep/ ::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}

	.nav-lists {
		width: 690rpx;
		padding: 0 30rpx;
		white-space: nowrap;
		border-bottom: 2rpx solid rgba(155, 155, 155, 0.4);
		padding-top: 40rpx;
		border-radius: 20px 20px 0px 0px
	}

	.nav-lists-height {
		position: fixed;
		top: 88rpx;
		z-index: 10;
		background: #ffffff;
	}

	.nav-list {
		width: 690rpx;
		display: flex;
	}

	.nav-sort {
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #6A6A6C;
		margin-right: 52rpx;
		padding: 0 0 14rpx;
	}

	.nav-sort-active {
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #1A1D26;
		border-bottom: 4rpx solid #1A1D26;
	}

	/* 广场话题 */
	.square-lists {
		width: 690rpx;
		margin: 0 auto 0;
		padding: 40rpx 10rpx;
		box-sizing: border-box;
	}

	.square-lists-height {
		margin-top: 96rpx;
	}

	.square-list {
		display: flex;
		margin-bottom: 60rpx;
	}

	.user-logo {
		width: 88rpx;
		height: 88rpx;
		border-radius: 50%;
		margin-right: 28rpx;
	}

	.user-notice {
		width: 670rpx;
		box-sizing: border-box;
	}

	.user-msg {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.user-msg-top {
		width: 600rpx;
	}

	.user-name {
		font-size: 28rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #6A6A6C;
		overflow: hidden;
		white-space: nowrap;
		word-wrap: normal;
		text-overflow: ellipsis;
		-o-text-overflow: ellipsis;
	}

	.user-time {
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #6A6A6C;
		margin-top: 8rpx;
	}

	.user-btn {
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;

		padding: 0 20rpx;
		height: 56rpx;
		text-align: center;
		line-height: 56rpx;
		background: rgba(26, 29, 38, 0.1);
		border-radius: 60rpx;
	}

	/* 话题说说 */
	.space-title {
		font-size: 34rpx;
		font-family: Inter-SemiBold;
		font-weight: bold;
		color: #1A1D26;
		margin-top: 20rpx;
		padding-bottom: 12rpx;

		overflow: hidden;
		white-space: nowrap;
		word-wrap: normal;
		text-overflow: ellipsis;
		-o-text-overflow: ellipsis;
	}

	.space-content {
		padding: 6rpx 0 10rpx 0;
	}

	.space-text {
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #333333;
		/* margin-top: 16rpx; */

		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}

	.space-images {
		display: flex;
		flex-wrap: wrap;
		margin-top: 10rpx;
	}

	.space-image-list {
		width: 210rpx;
		height: 210rpx;
		overflow: hidden;
		border-radius: 20rpx;
		margin: 0 10rpx 10rpx 0;
	}

	.space-image {
		width: 210rpx;
		height: 210rpx;
		border-radius: 20rpx;
		display: block;
		margin: 0 10rpx 10rpx 0;
	}

	.space-topic-lists {
		display: flex;
		flex-wrap: wrap;
		margin-top: 20rpx;
	}

	.space-topic {
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		padding: 8rpx 20rpx;
		margin: 0 10rpx 10rpx 0;

		background: #FFFFFF;
		border-radius: 40rpx;
		border: 2rpx solid rgba(106, 106, 108, 0.4);
	}

	.reward-modular {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-top: 20rpx;
		padding-bottom: 12rpx;
	}

	.reward-user {
		display: flex;
		align-items: center;
	}

	.reward-user-logo {
		width: 56rpx;
		height: 56rpx;
		border: 2rpx solid #ffffff;
		box-sizing: border-box;
		border-radius: 50%;
		margin-right: -26rpx;
	}

	.reward-sm {
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		margin-left: 38rpx;
	}

	.area-modular {
		display: flex;
		align-items: center;
		display: none;
	}

	.area-logo {
		width: 36rpx;
		height: 44rpx;
		display: block;
	}

	.area-text {
		font-size: 32rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #ED4C4C;
		margin-left: 8rpx;
	}

	.talk-modular {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 26rpx;
	}

	.talk-lists {
		display: flex;
		align-items: center;
		margin: 0 0 0 auto;
	}

	.talk-list {
		display: flex;
		align-items: center;
		margin-left: 28rpx;
	}

	.talk-logo {
		width: 42rpx;
		height: 38rpx;
		display: block;
	}

	.talk-text {
		margin-left: 8rpx;
		font-size: 28rpx;
		font-family: Inter-Regular;
		color: #6A6A6C;
	}

	/* 被关注用户列表 */
	.user-list {
		width: 690rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 30rpx;
		border-bottom: 2rpx solid rgba(217, 217, 217, 0.4);
		margin-bottom: 30rpx;
	}

	.user-list:nth-last-child(1) {
		border-bottom: none;
	}

	.focus-user {
		width: 512rpx;
		display: flex;
		align-items: center;
	}

	.focus-user-photo {
		width: 112rpx;
		height: 112rpx;
		display: block;
		border-radius: 50%;
	}

	.focus-user-msg {
		width: 380rpx;
		margin-left: 20rpx;
	}

	.focus-user-name {
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #000000;
	}

	.focus-user-gender {
		font-size: 26rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #6A6A6C;
		margin-top: 16rpx;
	}

	.close-focus {
		min-width: 100rpx;
		padding: 0 10rpx;
		height: 56rpx;
		background: rgba(26, 29, 38, 0.1);
		border-radius: 60rpx;

		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		text-align: center;
		line-height: 56rpx;
	}

	/* 相册 */
	.camera-lists {
		width: 690rpx;
		margin: 0 auto 0;
		padding: 40rpx 10rpx;
		box-sizing: border-box;
	}
	
	.camera-lists-height {
		margin-top: 96rpx;
	}
	
	.camera-list {
		width: 690rpx;
		margin: 10rpx auto 0;
		display: flex;
		flex-wrap: wrap;
		padding-bottom: 60rpx;
	}

	.camera {
		width: 210rpx;
		height: 280rpx;
		margin: 0 10rpx 20rpx;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
	}

	.video-list {
		width: 690rpx;
		margin: 50rpx auto 0;
		display: flex;
		flex-wrap: wrap;
		padding-bottom: 120rpx;
	}

	.sticky-logo {
		width: 108rpx;
		height: 108rpx;
		position: fixed;
		right: 30rpx;
		bottom: 180rpx;
	}

	/* 底部按鈕 */
	.card-bottom {
		width: 690rpx;
		padding: 0 30RPX;
		height: 128rpx;
		background: #FFFFFF;

		display: flex;
		align-items: center;
		justify-content: space-between;
		position: fixed;
		bottom: 0;
		border-top: 2rpx solid #E9E9EA;
	}

	.focus {
		width: 335rpx;
		height: 88rpx;
		line-height: 88rpx;
		background: #1A1D26;
		border-radius: 60rpx;

		font-size: 30rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #FFFFFF;
		text-align: center;
	}

	.message {
		width: 335rpx;
		height: 88rpx;
		line-height: 88rpx;
		background: #1A1D26;
		border-radius: 60rpx;

		font-size: 30rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #FFFFFF;
		text-align: center;
	}
</style>
