<script>
	// import protoRoot from "@/src/proto/chat.js";
	export default {
		onLaunch: function() {
			// 后端获取多国语言
			// this.$myRequest({
			// 	method: 'get',
			// 	url: 'https://mock.apifox.cn/m1/1201885-0-default/test',
			// 	data: {

			// 	}
			// })
			// .then(res => {
			// 	uni.hideLoading();
			// 	this.$i18n.mergeLocaleMessage('en', res.data)
			// 	this.$forceUpdate()
			// })
			console.log(this.$i18n)

			if (uni.getStorageSync('duomiList')) {
				this.$store.commit('editDuomi', uni.getStorageSync('duomiList'))

				// let testobj = this.$protoRoot.lookup("Chat").create({
				// 	Id: "1",
				// 	From: "19",
				// 	To: "18",
				// 	Room: "0",
				// 	Data: {
				// 		Data: "1",
				// 		Type: "2",
				// 		Size: "3"
				// 	}
				// });
				// let testObjBuffer = this.$protoRoot.lookup("Chat").encode(testobj).finish(); //encode数据
				// console.log("testObjBuffer:", testObjBuffer);
				// let testdata = this.$protoRoot.lookup("Chat").decode(testObjBuffer); //decode数据
				// console.log("testdata：", testdata);
				
				this.initScokets()
				
				// uni.connectSocket({
				// 	url: 'wss://test.mini.zhishukongjian.com/conn?token=' + (uni.getStorageSync('token')) + "&platform=" + 3
				// });
				// uni.onSocketOpen(function(res) {
				// 	console.log('WebSocket连接已打开！');
				// 	// setTimeout(()=>{
				// 	// 	 console.log("111111111111111111")
				// 	// 	 uni.sendSocketMessage({
				// 	// 	       data: testObjBuffer
				// 	// 	 });
				// 	//  },1000)
				// });
				// uni.onSocketError(function(res) {
				// 	console.log('WebSocket连接打开失败，请检查！');
				// });
				// uni.onSocketMessage(function(res) {
				// 	console.log(res);
				// });
			}

			if (uni.getStorageSync('chatCountryId')) {
				this.$store.commit('editChatCountry', uni.getStorageSync('chatCountryId'))
			}

			if (uni.getStorageSync('language')) {
				this.$store.commit('editLanguage', uni.getStorageSync('language'))
			}

			if (uni.getStorageSync('visible_see')) {
				this.$store.commit('visibleSee', uni.getStorageSync('visible_see'))
			}
			if (uni.getStorageSync('topicLists')) {
				this.$store.commit('searchTopicLists', uni.getStorageSync('topicLists'))
			}

			if (uni.getStorageSync('addressList')) {
				this.$store.commit('searchAddressList', uni.getStorageSync('addressList'))
			}
		},
		onShow: function() {
			//console.log('App Show')
		},
		onHide: function() {
			//console.log('App Hide')
		},
		methods: {
			//具体流程
			// 判断是否已连接
			initScokets() {
				let that = this;
				uni.connectSocket({
					url: 'wss://test.mini.zhishukongjian.com/conn?token=' + (uni.getStorageSync('token')) + "&platform=" + 3,
					success(res) {
						console.log("正在连接WebSocket.... connectSocket=", res);
						that.open(); //1、判断是否打开连接
						that.scoketMessage(); //2、判断websocket服务器是否返回信息
						that.TimeOut(); //3、websocket超时操作
					},
					fail(err) {
						console.log("WebSocket连接失败 connectSocket=", err);
						that.error();
					},
				});
			},
			//连接成功
			open() {
			 let that = this;
				uni.onSocketOpen((res) => {
					console.log("WebSocket连接成功....");
					that.reset(); //连接成功之后做两秒的一次连接(心跳机制)
				});
			},
			//服务器返回信息
			scoketMessage() {
				let that = this;
				uni.onSocketMessage(function(res) { //获取服务器返回内容，并获取当前时间戳以作服务器超时判断
					console.log("收到服务器内容：" + res.data);
					that.serveTime = new Date().getTime(); //以下可以写服务器返回之后具体操作

				});
			},
			//超时响应
			TimeOut() {
				let that = this;
				setInterval(function() {
					let times = new Date().getTime();
					if (times - that.serveTime > 30000) {
						//以下做超时后的操作
						console.log("超时了？")
					}
				}, 500);
			},
			// 连接失败
			error() {
				let that = this;
				uni.onSocketError(function(res) {
					console.log("WebSocket连接打开失败，请检查！");
					that.initScokets(); //连接失败之后，重新向服务器发起连接
				});
			},
			// 心跳响应
			reset() {
				console.log(111)
				return
				let that = this;
				clearInterval(that.timeoutObj);
				that.timeoutObj = setInterval(function() {
					uni.sendSocketMessage({
						//data: `{"event":"pushStatus","tpid":"${that.transferValue.tipId}"}`, //data值根据实际需求赋值
						data: "ping",
						success: (res) => {
							console.log("正在发送....");
							console.log(res)
						},
						fail: (err) => {
							console.log("发送失败,重新连接....");
							that.initScokets();
						},
					});
					//做一个判断：在没有获取某个值或者其他需求下，做个无响应的websocket连接。否则就做一个有响应的连接
						// if () {
						// 	that.startSend()
						// } else {
						// 	uni.sendSocketMessage({
						// 		//data: `{"event":"pushStatus","tpid":"${that.transferValue.tipId}"}`, //data值根据实际需求赋值
						// 		data: "ping",
						// 		success: (res) => {
						// 			console.log("正在发送....");
						// 			console.log(res)
						// 		},
						// 		fail: (err) => {
						// 			console.log("发送失败,重新连接....");
						// 			that.initScokets();
						// 		},
						// 	});
						// }
						//（这里做的是其他状态的判断）if (  ) {  that.startSend()  }

				}, 30000);
			},
			//发送信息
			startSend() {
				uni.sendSocketMessage({
					data: "{}", //data值根据实际需求赋值
					success: (res) => {
						console.log("WebSocket连接中....");
					},
					fail: (err) => {
						console.log("发送失败，重新连接....");
					},
				});
			},
		}
	}
</script>

<style>
	page {
		/* text-transform: capitalize; */
	}

	/deep/ .uni-input-placeholder {
		color: #999999;
	}

	/deep/ .uni-navbar__header {
		height: 88rpx !important;
	}

	/deep/ .uni-navbar__header-btns-left {
		top: 0;
		bottom: 0;
		vertical-align: middle;
	}

	/deep/ .uni-navbar__placeholder {
		height: 88rpx !important;
	}

	/deep/ .uni-navbar__header-btns-right {
		font-size: 24rpx;
	}

	/deep/ uni-modal {
		z-index: 10001;
	}

	/deep/ uni-toast {
		z-index: 10001;
	}

	/deep/ .uni-modal__bd {
		color: #1A1D26 !important;
	}

	/deep/ uni-modal .uni-modal__btn_default {
		color: #F14E49 !important;
	}

	/deep/ uni-modal .uni-modal__btn_primary {
		color: #F14E49 !important;
	}

	/*每个页面公共css */
	@font-face {
		font-family: Inter-Bold;
		src: url(static/Inter/Inter-Bold-4.otf)
	}

	@font-face {
		font-family: Inter-Medium;
		src: url(static/Inter/Inter-Medium-8.otf)
	}

	@font-face {
		font-family: Inter-Regular;
		src: url(static/Inter/Inter-Regular-9.otf)
	}

	@font-face {
		font-family: Inter-SemiBold;
		src: url(static/Inter/Inter-SemiBold-10.otf)
	}
</style>
