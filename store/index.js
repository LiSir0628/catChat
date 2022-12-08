import Vue from 'vue'
import Vuex from 'vuex'
import WebsocketHeartbeatJs from "websocket-heartbeat-js/lib/index.js";
import protoRoot from "@/src/proto/chat.js";

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		socketTask: null,
		duomiList: {},
		avatar: "",
		nickname: "",
		signature: "",
		sex: "",
		heigh: "",
		weight: "",
		birthday: "",
		job: "",
		emotion: "",
		constellation: "",
		income: "",
		hobbies: [],
		mood: "",

		chatCountryId: "",


		mail: "",

		langText: "",

		visible: 1, //朋友圈可见范围

		topicLists: [], //朋友圈话题数组

		addressList: {}, //地理经纬度
	},
	mutations: {
		WEBSOCKET_INIT(state, url) {
			state.socketTask = new WebsocketHeartbeatJs({
				url: url + '?token=' + (uni.getStorageSync('token')) + "&platform=" + 3,
				pingTimeout: 30000,
				pongTimeout: 10000,
				reconnectTimeout: 2000,
				pingMsg: "ping"
			});
			state.socketTask.onopen = function() {
				uni.setStorageSync('isWebsocketLogin', "1")
				console.log('connect success');
				//state.socketTask.send('hello server');
			}
			state.socketTask.onmessage = function(e) {
				// console.log(e)
				console.log(e.data)

				if (e.data == "pong") {

				} else if(e.data) {
					var reader = new FileReader();
					reader.readAsArrayBuffer(e.data);			
					reader.onload = function (e) {
						var buf = new Uint8Array(reader.result);
						let testdata = protoRoot.lookup("Chat").decode(buf);
						// console.log(e.data)
						// console.log("反编译:", testdata);
						console.log(testdata)
						console.log(testdata.Data.Data)
						let arr = [];
						let obj = {};
						if(uni.getStorageSync('ownLists')) arr = uni.getStorageSync('ownLists');
						//obj.id = ""
						obj.room_id = testdata.Room
						obj.from = testdata.From
						//obj.addtime = ""
						obj.content = testdata.Data.Data
						obj.size = testdata.Data.Size
						obj.type = testdata.Data.Type
						
						for(let i in arr){
							if(arr[i].user == obj.from){
								arr[i].chatLists.unshift(obj)
								break
							}
						}
						uni.setStorageSync('ownLists', arr);
					}
				} else {

				}
			}
			state.socketTask.onreconnect = function() {
				console.log('reconnecting...');
			}
			state.socketTask.onclose = () => {
				uni.setStorageSync('isWebsocketLogin', "0")
				console.log('connect close');
			}
			state.socketTask.onerror = () => {
				uni.setStorageSync('isWebsocketLogin', "0")
				console.log('connect onerror');
			}
		},

		editDuomi(state, duomi) {
			state.duomiList = duomi
			state.avatar = duomi.avatar
			state.nickname = duomi.nickname
		},
		editAvatar(state, photo) {
			state.avatar = photo
			state.duomiList.avatar = photo
		},
		editName(state, name) {
			state.nickname = name
			state.duomiList.nickname = name
		},
		editSignature(state, signature) {
			state.signature = signature
			state.duomiList.signature = signature
		},
		editSex(state, name) {
			state.sex = name
			state.duomiList.sex = name
		},
		editHeight(state, heigh) {
			state.heigh = heigh
			state.duomiList.heigh = heigh
		},
		editWeight(state, weight) {
			state.weight = weight
			state.duomiList.weight = weight
		},

		editBirthday(state, birthday) {
			state.birthday = birthday
			state.duomiList.birthday = birthday
		},
		editJob(state, job) {
			state.job = job
			state.duomiList.job = job
		},
		editEmotion(state, emotion) {
			state.emotion = emotion
			state.duomiList.emotion = emotion
		},
		editConstellation(state, constellation) {
			state.constellation = constellation
			state.duomiList.constellation = constellation
		},
		editIncome(state, income) {
			state.income = income
			state.duomiList.income = income
		},
		editHobbies(state, hobbies) {
			state.hobbies = hobbies
			state.duomiList.hobbies = hobbies
		},
		editMood(state, mood) {
			state.mood = mood
			state.duomiList.mood = mood
		},

		editChatCountry(state, chatCountryId) {
			state.chatCountryId = chatCountryId
		},


		editEmail(state, email) {
			state.mail = email
			state.duomiList.mail = email
		},

		editLanguage(state, name) {
			state.langText = name
		},


		visibleSee(state, value) {
			state.visible = value
		},
		searchTopicLists(state, value) {
			console.log(value)
			state.topicLists = value
		},
		searchAddressList(state, value) {
			state.addressList = value
		},
	},
	actions: {

	},
	getters: {

	},
	modules: {

	}
})

export default store
