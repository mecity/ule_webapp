<!-- 会员 -->
<template>

	<div class="member">
		<HeaderVue title="我的悠乐"></HeaderVue>
		<div class="topbj" style="margin-top:40px;">
			<p>悠乐地接-让旅游更自由。</p>
			<div class="member_user_box">
				<div class="clearfix pb-15 bd-t btn_box">
					<router-link :to="{name:'login'}" class="btn_login">立即登录</router-link>
					<router-link :to="{name:'member'}" class="btn_reg">注册</router-link>
				</div>
				<div class="fast_tool">
					<a href="#">
						<i class="iconfont icon-yuyue2"></i>
						<span>预约</span>
					</a>
					<a href="#">
						<i class="iconfont icon-icon3"></i>
						<span>私信</span>
					</a>
					<a href="#">
						<i class="iconfont icon-fensi"></i>
						<span>粉丝</span>
					</a>
				</div>
			</div>
		</div>

		<div class="pt-35 bg_white pl-10">
			<mt-cell title="地接线路" class="f-14 bd-t" :to="{name:'index'}"  is-link >
			  <i slot="icon" class="iconfont icon-xingqiu"></i>
			</mt-cell>
			<mt-cell title="搭伴游" class="f-14 bd-t" is-link>
			  <i slot="icon" class="iconfont icon-jieban"></i>
			</mt-cell>
			<mt-cell title="悠乐幇" class="f-14" is-link  value="1">
			  <i slot="icon" class="iconfont icon-bangzhu"></i>
			</mt-cell>
		</div>
		<div class="pl-10 bg_white mt_10">
			<mt-cell title="我的资料" class="f-14" :to="{name:'index'}"  is-link >
			  <i slot="icon" class="iconfont icon-changyongxinxi"></i>
			</mt-cell>
		</div>
		<div class="pl-10 bg_white mt_10">
			<mt-cell title="设置" class="f-14" :to="{name:'set'}"  is-link >
			  <i slot="icon" class="iconfont icon-shezhi"></i>
			</mt-cell>
		</div>
	</div>


</template>
<script type="text/javascript">
	import { Cell,Header } from 'mint-ui';
	export default {

		components: {
			'mt-cell': Cell,
			'mt-header':Header,
			'mt-button':Header,
		},


	}
</script>
<style scoped lang="less">
@bgcolor:#1fcca9;
.btn(){
	background-image:-webkit-linear-gradient(45deg, #fd8011, #ffba42);
	background-image:linear-gradient(45deg, #fd8011, #ffba42);
	border:none;
}
.dis_flex(){
	display: flex;
	display: -webkit-flex;
}


.member{
	text-align: left;
	.topbj{
		height: 120px;
		background: @bgcolor;
		padding: 0px 10px;
		padding-top: 12px;
		position: relative;
		p{
			color: #62fede;
			line-height: 20px;
		}
		.member_user_box{
			background: white;
			border-radius: 5px;
			-webkit-border-radius:5px;
			-moz-border-radius:5px;
			box-shadow: 0px 0px 5px #d1f7f1;
			left: 10px;
			right: 10px;
			top: 42px;
			box-sizing: border-box;
			padding: 15px;
			padding-bottom: 0px;
			height: 110px;
			position: absolute;
			.btn_box{
				.dis_flex;
				align-items: center;
				justify-content: center;
				button{
					margin: 0px;
					padding: 0px;
				}
				.btn_login{
					height: 36px;
					width: 50%;
					.btn;
					border-radius: 18px;
					font-size: 14px;
					line-height: 36px;
					text-align: center;
					color: white;
					box-shadow: 2px 5px 5px #ffebc7;
				}
				.btn_reg{
					height: 36px;
					width: 100px;
					background: #d8d8d8;
					border:none;
					flex:0.6;
					border-radius: 18px;
					font-size: 14px;
					line-height: 36px;
					text-align: center;
					margin-left: 20px;
					color: #fff;

				}
			}
			.fast_tool{
				.dis_flex;
				flex-flow: row nowrap;
				align-items: center;
				a{
					flex:1;
					text-align: center;
					height:45px;
					color: #999;
					box-sizing: border-box;
					padding-top: 10px;
					line-height: 22px;
					i{
						height: 22px;
						line-height: 22px;
						// float: left;
						vertical-align: middle;
					}
					span{
						height: 22px;
						line-height: 22px;
						// float: left;
						vertical-align: middle;
					}
				}

			}
		}
	}

	.iconfont{
		vertical-align: middle;
	}
	.content{
		padding-top: 35px;
	}

}




</style>
