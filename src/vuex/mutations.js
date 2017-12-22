/*
  在vuex中同步(mutations)和异步(action)是区别开的
  所以切记mutations不能有异步操作
  mutations中的方法可以
  调用还可以传参，这里的10就是传参,这里的参数如果有多个可以传一个对象
  在组件中使用this.$store.commit('updateIndexslider', 10),

  */
import * as functionS from "@/assets/js/function";
const mutations={

	/*修改登录状态*/
	updataLogin(state,mode){
		state.isLogin=mode;
		if(mode==false){
		  /*删除本地存储的会员登录信息*/
      functionS.removeStore('userinfo');
    }
	},

  /*
  设置签名转存到sign中
  obj 对象
  */
  creatSign(state,obj){

    	state.sign='';
    	state.creatData='';

    	let newsignstr='';
      for (var key in obj) {
        newsignstr+=key+obj[key];
      }

    	//api验证策略是比照sign 这里的sign是有appkey+timestamp+我们的字段+appscret 加密后大写组成
      let timestamp =state.timestamp;
      /*组装未加密的签名*/
      let signstr="key"+state.Appkey+'timestamp'+timestamp+newsignstr+'app_secret'+state.Appsecret;

      /*对签名字段进行加密以及大写处理*/
      let sign=functionS.createdMd5(signstr).toUpperCase();

      /*生成的新签名*/
      state.sign=sign;

      let data={
       key:state.Appkey,
       sign:state.sign,
       timestamp:timestamp
     }

     state.creatData=Object.assign(data, obj);

  },

  /*首页热门线路数据负载*/
  updataIndexhotline(state,data){
    state.indexHotline=data;
  },



  /*首页最新地接*/
  updataIndexmember(state,data){
    state.indexMember=data;
  },


  /*修改意见建议提交成功状态*/
  updataFeedbackstate(state,Boolerstate){
    state.feedbackState=Boolerstate;
  },

  /*寄存加载的线路详情数据*/
  saveLineshow(state,info){
    state.lineShow=info;
  },

  /*修改是否签到*/
  updataScore(state,mode){
      state.isScore=mode;
  },

  /*修改签到之后的积分数据*/
  updataMemberscore(state,nums){
    state.latestscore=nums;
  },

  /*首页新闻列表*/
  updataIndexnewslist(state,arr){
    state.indexNews=arr;
  }


}

export default mutations;
