<template>
  <div>
   <!-- 收货地址 -->
   <!-- <div class='site'>
    <span> 还没有选择地址</span><span>></span>
   </div> -->
    <div class="location">
    <p> <span class="consignee">收货人:  苏先生</span>  <span class="phone">13266825932 <text class="jiantou">></text></span> </p>
     <p class="address">收货地址:  广东省广州市天河区珠吉</p>
    </div>
  </div>
</template>

<script>
export default {

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
 padding: 20rpx 20rpx;
 box-sizing: border-box;
 p{
   line-height: 85rpx;
   .phone{
     width: 268rpx;
    float: right;
    .jiantou{
      margin-left: 55rpx;
      color: #999;
    }
   }
 }
}
</style>
