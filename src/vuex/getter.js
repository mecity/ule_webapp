/*
vuex中的属性 可以返回值和计算属性
在组件页面调用方法：this.$store.getters.doneTodos
组件中传递参数：this.$store.getters.doneTodos(5)
*/
const getters={

    /*获取当前地接线路详情*/
    getLineshow:state=>{
      return state.lineShow;
    },

    /*获取登录状态*/
    getLoginstate:state=>{
      return state.isLogin;
    },

    /*获取签到状态*/
    getScorestate:state=>{
      return state.isScore;
    },

    /*修改签到积分*/
    getMemberscore:state=>{
      return state.latestscore;
    },

    /*获取首页新闻列表*/
    getIndexnewsdata:state=>{
      return state.indexNews;
    }



}

export default getters
