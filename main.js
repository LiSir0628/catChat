import App from './App'

// #ifndef VUE3
import Vue from 'vue'
//引入vuex
import store from './store'
//把vuex定义成全局组件
Vue.prototype.$store = store

import utils from './common/util.js'
Vue.prototype.$utils = utils;
import myRequest from '@/request.js'
Vue.prototype.$myRequest = myRequest

// 复制
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

// 消息切换
import protoRoot from "@/src/proto/chat.js";
Vue.prototype.$protoRoot = protoRoot

// 语法切换
import VueI18n from 'vue-i18n'
Vue.use(VueI18n);

let en = require('./locales/en.js').lang
let zh_CN = require('./locales/zh-CN.js').lang
// en = JSON.stringify(en)
// en = en.replace(/Gold coin/g, "money")
// en = JSON.parse(en)

const i18n = new VueI18n({
	// #ifdef MP 	
	locale: 'en', //初始化,保证刷新页面也保留
	// #endif
	// #ifdef APP-PLUS
	locale: plus.storage.getItem('languageIso') || 'en', //初始化,保证刷新页面也保留
	// #endif
	// #ifdef H5
	locale: uni.getStorageSync('languageIso') || 'en', //初始化,保证刷新页面也保留
	// #endif
	// 加载语言文件的内容
	messages: {
		'en': en,
		'zh-CN': zh_CN
	}
})
Vue.prototype._i18n = i18n

import {
	_get,
	_post,
	_put,
	_delete
} from './common/http.js'
Vue.prototype.$_get = _get;
Vue.prototype.$_post = _post;
Vue.prototype.$_put = _put;
Vue.prototype.$_delete = _delete;

import {
	toast,
	handleTree,
	transformTime
} from './common/api.js'
Vue.prototype.$toast = toast;
Vue.prototype.$handleTree = handleTree;
Vue.prototype.$transformTime = transformTime;

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
	i18n,
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif