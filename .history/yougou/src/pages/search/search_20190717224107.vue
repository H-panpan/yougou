<template>
<div>
  <!-- 头部搜索 -->
  <div class="myHead" :style="{position: position}">
   <div class="head-search" >
      <input v-model="query" type="search" />
       <icon class='soushuo' type="search" size="20px"/>
    </div>
 <!-- 排序 -->
 <div class="sort" :style="{marginTop:marginTop}">
   <div @click="selecttext(index)" class='sorttext' :class="{active:selectsort===index}" v-for="(item,index) in sortList" :key="index">
     {{item}}
    </div>
    
 </div>
 </div>
 <!-- 商品列表展示 -->
 <div class="goodsList" v-for="(item1,index1) in articlelist" :key="index1">
      <div class="left">
        <img :src="item1.goods_small_logo" alt="">
      </div>
      <div class="right">
        <div class="word">{{item1.goods_name}}</div>
        <div class="price">￥<span>{{item1.goods_price}}</span>.00</div>
      </div>
    </div>
    <div v-if="articlelist.length===total" class="goosbottom">
      --------到底了--------
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
      articlelist:[],
      pagesize:10,
      pagenum:1,
      total:-1,
      isEnd:true,
      position:"static",
      marginTop:"0px"

    }
  },
  methods: {
    selecttext(index){
      this.selectsort=index
    },
    async getarticlelist(){
      
      if(this.articlelist.length===this.total){
        return
      }
      if(!this.isEnd){
        return
      }
      this.isEnd=false
     wx.showLoading({
        title: '加载中',
       })
     var res=  await wxrequest({
         url:"api/public/v1/goods/search",
         data:{
           query:this.query,
           pagesize:this.pagesize,
           pagenum:this.pagenum


         }
       })
       console.log(res);
       
       let{message,meta}=res.data
       if(meta.status===200){
         this.total=message.total
         this.articlelist=[...this.articlelist, ...message.goods]
       }
       this.isEnd=true
        wx.hideLoading()
    }
  },
  onLoad(options){
    this.query=options.query
    
  },
  mounted () {
    this.getarticlelist()
  },
  // 上拉触底事件
  onReachBottom(){
   this.pagenum++
   this.getarticlelist()
  },
  //下拉刷新
  onPullDownRefresh(){
    this.pagenum=1
    this.articlelist=[]
    this.total=-1
     this.getarticlelist()
     wx.stopPullDownRefresh()
  },
  //当页面滚动时执行
  onPageScroll(scroll){
    if(scroll.scrollTop===0){
      this.position="static"
      this.marginTop="0px"
    }else{
      this.position="fixed"
      // this.marginTop="100rpx"
    }
  }

}
</script>

<style scoped lang="less">
@import "./index.less";

</style>
