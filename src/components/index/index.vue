<template>
	<div class="index">
		<mt-tab-container class="content" v-model="active" swipeable>
		  <mt-tab-container-item id="tab-container1">
		  	<!--topTool-->
		    <div :class="{index_header:IndexdefaulutClass,index_header_bg:IndexActiveClass}">
		   		<div class="left_list_btn" @click="leftBar"></div>
		   		<div class="search_index">
		   			<input type="search" name="search_index" placeholder="输入关键词来查找相关地接导游">
		   		</div>
		   		<div class="member_btn"></div>
		   	</div>
			<div class="swpie_box">
		   		<mt-swipe :auto="4000">
				  <mt-swipe-item v-for="(value,index) in bannerDefaultlist" :key='index'>
				  	<a :href="value.herf"  v-on:touch.stop="leftBar" >
				  		<img v-bind:title="value.name"  v-on:touch.prevent="leftBar" v-lazy.container="value.src">
				  	</a>
				  	</mt-swipe-item> 
				</mt-swipe>
			</div>
			
			<div class="inder_menu" ref="inder_menu">
				dsadsa
			</div>





			<div style="height:2000px;">dsad</div>

		  </mt-tab-container-item>
		  <mt-tab-container-item id="tab-container2">
		   	222
		  </mt-tab-container-item>
		  <mt-tab-container-item id="tab-container3">
		    123132
		  </mt-tab-container-item>
		   <mt-tab-container-item id="tab-container4">
		    144444
		  </mt-tab-container-item>
		</mt-tab-container>


		

		
		<mt-tabbar v-model="active" fixed>
		  <mt-tab-item id="tab-container1">
		  	<i slot="icon" class="iconfont icon-homepage_fill"></i>
		    首页
		  </mt-tab-item>
		  <mt-tab-item id="tab-container2">
		    <i slot="icon" class="iconfont icon-xiazai13"></i>
		    热门线路
		  </mt-tab-item>
		  <mt-tab-item id="tab-container3">
			<i slot="icon" class="iconfont icon-fensi4"></i>
		    寻地接
		  </mt-tab-item>
		   <mt-tab-item id="tab-container4">
		    <i slot="icon" class="iconfont icon-zutuan"></i>
		    搭伴游
		  </mt-tab-item>
		</mt-tabbar>
	</div>
</template>
<script>
	
	import { Tabbar, TabItem, TabContainer,TabContainerItem,Swipe, SwipeItem} from 'mint-ui';
	import banner from '@/assets/img/banner.jpg';
	export default{

		data(){

			return {
				active:'tab-container1',
				IndexdefaulutClass:true, 
      			IndexActiveClass:false,
      			bannerDefaultlist:[
			      	{name:'01',src:banner,herf:'http://www.baidu.com'},
			      	{name:'02',src:banner,herf:'http://www.sina.com.cn'},
			      	{name:'03',src:banner,herf:'http://www.163.com'},
			      	{name:'04',src:banner,herf:'http://www.163.com'},
			      	{name:'05',src:banner,herf:'http://www.163.com'}
			    ],

			}

		},

		components: { 
			 'mt-tabbar': Tabbar,
			 'mt-tab-item':TabItem,
			 'mt-tab-container':TabContainer,
			 'mt-tab-container-item':TabContainerItem,
			 'mt-swipe': Swipe,
		 	 'mt-swipe-item':SwipeItem

		},

		mounted() {
		    //setInterval(this.newlistLoop, 2000);

		    let that=this;
		   	

		    console.info(this.$refs.inder_menu.getBoundingClientRect().top)


			window.addEventListener('scroll',function(e){

				var domtest=that.$refs.inder_menu.getBoundingClientRect().top;
	
				if(domtest<40){
					that.IndexActiveClass=true;

				}else{
					that.IndexActiveClass=false;
				}
		    },true)
		  },

		  methods:{

		  	leftBar(){
		  		alert('a')
		  	},

		  	getScrollTop() {  
			        var scrollPos;  
			        if (window.pageYOffset) {  
			        scrollPos = window.pageYOffset; }  
			        else if (document.compatMode && document.compatMode != 'BackCompat')  
			        { scrollPos = document.documentElement.scrollTop; }  
			        else if (document.body) { scrollPos = document.body.scrollTop; }   
			        return scrollPos;   
			} 



		  }



	}





</script>
<style scoped lang="less">

	@inputPlacehpleder:rgba(255,255,255,1);

	.index{
		font-size: 16px;
		height: 100%
	}
	
	.content{
		position: fixed;
		top: 0px;
		left: 0px;
		right: 0px;
		bottom: 55px;
		overflow-y: auto;
	}
	.index_header_bg{
		background-color:#1fcca9; 
	}
	.index_header{
		position: fixed;
		left: 0px;
		top: 0px;
		right: 0px;
		height: 40px;
		z-index: 9999;
		display: flex;
		display: -webkit-flex;
		-moz-transition:background-color .5s ease;
		-webkit-transition: background-color .5s ease;
		-o-transition: background-color .5s ease;
		transition: background-color .5s ease;
		
		.left_list_btn{
			width: 50px;
			height: 40px;
			background: url('~@/assets/img/icon/left_list_icon.png') no-repeat center;
			background-size: 40%;
			cursor: pointer;
		}
		.member_btn{
			width: 50px;
			height: 40px;
			background: url('~@/assets/img/icon/member_icon.png') no-repeat center;
			background-size: 40%;
			cursor: pointer;
		}
		.search_index{
			flex: 1;
			height: 40px;
			box-sizing: border-box;
			padding: 5px 15px;
			input{
				display: block;
				box-sizing: border-box;
				color: white;
				width: 100%;
				height: 100%;
				padding: 0px 8px;
				padding-left: 25px;
				border-radius: 3px;
				background: rgba(255,255,255,0.2) url('~@/assets/img/icon/search_icon.png') no-repeat 8px center;
				background-size: auto 50%;
				outline: none;
				font-size: 1rem;
			}
			input::-webkit-input-placeholder{
				color: @inputPlacehpleder;
			}
			input::-moz-placeholder{
				color: @inputPlacehpleder;
			}
			input:-moz-placeholder{
				color: @inputPlacehpleder;
			}
			input:-ms-input-placeholder{
				color: @inputPlacehpleder;
			}
		}
	}
	.mint-swipe-indicators{
			bottom: 50px!important;
		}
	.swpie_box{
		height: 200px;
		position: relative;
		.mint-swipe .mint-swipe-items-wrap .mint-swipe-item a{
			display: block;
			height: 100%;
			overflow-y: hidden;
		}
		.mint-swipe .mint-swipe-items-wrap .mint-swipe-item a img{
			display: block;
			max-width: 100%;
			margin: 0px auto;
		}
		
		.mint-swipe-indicators .mint-swipe-indicator{
			width: 8px;
		    height: 8px;
		    display: inline-block;
		    border-radius: 100%;
		    background: red;
		    opacity: 0.2;
		    margin: 0 3px;
		}
		
	}

	.inder_menu{
		height: 120px;
		background: #fff;
		margin: 0px 10px;
		margin-top: -40px;
		position: relative;
		z-index: 999;
		border-radius: 3px;
		-webkit-border-radius:3px;
		-moz-border-radius:3px;
		overflow: hidden;
		box-shadow: 0px 2px 2px rgba(238,238,238,0.8);
	}
	
	




</style>