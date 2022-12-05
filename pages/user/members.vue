<template>
	<view class="container">
		<!-- <uni-nav-bar fixed left-icon="back" @clickLeft="back" background-color="#282D3E" color="#ffffff" :title="$t('members.members_title')">
		</uni-nav-bar> -->
		<view class="top">
			<image class="back" src="../../static/images/user/members/back01.png" @click="back"></image>
			<view class="sort-modular">
				{{ $t('members.members_title') }}
			</view>
			<view class="why">{{ $t('members.grade') }}?</view>
		</view>
		<view class="content">
			<view class="level-modular">
				<image v-if="isShowMembers" class="icon01" src="../../static/images/user/members/icon01.png"></image>
				<image v-else class="icon01" src="../../static/images/user/members/icon01B.png"></image>
				<image class="photo" src="../../static/images/user/photo02.png"></image>
				<view class="members-msg" v-if="isShowMembers">
					<view class="grade-modular">
						<view class="grade">{{ $t('members.shareholder_members') }}</view>
						<image class="grade-logo" src="../../static/images/user/members/icon04.png"></image>
					</view>
					<view class="expired-title">{{ $t('members.expired_on') }} October 18, 2022</view>
				</view>
				<view class="members-msg" v-else>
					<view class="grade-modular">
						<view class="grade">{{ $t('members.not_member') }}</view>
					</view>
					<view class="expired-title">{{ $t('members.open_member') }}</view>
				</view>
			</view>
			<view class="progress-modular" v-if="isShowMembers">
				<view class="progress">
					<view class="box" id="div_box">
						<view class="load" id="load"></view>
					</view>
				</view>
				<view class="stage">
					<view>V2</view>
					<view>670/16000</view>
					<view>V3</view>
				</view>
			</view>
			<view class="upgrade-title" v-if="isShowMembers">
				<view class="growth">560 {{ $t('members.growth') }}</view>
				<view class="upgrade">{{ $t('members.rapid_upgrade') }}</view>
			</view>
		</view>
		
		<view v-if="!isShowMembers">
			<!-- 这里是可滚动商品展示 -->
			<scroll-view class="scroll-member-list" scroll-x="true" @scroll="scroll" :show-scrollbar="false">
				<view class="member-list">
					<view class="member-list-other" v-for="item,index in memberLists" @click="goCoupon(index)">						
						<view class="limite">{{ $t('members.limited_time_offer') }}</view>
						<view class="coupon-msg" :class="{'coupon-msg-active': cindex == index}">
							<view class="coupon-title">{{item.title}}</view>
							<view class="coupon-price">{{item.price}}</view>
							<view class="coupon-time">{{item.times}}</view>
						</view>						
					</view>
				</view>
			</scroll-view>
			<view class="read-nav" @click="switchChange">
				<checkbox :checked="reward" color="#ffffff" />
				<view>{{ $t('members.consent_agreement') }}</view>
			</view>
		</view>
		
		<view class="receive-lists">
			<view class="receive-title">{{ $t('members.bag') }}</view>
			<scroll-view class="scroll-receive-list" scroll-x="true" @scroll="scrollX" :show-scrollbar="false">
				<view class="receive-list">
					<view class="receive-list-other" v-for="item,index in receiveLists" @click="goReceive(index)">			
						<image v-if="item.isReceive" class="bag-logo" src="../../static/images/user/members/icon02.png"></image>
						<image v-else class="bag-logo" src="../../static/images/user/members/icon03.png"></image>
						<view class="receive-name">{{ $t('members.universal_in_kind') }}</view>
						<view class="receive-prices">
							<view class="receive-price">{{item.price}}</view>
							<image class="receive-logo" src="../../static/images/user/members/icon13.png"></image>
						</view>
						<view class="receive-condition">{{ $t('members.no_threshold') }}</view>
					</view>
				</view>
			</scroll-view>
		</view>
		
		<view class="interest-lists">
			<view class="interest-title">
				<view class="vip">{{ $t('members.vip') }}</view> 
				{{ $t('members.membership_interests') }}
			</view>
			<view class="interest">
				<view class="interest-list" v-for="item,index in interestLists">
					<image class="inviter-logo" :src="item.image"></image>
					<view class="inviter-name">{{item.name}}</view>
					<view class="inviter-des">{{item.des}}</view>
				</view>
			</view>
		</view>
		
		<view class="btn" v-if="!isShowMembers">{{price}} {{ $t('members.subscribe_now') }}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShowMembers: false,
				reward: "-1",
				
				cindex: 1,
				price: "$50",
				memberLists:[{
					id: 1,
					title: "Monthly membership",
					price: "$50",
					times: "$56/monthly"
				},{
					id: 2,
					title: "Quarter membership",
					price: "$500",
					times: "$56/monthly"
				},{
					id: 3,
					title: "Monthly membership",
					price: "$5000",
					times: "$56/monthly"
				},{
					id: 4,
					title: "Quarter membership",
					price: "$50",
					times: "$56/monthly"
				},{
					id: 5,
					title: "Monthly membership",
					price: "$50",
					times: "$56/monthly"
				}],
				
				kindex: 0,
				receiveLists: [{
					id: 1,
					price: "50",
					isReceive: true,
				},{
					id: 2,
					price: "500",
					isReceive: true,
				},{
					id: 3,
					price: "5000",
					isReceive: false,
				},{
					id: 4,
					price: "50000",
					isReceive: false,
				},{
					id: 5,
					price: "500000",
					isReceive: false,
				}],
				
				interestLists: [{
					id: 1,
					name: this.$t('members').benefits_title01,
					des: this.$t('members').benefits01,
					image: "../../static/images/user/members/icon05.png"
				},{
					id: 2,
					name: this.$t('members').benefits_title02,
					des: this.$t('members').benefits02,
					image: "../../static/images/user/members/icon06.png"
				},{
					id: 3,
					name: this.$t('members').benefits_title03,
					des: this.$t('members').benefits03,
					image: "../../static/images/user/members/icon07.png"
				},{
					id: 4,
					name: this.$t('members').benefits_title04,
					des: this.$t('members').benefits04,
					image: "../../static/images/user/members/icon08.png"
				},{
					id: 5,
					name: this.$t('members').benefits_title05,
					des: this.$t('members').benefits05,
					image: "../../static/images/user/members/icon09.png"
				},{
					id: 6,
					name: this.$t('members').benefits_title06,
					des: this.$t('members').benefits06,
					image: "../../static/images/user/members/icon10.png"
				},{
					id: 7,
					name: this.$t('members').benefits_title07,
					des: this.$t('members').benefits07,
					image: "../../static/images/user/members/icon11.png"
				},{
					id: 8,
					name: this.$t('members').benefits_title08,
					des: this.$t('members').benefits08,
					image: "../../static/images/user/members/icon12.png"
				}],
			}
		},
		mounted() {
			this.price = this.memberLists[this.cindex].price
			if(this.reward == -1){
				this.reward = false
			} else if(this.reward == 1){
				this.reward = true
			}
		},
		methods: {
			back() {
				console.log("xxxxxxxxxxxxxxxxx")
				window.history.go(-1)
			},
			
			goCoupon(index) {
				if( this.cindex == index ) return
				this.cindex = index
				this.price = this.memberLists[index].price
			},
			scroll(e) {
				//this.scrollLeft = e.detail.scrollLeft
				// console.log(e)
				// console.log(this.scrollLeft)
			},
			goReceive(index) {
				this.kindex = index
				if( this.receiveLists[this.kindex].isReceive ) return
				this.receiveLists[this.kindex].isReceive = true
				this.$forceUpdate()
				console.log("领取金币:" + index)
			},
			scrollX(e) {
				//this.scrollLeft = e.detail.scrollLeft
				// console.log(e)
				// console.log(this.scrollLeft)
			},
			switchChange(){
				if(this.reward == -1){
					this.reward = true
				} else if(this.reward == 1){
					this.reward = false
				} else {
					this.reward = !this.reward
				}
				console.log(this.reward)
			},
		}
	}
