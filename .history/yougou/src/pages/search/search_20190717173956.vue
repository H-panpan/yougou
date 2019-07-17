<template>
<div>
  <!-- 头部搜索 -->
   <div class="head-search">
      <input v-model="query" type="search" />
       <icon class='soushuo' type="search" size="20px"/>
    </div>
 <!-- 排序 -->
 <div class="sort">
   <div @click="selecttext(index)" class='sorttext' :class="{active:selectsort===index}" v-for="(item,index) in sortList" :key="index">
     {{item}}
    </div>
    <div class="goodsList">
      <img src="https://img.alicdn.com/tfscom/i2/188256463/TB2Tz3SifxNTKJjy0FjXXX6yVXa_!!188256463.jpg_180x180xzq90.jpg_.webp" alt="">
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
  methods: {
    selecttext(index){
      this.selectsort=index
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
