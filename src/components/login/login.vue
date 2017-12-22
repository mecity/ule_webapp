<!--登录-->
<template>
	<div class="login">
		<div class="logo"><img src="~@/assets/img/logo.png"></div>

		<h2>您好，请登录/注册</h2>

		<ul>
			<li class="account bd-t">
				<input type="text" v-model="username" placeholder="您的悠乐帐号" />
			</li>
			<li class="password bd-t">
				<input type="password" v-model="pass" placeholder="输入您的密码" />
			</li>
		</ul>

		<button class="btn_ule_login f-18" type="button" @click="checkLogin">登录</button>
		<div class="forget lh30">
			<a class="f-14 c-999 text-l" href="">忘记密码</a>
			<a class="f-14 c-999 text-r" href="">注册</a>
		</div>
	</div>
</template>
<script>
	export default{
			name:'login',
			data(){
				return{
					username:'',
					pass:''
				}
			},
      created(){
        let haslogin=this.$store.getters.getLoginstate;
        if(haslogin){
          this.$router.push({name:'member'})
        }
      },
			computed:{
				/*实时计算vuex中登录状态*/
				listenshowpage(){
					return this.$store.state.isLogin;
				}
			},
			watch:{
				/*监听上面的如果值发生改变就判断如果是true则表示登录成功*/
	            listenshowpage: function(newvuale, oldvuale) {
	                if(newvuale){
	                	/*登录成功跳转跳转目标*/
	                	this.$router.push({name:'member'});
	                }
	            }
			},

			methods:{
				checkLogin(){
					this.$store.dispatch('getUsercode',{username:this.username,pass:this.pass})
				}
			}


	}
</script>
<style scoped lang="less">
.login{
	width: 100%;
	height: 100%;
	display: flex;
	display: -webkit-flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	background: url('~@/assets/img/login.png') no-repeat center bottom;
	background-size: 100% auto;
	flex: auto;
	.logo{
		height: 60px;
		display: block;
		margin-bottom: 30px;
		margin-top: -60px;
		img{
			height: 100%;
		}
	}
}

h2{
	display: block;
	width: 90%;
	font-size: 20px;
	color: #333;
	text-align: left;
}
.forget{
	width: 90%;
	display: flex;
	display: -webkit-flex;
	justify-content: space-between;
	text-align:justify;
}
.login ul{
	width: 90%;
	margin-top: 20px;
	margin-bottom: 30px;
	li{
		height: 50px;
		input{
			height: 50px;
			width: 100%;
			outline: none;
			border:none;
			background-color: transparent;
			box-sizing: border-box;
			padding-left: 25px;
			font-size: 14px;
		}
	}
	.account{
		background:url('~@/assets/img/icon/account_icon.png') no-repeat left center;
		background-size: auto 35%;
	}
	.password{
		background:url('~@/assets/img/icon/password_icon.png') no-repeat left center;
		background-size: auto 35%;
	}
}
</style>
