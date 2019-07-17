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
    
 </div>
 <!-- 商品列表展示 -->
 <div class="goodsList">
      <div class="left">
        <img src="https://img.alicdn.com/tfscom/i2/188256463/TB2Tz3SifxNTKJjy0FjXXX6yVXa_!!188256463.jpg_180x180xzq90.jpg_.webp" alt="">
      </div>
      <div class="right">
        <span>秋冬超显瘦百搭打底针织连衣裙秋冬超显瘦百搭打底针织连衣裙秋冬超显瘦百搭打底针织连衣裙秋冬超显瘦百搭打底针织连衣裙</span>
        <p>￥<span>68</span>.00</p>
      </div>
      
    </div>
 </div>
</template>

<script>
import wxrequest from "../../utils/js/wxrequest.js"
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
    },
    async getarticlelist(){
     var res=  await wxrequest({
         url:`api/public/v1/goods/search?query=${this.query}&pagesize=10&pagenum=2`
       })
       console.log(res);
       
    }
  },
  onLoad(options){
    this.query=options.query
    
  },
  mounted () {
    this.getarticlelist()
  }
}
</script>

<style scoped lang="less">
@import "./index.less";

</style>
