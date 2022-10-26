<template>
	<view class="container">
		<uni-nav-bar fixed left-icon="back" @clickLeft="back" background-color="#ffffff" color="#000000"
			:title="$t('personal.edit_information')">
		</uni-nav-bar>

		<view class="content">
			<view class="photo-modular">
				<image class="photo" src="../../static/images/user/photo01.jpg"></image>
				<image class="camera" src="../../static/images/user/personal/icon02.png"></image>
			</view>

			<view class="label-lists">
				<view class="label-list">
					<view class="label-title">{{ $t('personal.name') }}</view>
					<view class="label-right">
						<view class="label-value" v-if="userList.nickname">{{userList.nickname}}</view>
						<view class="label-value gray" v-else>{{ $t('personal.input_none') }}</view>
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
					<view class="label-title">{{ $t('personal.mood') }}</view>
					<view class="label-right">
						<view class="label-value" v-if="userList.mood">{{userList.mood}}</view>
						<view class="label-value gray" v-else>{{ $t('personal.choice_none') }}</view>
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
					<view class="label-title">{{ $t('personal.gender') }}</view>
					<view class="label-right" @click="genderStatus">
						<view class="label-value" v-if="userList.gender">{{userList.gender}}</view>
						<view class="label-value gray" v-else>{{ $t('personal.choice_none') }}</view>
						<image class="arrow" src="../../static/images/order/icon06.png"></image>
					</view>
				</view>
				
				<view class="label-list">
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
					<view class="label-title">{{ $t('personal.height') }}</view>
					<view class="label-right">
						<view class="label-value" v-if="userList.height">{{userList.height}}</view>
						<view class="label-value gray" v-else>{{ $t('personal.input_none') }}</view>
						<image class="arrow" src="../../static/images/order/icon06.png"></image>
					</view>
				</view>
				
				<view class="label-list">
					<view class="label-title">{{ $t('personal.emotional_state') }}</view>
					<view class="label-right">
						<view class="label-value" v-if="userList.emotional_state">{{userList.emotional_state}}</view>
						<view class="label-value gray" v-else>{{ $t('personal.choice_none') }}</view>
						<image class="arrow" src="../../static/images/order/icon06.png"></image>
					</view>
				</view>
				
				<view class="label-list">
					<view class="label-title">{{ $t('personal.constellation') }}</view>
					<view class="label-right">
						<view class="label-value" v-if="userList.constellation">{{userList.constellation}}</view>
						<view class="label-value gray" v-else>{{ $t('personal.input_none') }}</view>
						<image class="arrow" src="../../static/images/order/icon06.png"></image>
					</view>
				</view>
				<!-- <view class="label-list">
					<view class="label-title">{{ $t('personal.invitees') }}</view>
					<view class="label-right" @click="goInvitees">
						<image class="invitees-logo" v-if="userList.invitees" src="../../static/images/user/personal/icon01.png"></image>
						<view class="label-value label-invitees" v-if="userList.invitees">{{userList.invitees}}</view>
						<view class="label-value gray" v-else>{{ $t('personal.none') }}</view>
						<image class="arrow" src="../../static/images/order/icon06.png"></image>
					</view>
				</view> -->
				
				<view class="label-list">
					<view class="label-title">{{ $t('personal.language') }}</view>
					<view class="label-right">
						<view class="label-value" v-if="userList.language">{{userList.language}}</view>
						<view class="label-value gray" v-else>{{ $t('personal.choice_none') }}</view>
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
				
				<!-- <view class="underline"></view>
				
				<view class="label-span">{{ $t('personal.label') }}</view> -->
				
				<view class="label-list">
					<view class="label-title">{{ $t('personal.education') }}</view>
					<view class="label-right" @click="educationStatus">
						<view class="label-value" v-if="userList.education">{{userList.education}}</view>
						<view class="label-value gray" v-else>{{ $t('personal.choice_none') }}</view>
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
				
				<view class="label-list">
					<view class="label-title">{{ $t('personal.income') }}</view>
					<view class="label-right" @click="revenueStatus">
						<view class="label-value" v-if="userList.income">{{userList.income}}</view>
						<view class="label-value gray" v-else>{{ $t('personal.choice_none') }}</view>
						<image class="arrow" src="../../static/images/order/icon06.png"></image>
					</view>
				</view>
				
				<!-- <view class="label-list">
					<view class="label-title">{{ $t('personal.balance') }}</view>
					<view class="label-right">
						<view class="label-value" v-if="userList.balance">{{userList.balance}}</view>
						<view class="label-value gray" v-else>{{ $t('personal.none') }}</view>
						<image class="arrow" src="../../static/images/order/icon06.png"></image>
					</view>
				</view> -->
			</view>
			
			<view class="out">{{ $t('personal.sign_out') }}</view>
		</view>
		
		<select-state ref="selectState" :isCurrent="isCurrent" :stateList="stateList" :stateStyle="stateStyle" @stateValue="stateValue"></select-state>
	</view>
