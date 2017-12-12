<template>
<div class="header">
	<div class="left" @click="back">
		<i class="iconfont icon-fanhui1"></i>
		<span>返回</span>
	</div>
	<div class="header_title">
		{{title}}
	</div>

	<div class="right">
		<slot name="right"></slot>
	</div>
	
</div>

</template>
<script type="text/javascript">
	export default {
			props:['title'],
			methods:{
				back(){
					this.$router.go(-1);
				}
			}
	}
</script>
<style lang="less">
	.header{
		height: 40px;
		background: #1fcca9!important;
		display: flex;
		display: -webkit-flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: space-between;
		z-index: 99999;
		position: fixed;
		left: 0px;
		right: 0px;
		top: 0px;
		.header_title{
			flex:1;
			margin: 0px 10px;
			text-align: center;
			font-size: 14px;
			color: white;
			word-break: keep-all;
			white-space:nowrap;
			overflow:hidden;
			text-overflow:ellipsis; 
		}
		.left{
			margin-left: 10px;
			text-align: left;
			width: 60px;
			color: white;
			i{
				vertical-align: middle;
				font-size: 14px!important;
			}
			span{
				line-height: 22px;
			}
		}
		.right{
			margin-right: 10px;
			min-width: 60px;
			text-align: right;
			overflow:hidden; 
		}
	}
</style>