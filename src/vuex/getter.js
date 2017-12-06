/*
vuex中的属性 可以返回值和计算属性
在组件页面调用方法：this.$store.getters.doneTodos
*/
const getters={
	
	/*示例*/
	doneTodos: state => {
      return state.timestamp
    }

}

export default getters