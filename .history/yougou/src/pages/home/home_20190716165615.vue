<template>
  <div>
    <!-- 头部搜索 -->
    <div class="head-search">
      <input type="search" />
      <span>搜索</span>
      <icon class='soushuo' type="search" size="20px"/>
    </div>
    <!-- 轮播 -->
    <swiper indicator-dots  autoplay interval="3000" duration="300">
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
</style>
