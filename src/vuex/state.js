/*
放置状态属性
在组件页面使用方法:this.$store.state.timestamp
*/
const state={
	sliderMenu:false,
	isLogin:false,
	webSite:"http://www.u-le.net",
	ApiUrl:"http://www.u-le.net/index.php",
	Appkey:"zm592565",/*公钥*/
	Appsecret:"592565",/*秘钥*/
	timestamp:new Date().getTime(),
	sign:'',/*放置临时签名*/
	creatData:'',/*异步提交放置请求数据对象*/
	lineList:[],/*线路列表集*/
	LinePage:false,/*总页数*/
	currentpPage:1,/*当前请求页*/
	noMore:false,
}

export default state