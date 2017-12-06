/*
放置异步操作方法
action里的方法里传入的都是一个context:(类似vuex.store的实例对象) 
【注意这里说的是类似而不是真的vuex.store实例对象】，这个实例拥有和store一样的属性和方法
你可以用这个context对象来调用vuex里的state 比如context.state.isLogin...

在组件页面使用方法:this.$store.dispatch('increment')


*/
const actions={

	/*示例*/
	increment (context) {
		/*调用mutations里的方法*/
    	context.commit('increment')
    }
	
}

export default actions