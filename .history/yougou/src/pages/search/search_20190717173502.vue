<template>
<div>
  <!-- 头部搜索 -->
   <div class="head-search">
      <input v-model="query" type="search" />
       <icon class='soushuo' type="search" size="20px"/>
    </div>
 <!-- 排序 -->
 <div class="sort">
   <div class='sorttext' :class="{active:selectsort===0}" v-for="(item,index) in sortList" :key="index">
     {{item}}
    </div>
 </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
      query:"",
      sortList:["综合","销售","价格"],
      selectsort:0,
    }
  },
  onLoad(options){
    this.query=options.query
    

  }
}
</script>

<style scoped lang="less">
@import "./index.less";

</style>
