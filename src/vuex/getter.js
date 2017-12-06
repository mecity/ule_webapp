/*
vuex中的属性 可以返回值和计算属性
在组件页面调用方法：this.$store.getters.doneTodos
组件中传递参数：this.$store.getters.doneTodos(5)
*/
const getters={
	
	/*示例*/
	doneTodos: state => id => {
      return id
    }

}

export default getters