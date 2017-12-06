/*
  在vuex中同步(mutations)和异步(action)是区别开的
  所以切记mutations不能有异步操作
  mutations中的方法可以
  调用还可以传参，这里的10就是传参,这里的参数如果有多个可以传一个对象
  在组件中使用this.$store.commit('updateIndexslider', 10),

  */

const mutations={
	/*示例*/
	increment (state) {
      // 变更状态
      state.count++;

    }
}

export default mutations;