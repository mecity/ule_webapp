<!--意见反馈-->
<template>
	<div class="feedback">
		<HeaderVue title="意见反馈"></HeaderVue>
		<div class="clearfix bg_white mt_40 bd-t">
			<textarea class="textarea_box clearfix" placeholder="请在此输入您的意见或建议..."></textarea>
		</div>
		<button class="btn_ule_login mt_20">提交意见</button>
	</div>
</template>
<script type="text/javascript">
	import { MessageBox } from 'mint-ui';
	export default {
		


	}
</script>
<style lang="less">
.textarea_box{
	box-sizing: border-box;
	width: 100%;
	padding: 10px;
	outline: none;
	height: 100px;
}
</style>