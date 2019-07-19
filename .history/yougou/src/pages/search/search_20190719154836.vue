<template>
  <div class="head-search">
   <input type="search" placeholder="请输入你想要的商品" />
   <!-- <button>取消</button> -->
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
 display: flex;
 justify-content: space-between;

  input {
    width: 100%;
    padding: 0px 60rpx;
    height: 60rpx;
    background-color: #fff;
    border-radius: 5px;
   box-sizing: border-box;
  }
 button{
   margin: 0;
   width: 160rpx;
   height: 60rpx;
   padding: 0;
   font-size: 14px;
   line-height: 60rpx;
 }
  .soushuo{
    position: absolute;
    top:30rpx;
    left:30rpx;

  }
}
</style>

