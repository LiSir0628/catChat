<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
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
