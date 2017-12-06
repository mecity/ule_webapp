/*Vuex总配置页面*/
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

import state from "@/vuex/state";
import actions from "@/vuex/actions";
import mutations from "@/vuex/mutations";
import getters from "@/vuex/getter";


import * as functionS from "@/assets/js/function";


/*axios配置*/
var config={
	timeout : 9000,
	baseURL : state.ApiUrl,
	// responseType:'json',
	headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}

Vue.use(Vuex);

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})