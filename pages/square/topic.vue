<template>
	<view class="container">
		<view class="top-modular">
			<view class="top">
				<view class="top-title">
					<uni-nav-bar left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000"
						:title="'#' + title">
					</uni-nav-bar>
					<view class="new-sort" @click="close">
						<template v-if="list.follow_status == 1">{{ $t('topic.close') }}</template>
						<template v-else="list.follow_status == 0">{{ $t('topic.focus') }}</template>
					</view>
				</view>
				<view class="search-modular">
					<image class="search-logo" src="../../static/images/square/icon02.png" @click="getHttpTopic">
					</image>
					<input class="search-input" v-model="keyword" :placeholder="$t('topic.search_placeholder')"
						@confirm="getHttpTopic" />
				</view>
			</view>

			<!-- <image class="banner" :src="list.pic" v-if="list.pic"></image>
			<image class="banner" src="../../static/images/square/topic/icon03.png" v-else></image>

			<view class="look-modular">
				<view class="look-style">
					<view class="look-num">{{list.visited_count || 0}}k {{ $t('topic.views') }}</view>
					<view class="published-num">{{list.article_count || 0}} {{ $t('topic.number_people_published') }}
					</view>
				</view>
				<image class="share-logo" src="../../static/images/square/topic/icon02.png" @click="toShare"></image>
			</view> -->
		</view>
		<scroll-view class="scroll-container" scroll-y="true" @scroll="scrollY" @scrolltolower="getLoading"
			:scroll-top="scrollTop" :show-scrollbar="false" :style="contentHeight">
			<view class="content">
				<image class="banner" :src="list.pic" v-if="list.pic"></image>
				<image class="banner" src="../../static/images/square/topic/icon03.png" v-else></image>

				<view class="look-modular">
					<view class="look-style">
						<view class="look-num">{{list.visited_count || 0}}k {{ $t('topic.views') }}</view>
						<view class="published-num">{{list.article_count || 0}}
							{{ $t('topic.number_people_published') }}
						</view>
					</view>
					<image class="share-logo" src="../../static/images/square/topic/icon02.png" @click="toShare">
					</image>
				</view>

				<!-- <view class="nav-list">
					<view class="nav-sort" :class="{'nav-sort-active': cindex == 0}" @click="goSort(0)">
						{{ $t('topic.recommend') }}
					</view>
					<view class="nav-sort" :class="{'nav-sort-active': cindex == 1}" @click="goSort(1)">
						{{ $t('topic.follow') }}
					</view>
				</view> -->
				
				<view class="square-lists">
					<view class="square-list" v-for="item,index in topicLists" @click="goDetail(item)">
						<image class="user-logo" :src="item.avatar"></image>
						<view class="user-notice">
							<view class="user-msg">
								<view class="user-msg-top">
									<view class="user-name">{{item.nickname}}</view>
									<!-- <view class="user-time">{{item.created_at}}</view> -->
									<view class="user-time">{{item.intl_created_at}}</view>
								</view>
								<view class="user-btn" v-if="item.follow == 0" @click.stop="follow('on',item.uid)">
									{{ $t('topic.focus') }}
								</view>
								<view class="user-btn" v-else-if="item.follow == 1"
									@click.stop="follow('off',item.uid)">
									{{ $t('topic.close') }}
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
							<view class="space-topic-lists" v-if="item.topic && item.topic.length > 0">
								<view class="space-topic" v-for="kitem,kindex in item.topic"
									@click.stop="goTopic(kitem)">
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
											src="../../static/images/square/icon07.png"
											@click.stop="vote('up','on',item)">
										</image>
										<image class="talk-logo" v-else-if="item.vote_up_status == 1"
											src="../../static/images/square/icon08.png"
											@click.stop="vote('up','off',item)">
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
			</view>
		</scroll-view>

		<image v-if="isShowTop" class="sticky-logo" src="../../static/images/common/sticky.png" @click="goTop"></image>
		<view class="comment-bottom">
			<input disabled class="comment-text" :placeholder="$t('topic.talking_with_them')" @click="goRelease" />
		</view>

		<share ref="share"></share>
	</view>
</template>

<script>
	import share from '@/pages/common/share.vue'
	export default {
		data() {
			return {
				isShowTop: false,
				scrollTop: "",
				contentHeight: {
					'height': '1080rpx'
				},

				title: "#话题部落",
				topic_id: "",
				list: {},

				cindex: 0,

				keyword: "",
				isRequest: true,
				current_page: 1,
				page: 1,
				limit: 20,
				total_limit: 0,
				total_page: 0,
				topicLists: [],
			}
		},
		components: {
			share,
		},
		onLoad(option) {
			//如果参数有值，渠道入口-请求
			//如果首页、分类特殊值有值-请求（不与上方同时触发）
			if (option.topic_name) this.title = option.topic_name
			if (option.topic_id) this.topic_id = option.topic_id
			this.getTopic()
			this.getTopicLists()

			let that = this;
			uni.getSystemInfo({
				success(res) {
					// #ifdef MP-WEIXIN
					if (res.windowHeight > 568) {
						// that.showListActive.height = (res.windowHeight - 52 - 90 - 27 - 10) + "px"
					}
					// #endif

					// #ifdef H5
					if (res.windowHeight > 568) {
						that.contentHeight.height = res.windowHeight - uni.upx2px(202) - uni.upx2px(120) + "px"
					}
					// #endif
				},
			})
		},
		// onReachBottom() {
		// 	//上拉加载，请求记得限制。
		// 	if (this.isRequest) {
		// 		if (this.page < this.total_page) {
		// 			//console.log("选品页触底了,加载一下")
		// 			this.page = this.page + 1
		// 			this.getTopicLists()
		// 		} else {
		// 			console.log("页码已达到最大，无法再次请求")
		// 		}
		// 		this.$forceUpdate()
		// 	} else {
		// 		//console.log("正在请求，无法再次请求")
		// 	}
		// },
		created() {

		},
		onShow() {
			if (uni.getStorageSync('isRefreshSquare') == 1) {
				this.getHttpTopic()
				uni.setStorageSync('isRefreshSquare', "0")
			}
		},
		methods: {
			back() {
				window.history.go(-1)
			},

			getTopic() {
				uni.showLoading({
					title: this.$t('common').loading + '...',
					mask: true
				});
				this.$myRequest({
						method: 'GET',
						url: '/ht/topic/' + this.topic_id,
						data: {

						}
					})
					.then(res => {
						uni.hideLoading();
						if (res.data.code == 200) {
							this.list = res.data.data
							console.log(res.data.data)
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

			close() {
				let status = "on";
				if (this.list.follow_status == 1) {
					//已关注-进行取关
					status = "off"
				} else {
					//未关注-进行关注
					status = "on"
				}
				uni.showLoading({
					title: this.$t('common').loading + '...',
					mask: true
				});
				this.$myRequest({
						method: 'POST',
						url: '/ht/topic/follow',
						data: {
							topic_id: this.topic_id,
							status: status
						}
					})
					.then(res => {
						uni.hideLoading();
						if (res.data.code == 200) {
							console.log(res.data.data)
							if (this.list.follow_status == 1) {
								this.list.follow_status = 0
							} else {
								this.list.follow_status = 1
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

			scrollY(e) {
				this.scrollTop = e.detail.scrollTop
				if (this.scrollTop > parseInt(this.contentHeight.height)) {
					this.isShowTop = true
				} else {
					this.isShowTop = false
				}
			},
			getLoading() {
				//上拉加载，请求记得限制。
				if (this.isRequest) {
					if (this.page < this.total_page) {
						//console.log("选品页触底了,加载一下")
						this.page = this.page + 1
						this.getTopicLists()
					} else {
						console.log("页码已达到最大，无法再次请求")
					}
					this.$forceUpdate()
				} else {
					//console.log("正在请求，无法再次请求")
				}
			},

			goSort(index) {
				if (this.cindex == index) return
				this.cindex = index
			},
			toShare() {
				this.$refs.share.open()
			},


			getHttpTopic() {
				this.topicLists = []
				this.current_page = 1
				this.page = 1
				this.total_limit = 0
				this.total_page = 0
				this.getTopicLists()
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
							type: "topic",
							topic_id: this.topic_id, //type为topic topic_id必有值

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
							//this.page = res.data.data.page
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
			goDetail(item) {
				uni.navigateTo({
					url: 'squareDetails?article_id=' + (item.id || 3)
				});
			},
			follow(status, uid) {
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
							for (let i in this.topicLists) {
								if (this.topicLists[i].uid == uid) {
									this.topicLists[i].follow = !this.topicLists[i].follow
								}
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
			goTopic(item) {
				let id = item.topic_id || item.id
				uni.redirectTo({
					url: 'topic?topic_name=' + item.title + "&topic_id=" + id
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
			goTop() {
				this.scrollTop = 0
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				});
			},

			goRelease() {
				this.$store.commit('visibleSee', 1) //是否可见，变化为所有可见
				uni.setStorageSync('visible_see', "1")
				
				this.$store.commit('searchAddressList', {}) //地址变化
				uni.setStorageSync('addressList', {})
				
				let arr = [];
				let obj = {};
				obj.id = this.topic_id
				obj.title = this.title
				arr.push(obj)
				this.$store.commit('searchTopicLists', arr) //话题变化
				uni.setStorageSync('topicLists', arr)
				uni.navigateTo({
					url: "release"
				});
			},
		}
	}
</script>

<style scoped>
	.container {
		padding-bottom: 100rpx;
	}

	/* 分类 */
	.top-modular {
		/* border-bottom: 16rpx solid rgba(26, 29, 38, 0.08); */
	}

	.top {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		background: #ffffff;
		padding-bottom: 30rpx;
	}

	.top-title {
		position: relative;
	}

	.new-sort {
		min-width: 100rpx;
		padding: 0 10rpx;
		height: 56rpx;
		background: rgba(26, 29, 38, 0.1);
		border-radius: 60rpx;
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		position: absolute;
		right: 30rpx;
		top: 0;
		bottom: 0;
		margin: auto;
		vertical-align: middle;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/deep/ .uni-navbar--border {
		border-bottom-color: white;
	}

	/* 搜索框 */
	.search-modular {
		margin: 24rpx auto 0;
		position: relative;
	}

	.search-logo {
		width: 32rpx;
		height: 32rpx;
		position: absolute;
		left: 60rpx;
		top: 0;
		bottom: 0;
		margin: auto;
		vertical-align: middle;
	}

	.search-input {
		width: 690rpx;
		height: 88rpx;
		box-sizing: border-box;
		background: #F5F5F5;
		border-radius: 60rpx;
		margin: 0 auto;
		padding: 0 80rpx;

		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		/* color: #999999; */
	}


	/* 主要内容 */
	/deep/ ::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}

	.scroll-container {
		width: 750rpx;
		position: fixed;
		padding: 200rpx 0 120rpx;
	}

	.content {
		padding: 32rpx 0 2rpx;
	}

	.banner {
		width: 690rpx;
		height: 200rpx;
		display: block;
		border-radius: 20rpx;
		margin: 0 auto 0;
	}

	.look-modular {
		width: 690rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0 auto;
		padding: 32rpx 30rpx 40rpx;
		border-bottom: 16rpx solid rgba(26, 29, 38, 0.08);
	}

	.look-style {}

	.look-num {
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #6A6A6C;
	}

	.published-num {
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #6A6A6C;
		margin-top: 12rpx;
	}

	.share-logo {
		width: 56rpx;
		height: 56rpx;
	}

	.nav-list {
		display: flex;
		align-items: center;
		border-bottom: 2rpx solid rgba(155, 155, 155, 0.4);
		margin: 32rpx auto 0;
		padding: 0 30rpx;
	}

	.nav-sort {
		font-size: 28rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #999999;
		margin-right: 36rpx;
		padding: 0 0 14rpx;
	}

	.nav-sort-active {
		font-size: 32rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #1A1D26;
		border-bottom: 4rpx solid #1A1D26;
	}

	/* 广场话题 */
	.square-lists {
		width: 690rpx;
		margin: 50rpx auto 0;
		padding: 0 30rpx;
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
		width: 574rpx;
		box-sizing: border-box;
	}

	.user-msg {
		height: 88rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.user-msg-top {
		width: 420rpx;
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
		font-size: 24rpx;
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
		justify-content: space-between;
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
		margin-left: 35rpx;
	}

	.area-modular {
		width: 560rpx;
		display: flex;
		align-items: center;
		margin-bottom: 18rpx;
	}

	.area-logo {
		width: 36rpx;
		height: 44rpx;
		display: block;
	}

	.area-text {
		width: 520rpx;
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
		flex-wrap: wrap;
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

	/* 发布评论 */
	.comment-bottom {
		width: 690rpx;
		height: 78rpx;
		/* box-sizing: border-box; */
		background: #FFFFFF;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
		border-top: 2rpx solid #D9D9D9;
		display: flex;
		padding: 20rpx 30rpx;
	}

	.comment-text {
		width: 690rpx;
		height: 80rpx;
		background: #F5F5F5;
		border-radius: 60rpx;

		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #999999;
		padding: 0 30rpx;
		box-sizing: border-box;
	}

	.sticky-logo {
		width: 108rpx;
		height: 108rpx;
		position: fixed;
		right: 30rpx;
		bottom: 180rpx;
	}

	/* .commit-btn{
		width: 180rpx;
		height: 80rpx;
		background: #1A1D26;
		border-radius: 200rpx;
		
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #FFFFFF;
		text-align: center;
		line-height: 80rpx;
		margin-left: 20rpx;
	} */
</style>
