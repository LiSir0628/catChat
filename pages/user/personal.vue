<template>
	<view class="container">
		<uni-nav-bar fixed left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000"
			:title="$t('personal.edit_information')">
		</uni-nav-bar>

		<view class="content">
			<!-- <view class="photo-modular">
				<image class="photo" src="../../static/images/user/photo01.jpg"></image>
				<image class="camera" src="../../static/images/user/personal/icon02.png"></image>
			</view> -->

			<view class="label-lists">
				<view class="label-list">
					<view class="label-title">{{ $t('personal.avatar') }}</view>
					<view class="label-right" @click="upload">
						<image v-if="userList.avatar" class="photo" :src="userList.avatar"></image>
						<image v-else class="photo" src="../../static/images/user/photo01.jpg"></image>
						<image class="arrow" src="../../static/images/order/icon06.png"></image>
					</view>
				</view>
				
				<view class="label-list">
					<view class="label-title">{{ $t('personal.name') }}</view>
					<view class="label-right" @click="goNickname">
						<view class="label-value" v-if="userList.nickname">{{userList.nickname}}</view>
						<view class="label-value gray" v-else>{{ $t('personal.input_none') }}</view>
						<image class="arrow" src="../../static/images/order/icon06.png"></image>
					</view>
				</view>
				
				<view class="label-list">
					<view class="label-title">{{ $t('personal.gender') }}</view>
					<view v-if="userList.gender" class="label-right" @click="genderStatus">
						<view class="label-value gray">{{userList.gender}}</view>
						<image class="arrow" src="../../static/images/order/icon06.png"></image>
					</view>
					<view v-else class="label-right" @click="genderStatus">
						<view class="label-value gray">{{ $t('personal.choice_none') }}</view>
						<image class="arrow" src="../../static/images/order/icon06.png"></image>
					</view>
				</view>
				
				<view class="label-list">
					<view class="label-title">{{ $t('personal.location') }}</view>
					<view class="label-right">
						<view class="label-value" v-if="userList.location">{{userList.location}}</view>
						<view class="label-value gray" v-else>{{ $t('personal.position_none') }}</view>
						<image class="arrow" src="../../static/images/order/icon06.png"></image>
					</view>
				</view>
				
				<view class="label-list">
					<view class="label-title">{{ $t('personal.height') }}</view>
					<view class="label-right" @click="goHeight">
						<view class="label-value" v-if="userList.height">{{userList.height}}</view>
						<view class="label-value gray" v-else>{{ $t('personal.input_none') }}</view>
						<image class="arrow" src="../../static/images/order/icon06.png"></image>
					</view>
				</view>
				
				<view class="label-list">
					<view class="label-title">{{ $t('personal.birthday') }}</view>
					<view class="label-right" @click="goDate">
						<view class="label-value" v-if="userList.birthday">{{userList.birthday}}</view>
						<view class="label-value gray" v-else>{{ $t('personal.date_none') }}</view>
						<image class="arrow" src="../../static/images/order/icon06.png"></image>
					</view>
				</view>
				
				<view class="label-list">
					<view class="label-title">{{ $t('personal.occupation') }}</view>
					<view class="label-right" @click="goOccupation">
						<view class="label-value" v-if="userList.occupation">{{userList.occupation}}</view>
						<view class="label-value gray" v-else>{{ $t('personal.input_none') }}</view>
						<image class="arrow" src="../../static/images/order/icon06.png"></image>
					</view>
				</view>
				
				<!-- <view class="label-list">
					<view class="label-title">{{ $t('personal.mood') }}</view>
					<view class="label-right">
						<view class="label-value" v-if="userList.mood">{{userList.mood}}</view>
						<view class="label-value gray" v-else>{{ $t('personal.choice_none') }}</view>
						<image class="arrow" src="../../static/images/order/icon06.png"></image>
					</view>
				</view> -->
				<view class="label-list">
					<view class="label-title">{{ $t('personal.emotional_state') }}</view>
					<view class="label-right" @click="emotionStatus">
						<view class="label-value" v-if="userList.emotion">{{userList.emotion}}</view>
						<view class="label-value gray" v-else>{{ $t('personal.choice_none') }}</view>
						<image class="arrow" src="../../static/images/order/icon06.png"></image>
					</view>
				</view>
				
				<view class="label-list">
					<view class="label-title">{{ $t('personal.constellation') }}</view>
					<view class="label-right" @click="goConstellation">
						<view class="label-value" v-if="userList.constellation">{{userList.constellation}}</view>
						<view class="label-value gray" v-else>{{ $t('personal.input_none') }}</view>
						<image class="arrow" src="../../static/images/order/icon06.png"></image>
					</view>
				</view>
				
				<view class="label-list">
					<view class="label-title">{{ $t('personal.city') }}</view>
					<view class="label-right">
						<view class="label-value" v-if="userList.city">{{userList.city}}</view>
						<view class="label-value gray" v-else>{{ $t('personal.choice_none') }}</view>
						<image class="arrow" src="../../static/images/order/icon06.png"></image>
					</view>
				</view>
				
				<view class="label-list">
					<view class="label-title">{{ $t('personal.income') }}</view>
					<view class="label-right" @click="revenueStatus">
						<view class="label-value" v-if="userList.income">{{userList.income}}</view>
						<view class="label-value gray" v-else>{{ $t('personal.choice_none') }}</view>
						<image class="arrow" src="../../static/images/order/icon06.png"></image>
					</view>
				</view>
				
				<view class="label-list">
					<view class="label-title">{{ $t('personal.receiving_location') }}</view>
					<view class="label-right">
						<view class="label-value" v-if="userList.receive_location">{{userList.receive_location}}</view>
						<view class="label-value gray" v-else>{{ $t('personal.choice_none') }}</view>
						<image class="arrow" src="../../static/images/order/icon06.png"></image>
					</view>
				</view>
				
				<!-- <view class="label-list">
					<view class="label-title">{{ $t('personal.signature') }}</view>
					<view class="label-right">
						<view class="label-value" v-if="userList.signature">{{userList.signature}}</view>
						<view class="label-value gray" v-else>{{ $t('personal.input_none') }}</view>
						<image class="arrow" src="../../static/images/order/icon06.png"></image>
					</view>
				</view>
				
				<view class="label-list">
					<view class="label-title">{{ $t('personal.interests') }}</view>
					<view class="label-right">
						<view class="label-value" v-if="userList.interests">{{userList.interests}}</view>
						<view class="label-value gray" v-else>{{ $t('personal.choice_none') }}</view>
						<image class="arrow" src="../../static/images/order/icon06.png"></image>
					</view>
				</view>
				
				<view class="label-list">
					<view class="label-title">{{ $t('personal.invitees') }}</view>
					<view class="label-right" @click="goInvitees">
						<image class="invitees-logo" v-if="userList.invitees" src="../../static/images/user/personal/icon01.png"></image>
						<view class="label-value label-invitees" v-if="userList.invitees">{{userList.invitees}}</view>
						<view class="label-value gray" v-else>{{ $t('personal.none') }}</view>
						<image class="arrow" src="../../static/images/order/icon06.png"></image>
					</view>
				</view>
				
				<view class="label-list">
					<view class="label-title">{{ $t('personal.language') }}</view>
					<view class="label-right">
						<view class="label-value" v-if="userList.language">{{userList.language}}</view>
						<view class="label-value gray" v-else>{{ $t('personal.choice_none') }}</view>
						<image class="arrow" src="../../static/images/order/icon06.png"></image>
					</view>
				</view>
				
				<view class="label-list">
					<view class="label-title">{{ $t('personal.registration_date') }}</view>
					<view class="label-right">
						<view class="label-value" v-if="userList.registration_date">{{userList.registration_date}}</view>
						<view class="label-value gray" v-else>{{ $t('personal.date_none') }}</view>
						<image class="arrow" src="../../static/images/order/icon06.png"></image>
					</view>
				</view>
				
				<view class="label-list">
					<view class="label-title">{{ $t('personal.receiving_location') }}</view>
					<view class="label-right">
						<view class="label-value" v-if="userList.receive_location">{{userList.receive_location}}</view>
						<view class="label-value gray" v-else>{{ $t('personal.choice_none') }}</view>
						<image class="arrow" src="../../static/images/order/icon06.png"></image>
					</view>
				</view>
				
				<view class="label-list">
					<view class="label-title">{{ $t('personal.education') }}</view>
					<view class="label-right" @click="educationStatus">
						<view class="label-value" v-if="userList.education">{{userList.education}}</view>
						<view class="label-value gray" v-else>{{ $t('personal.choice_none') }}</view>
						<image class="arrow" src="../../static/images/order/icon06.png"></image>
					</view>
				</view>
				
				<view class="label-list">
					<view class="label-title">{{ $t('personal.balance') }}</view>
					<view class="label-right">
						<view class="label-value" v-if="userList.balance">{{userList.balance}}</view>
						<view class="label-value gray" v-else>{{ $t('personal.none') }}</view>
						<image class="arrow" src="../../static/images/order/icon06.png"></image>
					</view>
				</view> -->
			</view>
			
			<!-- <view class="out">{{ $t('personal.sign_out') }}</view> -->
		</view>
		
		<select-state ref="selectState" :isCurrent="isCurrent" :stateList="stateList" :stateStyle="stateStyle" @stateValue="stateValue"></select-state>
	</view>
