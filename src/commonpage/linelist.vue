<!--线路列表-->
<template>
	<div class="hotine">
		<p><span class="c-333 f-16">{{msg}}</span><a href="">更多</a></p>

		<div class="common_box hotline_box" v-for="(value,index) in hotlist" :key="index">
			<div class="img">
				<img src="~@/assets/img/list_line.jpg">
				<ol>{{value.name}}</ol>
			</div>
			<div class="line_box">
				<div class="linetitle">
					{{value.title}}
				</div>
				<blockquote>
					<span>2017/09/22<cite>出发</cite></span>
					<em>$4666</em>
				</blockquote>
			</div>
		</div>
		

	</div>



</template>
<script>
	export default{
		name:'hotine',
		data(){
			return {
				msg:'热门地接线路'
			}
		},

		props:['hotlist'],

		mounted(){
			this.msg='热门地接线路';
		}


	}
	
</script>
<style scoped lang="less">
	
	.hotine{
		display: block;
		/*overflow: hidden;*/
		overflow-y: auto;
		padding-top: 10px;
		 p{
			width: 94%;
			display: flex;
			display: -webkit-flex;
			margin: 0px auto;
			flex-flow: row nowrap;
			justify-content:space-between;
			margin-bottom: 10px;
			span{
				line-height: 22px;
				font-size: 14px;
			}
			a{
				display: block;
				line-height: 22px;
				height: 100%;
				background: url('~@/assets/img/icon/more_icon.png') no-repeat right center;
				background-size: auto 45%;
				padding-right: 8px;
				font-size: 13px;
				color: #999;
			}
		}
	}
	
	.hotline_box{
		height: 90px;
		display: flex;
		display: -webkit-flex;
		align-items: center;
		box-sizing: border-box;
		margin-bottom: 10px;
		justify-content:center;
		.img{
			max-height: 100%;
			width: 151px;
			padding: 0px;
			overflow: hidden;
			position: relative;
			img{
				display: block;
				width: 100%;
			}
			ol{
				position: absolute;
				display: block;
				height: 30px;
				bottom: 0px;
				left: 0px;
				right: 0px;
				padding: 0px;
				line-height: 30px;
				margin: 0px;
				text-align: center;
				z-index: 444;
				background-image:-webkit-linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.6)); 
				background-image:linear-gradient(to bottom,rgba(0,0,0,0), rgba(0,0,0,0.6));
				color: white;
			}
		}
	}
	.linetitle{
		line-height: 22px;
		min-height: 44px;
		overflow: hidden;
		font-size: 15px;
		text-align: left;
		color: #666;
	}
	.line_box{
		flex: 1;
		box-sizing: border-box;
		height: 100%;
		padding: 10px;
		padding-left: 15px;
		padding-bottom: 0px;
		blockquote{
			display: flex;
			display: -webkit-flex;
			align-items: center;
			height: 36px;
			justify-content: center;
			span{
				width: 60%;
				line-height: 36px;
				font-size: 13px;
				overflow:hidden;
				color: #999;
				cite{
					background: url('~@/assets/img/icon/air_icon.png') no-repeat right center;
					padding-right: 25px;
					padding-left: 10px;
					background-size: auto 80%;
				}
			}
			em{
				flex: 1;
				text-align: right;
				color: #ff9148;
				font-size: 18px;
			}
		}
	}

</style>