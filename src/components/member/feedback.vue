<!--意见反馈-->
<template>
  <div class="feedback">
    <HeaderVue title="意见反馈"></HeaderVue>
    <div class="clearfix bg_white mt_40 bd-t">
      <textarea class="textarea_box clearfix f-14" placeholder="请在此输入您的意见或建议..." v-model="content"></textarea>
    </div>
    <div class="bg_white f-14 text-l bd-t">
      <mt-field label="联系方式" placeholder="请输入您的邮箱或电话" type="text" v-model="contect"></mt-field>
    </div>
    <div class="bg_white f-14 text-l bd-t" v-on:click="showPop">
      <mt-field label="反馈类型" :value="value" readonly disableClear></mt-field>
    </div>
    <button class="btn_ule_login mt_20 f-14" @click="submitPost">提交意见</button>
    <mt-popup
      v-model="popupVisible"
      position="bottom">
      <div class="pop_btn_box">
        <mt-button size="small" type="default" class="ml_10" @click="closePop">取消</mt-button>
        <mt-button size="small" type="primary" class="mr_10" @click="closePop">确定</mt-button>
      </div>
      <mt-picker :slots="slots" @change="onValuesChange" style="width:100%;"></mt-picker>
    </mt-popup>
  </div>
</template>
<script>
  import { Field,Picker,Popup,Button,MessageBox } from 'mint-ui';
  export default {
    data(){
      return {
        username:'',
        content:'',
        contect:'',
        popupVisible:false,
        value:'',
        slots: [
              {
                flex: 1,
                values: ['系统bug', '页面建议', '个人建议', '其他'],
                className: 'slot1',
                textAlign: 'center',
                defaultIndex:1/*默认选择values数组的第三个值 这里的数字就是索引位置*/
              }
            ]
        }
    },
    components: {
      'mt-field':Field,
      'mt-picker':Picker,
      'mt-popup':Popup,
      'mt-button':Button
    },
    computed:{
      /*实时监控*/
      feedState(){
        return this.$store.state.feedbackState;
      }
    },
    watch:{
      'feedState':function(newvalue,oldvalue){
        if(newvalue){
          MessageBox({
            title: '提示',
            message: '您的建议已经收到，感谢您的反馈。',
            showCancelButton: false,
            confirmButtonText:"我知道了",
          }).then(action => {
            this.$router.push({name:'set'})
          });
          /*重置默认值*/
          this.$store.commit('updataFeedbackstate',false);
        }
      }
    },
    methods:{
      showPop(){
        this.popupVisible=true;
        this.$el.style.overflow='hidden';
      },
      closePop(){
        this.popupVisible=false;
        this.$el.style.overflow='inherit'
      },
      onValuesChange(picker, values){
          this.value=values[0];
      },
      submitPost(){
          /*查看是否已经登录*/
          let userInfo=this.$function.getStore('userinfo');
          userInfo=userInfo?JSON.parse(userInfo):false;
          let info={
            content:this.content,
            contect:this.contect,
            feedType:this.value
          }
          if(userInfo){
            info=Object.assign({userId:userInfo.id},info);
          }

          this.$store.dispatch('postFeedback',info);

      }
    },

  }
</script>
<style lang="less">

.dis_flex(){
  display: flex;
  display: -webkit-flex;
  align-items: center;
  flex-flow: row nowrap;
}
.pop_btn_box{
  .dis_flex;
  background: #f5f5f5;
  justify-content:space-between;
  padding: 5px 10px;
  border-bottom: 1px solid #eee;
}
.textarea_box{
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  outline: none;
  height: 100px;

}
.mint-popup{
  width: 100%;
}
</style>
