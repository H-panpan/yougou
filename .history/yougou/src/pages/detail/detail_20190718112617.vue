<template>
  <div>
    <!-- 轮播图 -->
<swiper indicator-dots autoplay  interval="3000" duration="500" class="detaillunbo" indicator-active-color="#fff">
  <block>
    <swiper-item v-for="(item1,index1) in detailList.pics" :key="index1">
      <image :src="item.pics_big" />
    </swiper-item>
    
  </block>
</swiper>
<!-- 产品价格 -->
<div v-for="(item,index) in detailList" :key="index">
<div class="proprice">￥{{item.goods_price}}</div>
<!-- 产品介绍与收藏 -->
<div class="introduce">
  <div class="protext">2018年6月7日 - ￥ 这就是人民币符号,首先我们应弄明白这个符号怎么读,然后再根据你安装的输入法来打出来,下面小编就和大家一起学</div>
  <div class="collect"><i class="iconfont  icon-shoucang"></i>收藏</div>
</div>
<!-- 运费促销介绍等 -->
<div class="freight">快递:免运费</div>
<div class="prosele">
<p class="promotion ">促销 <span>满300减30元</span></p>
<p class="selected ">已选 <span>黑色/S/1件</span></p>
</div>
<div class="send ">送至 <span>广东省广州市海珠区></span></div>
<!-- 产品图文参数 -->
<div class="imgpra">
  <div @click="seleactive=0" class="item" :class="{active:seleactive===0}">图文介绍</div>
   <div @click="seleactive=1" class="item" :class="{active:seleactive===1}">规格参数</div>
</div>
<div class="imgcontent">
  <div v-if="seleactive===0">图片内容</div>
  <div v-if="seleactive===1">参数</div>
</div>
<!-- 底部选项 -->
<div class="bottom">
  <div class="start"><i class="iconfont  icon-kefu"></i>联系客服</div>
  <div class="start"><i class="iconfont  icon-gouwuche"></i>购物车</div>
  <div class="end one">加入购物车</div>
  <div class="end two">立即购买</div>
 
</div>
</div>
  </div>
</template>

<script>
import wxrequest from "../../utils/js/wxrequest.js"
export default {
  data () {
    return {
      seleactive:0,
      goodsid:"",
      detailList:{}
    }
  },
  methods: {
  async  getprodetails(){
   var res =  await wxrequest({
       url:"api/public/v1/goods/detail",
       data:{
       goods_id:this.goodsid
       }
     })
     console.log(res)
     let{message,meta}=res.data
     if(meta.status===200){
       this.detailList=message
     }

     
    }
  },
  onLoad(options){
    this.goodsid = options.id
    
  },
  mounted () {
    this.getprodetails()
  }
}
</script>

<style scoped lang="less">
@import "../../utils/css/iconfont.css";
@import "./index.less";

</style>
