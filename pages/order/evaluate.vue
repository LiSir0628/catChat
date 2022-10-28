<template>
	<view class="container">
		<uni-nav-bar fixed left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000"
			:title="$t('evaluate.evaluate')">
		</uni-nav-bar>

		<view class="content">
			<view class="evaluate-list" v-for="item,index in list.sp_lists">
				<view class="order-list">
					<image class="order-logo" :src="item.url"></image>
					<view class="order-msg">
						<view class="order-title">{{item.title}}</view>
						<view class="order-sp-specs">
							<template v-for="citem in item.specs">
								{{citem.name}}
							</template>
						</view>
					</view>
				</view>
				
				<view class="evaluate">
					<view class="evaluate-top">
						<view class="evaluate-title">{{ $t('evaluate.description') }}</view>
						<view class="evaluate-thumbs">
							<view v-for="citem,cindex in 5" @click="evaluateNum(index,cindex)">
								<image v-if="evaluate_lists[index].score > cindex" class="thumbs-logo" src="../../static/images/order/evaluate/icon02.png"></image>
								<image v-else class="thumbs-logo" src="../../static/images/order/evaluate/icon01.png"></image>
							</view>
						</view>
					</view>
					
					<!-- <textarea class="textarea" placeholder-class="textarea-placeholder" v-model="evaluate_lists[index].introduction" placeholder="从多维度评价物品，可以帮助更多想买的人..." /> -->
					<textarea maxlength="150" class="textarea" placeholder-class="textarea-placeholder" v-model="evaluate_lists[index].introduction" :placeholder="$t('evaluate.placeholder')" />
				
					<!-- <image class="evaluate-logo" src="../../static/images/order/evaluate/icon03.png" @click="photo"></image> -->
					<view>
						<image v-if="evaluate_lists[index].score_image" class="evaluate-logo" :src="evaluate_lists[index].score_image" @click="photo(index)"></image>
						<image v-else class="evaluate-logo" src="../../static/images/order/evaluate/icon03.png" @click="photo(index)"></image>
					</view>
					
					
					<view class="read-nav">
						<checkbox :checked="evaluate_lists[index].is_default" color="#ffffff" @click="switchChange(index)" />
						<view class="read-text">{{ $t('evaluate.is_anonymous') }}</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="btn" @click="commit">
			Publish
		</view>
		
		<notice ref="notice" :text="text"></notice>
	</view>
</template>

