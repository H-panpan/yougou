<template>
  <div class="bgc">
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
    <div class="shop"><span class="iconfont  icon-shouye"></span><span>优购生活馆</span></div>
    <!-- 商品列表 -->
    <div class="shopList">
       <div class="content" v-for="(item,index) in [1,1,1]" :key="index">
         <icon type="success" color="red"/>
         <div class="shoppro">
           <img src="https://img.alicdn.com/imgextra/i3/2619913110/TB2Ow9BpYsTMeJjSszgXXacpFXa_!!2619913110-2-beehive-scenes.png_180x180xzq90.jpg_.webp" alt="">
           <span class="text">
             巴黎小女人的必备，满载小香风的连衣裙套装巴黎小女人的必备，满载小香风的连衣裙套装
           </span>
           <div class="price">
             <div class="money">￥699.00</div>
           <div class="amount">
             <span>-</span>
             <input type="text" value="1">
             <span>+</span>
           </div>
         </div>
         </div>

       </div>
    </div>
    <!-- 合计底部 -->
    <div class="bottom">

    </div>
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
<style>
page{
  background-color: #f4f4f4;
}
</style>
<style scoped lang="less">
@import "../../utils/css/iconfont.css";
.bgc{
  background-color: #fff;
}
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
.shop{
  width: 100%;
  padding-left: 33rpx;
  box-sizing: border-box;
  line-height: 88rpx;
  border-bottom: 1px solid #dddddd;
  
  .iconfont{
    color: #9d9d9d;
    margin-right: 10rpx;
  }
}
.shopList{
 
.content{
  width: 100%;
  padding: 20rpx 0rpx 20rpx 30rpx;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  
  icon{
    line-height: 204rpx;
    margin-right: 30rpx;
  }
  .shoppro{
    padding-right: 20rpx;
    border-bottom: 1px solid #ddd;
    img{
      width: 160rpx;
      height: 160rpx;
      float: left;
      margin-right: 20rpx;
    }
    .text{
      text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    }
  }
.price{
  display: flex;
  justify-content: space-between;
  padding: 20rpx 0rpx;
  box-sizing: border-box;
  .money{
   margin-top: 25rpx;
  }
  .amount{
    input{
      width: 79rpx;
      height: 55rpx;
      display: inline-block;
      text-align: center;
      position: relative;
      top: 15rpx;

      
    }
    span{
      font-weight: bold;
      border: 2px solid #666;
      padding: 5rpx 24rpx;
    }
  }
}
}
}
.bottom{
  background-color: #fff;
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 96rpx;
  border-bottom: 1px solid #666;
}

</style>
