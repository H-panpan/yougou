<template>
  <div>
    <!-- 轮播图 -->
<swiper indicator-dots autoplay  interval="3000" duration="500" class="detaillunbo" indicator-active-color="#fff">
  <block>
    <swiper-item>
      <image src="https://img.alicdn.com/imgextra/i4/725677994/O1CN01IPVd2228vIh7JhyLD_!!725677994.jpg_430x430q90.jpg" />
    </swiper-item>
    <swiper-item>
      <image src="https://img.alicdn.com/imgextra/i4/725677994/O1CN01IPVd2228vIh7JhyLD_!!725677994.jpg_430x430q90.jpg" />
    </swiper-item>
    <swiper-item>
      <image src="https://img.alicdn.com/imgextra/i4/725677994/O1CN01IPVd2228vIh7JhyLD_!!725677994.jpg_430x430q90.jpg" />
    </swiper-item>
  </block>
</swiper>
<!-- 产品价格 -->
<div class="proprice">￥279</div>
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
  </div>
</template>

<script>

export default {
  data () {
    return {
      seleactive:0
    }
  }
}
</script>

<style scoped lang="less">
@import "../../utils/css/iconfont.css";
@import "./index.less";

</style>
