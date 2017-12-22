/*
放置异步操作方法
action里的方法里传入的都是一个context:(类似vuex.store的实例对象)
【注意这里说的是类似而不是真的vuex.store实例对象】，这个实例拥有和store一样的属性和方法
你可以用这个context对象来调用vuex里的state 比如context.state.isLogin...

在组件页面使用方法:this.$store.dispatch('increment')

*/

import axios from 'axios';
import state from "@/vuex/state";
import * as functionS from "@/assets/js/function";
/*axios配置*/
var config={
	timeout : 9000,
	baseURL : state.webSite,
	// responseType:'json',
	headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}

const actions={

	/*异步获取用户码*/
	getUsercode:async (context,data)=>{
		/*data里包含了密码和用户名,密码我们是不允许明文传输的，有可能被截获*/
		let pass=data.pass;
		let username=data.username;

		if(username==''){
			functionS.alertToast('账号不得为空!');
		  	return false;
		}

		if(pass==''){
			functionS.alertToast('密码不得为空!');
		  	return false;
		}


		if(!functionS.checkEmail(username)){
			functionS.alertToast('帐号有误');
			return false;
		}

		if(!functionS.checkPass(pass)){
			functionS.alertToast('密码格式错误');
			return false;
		}

		/*弹出正在登录*/
    functionS.loadingAlert('正在登录中...');
		/*删除明文密码*/
		delete data.pass;

		context.commit('creatSign',data);

		await axios.post('index.php/Api/Login/index',context.state.creatData,config)
		.then(function (response) {
      functionS.loadingClose();
			if(response.data.success){

				/*生成传输密码*/
				let localpass=functionS.createdMd5(functionS.createdMd5(pass+response.data.member_code));

				/*重新生成签名*/
				context.commit('creatSign',{username:username,pass:localpass});

				/*根据得到的用户code 来生成加密的密码 然后继续请求比照*/
				axios.post('index.php/Api/Login/checkUserinfo',context.state.creatData,config)
				.then(function(responsess){


					if(responsess.data.success){
						/*登录成功*/
						/*先移除之前存储的*/
						functionS.removeStore('userinfo');

						/*这里可以写入用户缓存信息*/
		  				functionS.setStore('userinfo', responsess.data.member_info);
		  				context.commit('updataLogin',true);

					}else{

						/*登录失败*/
						functionS.alertToast('账号或密码有误,请重新再试！');
            return false;
					}

				})
				.catch(function (errorss) {
					functionS.alertToast('很遗憾,数据错误，请联系管理员。');
		  			return false;
				});


			}else{

				functionS.alertToast('账号错误,请重新输入！');
		  		return false;

			}

		})
		.catch(function (error) {
			functionS.alertToast('很遗憾,数据错误，请联系管理员。');
		  	return false;
		});

	},


	/*首页数据*/
	getIndexdata:async (context)=>{
		functionS.loadingAlert();


		/*最新地接导游*/
		context.commit('creatSign',{page:1,pagenum:5});
		await axios.post('index.php/Api/User/index',context.state.creatData,config)
		.then(function(response){
			if(response.data.success){
				context.commit('updataIndexmember',response.data.data);
				// console.info(response.data.data)
			}else{
				functionS.alertToast('数据加载有误...');
		  		return false;
			}
		})


		/*热门线路*/
		let pagenum=context.state.pageNum;/*每次请求条数*/
		let currentpage=context.state.currentPage;/*当前请求页码*/
		context.commit('creatSign',{pageNum:pagenum,page:currentpage});
		await axios.post('index.php/Api/Line/index',context.state.creatData,config)
		.then(function(response){
			if(response.data.success){
				context.commit('updataIndexhotline',response.data.data);
			}else{
				functionS.alertToast('数据加载有误...');
		  		return false;
			}
		});

    context.dispatch('getIndexnews',{limit:20});
    functionS.loadingClose();
	},



  /*
  * 会员中心 提交建议
  * data:{
  *   content:content,
  *   contect:this.contect,
  *   feedType:this.value,
  *   userId:userId
  * }
  * */
  postFeedback:async (context,data)=>{
    let [content,contect,feedType]=[data.content,data.contect,data.fallback];

    if(content==''){
      functionS.alertToast('建议内容不得为空!');
      return false;
    }
    if(contect==''){
      functionS.alertToast('联系方式不得为空!');
      return false;
    }
    if(feedType==''){
      functionS.alertToast('请选择建议类型!');
      return false;
    }

    functionS.loadingAlert('正在提交...',2);
    context.commit('creatSign',data);
    await axios.post('index.php/Api/User/addFeedback',context.state.creatData,config)
    .then(function (res) {
      functionS.loadingClose();
      if(res.data.success){
        /*改变提交成功之后的状态*/
        context.commit('updataFeedbackstate',true);
      }else{
        functionS.alertToast('很遗憾,建议提交失败...','bottom');
      }
    })
  },


  /*
  * 线路详情
  * */
  showLinedetail:async(context,data)=>{
    functionS.loadingAlert();
    context.commit('creatSign',data);
    await axios.post('index.php/Api/Line/getdatalineshow',context.state.creatData,config)
    .then(function (res) {
        if(res.data.success){
          functionS.loadingClose();
          context.commit('saveLineshow',res.data.info);
        }else{
          functionS.alertToast('很遗憾数据加载失败!');
          return false;
        }
    })

  },

  /*
  * 线路收藏
  * */
  addCollect:async (context,data)=>{

    console.info('我是线路收藏');

  },

  /*判断该会员今日是否已经签到过*/
  checkScore:async(context,data)=>{
    context.commit('creatSign',data);
    await axios.post('index.php/Api/User/checkScore',context.state.creatData,config)
    .then(function (res) {
      if(res.data.success){
        context.commit('updataScore',res.data.isScore);
      }
    })
  },

  /*会员签到*/
  addScore:async (context,data)=>{
    context.commit('creatSign',data);
    await axios.post('index.php/Api/User/addScore',context.state.creatData,config)
    .then(function (res) {

       if(res.data.success){
         functionS.alertToast('签到成功!');
         /*修改会员积分状态*/
         context.commit('updataMemberscore',res.data.latestscore);

         /*修改是否签到状态*/
         context.commit('updataScore',true);
       }
    })
  },

  /*获取首页新闻通知*/
  getIndexnews:async(context,data)=>{
    /*data的传值：{limit:20}*/
    context.commit('creatSign',data);
    await axios.post('index.php/Api/News/index',context.state.creatData,config)
    .then(function (res) {
      if(res.data.success){
        context.commit('updataIndexnewslist',res.data.newslist);
      }else{
        functionS.alertToast('很遗憾数据获取失败!');
        return false
      }
    })
  },


  /*获取新闻详情页*/
  getNewsshow:async(context,data)=>{
    context.commit('creatSign',data);
    await axios.post('index.php/Api/News/getnewShow',context.state.creatData,config)
    .then(function (res) {
      return res.data.data
    })
  }






}

export default actions
