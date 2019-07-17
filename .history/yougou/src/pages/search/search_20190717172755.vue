<template>
<div>
  <!-- 头部搜索 -->
   <div class="head-search">
      <input v-model="query" type="search" />
       <icon class='soushuo' type="search" size="20px"/>
    </div>
 <!-- 排序 -->
 <div class="sort">
   <div class='sorttext'>
     <span>综合</span>
   <span>销售</span>
   <span>价格</span>
   </div>
 </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
      query=""
    }
  },
  onLoad(options){
    console.log(options);
    

  }
}
</script>

<style scoped lang="less">
@import "./index.less";

</style>
