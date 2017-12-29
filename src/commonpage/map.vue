<!--全球国家-->
<template>
  <div>
    dsad----map
    <mt-index-list>
      <mt-index-section index="A">
        <mt-cell title="Aaron"></mt-cell>
        <mt-cell title="Alden"></mt-cell>
        <mt-cell title="Austin"></mt-cell>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="Z">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
    </mt-index-list>

  </div>
</template>
<script>
  import { IndexList, IndexSection } from 'mint-ui';

  export default {

    data(){
      return{}
    },
    components:{
      'mt-index-list':IndexList,
      'mt-index-section':IndexSection
    }

  }




</script>
<style>

</style>
