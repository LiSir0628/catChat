<script>
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
			
			if(uni.getStorageSync('duomiList')){
				this.$store.commit('editDuomi', uni.getStorageSync('duomiList'))
			}
			if(uni.getStorageSync('language')){
				this.$store.commit('editLanguage', uni.getStorageSync('language'))
			}
			
			if(uni.getStorageSync('visible_see')){
				this.$store.commit('visibleSee', uni.getStorageSync('visible_see'))
			}
			if(uni.getStorageSync('topicLists')){
				this.$store.commit('searchTopicLists', uni.getStorageSync('topicLists'))
			}
			
			if(uni.getStorageSync('addressList')){
				this.$store.commit('searchAddressList', uni.getStorageSync('addressList'))
			}
		},
		onShow: function() {
			//console.log('App Show')
		},
		onHide: function() {
			//console.log('App Hide')
		}
	}
</script>

<style>
	page{
		/* text-transform: capitalize; */
	}
	/deep/ .uni-input-placeholder{
		color: #999999;
	}
	/deep/ .uni-navbar__header{
		height: 88rpx !important;
	}
	/deep/ .uni-navbar__header-btns-left{
		top: 0;
		bottom: 0;
		vertical-align: middle;
	}
	/deep/ .uni-navbar__placeholder{
		height: 88rpx !important;
	}
	/deep/ .uni-navbar__header-btns-right{
		font-size: 24rpx;
	}
	/deep/ uni-modal{
		z-index: 10001;
	}
	/deep/ uni-toast{
		z-index: 10001;
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
