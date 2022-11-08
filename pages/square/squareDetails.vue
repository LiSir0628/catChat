<template>
	<view class="container">
		<uni-nav-bar fixed left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000"
			:title="$t('square_details.content_details')">
		</uni-nav-bar>

		<scroll-view class="content" scroll-y="true" @scroll="scrollY" @scrolltolower="getLoading"
			:scroll-top="scrollTop" :show-scrollbar="false" :style="contentHeight">
			<!-- <view class="content" :style="contentHeight"> -->
			<view class="square-list">
				<!-- <image class="user-logo" src="../../static/images/user/photo02.png"></image>
					<view class="user-notice">
						<view class="user-msg">
							<view class="user-msg-top"> 
								<view class="user-name">九亿少女的偶像ADHKA</view>
								<view class="user-time">2022-08-02 22:12:12</view>
							</view>
							<view class="user-btn">{{ $t('square_details.focus') }}</view>
						</view>
					</view> -->
				<!-- <image class="user-logo" src="../../static/images/user/photo02.png"></image> -->
				<image class="user-logo" :src="list.avatar"></image>
				<view class="user-notice">
					<view class="user-msg">
						<view class="user-msg-top">
							<view class="user-name">{{list.nickname}}</view>
							<!-- <view class="user-time">{{list.created_at}}</view> -->
							<view class="user-time">{{list.intl_created_at}}</view>
						</view>
						<view class="user-btn" v-if="list.follow == 0" @click.stop="follow('on',list.uid)">
							{{ $t('square_details.focus') }}
						</view>
						<view class="user-btn" v-else-if="list.follow == 1" @click.stop="follow('off',list.uid)">
							{{ $t('square_details.close') }}
						</view>
					</view>
				</view>
			</view>

			<view class="meny-list">
				<view class="meny">
					<!-- <view class="space-title">你见过最阴暗的事是什么？</view>
					<view class="space-content">
						<view class="space-text">我有个女性朋友，叫许晴，在西南某大学读 研，然后去云南旅游的时候被人贩子差点给骗了</view>
					</view>
					<view class="space-images" @click.stop="previewImage">
						<view class="space-image-list">
							<image class="space-image" mode="widthFix" src="../../static/images/user/photo03.jpg"></image>
						</view>
						<view class="space-image-list">
							<image class="space-image" mode="widthFix" src="../../static/images/user/photo04.jpg"></image>
						</view>
						<view class="space-image-list">
							<image class="space-image" mode="widthFix" src="../../static/images/user/photo05.jpg"></image>
						</view>
						<view class="space-image-list">
							<image class="space-image" mode="widthFix" src="../../static/images/user/photo06.jpg"></image>
						</view>
					</view>
					<view class="space-topic-lists">
						<view class="space-topic">#痛苦的事</view>
						<view class="space-topic">#内心深处的秘密</view>
						<view class="space-topic">#痛苦的事</view>
						<view class="space-topic">#内心深处的秘密</view>
					</view> -->
					<view class="space-title" v-if="list.title">{{list.title}}</view>
					<view class="space-content" v-if="list.content">
						<view class="space-text">{{list.content}}</view>
					</view>
					<view class="space-images" v-if="list.pic && list.pic.length > 0 && list.pic[0]">
						<view class="space-image-list" v-for="citem,cindex in list.pic"
							@click.stop="previewImage(list.pic,citem)">
							<image class="space-image" :src="citem"></image>
						</view>
					</view>
					<view class="space-topic-lists" v-if="list.topic && list.topic.length > 0">
						<view class="space-topic" v-for="kitem,kindex in list.topic" @click.stop="goTopic(kitem)">
							#{{kitem.title}}
						</view>
					</view>

					<view class="reward-modular">
						<view class="talk-modular">
							<view class="talk-list">
								<image class="talk-logo" src="../../static/images/user/icon19.png"></image>
								<view class="talk-text">{{list.comment_count}}</view>
							</view>
							<view class="talk-list">
								<image class="talk-logo" v-if="list.favorite_status == 0"
									src="../../static/images/user/icon26.png" @click="favorite('on')"></image>
								<image class="talk-logo" v-else-if="list.favorite_status == 1"
									src="../../static/images/user/icon27.png" @click="favorite('off')"></image>
								<view class="talk-text">{{list.favorite_count}}</view>
							</view>
							<view class="talk-list">
								<!-- <image class="talk-logo-zan" src="../../static/images/square/icon07.png"></image>
								<view class="talk-text">150</view> -->
								<image class="talk-logo-zan" v-if="list.vote_up_status == 0"
									src="../../static/images/square/icon07.png" @click.stop="vote('up','on',list)">
								</image>
								<image class="talk-logo-zan" v-else-if="list.vote_up_status == 1"
									src="../../static/images/square/icon08.png" @click.stop="vote('up','off',list)">
								</image>
								<view class="talk-text">{{list.vote_up_count}}</view>
							</view>
							<view class="talk-list">
								<!-- <image class="talk-logo-zan" src="../../static/images/square/icon09.png"></image>
								<view class="talk-text">150</view> -->
								<image class="talk-logo-zan" v-if="list.vote_down_status == 0"
									src="../../static/images/square/icon09.png" @click.stop="vote('down','on',list)">
								</image>
								<image class="talk-logo-zan" v-else-if="list.vote_down_status == 1"
									src="../../static/images/square/icon10.png" @click.stop="vote('down','off',list)">
								</image>
								<view class="talk-text">{{list.vote_down_count}}</view>
							</view>
						</view>
					</view>
					<!-- <view class="reward">{{ $t('square_details.reward') }}</view>
					<view class="rewarded-num">{{list.reward_count}} {{ $t('square_details.people_rewarded') }}</view>
					<view class="reward-user">
						<image class="reward-user-logo" src="../../static/images/user/photo02.png"></image>
						<image class="reward-user-logo" src="../../static/images/user/photo02.png"></image>
						<image class="reward-user-logo" src="../../static/images/user/photo02.png"></image>
						<image class="reward-user-logo" src="../../static/images/user/photo02.png"></image>
						<image class="reward-user-logo" src="../../static/images/user/photo02.png"></image>
						<view>...</view>
					</view> -->
				</view>
			</view>

			<view class="comment-modular">
				<view class="comment-title">{{ $t('square_details.comments') }} {{list.comment_count}}</view>
				<view class="comment-lists">
					<view class="comment-list" v-for="item,index in commentLists">
						<view class="comment-top">
							<!-- <image class="comment-user-logo" src="../../static/images/user/photo01.jpg"></image> -->
							<image class="comment-user-logo" :src="item.avatar"></image>
							<view class="comment-user-msg">
								<view class="comment-user-name">{{item.nickname}}</view>
								<view class="comment-user-topic">{{item.content}}</view>
								<view class="comment-user-addressList">
									<view class="comment-user-address">{{item.intl_created_at.substring(0,4)}}
										{{ $t('square_details.ip') }} {{item.ip}}
									</view>
									<view class="comment-user-reply" @click="goReply(item)">
										{{ $t('square_details.reply') }}
									</view>
								</view>
							</view>
							<view class="love-modluar">
								<image v-if="item.vote_up_status == 0" class="love-logo"
									src="../../static/images/square/icon11.png"
									@click.stop="voteComment('up','on',item,'comment')"></image>
								<image v-else class="love-logo" src="../../static/images/square/icon12.png"
									@click.stop="voteComment('up','off',item,'comment')"></image>
								<view class="love-num">{{item.vote_up_count}}</view>
							</view>
						</view>
						<view class="comment-more">
							<view class="comment-top-more" v-for="citem,cindex in item.reply">
								<!-- <image class="comment-user-logo" src="../../static/images/user/photo01.jpg"></image> -->
								<image class="comment-user-logo" :src="citem.avatar"></image>
								<view class="comment-user-msg-more">
									<view class="comment-user-name replay-modular">
										<view class="" class="replay-auto">{{citem.nickname || "无名氏"}}</view>
										<view v-if="citem.at_uid !=0 && citem.at_uid" class="replay-name">{{ $t('square_details.reply')}} : {{citem.at_nickname || "无名氏"}}</view>
									</view>
									<view class="comment-user-topic">
										<!-- <view v-if="citem.at_uid !=0 " class="replay-name">回复:张三李四</view> -->
										<!-- <view v-if="citem.at_uid !=0 && citem.at_uid" class="replay-name">
											{{ $t('square_details.reply')}}({{citem.at_nickname || "无名氏"}}):
										</view> -->
										{{citem.content}}
									</view>
									<view class="comment-user-addressList">
										<view class="comment-user-address">{{citem.intl_created_at.substring(0,4)}}
											{{ $t('square_details.ip') }} {{item.ip}}
										</view>
										<view class="comment-user-reply" @click="goAtReply(item,citem)">
											{{ $t('square_details.reply') }}</view>
									</view>
								</view>
								<view class="love-modluar">
									<image v-if="citem.vote_up_status == 0" class="love-logo"
										src="../../static/images/square/icon11.png"
										@click.stop="voteComment('up','on',citem,'reply')"></image>
									<image v-else class="love-logo" src="../../static/images/square/icon12.png"
										@click.stop="voteComment('up','off',citem,'reply')">
									</image>
									<view class="love-num">{{citem.vote_up_count}}</view>
								</view>
							</view>
							<view class="more-modular" v-if="item.reply_count > 2 && item.isShowMore != false">
								<view class="more" @click="upMore(item,index)">
									{{ $t('square_details.expand_more_reviews') }}</view>
								<image class="arrow-logo" src="../../static/images/square/icon13.png"></image>
							</view>
						</view>
					</view>

					<!-- <view class="comment-list">
						<view class="comment-top">
							<image class="comment-user-logo" src="../../static/images/user/photo01.jpg"></image>
							<view class="comment-user-msg">
								<view class="comment-user-name">宋亚轩最粗的腿毛</view>
								<view class="comment-user-topic">我发现了出一部电视剧，就一大堆 的无脑cp粉在嗑</view>
								<view class="comment-user-addressList">
									<view class="comment-user-address">05-03 {{ $t('square_details.ip') }} 广州</view>
									<view class="comment-user-reply">{{ $t('square_details.reply') }}</view>
								</view>
							</view>
							<view class="love-modluar">
								<image class="love-logo" src="../../static/images/square/icon12.png"></image>
								<view class="love-num">8.7w</view>
							</view>
						</view>
						<view class="comment-more">
							<view class="comment-top-more">
								<image class="comment-user-logo" src="../../static/images/user/photo01.jpg"></image>
								<view class="comment-user-msg-more">
									<view class="comment-user-name">宋亚轩最粗的腿毛</view>
									<view class="comment-user-topic">我发现了出一部电视剧，就一大堆 的无脑cp粉在嗑</view>
									<view class="comment-user-addressList">
										<view class="comment-user-address">05-03 {{ $t('square_details.ip') }} 广州</view>
										<view class="comment-user-reply">{{ $t('square_details.reply') }}</view>
									</view>
								</view>
								<view class="love-modluar">
									<image class="love-logo" src="../../static/images/square/icon11.png"></image>
									<view class="love-num">8.7w</view>
								</view>
							</view>
							<view class="more-modular">
								<view class="more">{{ $t('square_details.expand_more_reviews') }}</view>
								<image class="arrow-logo" src="../../static/images/square/icon13.png"></image>
							</view>
						</view> -->
				</view>

				<view v-if="page >= total_page" class="no_more">{{ $t('square_details.no_more') }}</view>
			</view>
			<!-- </view> -->
		</scroll-view>

		<image v-if="isShowTop" class="sticky-logo" src="../../static/images/common/sticky.png" @click="goTop"></image>

		<view class="comment-bottom">
			<template v-if="commentType == 1">
				<input ref="commentInput" class="comment-text" v-model="content_text" :focus="isFocusA"
					:placeholder="$t('square_details.comment_placeholder')" />
				<view class="commit-btn" @click="commit">{{ $t('square_details.published') }}</view>
			</template>
			<template v-else-if="commentType == 2">
				<input ref="replyInput" class="comment-text" v-model="content_text" :focus="isFocusB" @blur="setFocusB"
					@focus="getFocusB" :placeholder="replyPlaceholder" />
				<!-- <view class="commit-btn" @click="commitB">评论</view> -->
				<view class="commit-btn" @click="commitB">{{ $t('square_details.published') }}</view>
			</template>
			<template v-else-if="commentType == 3">
				<input ref="replyAtInput" class="comment-text" v-model="content_text" :focus="isFocusC"
					@blur="setFocusC" @focus="getFocusC" :placeholder="replyPlaceholder" />
				<!-- <view class="commit-btn" @click.stop="commitC">回复</view> -->
				<view class="commit-btn" @click.stop="commitC">{{ $t('square_details.published') }}</view>
			</template>
			<!-- <view>评论</view>
			<view>回复</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				article_id: "",
				contentHeight: {
					'height': '1080rpx'
				},
				list: {}, //文章列表


				isShowTop: false,
				scrollTop: "",
				isRequest: true,
				current_page: 1,
				page: 1,
				limit: 20,
				total_limit: 0,
				total_page: 0,
				topicLists: [],
				commentLists: [], //评论列表
				content_text: "", //评论内容

				commentType: 1, //1为评论  2为回复 3为@回复
				isFocusA: false,
				isFocusB: false,
				isFocusC: false,
				replyItemList: {},
				replyItem: {},
				replayLimit: 5,
				
				replyPlaceholder: this.$t('square_details').comment_placeholder,

			}
		},
		onLoad(option) {
			if (option.article_id) this.article_id = option.article_id
			this.getHttpList()
			this.getCommentLists()
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
						that.contentHeight.height = res.windowHeight - 44 - uni.upx2px(120) - uni.upx2px(24) + "px"
					}
					// #endif
				},
			})
		},
		methods: {
			back() {
				window.history.go(-1)
			},

			getLoading() {
				//上拉加载，请求记得限制。
				if (this.isRequest) {
					if (this.page < this.total_page) {
						//console.log("选品页触底了,加载一下")
						this.page = this.page + 1
						this.getCommentLists()
					} else {
						console.log("页码已达到最大，无法再次请求")
					}
					this.$forceUpdate()
				} else {
					//console.log("正在请求，无法再次请求")
				}
			},
			goTop() {
				this.scrollTop = 0
				uni.pageScrollTo({
					scrollTop: this.scrollTop,
					duration: 300
				});
			},
			scrollY(e) {
				this.scrollTop = e.detail.scrollTop
				if (this.scrollTop > parseInt(this.contentHeight.height)) {
					this.isShowTop = true
				} else {
					this.isShowTop = false
				}
			},
			deepClone(obj) {
				let objClone = Array.isArray(obj) ? [] : {};
				if (obj && typeof obj === "object") {
					for (let key in obj) {
						if (obj.hasOwnProperty(key)) {
							//判断ojb子元素是否为对象，如果是，递归复制
							if (obj[key] && typeof obj[key] === "object") {
								objClone[key] = this.deepClone(obj[key]);
							} else {
								//如果不是，简单复制
								objClone[key] = obj[key];
							}
						}
					}
				}
				return objClone;
			},
			getHttpList() {
				uni.showLoading({
					title: this.$t('common').loading + '...',
					mask: true
				});
				this.$myRequest({
					method: 'GET',
					url: '/ht/article/' + this.article_id,
					data: {

					}
				})
				.then(res => {
					uni.hideLoading();
					if (res.data.code == 200) {
						this.list = res.data.data
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

			upMore(item, index) {
				console.log(index)
				console.log(item)
				let arr = [];
				let repeatArr = []; //去重新增数组,获取最后一条信息id
				arr = this.deepClone(item.reply)
				//清除新增
				for (let i in arr) {
					if (arr[i].isNew == true) {
						//新增不管
					} else {
						repeatArr.push(arr[i])
					}
				}
				let last_id = "";
				let length = repeatArr.length;
				last_id = repeatArr[length - 1].id;
				
				uni.showLoading({
					title: this.$t('common').loading + '...',
					mask: true
				});
				this.$myRequest({
					method: 'GET',
					url: '/ht/reply',
					data: {
						comment_id: item.id,
						page: 1,
						limit: this.replayLimit,
						last_id: last_id,
					}
				})
				.then(res => {
					uni.hideLoading();
					if (res.data.code == 200) {	
						item.reply = item.reply.concat(res.data.data.lists)
						// let replayArr = this.deepClone(item.reply)
						// let rArrLength = rArrLength.length
						// 数组去重
						let obj = {};
						let objNum = 0;
						item.reply = item.reply.reduce((citem, next) => {
							if(obj[next.id]) objNum = objNum + 1;
							obj[next.id] ? '' : obj[next.id] = true && citem.push(next);
							return citem;
						}, []);
						// 判断是否加载更多
						let totalLimit = parseInt(res.data.data.total_limit) - objNum
						// console.log(objNum)
						// console.log(totalLimit)
						if (totalLimit <= this.replayLimit) {
							item.isShowMore = false
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
			goReply(item) {
				console.log(item)
				console.log("我这是回复呀")
				this.commentType = 2
				
				if(this.replyItem.uid == item.uid){
					//回复的人相同，不用删除 回复内容
				} else {
					this.replyPlaceholder = this.$t('square_details').reply + ' ' + (item.nickname ? item.nickname : "无名氏") + ":"
					this.content_text = ""
				}
				
				this.replyItem = {}
				this.replyItem = item
				this.$nextTick(() => {
					this.isFocusB = true
				})
			},
			getFocusB() {
				//输入框聚焦时触发
			},
			setFocusB() {
				//失去输入框聚焦时触发
				this.$nextTick(() => {
					this.isFocusB = false
					if (!this.content_text) {
						this.commentType = 1
						this.replyItem = {}
					}
				})
			},
			commitB() {
				let item = this.replyItem
				if (!this.content_text) return
				uni.showLoading({
					title: this.$t('common').loading + '...',
					mask: true
				});
				this.$myRequest({
						method: 'POST',
						url: '/ht/reply',
						data: {
							article_id: item.article_id,
							comment_id: item.id,
							//at_uid: item.uid,
							content: this.content_text
						}
					})
					.then(res => {
						uni.hideLoading();
						if (res.data.code == 200) {
							// this.commentLists = []
							// this.getCommentLists()
							console.log(res.data.data)
							res.data.data.vote_up_count = 0
							res.data.data.isNew = true
							if(item.reply){
								item.reply = item.reply.concat(res.data.data)
							} else {
								item.reply = [res.data.data]
							}
							this.content_text = ""
							this.commentType = 1
							this.replyItem = {}
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
			goAtReply(item, citem) {
				console.log(citem)
				console.log("我这是@回复呀")
				this.commentType = 3
				
				if(this.replyItem.uid == citem.uid){
					//回复的人相同，不用删除 回复内容
				} else {
					this.replyPlaceholder = this.$t('square_details').reply + ' ' + (citem.nickname ? citem.nickname : "无名氏") + ":"
					this.content_text = ""
				}
				
				this.replyItemList = {}
				this.replyItemList = item
				this.replyItem = {}
				this.replyItem = citem
				this.$nextTick(() => {
					this.isFocusC = true
				})
			},
			getFocusC() {
				//输入框聚焦时触发
			},
			setFocusC() {
				//失去输入框聚焦时触发
				this.$nextTick(() => {
					this.isFocusC = false
					if (!this.content_text) {
						this.commentType = 1
						this.replyItem = {}
					}
				})
			},
			commitC() {
				let itemList = this.replyItemList
				let item = this.replyItem
				if (!this.content_text) return
				uni.showLoading({
					title: this.$t('common').loading + '...',
					mask: true
				});
				this.$myRequest({
						method: 'POST',
						url: '/ht/reply',
						data: {
							article_id: item.article_id,
							comment_id: item.comment_id,
							at_uid: item.uid,
							content: this.content_text
						}
					})
					.then(res => {
						uni.hideLoading();
						if (res.data.code == 200) {
							res.data.data.vote_up_count = 0
							res.data.data.isNew = true
							itemList.reply = itemList.reply.concat(res.data.data)
							this.content_text = ""
							this.commentType = 1
							this.replyItem = {}
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
			commit() {
				if (!this.content_text) return
				uni.showLoading({
					title: this.$t('common').loading + '...',
					mask: true
				});
				this.$myRequest({
						method: 'POST',
						url: '/ht/comment',
						data: {
							article_id: this.article_id,
							content: this.content_text
						}
					})
					.then(res => {
						uni.hideLoading();
						if (res.data.code == 200) {
							//this.commentLists = []
							res.data.data.vote_up_count = 0
							this.commentLists.unshift(res.data.data)
							this.content_text = ""
							this.$forceUpdate()
							//this.getCommentLists()
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
			getCommentLists() {
				uni.showLoading({
					title: this.$t('common').loading + '...',
					mask: true
				});
				this.$myRequest({
						method: 'GET',
						url: '/ht/comment',
						data: {
							article_id: this.article_id,
							order_type: "new", //recommend：推荐、new：最新
							page: this.page,
							limit: this.limit,
						}
					})
					.then(res => {
						uni.hideLoading();
						if (res.data.code == 200) {
							if (this.commentLists.length == 0) {
								this.commentLists = res.data.data.lists
							} else {
								this.commentLists = this.commentLists.concat(res.data.data.lists)
							}
							//this.page = res.data.data.page
							this.total_limit = res.data.data.total_limit
							this.total_page = Math.ceil(this.total_limit / this.limit)

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
			previewImage(list, item) {
				uni.previewImage({
					current: item,
					urls: list,
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
							this.list.follow = !this.list.follow
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
					url: 'topic?topic_name=' + item.title + "&topic_id=" + id
				});
			},
			favorite(status) {
				uni.showLoading({
					title: this.$t('common').loading + '...',
					mask: true
				});
				this.$myRequest({
						method: 'POST',
						url: '/ht/article/favorite',
						data: {
							article_id: this.article_id,
							status: status
						}
					})
					.then(res => {
						uni.hideLoading();
						if (res.data.code == 200) {
							if (status == "off") {
								this.list.favorite_status = 0
							} else {
								this.list.favorite_status = 1
							}
							this.list.favorite_count = res.data.data
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
			voteComment(type, status, item, comment_type) {
				console.log(type)
				console.log(status)
				console.log(item)
				uni.showLoading({
					title: this.$t('common').loading + '...',
					mask: true
				});
				this.$myRequest({
						method: 'POST',
						url: '/ht/comment/vote',
						data: {
							id: item.id,
							type: type,
							status: status,
							comment_type: comment_type, //comment评论、reply回复
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
		}
	}
</script>

<style scoped>
	.container {
		/* padding-bottom: 120rpx; */
	}

	/* /deep/ .uni-navbar{
		width: 750rpx;
		margin: 0 auto;
	}
	/deep/ .uni-navbar__content{
		width: 750rpx;
		margin: 0 auto;
	}
	/deep/ .uni-navbar__header{
		width: 710rpx;
		margin: 0 auto;
	} */

	/deep/ .uni-navbar--border {
		border-bottom-color: white;
	}

	.content {
		width: 690rpx;
		position: fixed;
		top: 88rpx;
		left: 0;
		right: 0;
		margin: 0 auto;
		padding: 24rpx 30rpx 120rpx;
		/* padding: 24rpx 30rpx 0; */
		overflow: hidden;
		overflow-y: auto;
	}

	/deep/ ::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}

	/* 广场话题 */
	.square-lists {
		width: 690rpx;
		margin: 50rpx auto 0;
	}

	.square-list {
		display: flex;
		margin-bottom: 34rpx;
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

	.user-msg-top {}

	.user-name {
		font-size: 28rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #6A6A6C;
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

	.meny-list {
		width: 690rpx;
		margin: 0 auto;
		padding-bottom: 80rpx;
		text-align: left;
		border-bottom: 2rpx solid rgba(217, 217, 217, 0.5);
	}

	.meny {
		/* margin-bottom: 54rpx; */
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
		width: 690rpx;
		max-height: 600rpx;
		overflow: hidden;
		border-radius: 20rpx;
		margin: 0 10rpx 10rpx 0;
	}

	.space-image {
		width: 690rpx;
		/* height: 210rpx; */
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

	.meny-time {
		font-size: 28rpx;
		line-height: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #6A6A6C;
	}

	.meny-comment {
		font-size: 30rpx;
		line-height: 35rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		margin-top: 16rpx;
	}

	.meny-logo {
		width: 690rpx;
		max-height: 690rpx;
		margin-top: 29rpx;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		display: block;
	}

	.reward-modular {
		display: flex;
		justify-content: space-between;
		margin-top: 30rpx;
	}

	.reward {
		width: max-content;
		padding: 0 30rpx;
		/* width: 160rpx; */
		height: 64rpx;
		background: #1A1D26;
		border-radius: 100rpx;

		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #FFFFFF;
		text-align: center;
		line-height: 64rpx;

		margin: 60rpx auto 0;
	}

	.rewarded-num {
		font-size: 32rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #1A1D26;
		margin-top: 40rpx;
		text-align: center;
	}

	.reward-user {
		display: flex;
		justify-content: center;
		align-items: flex-end;
		margin-top: 38rpx;
	}

	.reward-user-logo {
		width: 72rpx;
		height: 72rpx;
		border-radius: 50%;
		margin-right: 10rpx;
		display: block;
	}

	.talk-modular {
		width: 690rpx;
		/* background-color: red; */
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.talk-list {
		/* width: 345rpx; */
		display: flex;
		align-items: center;
		/* margin-left: 28rpx; */
	}

	.talk-logo {
		width: 48rpx;
		height: 48rpx;
		display: block;
	}

	.talk-logo-zan {
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

	/* 评论模块 */
	.comment-modular {
		padding: 60rpx 0;
	}

	.comment-title {
		font-size: 34rpx;
		font-family: Inter-SemiBold;
		font-weight: normal;
		color: #000000;
	}

	.comment-lists {
		margin-top: 45rpx;
	}

	.comment-list {
		margin-bottom: 46rpx;
	}

	.comment-top {
		display: flex;
		justify-content: space-between;
	}

	.comment-more {
		width: 604rpx;
		right: 0;
		margin: 35rpx 0 0 auto;
	}

	.comment-top-more {
		display: flex;
		justify-content: space-between;
		margin-bottom: 40rpx;
	}

	.comment-user-logo {
		width: 72rpx;
		height: 72rpx;
		display: block;
		border-radius: 50%;
	}

	.comment-user-msg {
		width: 490rpx;
	}

	.comment-user-msg-more {
		width: 404rpx;
	}

	.comment-user-name {
		font-size: 26rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #6A6A6C;
		
		overflow: hidden;
		white-space: nowrap;
		word-wrap: normal;
		text-overflow: ellipsis;
		-o-text-overflow: ellipsis;
	}
	.replay-modular{
		display: flex;
		align-items: center;
	}
	.replay-auto{
		max-width: 140rpx;
		overflow: hidden;
		white-space: nowrap;
		word-wrap: normal;
		text-overflow: ellipsis;
		-o-text-overflow: ellipsis;
	}
	.replay-name{
		max-width: 220rpx;
		margin-left: 6rpx;
		
		overflow: hidden;
		white-space: nowrap;
		word-wrap: normal;
		text-overflow: ellipsis;
		-o-text-overflow: ellipsis;
	}
	

	.comment-user-topic {
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #1A1D26;
		margin-top: 12rpx;
	}

	/* .replay-name {
		font-size: 24rpx;
		color: red;
		margin-bottom: 10rpx;
	} */

	.comment-user-addressList {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		margin-top: 20rpx;
	}

	.comment-user-address {
		max-width: 280rpx;
		font-size: 26rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #999999;
		margin-right: 36rpx;
		
		overflow: hidden;
		white-space: nowrap;
		word-wrap: normal;
		text-overflow: ellipsis;
		-o-text-overflow: ellipsis;
	}

	.comment-user-reply {
		font-size: 26rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #1A1D26;
		/* margin-left: 36rpx; */
	}

	.love-modluar {
		width: 100rpx;
		text-align: center;
	}

	.love-logo {
		width: 48rpx;
		height: 48rpx;
		display: block;
		margin: 0 auto 10rpx;
	}

	.love-num {
		font-size: 24rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #6A6A6C;
	}

	.more-modular {
		display: flex;
		align-items: center;
	}

	.more {
		font-size: 26rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #6A6A6C;
	}

	.arrow-logo {
		width: 26rpx;
		height: 15rpx;
		margin: 0rpx 0 0 9rpx;
	}

	.no_more {
		font-size: 26rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #999999;
		text-align: center;
	}

	.sticky-logo {
		width: 108rpx;
		height: 108rpx;
		position: fixed;
		right: 30rpx;
		bottom: 180rpx;
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
		width: 490rpx;
		height: 80rpx;
		background: #F5F5F5;
		border-radius: 60rpx;

		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		/* color: #999999; */
		padding: 0 30rpx;
		box-sizing: border-box;
	}

	.commit-btn {
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
	}
</style>
