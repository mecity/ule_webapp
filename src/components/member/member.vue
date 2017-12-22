<!-- 会员 -->
<template>
	<div class="member">
		<HeaderVue title="我的悠乐">
      <router-link to="/" slot="right"><i class="iconfont icon-homepage c-fff"></i></router-link>
    </HeaderVue>
		<div class="topbj" style="margin-top:40px;">
			<p>悠乐地接-让旅游更自由。</p>
			<div class="member_user_box">
        <div v-if="loginState()" class="clearfix pb-15 bd-t user_detail">

          <div class="user_face_info">
            <img :src="face"/>
            <div>
              <h4 class="f-14 c-333">{{userName}}</h4>
              <p style="color: #999">我的积分：{{userScore}}</p>
            </div>
          </div>
          <button :class="['check-ins',{'check-ins-disabled':isScore}]" @click="addscore"><i class="iconfont icon-lichengdixian" slot="icon"></i><span v-if="isScore">已签到</span><span v-else>签到</span></button>
        </div>
				<div class="clearfix pb-25 pt-15 bd-t btn_box" v-else>
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

		<div class="bg_white pl-10" style="padding-top: 65px">
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
	import { Cell,Header,Button } from 'mint-ui';
	export default {
	  data(){
	    return {
	      face:'',
        userId:'',
        userName:'',
        userScore:0,
        isScore:false,
      }
    },
	  created(){
	    if(this.loginState()){
        this.getUserinfo();
        this.checkScorestate(this)
      }
    },
    computed:{
	    scoreState(){
	      return this.$store.getters.getScorestate;
      }
    },
    watch:{
      'scoreState':function(newvalue,oldvalue){
        if(newvalue){
          this.isScore=newvalue;
        }
      }
    },
	  methods:{
	    /*获取用户信息*/
	    getUserinfo(){
        let userinfo=JSON.parse(this.$function.getStore('userinfo'));
        let userface=JSON.parse(userinfo.member_face);
        this.face=this.$store.state.webSite+userface.big;
        this.userId=userinfo.id;
        this.userName=userinfo.member_ename?userinfo.member_ename:userinfo.member_name;
        this.userScore=userinfo.member_integral;
        this.$store.commit('updataMemberscore',userinfo.member_integral);
      },
      /*获取登录状态*/
      loginState(){
        return this.$store.getters.getLoginstate;
      },

      /*判断今日是否已经签到*/
      checkScorestate:async(that)=>{
       await that.$store.dispatch('checkScore',{userid:that.userId});
        that.isScore=that.$store.getters.getScorestate;

      },
      /*执行签到操作*/
      async addscore(){
        this.checkScorestate(this);
        if(this.isScore){
          this.$function.alertToast('今日已签到！');
          return ;
        }
        await this.$store.dispatch('addScore',{userid:this.userId});
        this.userScore=this.$store.getters.getMemberscore;
      }

    },
		components: {
			'mt-cell': Cell,
			'mt-header':Header,
			'mt-button':Header,
      'mt-button':Button,
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
			height: 140px;
			position: absolute;
      .user_detail{
        .dis_flex;
        align-items: center;
        justify-content: space-between;
        .user_face_info{
          .dis_flex;
          flex-flow: row nowrap;
          align-items: center;
          img{
            width: 60px;
            height: 60px;
            border-radius: 50%;
          }
          div{
           flex: 1;
            box-sizing: border-box;
            margin-left: 10px;
          }
        }
        .check-ins{
          height: 26px;
          width: 70px;
          background-image:-webkit-linear-gradient(45deg, #f18155, #e15822);
          background-image:linear-gradient(45deg, #f18155, #e15822);
          color: white;
          border: none;
          border-radius: 13px;
          font-size: 12px;
          outline: none;
        }
        .check-ins-disabled{
          background-image:-webkit-linear-gradient(45deg, #bbbbbd, #9f9f9f);
          background-image:linear-gradient(45deg, #bbbbbd, #9f9f9f);
        }
      }
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
