import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		visible: 1, //朋友圈可见范围
		
		topicLists: [], //朋友圈话题数组
	},
	mutations: {
		visibleSee(state,value) {
			state.visible = value
		},
		searchTopicLists(state,value) {
			state.topicLists = value
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
