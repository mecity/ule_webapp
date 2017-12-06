/*
放置异步操作方法
action里的方法里传入的都是一个context:(类似vuex.store的实例对象) 
【注意这里说的是类似而不是真的vuex.store实例对象】，这个实例拥有和store一样的属性和方法
你可以用这个context对象来调用vuex里的state 比如context.state.isLogin...

在组件页面使用方法:this.$store.dispatch('increment')

*/

import axios from 'axios';
import state from "@/vuex/state";
/*axios配置*/
var config={
	timeout : 9000,
	baseURL : state.webSite,
	// responseType:'json',
	headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}



const actions={

	/*示例*/
	increment (context) {
		/*调用mutations里的方法*/
		context.commit('increment')
	},

	/*异步获取用户码*/
	getUsercode:async (context,data)=>{

		context.commit('creatSign',data);

		axios.post('index.php/Api/Login/index',context.state.sign,config)
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});

	}






	
}

export default actions