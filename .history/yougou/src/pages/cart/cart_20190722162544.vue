<template>
  <div>
   <!-- 收货地址 -->
   <div v-if="!loaddres" class='site'>
    <span> 还没有选择地址</span><span>></span>
   </div>
    <div v-else class="location">
    <p> <span class="consignee">收货人:  苏先生</span>  <span class="phone">13266825932 <text class="jiantou">></text></span> </p>
     <p class="address">收货地址:  广东省广州市天河区珠吉</p>
    </div>

    <div class="kromogram">
      <img src="../../../static/images/icon/cart_border@2x(1).png" alt="">
    </div>
    <div><icon type="iconfont  icon-shouye"></icon><h1>优购生活馆</h1></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loaddres:true
    }
  }
}
</script>

<style scoped lang="less">
.site{
 width: 100%;
 padding: 0rpx 20rpx;
 display: flex;
 justify-content: space-between;
 box-sizing: border-box;
 line-height: 100rpx;
}
.location{
 width: 100%;
 padding: 15rpx 20rpx;
 box-sizing: border-box;
 p{
   line-height: 90rpx;
   .phone{
     width: 268rpx;
    float: right;
    .jiantou{
      margin-left: 25rpx;
      color: #999;
    }
   }
 }
}
.kromogram{
  width: 100%;
  
  img{
    width: 100%;
    height: 15rpx;
    border-bottom: 5px solid #f4f4f4;
  }
}
</style>
