<template>
  <div>
    <!-- 头部搜索 -->
    <div class="head-search">
      <input type="search" />
      <span>搜索</span>
      <icon class='soushuo' type="search" size="20px"/>
    </div>
    <!-- 轮播 -->
    <swiper class='lunbo' indicator-dots  autoplay interval="3000" duration="300" indicator-active-color='#fff'>
  <block>
    <swiper-item>
      <image src="https://aecpm.alicdn.com/simba/img/TB183NQapLM8KJjSZFBSutJHVXa.jpg" />
    </swiper-item>
      <swiper-item>
      <image src="https://img.alicdn.com/tfs/TB196WBX7T2gK0jSZPcXXcKkpXa-520-280.jpg_q90_.webp" />
    </swiper-item>
      <swiper-item>
      <image src="https://aecpm.alicdn.com/simba/img/TB183NQapLM8KJjSZFBSutJHVXa.jpg" />
    </swiper-item>
  </block>
</swiper>
 <!-- 中间导航 -->
 <div class="middle-nav"></div>
 <!-- 商品展示 -->
 <div class="shanping-show">
   <div class='commodity'>
     <img class='new-house' src="https://gtms02.alicdn.com/tps/i2/TB1ZeJGIXXXXXcnXXXXDgwcQVXX-375-130.jpg" alt="">
     <div class='commlist'>
       <img src="https://gw.alicdn.com/tfs/TB1hJ2KX6ihSKJjy0FlXXadEXXa-254-318.png" alt="">
       <img src="https://gma.alicdn.com/bao/uploaded/i4/124093080/O1CN019GqKAn1YcgNC7hIiQ_!!0-saturn_solar.jpg_200x200.jpg_.webp" alt="">
       <img src="https://gma.alicdn.com/bao/uploaded/i3/341880047/O1CN01cy7Dx71CDZ9fVIaru_!!0-saturn_solar.jpg_200x200.jpg_.webp" alt="">
       <img src="https://gma.alicdn.com/bao/uploaded/i1/17275090/O1CN01dIMK3a1nTGW4S3NVd_!!0-saturn_solar.jpg_200x200.jpg_.webp" alt="">
       <img src="https://gma.alicdn.com/bao/uploaded/i2/1381306062445060750/TB2pGpaw5RnpuFjSZFCXXX2DXXa_!!0-saturn_solar.jpg_200x200.jpg_.webp" alt="">
     </div>
   </div>
 </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang='less'>
.head-search {
  width: 100%;
  height: 100rpx;
  padding: 20rpx 16rpx;
  box-sizing: border-box;
  background-color: #eb4450;
  position: relative;
  input {
    padding: 0px 10rpx;
    height: 60rpx;
    background-color: #fff;
    border-radius: 5px;
  }
  span {
    position: absolute;
    left: 380rpx;
    top:28rpx;
    color: #bbbbbb;
  }
  .soushuo{
    position: absolute;
    top:30rpx;
    left:330rpx;

  }
}
.lunbo{
  width: 100%;
  image{
    width: 100%;
    height: 340rpx;
  }
}
.shanping-show{
  .commodity{
   .new-house{
     width: 100%;
     height: 88rpx;
   }
   .commlist{
     width: 100%;
     padding: 20rpx 16rpx;
     img{
       border-radius: 5px;
       width: 232rpx;
       height: 188rpx;
       margin-left: 10rpx;
       &:first-child{
        height: 370rpx;
        float: left;
     }

     }
   }
  }
}
</style>
