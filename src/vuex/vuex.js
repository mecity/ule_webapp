/*Vuex总配置页面*/
import Vue from 'vue'
import Vuex from 'vuex'

import state from "@/vuex/state";
import actions from "@/vuex/actions";
import mutations from "@/vuex/mutations";
import getters from "@/vuex/getter";


import * as functionS from "@/assets/js/function";



Vue.use(Vuex);



export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})