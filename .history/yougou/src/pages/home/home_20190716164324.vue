<template>
  <div>
   <div class='head-search'>
     <input type="search">
     <span>搜索</span>
     <div class=''></div>
   </div>


  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='less'>
.head-search{
  width: 100%;
  height: 100rpx;
  padding: 20rpx 16rpx;
  box-sizing: border-box;
  background-color: #eb4450;
  input{
    padding: 0px 10rpx;
    height: 60rpx;
    background-color: #fff;
    border-radius: 5px;
  }
  span{
     text-align: center;
    color: #bbbbbb;
  }
}
</style>
