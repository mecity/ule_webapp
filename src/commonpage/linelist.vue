<!--线路列表-->
<template>
	<div class="hotine">
		<slot name="title"></slot>
		<router-link :to="{name:'lineshow',params: { id: value.id }}" class="common_box hotline_box" v-for="(value,index) in list()" :key="index">
			<div class="img">
				<img :src="value.min_thumb">
				<ol>{{value.cityname}}</ol>
			</div>
			<div class="line_box">
				<div class="linetitle">
					{{value.linetitle}}
				</div>
				<blockquote>
					<span class="text-l">{{value.start}}<cite>出发</cite></span>
					<em>￥{{value.price_last}}</em>
				</blockquote>
			</div>
		</router-link>
	</div>
</template>
<script>
  export default {
    name: 'hotine',
    props: ['hotlist'],
    methods: {
      /*处理出发日期*/
      checkStarttime(value) {
        value = parseInt(value) * 1000;
        let date = new Date(value);
        return date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate();
      },
      list() {
        let that = this;
        let hotlist = this.hotlist;
        let arr = [];
        if (hotlist) {
          hotlist.filter(function (v, i) {
            v.linetitle = that.$function.subStrings(v.title, 40);
            v.start = that.checkStarttime(v.start_time);
            v.min_thumb = that.$store.state.webSite + v.thumb;
            arr[i] = v;
          });
        }
        return arr;
      }
    }


  }

</script>
<style scoped lang="less">
	.hotine{
		display: block;
		/*overflow: hidden;*/
		overflow-y: auto;
		padding-top: 10px;
		 p{
			width: 94%;
			display: flex;

			display: -webkit-flex;
			margin: 0px auto;
			flex-flow: row nowrap;
			justify-content:space-between;
			margin-bottom: 10px;
			span{
				line-height: 22px;
        height: 22px;
        overflow-y: hidden;
				font-size: 14px;
			}
			a{
				display: block;
				line-height: 22px;
				height: 100%;
				background: url('~@/assets/img/icon/more_icon.png') no-repeat right center;
				background-size: auto 45%;
				padding-right: 8px;
				font-size: 13px;
				color: #999;
			}
		}
	}

	.hotline_box{
		height: 90px;
		display: flex;
		display: -webkit-flex;
		align-items: center;
		box-sizing: border-box;
		margin-bottom: 10px;
		justify-content:center;
		.img{
			max-height: 100%;
			width: 151px;
			padding: 0px;
			overflow: hidden;
			position: relative;
			img{
				display: block;
				width: 100%;
			}
			ol{
				position: absolute;
				display: block;
				height: 30px;
				bottom: 0px;
				left: 0px;
				right: 0px;
				padding: 0px;
				line-height: 30px;
				margin: 0px;
				text-align: center;
				z-index: 444;
				background-image:-webkit-linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.6));
				background-image:linear-gradient(to bottom,rgba(0,0,0,0), rgba(0,0,0,0.6));
				color: white;
			}
		}
	}
	.linetitle{
		line-height: 22px;
		min-height: 44px;
		overflow: hidden;
		font-size: 14px;
		text-align: left;
		color: #666;
	}
	.line_box{
		flex: 1;
		box-sizing: border-box;
		height: 100%;
		padding: 10px;
		padding-left: 15px;
		padding-bottom: 0px;
		blockquote{
			display: flex;
			display: -webkit-flex;
			align-items: center;
			height: 36px;
			justify-content: center;
      flex-flow: row nowrap;
			span{
				width: 60%;
				line-height: 36px;
				font-size: 13px;
				overflow:hidden;
				color: #999;
				cite{
					background: url('~@/assets/img/icon/air_icon.png') no-repeat right center;
					padding-right: 20px;
					padding-left: 10px;
					background-size: auto 80%;
				}
			}
			em{
				flex: 1;
				text-align: right;
				color: #ff9148;
				font-size: 18px;
			}
		}
	}

</style>