</template>

<script>
	import {
		pathToBase64,
		base64ToPath
	} from 'image-tools'
	import selectState from "@/pages/common/selectState.vue"
	export default {
		data() {
			return {
				userList:{
					avatar: "",
					nickname: "",
					gender: "",
					location: "",
					height: "",
					birthday: "",
					occupation: "",
					emotion: "",
					constellation: "",
					city: "",
					income: "",
					receive_location: "",
									
					// mood: "",
					// birthday: "1992/05/09",
					// signature: "",
					// interests: "",
					// height: "",
					// emotion: "",
					// constellation: "",
					// language: "U.S.A",
					// city: "U.S.A",
					// registration_date: "1998.05.09",
					// receive_location: "福建省福州市大榕树创福建省福州市大榕树创",
					// education: "",
					// occupation: "",
					// income: "",
				},
				
				stateStyle: "", //1 = cargoList  2 = refundList
				stateList: [],
				
				isCurrent: "0",
				education_status: "", // 教育-名称
				education_status_val: "",
				revenue_status: "", // 工资-名称
				revenue_status_val: "",
				gender_status: "", // 性别-名称
				gender_status_val: "",
				emotion_status: "", // 情感-名称
				emotion_status_val: "",
				
				// this.$t('personal').no_goods
				educationList: [{
					value: "11",
					name: "specialty"
				},{
					value: "22",
					name: "undergraduate"
				},{
					value: "33",
					name: "Master/postgraduate"
				},{
					value: "44",
					name: "doctor"
				}],
				genderList: [],
				emotionList: [],
				// revenueList: [],
				incomeList: [],
			}
		},
		components:{
			selectState,
		},
		onShow() {
			this.userList = this.$store.state.duomiList
			
			if(this.userList.sex) this.userList.gender = this.userList.sex
			
			if(this.userList.heigh && this.userList.weight){
				this.userList.height = this.userList.heigh + this.$t('common').cm + "/" + this.userList.weight + this.$t('common').kg
			} else if(this.userList.heigh) {
				this.userList.height = this.userList.heigh + this.$t('common').cm
			} else if(this.userList.weight){
				this.userList.height = this.userList.weight + this.$t('common').kg
			}
			
			if(this.userList.job) this.userList.occupation = this.userList.job
			
			if(this.userList.emotion) this.emotion_status = this.userList.emotion
			
			console.log(this.userList)
		},
		created() {
			// if(!this.userList.sex) this.getSex() //不进行限制
			this.getSex()
			this.getEmotion()
			this.getIncome()
		},
		methods: {
			back() {
				window.history.go(-1)
			},
			stateValue(valObj) {
				//console.log(valObj)
				//stateStyle: 1是货物状态 2是退款理由
				let obj= {};
				if(valObj.stateStyle == 3){
					this.education_status = this.educationList[valObj.current].name
					this.education_status_val = valObj.stateVal
				} else if(valObj.stateStyle == 4) {
					this.revenue_status = this.incomeList[valObj.current].name
					this.revenue_status_val = valObj.stateVal
					
					this.setIncome(this.revenue_status_val,this.revenue_status)
				} else if(valObj.stateStyle == 5){
					this.gender_status = this.genderList[valObj.current].name
					this.gender_status_val = valObj.stateVal
					
					this.setSex(this.gender_status_val,this.gender_status)
				} else if(valObj.stateStyle == 6){
					this.emotion_status = this.emotionList[valObj.current].name
					this.emotion_status_val = valObj.stateVal
					
					this.setEmotion(this.emotion_status_val,this.emotion_status)
				}
				
				// console.log("名字education_status:" + this.education_status)
				// console.log("名字education_status_val:" + this.education_status_val)
				// console.log("名字revenue_status:" + this.revenue_status)
				// console.log("名字revenue_status_val:" + this.revenue_status_val)
				// console.log("名字gender_status:" + this.gender_status)
				// console.log("名字gender_status_val:" + this.gender_status_val)
				console.log(this.emotion_status)
				console.log(this.emotion_status_val)
				console.log("******")
			},
			
			upload() {
				let _this = this;
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['camera'], //拍照选择
					success: function(res) {
						const tempFilePaths = res.tempFilePaths;
						// _this.userList.avatar = res.tempFilePaths[0]
						uni.showLoading({
							title: _this.$t('common').loading + '...',
							mask: true
						});
						pathToBase64(res.tempFilePaths[0])
							.then(path => {
								_this.userList.avatar = path
								_this.setUpload()
							})
							.catch(error => {
								uni.hideLoading();
								console.error(error)
							})
					},
				});
			},
			setUpload() {
				this.$myRequest({
					method: 'POST',
					url: '/user/editer',
					data: {
						avatar: this.userList.avatar
					}
				})
				.then(res => {
					uni.hideLoading();
					if (res.data.code == 200) {
						this.$store.commit('editAvatar', res.data.data.avatar)
						uni.setStorageSync('duomiList', this.$store.state.duomiList);
					} else {
						uni.showModal({
							title: this.$t('common').Tip,
							content: res.data.msg,
							confirmText: this.$t('common').confirm,
							showCancel: false,
						})
					}
					this.$forceUpdate()
				})
				.catch(err => {
					uni.hideLoading();
					this.$forceUpdate()
					uni.showModal({
						title: this.$t('common').Tip,
						content: this.$t('common').Network,
						confirmText: this.$t('common').confirm,
						//content: err,
						showCancel: false,
					})
				})
			},
			
			goNickname() {
				uni.navigateTo({
					url: '/pages/edit/edit?style=1'
				});
			},
			
			setSex(val,name) {
				uni.showLoading({
					title: this.$t('common').loading + '...',
					mask: true
				});
				this.$myRequest({
					method: 'POST',
					url: '/user/sex',
					data: {
						sex: val
					}
				})
				.then(res => {
					uni.hideLoading();
					if (res.data.code == 200) {
						this.userList.gender = name
						this.$store.commit('editSex', name)
						uni.setStorageSync('duomiList', this.$store.state.duomiList)
					} else {
						uni.showModal({
							title: this.$t('common').Tip,
							content: res.data.msg,
							confirmText: this.$t('common').confirm,
							showCancel: false,
						})
					}
					this.$forceUpdate()
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
			setEmotion(val,name) {
				uni.showLoading({
					title: this.$t('common').loading + '...',
					mask: true
				});
				this.$myRequest({
					method: 'POST',
					url: '/user/editer',
					data: {
						emotion: val
					}
				})
				.then(res => {
					uni.hideLoading();
					if (res.data.code == 200) {
						this.userList.emotion = name
						this.$store.commit('editEmotion', name)
						uni.setStorageSync('duomiList', this.$store.state.duomiList)
					} else {
						uni.showModal({
							title: this.$t('common').Tip,
							content: res.data.msg,
							confirmText: this.$t('common').confirm,
							showCancel: false,
						})
					}
					this.$forceUpdate()
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
			setIncome(val,name) {
				uni.showLoading({
					title: this.$t('common').loading + '...',
					mask: true
				});
				this.$myRequest({
					method: 'POST',
					url: '/user/editer',
					data: {
						income: val
					}
				})
				.then(res => {
					uni.hideLoading();
					if (res.data.code == 200) {
						this.$store.commit('editIncome', name)
						uni.setStorageSync('duomiList', this.$store.state.duomiList)
					} else {
						uni.showModal({
							title: this.$t('common').Tip,
							content: res.data.msg,
							confirmText: this.$t('common').confirm,
							showCancel: false,
						})
					}
					this.$forceUpdate()
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
			
			goHeight() {
				let url = "/pages/edit/edit?style=2"
				if(this.userList.heigh && this.userList.heigh > 0 ) {
					url = url + "&height=" + this.userList.heigh
				}
				if(this.userList.weight && this.userList.weight > 0 ){
					url = url + "&weight=" + this.userList.weight
				}
				uni.navigateTo({
					url: url
				});
			},
			
			educationStatus() {
				this.stateStyle = "3"
				this.isCurrent = "0"
				this.stateList = this.educationList
				for(let i in this.stateList){
					if(this.education_status_val == this.stateList[i].value){
						this.isCurrent = i.toString()
						break
					}
				}
				this.$refs.selectState.open()
			},
			revenueStatus() {
				this.stateStyle = "4"
				this.isCurrent = "0"
				this.stateList = this.incomeList
				for(let i in this.stateList){
					if(this.revenue_status_val == this.stateList[i].value){
						this.isCurrent = i.toString()
						break
					}
				}
				this.$refs.selectState.open()
			},
			genderStatus() {
				console.log(this.genderList[0].name)
				if(this.userList.gender && this.userList.gender != this.genderList[0].name){
					uni.showModal({
						title: this.$t('common').Tip,
						content: this.$t('common').gender_tip,
						confirmText: this.$t('common').confirm,
						showCancel: false,
					})
					return
				}
				this.stateStyle = "5"
				this.isCurrent = "0"
				this.stateList = this.genderList
				for(let i in this.stateList){
					if(this.gender_status_val == this.stateList[i].value){
						this.isCurrent = i.toString()
						break
					}
				}
				this.$refs.selectState.open()
			},
			emotionStatus() {
				this.stateStyle = "6"
				this.isCurrent = "0"
				this.stateList = this.emotionList
				for(let i in this.stateList){
					if(this.emotion_status_val == this.stateList[i].value){
						this.isCurrent = i.toString()
						break
					}
					if(this.emotion_status == this.stateList[i].name){
						this.isCurrent = i.toString()
						break
					}
				}
				this.$refs.selectState.open()
			},
			
			goDate() {
				uni.navigateTo({
					url: '/pages/edit/birthday'
				});
			},
			
			goInvitees() {
				uni.navigateTo({
					url: '/pages/edit/inviter'
				});
			},
			
			goOccupation() {
				uni.navigateTo({
					url: '/pages/edit/occupation'
				});
			},
			goConstellation() {
				uni.navigateTo({
					url: '/pages/edit/constellation'
				});
			},
			
			
			getSex(){
				uni.showLoading({
					title: this.$t('common').loading + '...',
					mask: true
				});
				this.$myRequest({
					method: 'GET',
					url: '/user/attrs?name=sex'
				})
				.then(res => {
					uni.hideLoading();
					if (res.data.code == 200) {
						let obj = {};
						for(let i in res.data.data){
							obj = {};
							obj.value = i
							obj.name = res.data.data[i]
							this.genderList.push(obj)
						}
					} else {
						uni.showModal({
							title: this.$t('common').Tip,
							content: res.data.msg,
							confirmText: this.$t('common').confirm,
							showCancel: false,
						})
					}
					this.$forceUpdate()
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
			getEmotion() {
				uni.showLoading({
					title: this.$t('common').loading + '...',
					mask: true
				});
				this.$myRequest({
					method: 'GET',
					url: '/user/attrs',
					data: {
						name: "emotion"
					}
				})
				.then(res => {
					uni.hideLoading();
					if (res.data.code == 200) {
						let obj = {};
						for(let i in res.data.data){
							obj = {};
							obj.value = i
							obj.name = res.data.data[i]
							this.emotionList.push(obj)
						}
					} else {
						uni.showModal({
							title: this.$t('common').Tip,
							content: res.data.msg,
							confirmText: this.$t('common').confirm,
							showCancel: false,
						})
					}
					this.$forceUpdate()
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
			getIncome() {
				uni.showLoading({
					title: this.$t('common').loading + '...',
					mask: true
				});
				this.$myRequest({
					method: 'GET',
					url: '/user/attrs',
					data: {
						name: "income"
					}
				})
				.then(res => {
					uni.hideLoading();
					if (res.data.code == 200) {
						let obj = {};
						for(let i in res.data.data){
							obj = {};
							obj.value = i
							obj.name = res.data.data[i]
							this.incomeList.push(obj)
						}
						console.log(this.incomeList)
					} else {
						uni.showModal({
							title: this.$t('common').Tip,
							content: res.data.msg,
							confirmText: this.$t('common').confirm,
							showCancel: false,
						})
					}
					this.$forceUpdate()
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
			}
		}
	}
</script>

<style scoped>
	.container {
		padding-bottom: 120rpx;
	}

	/deep/ .uni-navbar--border {
		border-bottom-color: white;
	}

	.content {
		padding: 24rpx 30rpx 0;
	}

	.photo-modular {
		width: 148rpx;
		height: 148rpx;
		margin: 20rpx auto 0;
		position: relative;
	}

	.photo {
		width: 88rpx;
		height: 88rpx;
		box-shadow: 0rpx 6rpx 10rpx 0rpx rgba(0, 0, 0, 0.2);
		border-radius: 50%;
		display: block;
	}

	.camera {
		width: 73rpx;
		height: 63rpx;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
	}

	/* 个人信息 */
	.label-lists {
		/* margin-top: 110rpx; */
	}

	.label-list {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 60rpx;
	}

	.label-title {
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #1A1D26;
	}

	.label-right {
		display: flex;
		align-items: center;
	}
	
	.invitees-logo{
		width: 48rpx;
		height: 48rpx;
		margin-right: 14rpx;
	}

	.label-value {
		width: 320rpx;
		text-align: right;
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		
		overflow: hidden;
		white-space: nowrap;
		word-wrap: normal;
		text-overflow: ellipsis;
		-o-text-overflow: ellipsis;
	}

	.label-invitees {
		width: auto;
		max-width: 320rpx;
	}

	.gray {
		color: #999999;
	}
	
	.arrow {
		width: 28rpx;
		height: 28rpx;
	}
	/* 下半部分 */
	.underline {
		width: 690rpx;
		height: 2rpx;
		background: #909090;
		border-radius: 0rpx;
		margin: 76rpx auto 70rpx;
	}
	
	.label-span{
		font-size: 30rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #6A6A6C;
	}
	
	.out{
		width: 335rpx;
		height: 88rpx;
		line-height: 88rpx;
		background: #1A1D26;
		border-radius: 60rpx;
		text-align: center;
		margin: 90rpx auto 0;
		
		font-size: 30rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #FFFFFF;
	}
</style>
