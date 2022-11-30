import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		duomiList: {},
		avatar: "",
		nickname: "",
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
		
		
		mail: "",
		
		langText: "",
		
		visible: 1, //朋友圈可见范围
		
		topicLists: [], //朋友圈话题数组
		
		addressList: {}, //地理经纬度
	},
	mutations: {
		editDuomi(state,duomi) {
			state.duomiList = duomi
			state.avatar = duomi.avatar
			state.nickname = duomi.nickname
		},
		editAvatar(state,photo) {
			state.avatar = photo
			state.duomiList.avatar = photo
		},
		editName(state,name) {
			state.nickname = name
			state.duomiList.nickname = name
		},
		editSex(state,name) {
			state.sex = name
			state.duomiList.sex = name
		},
		editHeight(state,heigh) {
			state.heigh = heigh
			state.duomiList.heigh = heigh
		},
		editWeight(state,weight) {
			state.weight = weight
			state.duomiList.weight = weight
		},
		editBirthday(state,birthday) {
			state.birthday = birthday
			state.duomiList.birthday = birthday
		},
		editJob(state,job) {
			state.job = job
			state.duomiList.job = job
		},
		editEmotion(state,emotion) {
			state.emotion = emotion
			state.duomiList.emotion = emotion
		},
		editConstellation(state,constellation) {
			state.constellation = constellation
			state.duomiList.constellation = constellation
		},
		editIncome(state,income) {
			state.income = income
			state.duomiList.income = income
		},
		editHobbies(state,hobbies) {
			state.hobbies = hobbies
			state.duomiList.hobbies = hobbies
		},
		editMood(state,mood) {
			state.mood = mood
			state.duomiList.mood = mood
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
