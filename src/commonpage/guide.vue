<!-- 首页最新地接导游 -->
<template>
  <div class="guide_index common_box" v-on:touchmove.stop>
    	<p class="c-666">最新地接导游</p>
    	<mt-swipe :auto="4000" class='guide_index_swipe' :show-indicators="false">
		  <mt-swipe-item v-for="(value,index) in list" :key="index">
		  	<a href="#" class="guide_swipe_box">
		  		<img :src="value.face">
		  		<div class="guide_flex">
		  		<h2 class="c-333 f-14">{{value.memberName}}<cite class="c-ule-orange pr-5 pl-5">·</cite><small class="c-ule-orange">{{value.place}}</small></h2>
		  		<blockquote>{{value.member_about}}</blockquote>
		  		</div>
		  	</a>
		  </mt-swipe-item>
		</mt-swipe>

  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
import face from "@/assets/img/face.jpg";
export default {
	name: 'guide',
	props:['newslist'],
	components: { 
		'mt-swipe': Swipe,
		'mt-swipe-item':SwipeItem
	},
	computed:{
		list:function(){
			let that=this;
			let list = this.newslist;
			let arr=[];
			if(list){
				list.filter(function (v,i) {
					let memberName='';
					if(v.member_ename!=''){memberName=v.member_ename;}else{memberName=v.member_name;}
					v.memberName=memberName;

					/*组装地接字段*/
					let arrcountry=[];
					arrcountry.push(v.countryname);
					if(v.statename)arrcountry.push(v.statename);
					if(v.cityname)arrcountry.push(v.cityname);
					v.place=arrcountry.join('·');

					let face=JSON.parse(v.member_face);
					v.face=that.$store.state.webSite+face.middle;

					v.member_about=v.member_about?v.member_about:'这人太懒,什么都木有留下...';
					arr[i]=v;
				});

			}
			return arr;
		}


	},



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.guide_index{
	margin-top: 10px;
	padding: 15px;
	padding-bottom: 5px;
	text-align: left;
	p{
		padding-left: 18px;
		line-height: 18px;
		background: url('~@/assets/img/icon/latest_guide_icon.png') no-repeat left center;
		background-size: auto 80%;
		font-size: 12px;
	}
}
.guide_index_swipe{
	height: 90px;
	box-sizing: border-box;
	padding: 10px 0px;
	.mint-swipe-indicator.is-active {
	   background: red!important;
		opacity: 0.8!important;
	}
}
.guide_swipe_box{
	display: block;
	height: 70px;
	padding-left: 60px;
	overflow: hidden;
	position: relative;
	img{
		width: 50px;
		height: 50px;
		border-radius: 25px;
		position: absolute;
		left: 0px;
		top: 5px;
	}
}
.guide_flex{
	display: flex;
	text-align: left;
	display: -webkit-flex;
	align-items:flex-start;
	flex-wrap: nowrap ;
	justify-content: center;
	flex-direction:column;
	margin-top: 5px;
	height: 50px;
	overflow: hidden;
	 h1{
		display: flex;
		font-size: 18px;
	}
	blockquote{
		display: flex;
		color: #999;
		line-height: 150%;
		font-size: 13px;
	}
}

</style>