<script>
	import notice from "@/pages/common/notice.vue"
	// import {
	// 	pathToBase64,
	// 	base64ToPath
	// } from 'image-tools'
	export default {
		data() {
			return {
				text: this.$t('evaluate').text,
				demo:{
					score: 1,
					is_default: false,
					introduction: '',
					score_image: '',
				},
				order_id: "等于list中的order_id",
				evaluate_lists: [],
				list: {
					order_id: 3,
					state: 5, // 1待支付  2待发货  3待接收  4取消退款  5已完成-待评论 6已完成-已评价 7.已完成-退款(不可评价)
					total_price: 500,
					total_num: 30,
					sp_lists:[{
						product_id: 1,
						url: '../../static/images/user/photo02.png',
						title: 'Liziqi Liuzhou snail powderLiziqi Liuzhou snail powder',
						price: '10',
						num: 10,
						specs: [{
							specs_id: 1,
							name: "升级款白色（送电池）"
						}],
					},{
						product_id: 2,
						url: '../../static/images/user/photo02.png',
						title: 'Liziqi Liuzhou snail powderLiziqi Liuzhou snail powder',
						price: '20',
						num: 20,
						specs: [{
							specs_id: 1,
							name: "升级款白色（送电池）"
						}],
					},{
						product_id: 3,
						url: '../../static/images/user/photo02.png',
						title: 'Liziqi Liuzhou snail powderLiziqi Liuzhou snail powder',
						price: '10',
						num: 10,
						specs: [{
							specs_id: 4,
							name: "升级款白色（送电池）"
						}],
					},{
						product_id: 4,
						url: '../../static/images/user/photo02.png',
						title: 'Liziqi Liuzhou snail powderLiziqi Liuzhou snail powder',
						price: '20',
						num: 20,
						specs: [{
							specs_id: 1,
							name: "升级款白色（送电池）"
						}],
					},{
						product_id: 5,
						url: '../../static/images/user/photo02.png',
						title: 'Liziqi Liuzhou snail powderLiziqi Liuzhou snail powder',
						price: '10',
						num: 10,
						specs: [{
							specs_id: 1,
							name: "升级款白色（送电池）"
						}],
					},{
						product_id: 6,
						url: '../../static/images/user/photo02.png',
						title: 'Liziqi Liuzhou snail powderLiziqi Liuzhou snail powder',
						price: '20',
						num: 20,
						specs: [{
							specs_id: 1,
							name: "升级款白色（送电池）"
						}],
					}]
					// sp_lists: [{
					// 	product_id: 1,
					// 	url: '../../static/images/user/photo02.png',
					// 	title: 'Liziqi Liuzhou snail powderLiziqi Liuzhou snail powder',
					// 	price: '5.6',
					// 	num: 10,
					// 	specs: [{
					// 		specs_id: 1,
					// 		name: "升级款白色（送电池）"
					// 	}],
					// }]
				},
			}
		},
		components:{
			notice,
		},
		created() {
			let arrObj= [];
			let obj = this.deepClone(this.demo)
			for(let i in this.list.sp_lists){
				obj.product_id = this.list.sp_lists[i].product_id
				arrObj.push(this.deepClone(obj))
			}
			this.evaluate_lists = this.deepClone(arrObj)
		},
		mounted() {
			
		},
		methods: {
			back() {
				this.$refs.notice.open()
				//window.history.go(-1)
			},
			deepClone(obj) {
				let objClone = Array.isArray(obj) ? [] : {};
				if(obj && typeof obj === "object") {
					for(let key in obj) {
						if(obj.hasOwnProperty(key)) {
							//判断ojb子元素是否为对象，如果是，递归复制
							if(obj[key] && typeof obj[key] === "object") {
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
			evaluateNum(index,cindex) {
				//最低1分，最高5分
				this.evaluate_lists[index].score = cindex + 1
				console.log("点赞分数:" + this.evaluate_lists[index].score)
			},
			switchChange(index){
				this.evaluate_lists[index].is_default = !this.evaluate_lists[index].is_default
				console.log("是否匿名:" + this.evaluate_lists[index].is_default)
			},
			photo(index) {
				let _this = this;
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['camera'], //拍照选择
					success: function(res) {
						const tempFilePaths = res.tempFilePaths;
						_this.evaluate_lists[index].score_image = res.tempFilePaths[0]
						console.log(_this.evaluate_lists[index].score_image)
						// pathToBase64(res.tempFilePaths[0])
						// .then(path => {
						// 	_this.backend = path
						// })
						// .catch(error => {
						// 	console.error(error)
						// })
					}
				});
			},
			commit() {
				console.log(this.evaluate_lists)
			}
		}
	}
</script>

<style scoped>
	.container {
		padding-bottom: 240rpx;
	}

	/deep/ .uni-navbar--border {
		border-bottom-color: white;
	}

	.content {
		padding: 24rpx 30rpx 0;
	}
	
	.evaluate-list{
		margin-bottom: 60rpx;
	}
	
	.order-lists {
		width: 690rpx;
		box-sizing: border-box;
		padding: 0 0 70rpx;
	}

	.order-list {
		display: flex;
		/* margin-top: 20rpx; */
		/* padding-bottom: 10rpx; */
	}

	.order-logo {
		width: 120rpx;
		height: 120rpx;
		border-radius: 20rpx;
		margin-right: 22rpx;
		display: block;
	}

	.order-msg {
		width: 548rpx;
		box-sizing: border-box;
	}

	.order-title {
		font-size: 30rpx;
		font-family: Inter-SemiBold;
		font-weight: normal;
		color: #1A1D26;
		line-height: 35rpx;

		overflow: hidden;
		white-space: nowrap;
		word-wrap: normal;
		text-overflow: ellipsis;
		-o-text-overflow: ellipsis;
	}

	.order-sp-specs {
		width: 302rpx;
		height: 48rpx;
		background: rgba(26, 29, 38, 0.1);
		border-radius: 60rpx;
		box-sizing: border-box;
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #6A6A6C;
		line-height: 48rpx;
		text-align: center;
		padding: 0 20rpx;
		margin-top: 20rpx;

		overflow: hidden;
		white-space: nowrap;
		word-wrap: normal;
		text-overflow: ellipsis;
		-o-text-overflow: ellipsis;
	}
	/* 评论环节 */
	.evaluate{
		margin-top: 47rpx;
	}	.evaluate-top{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}	.evaluate-title{
		font-size: 32rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #1A1D26;
		line-height: 38rpx;
	}	.evaluate-thumbs{
		display: flex;
	}	.thumbs-logo{
		width: 36rpx;
		height: 36rpx;
		display: block;
		margin-left: 20rpx;
	}
	
	.textarea{
		width: 690rpx;
		height: 400rpx;
		background: #F5F5F5;
		border-radius: 20rpx;
		padding: 26rpx 30rpx;
		box-sizing: border-box;
		margin-top: 35rpx;
		
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		/* color: #6A6A6C; */
	}
	.textarea-placeholder{
		color:#6A6A6C;
		font-size: 28rpx;
		font-family: Inter-Regular;
	}
	
	.evaluate-logo{
		width: 160rpx;
		height: 160rpx;
		margin-top: 30rpx;
		border-radius: 10px;
	}
	
	.read-nav{
		margin-top: 48rpx;
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #333333;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
	/deep/ .uni-checkbox-input{
		width: 32rpx;
		height: 32rpx;
		border: 2rpx solid #999999;
		border-radius: 50%;
		box-sizing: border-box;
	}
	/deep/ .uni-checkbox-input-checked{
		background: #000000;
	}
	/deep/ .uni-checkbox-input.uni-checkbox-input-checked:before{
		font-size: 24rpx !important;
	}
	
	/* 底部按钮 */
	.btn{
		width: 335rpx;
		height: 88rpx;
		background: #1A1D26;
		border-radius: 60rpx;
		
		font-size: 30rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #FFFFFF;
		line-height: 88rpx;
		margin: 0 auto;
		text-align: center;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 80rpx;
	}
</style>
