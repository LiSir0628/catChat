import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		duomiList: {},
		nickname: "",
		avatar: "",
		mail: "",
		
		langText: "",
		
		visible: 1, //朋友圈可见范围
		
		topicLists: [], //朋友圈话题数组
		
		addressList: {}, //地理经纬度
	},
	mutations: {
		editDuomi(state,duomi) {
			state.duomiList = duomi
			state.nickname = duomi.nickname
			state.avatar = duomi.avatar
		},
		editName(state,name) {
			state.nickname = name
			state.duomiList.nickname = name
		},
		editAvatar(state,photo) {
			state.avatar = photo
			state.duomiList.avatar = photo
		},
		editEmail(state,email){
			state.mail = email
			state.duomiList.mail = email
		},
			
		editLanguage(state,name){
			state.langText = name
		},
		
		
		visibleSee(state,value) {
			state.visible = value
		},
		searchTopicLists(state,value) {
			console.log(value)
			state.topicLists = value
		},
		searchAddressList(state,value) {
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
