<!--为悠乐打分-->
<template>
	<div class="score">
		<HeaderVue title="为悠乐打分"></HeaderVue>
		<div class="bg_white pl-10 mt_40 text-l">
			<mt-radio v-model="value" :options="options" class="bd-t">
			</mt-radio>
		</div>
		<button class="btn_ule_login mt_20 f-14">提交打分</button>
	</div>
</template>
<script type="text/javascript">
	import { Radio } from 'mint-ui';
	export default {
		data(){
			return {
				value:'1',
				options:[
					  {
					    label: '☆ 一星',
					    value: '1'
					  },
					  {
					    label: '☆☆',
					    value: '2'
					  },
					  {
					    label: '☆☆☆',
					    value: '3'
					  },
					  {
					    label: '☆☆☆☆',
					    value: '4'
					  },
					  {
					    label: '☆☆☆☆☆',
					    value: '5'
					  },
					]
			}
		},
		components: { 
			'mt-radio':Radio
		}
	}

</script>
<style scoped lang="less">
	



</style>