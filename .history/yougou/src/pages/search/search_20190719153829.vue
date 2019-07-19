<template>
  <div class="head-search">
   <input type="search" />
      <span>搜索</span>
      <icon class='soushuo' type="search" size="20px"/>
    </div>
</template>

<script>
export default {

}
</script>


<style scoped lang="less">
.head-search {
  width: 100%;
  height: 100rpx;
  padding: 20rpx 16rpx;
  box-sizing: border-box;
  background-color: #eeeeee;
  position: fixed;
  top: 0;
  left: 0;
 z-index: 1000;

  input {
    padding: 0px 10rpx;
    height: 60rpx;
    background-color: #fff;
    border-radius: 5px;
    text-align: center;
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

