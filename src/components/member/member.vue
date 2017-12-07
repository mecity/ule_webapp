<!-- 会员 -->
<template>
	
	<div class="member">
		会员中心
	</div>


</template>
<script type="text/javascript">
	export default {
		
		mounted(){

			let userinfo=this.$function.getStore('userinfo');
			// console.info(userinfo)
			console.info(JSON.parse(JSON.parse(userinfo).member_face))
			
		}



	}
</script>
<style scoped lang="less">
	
</style>