<template>
<div>
<!-- 头部搜索 -->
  <div class="head-search">
   <input @confirm="tosearch" v-model="key" type="search" placeholder="请输入你想要的商品" />
   <button @click="clearkey" v-if="key.length !==0">取消</button>
     <icon class='soushuo' type="search" size="20px"/>
    </div>
    <!-- 搜索列表 -->
    <div class="searchhis">
      <div class="historytitle">
      <span>历史搜索</span>
      <icon @click="clearhistoy" size="18" type="clear"></icon>
      </div>
      <div class="searchList">
        <span @click="searpro(item)" v-for="(item,index) in searchList" :key="index">{{item}}</span>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      key:"",
      searchList:[]
    }
  },
  methods: {
    clearkey(){
      this.key=""
    },
    tosearch(){
      if(this.key !=""){
        wx.navigateTo({
          url:`/pages/searchlist/main?query=${this.key}`
        })
        this.searchList.unshift(this.key)
        var searchListStr = JSON.stringify(this.searchList)
        wx.setStorageSync("key",searchListStr)
      }
      
    },
    searpro(item){
      this.key=item
      wx.navigateTo({
        url:`/pages/searchlist/main?query=${this.key}`
      })
    },
    clearhistoy(){
      wx.removeStorageSync('key')
      this.key=""
    }
  },
  mounted () {
   var res= wx.getStorageSync('key')
   this.searchList=JSON.parse(res)
   console.log(this.searchList);
   
  }
}
</script>


<style scoped lang="less">
.head-search {
  width: 100%;
  height: 100rpx;
  padding: 20rpx 16rpx;
  box-sizing: border-box;
  background-color: #eeeeee;
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
   margin-right: 0;
   margin-left: 20rpx;
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
.searchhis{
  width: 100%;
  padding: 30rpx 15rpx;
  box-sizing: border-box;
  .historytitle{
 display: flex;
 justify-content: space-between;
  }
  .searchList{
    margin-top: 10rpx;
    span{
      display: inline-block;
      padding: 20rpx 25rpx;
      background-color: #dddddd;
      margin-right: 30rpx;
      margin-top: 20rpx;
    }
  }
}
</style>