</script>

<style scoped>
	.container {
		padding-bottom: 40rpx;
	}

	.top {
		background: #282D3E;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 26rpx 30rpx;
		position: relative;
		z-index: 1;
	}

	.back {
		width: 28rpx;
		height: 28rpx;
	}

	.sort-modular {
		font-size: 36rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #FFFFFF;

		position: absolute;
		left: 0;
		right: 0;
		margin: 0 auto;
		text-align: center;
		z-index: -1;
	}

	.why {
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #999999;
	}

	/* 主要内容 */
	.content {
		padding: 24rpx 0 46rpx;
		background: #282D3E;

	}

	.level-modular {
		width: 690rpx;
		box-sizing: border-box;
		margin: 0 auto;
		position: relative;
		z-index: 1;
		display: flex;
		align-items: center;
		/* flex-wrap: wrap; */
		padding: 37rpx 30rpx 39rpx;
	}

	.icon01 {
		width: 690rpx;
		height: 172rpx;
		border-radius: 16rpx;
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
		z-index: -1;
	}

	.photo {
		width: 96rpx;
		height: 96rpx;
		border-radius: 50%;
		display: block;
	}

	.members-msg {
		width: 510rpx;
		margin-left: 25rpx;
	}

	.grade-modular {
		display: flex;
		align-items: center;
	}

	.grade {
		width: 490rpx;
		font-size: 34rpx;
		font-family: Inter-Bold;
		font-weight: normal;
		color: #FFFFFF;
		
		overflow: hidden;
		white-space: nowrap;
		word-wrap: normal;
		text-overflow: ellipsis;
		-o-text-overflow: ellipsis;

	}

	.grade-logo {
		width: 36rpx;
		height: 38rpx;
		display: block;
		margin-left: 18rpx;
	}

	.expired-title {
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #FFFFFF;
		margin-top: 14rpx;
		
		overflow: hidden;
		white-space: nowrap;
		word-wrap: normal;
		text-overflow: ellipsis;
		-o-text-overflow: ellipsis;
	}

	/* 进度条 */
	.progress-modular{
		
	}
	.progress{
		width: 690rpx;
		margin: 40rpx auto 16rpx;
		box-sizing: border-box;
	}
	.box {
		width: 690rpx;
		height: 8rpx;
		background: #1A1D26;
		border-radius: 20rpx;
		overflow: hidden;
	}
	.load {
		width: 20%;
		height: 8rpx;
		border-radius: 20rpx;
		background: #8990A5;
	}
	
	
	.stage{
		padding: 0 30rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #FFFFFF;
	}
	
	.upgrade-title{
		padding: 0 30rpx;
		margin-top: 37rpx;
		display: flex;
		justify-content: space-between;
	}
	.growth{
		width: 358rpx;
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		line-height: 38rpx;
		color: #FFFFFF;
	}
	.upgrade{
		font-size: 28rpx;
		font-family: Inter-SemiBold;
		font-weight: normal;
		color: #1A1D26;
		background: #FFFFFF;
		border-radius: 60rpx;
		padding: 22rpx;
	}
	
	/* 购买会员 */
	/deep/ ::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}
	
	.scroll-member-list {
		width: 690rpx;
		margin: 30rpx auto 0;
		white-space: nowrap;
	}
	
	.member-list {
		display: flex;
	}
	
	.member-list-other {
		width: 272rpx;
		/* margin-right: 30rpx; */
		white-space: initial;
		margin-right: 20rpx;
		text-align: center;
	}
	
	.limite{
		width: 240rpx;
		font-size: 26rpx;
		font-family: Inter-Medium;
		font-weight: 500;
		color: #FFFFFF;
		
		background: linear-gradient(110deg, #1BC65F 0%, #6CA683 100%);
		border-radius: 0rpx 12rpx;
		padding: 8rpx 8rpx 8rpx 12rpx;
		margin: 0 0 0 auto;
	}
	
	.coupon-msg{
		background: rgba(26,29,38,0.02);
		border-radius: 20rpx;
		border: 2rpx solid rgba(144,144,144,0.2);
		padding: 32rpx 36rpx;
		margin-top: -24rpx;
		/* margin: -24rpx auto; */
	}
	.coupon-msg-active{
		background: rgba(28,196,95,0.2);
		border: 2rpx solid #1BC55F;
	}
	.coupon-title{
		font-size: 32rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #1A1D26;
	}
	
	.coupon-price{
		font-size: 56rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #1CC45F;
		margin: 8rpx auto;
	}
	
	.coupon-time{
		font-size: 30rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #999999;
		text-decoration:line-through;
	}
	
	/* 是否打开打赏 */
	.read-nav{
		width: 690rpx;
		margin: 38rpx auto 0;
		font-size: 26rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #1A1D26;
		display: flex;
		align-items: center;
	}
	/deep/ .uni-checkbox-input{
		width: 28rpx;
		height: 28rpx;
		border: 2rpx solid #999999;
		border-radius: 50%;
		margin-top: -4rpx;
	}
	/deep/ .uni-checkbox-input-checked{
		background: #000000;
	}
	/deep/ .uni-checkbox-input.uni-checkbox-input-checked:before{
		font-size: 24rpx !important;
	}
	
	/* 领取 */
	.receive-lists{
		width: 690rpx;
		padding: 0 30rpx;
		margin-top: 42rpx;
	}
	.receive-title{
		font-size: 32rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #1A1D26;
	}
	.scroll-receive-list{
		width: 690rpx;
		margin: 38rpx auto 54rpx;
		white-space: nowrap;
	}	.receive-list{
		display: flex;
	}	.receive-list-other{
		width: 180rpx;
		height: 220rpx;
		box-sizing: border-box;
		/* margin-right: 30rpx; */
		white-space: initial;
		margin-right: 20rpx;
		text-align: center;
		z-index: 1;
	}
	.bag-logo{
		width: 180rpx;
		height: 220rpx;
		display: block;
		position: absolute;
		z-index: -1;
	}
	.receive-name{
		width: 180rpx;
		font-size: 24rpx;
		white-space: initial;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #3CA365;
		margin-top: 8rpx;
		word-wrap : break-word;
		padding: 0 20rpx;
		box-sizing: border-box;
	}
	.receive-prices{
		display: flex;
		justify-content: center;
		padding: 18rpx 0 26rpx;
	}
	.receive-price{
		font-size: 28rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #3CA365;
		
	}
	.receive-logo{
		width: 28rpx;
		height: 28rpx;
		margin-left: 4rpx;
	}
	.receive-condition{
		width: 180rpx;
		font-size: 28rpx;
		white-space: initial;
		font-family: Inter-SemiBold;
		font-weight: normal;
		color: #FFFFFF;
		word-wrap : break-word;
		padding: 0 20rpx;
		box-sizing: border-box;
	}
	
	/* 利益列表 */
	.interest-lists{
		
	}
	.interest-title{
		font-size: 32rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #1A1D26;
		display: flex;
		padding: 0 30rpx;
	}
	.vip{
		font-size: 32rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #2BB462;
		margin-right: 8rpx;
	}
	
	.interest{
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-top: 52rpx;
	}
	.interest-list{
		width: 48%;
		text-align: center;
		margin-bottom: 42rpx;
	}
	.inviter-logo{
		width: 96rpx;
		height: 96rpx;
		display: block;
		margin: 0 auto;
	}
	.inviter-name{
		margin-top: 16rpx;
		font-size: 28rpx;
		font-family: Inter-SemiBold;
		font-weight: normal;
		color: #1A1D26;
	}
	.inviter-des{
		margin-top: 16rpx;
		font-size: 28rpx;
		font-family: Inter-Regular;
		font-weight: 400;
		color: #999999;
	}
	.btn{
		width: 480rpx;
		height: 88rpx;
		line-height: 88rpx;
		box-sizing: border-box;
		background: #1A1D26;
		border-radius: 60rpx;
		
		font-size: 30rpx;
		font-family: Inter-Bold;
		font-weight: bold;
		color: #FFFFFF;
		text-align: center;
		margin: 0 auto;
	}
</style>