</template>

<script>
	import selectState from "@/pages/common/selectState.vue"
	export default {
		data() {
			return {
				userList:{
					nickname: "michael jackson",
					location: "",
					mood: "",
					birthday: "1992/05/09",
					gender: "male",
					signature: "",
					interests: "",
					height: "",
					emotional_state: "",
					constellation: "",
					language: "U.S.A",
					city: "U.S.A",
					registration_date: "1998.05.09",
					receive_location: "福建省福州市大榕树创福建省福州市大榕树创",
					education: "",
					occupation: "",
					income: "",
					
					// birthday: "1992/05/09",
					// gender: "male",
					// signature: "1",
					// interests: "2",
					// height: "3",
					// emotional_state: "4",
					// constellation: "5",
					// language: "U.S.A",
					// city: "U.S.A",
					// registration_date: "1998.05.09",
					// receive_location: "福建省福州市大榕树创福建省福州市大榕树创",
					// education: "1",
					// occupation: "2",
					// income: "3",
					// balance: "500.00"
				},
				
				stateStyle: "", //1 = cargoList  2 = refundList
				stateList: [],
				
				isCurrent: "0",
				education_status: "", // 教育-名称
				education_status_val: "",
				revenue_status: "", // 工资-名称
				revenue_status_val: "",
				gender_status: "", // 性别-名称
				gender_val_status: "",
				
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
				revenueList: [{
					value: "111",
					name: "$1000~$3000"
				},{
					value: "222",
					name: "$3000~$5000"
				},{
					value: "333",
					name: "$5000~$7000"
				},{
					value: "444",
					name: "Above $7000"
				}],
				genderList: [{
					value: "male",
					name: this.$t('personal').male
				},{
					value: "female",
					name: this.$t('personal').female
				}]
			}
		},
		components:{
			selectState,
		},
		methods: {
			back() {
				window.history.go(-1)
			},
			stateValue(valObj) {
				//console.log(valObj)
				//stateStyle: 1是货物状态 2是退款理由
				if(valObj.stateStyle == 3){
					this.education_status = this.educationList[valObj.current].name
					this.education_status_val = valObj.stateVal
				} else if(valObj.stateStyle == 4) {
					this.revenue_status = this.revenueList[valObj.current].name
					this.revenue_status_val = valObj.stateVal
				} else if(valObj.stateStyle == 5){
					this.gender_status = this.revenueList[valObj.current].name
					this.gender_status_val = valObj.stateVal
				}
				
				// console.log("名字education_status:" + this.education_status)
				// console.log("名字education_status_val:" + this.education_status_val)
				// console.log("名字revenue_status:" + this.revenue_status)
				// console.log("名字revenue_status_val:" + this.revenue_status_val)
				// console.log("名字gender_status:" + this.gender_status)
				// console.log("名字gender_status_val:" + this.gender_status_val)
				// console.log("******")
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
				this.stateList = this.revenueList
				for(let i in this.stateList){
					if(this.revenue_status_val == this.stateList[i].value){
						this.isCurrent = i.toString()
						break
					}
				}
				this.$refs.selectState.open()
			},
			genderStatus() {
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
		width: 148rpx;
		height: 148rpx;
		box-shadow: 0rpx 6rpx 10rpx 0rpx rgba(0, 0, 0, 0.2);
		border-radius: 30rpx;
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
		margin-top: 110rpx;
	}

	.label-list {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 60rpx;
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
