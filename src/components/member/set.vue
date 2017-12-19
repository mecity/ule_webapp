<template>
	<div class="set">
		<HeaderVue title="设置"></HeaderVue>
		<div class="bg_white pl-10 mt_40 text-l">
			<mt-cell title="意见反馈" class="f-14 bd-t" :to="{name:'feedback'}" is-link>
			  <i slot="icon" class="iconfont icon-yijianfankui"></i>
			</mt-cell>
			<mt-cell title="为悠乐地接评分" class="bd-t f-14" :to="{name:'score'}" is-link>
			  <i slot="icon" class="iconfont icon-shoucang1"></i>
			</mt-cell>
			<mt-cell title="关于我们" class="bd-t f-14" is-link>
			  <i slot="icon" class="iconfont icon-listview"></i>
			</mt-cell>
			<mt-cell title="联系我们" class="f-14" is-link>
			  <i slot="icon" class="iconfont icon-xinfeng"></i>
			</mt-cell>
		</div>
		<div class="bg_white pl-10 mt_10 text-l">
			<mt-cell title="清理缓存" class="f-14" is-link>
			  <i slot="icon" class="iconfont icon-shuaxin"></i>
			</mt-cell>
		</div>
		<button class="btn_ule_quite mt_20 f-14">退出登录</button>


	</div>
</template>
<script>
	import { Cell,MessageBox } from 'mint-ui';
	export default {
		components: { 
			'mt-cell': Cell,
		}

	}
</script>
<style scoped lang="less">
	.iconfont{
		vertical-align: middle;
	}
</style>
