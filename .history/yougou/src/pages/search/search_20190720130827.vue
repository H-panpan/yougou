<template>
  <div>
    <!-- 头部搜索 -->
    <div class="head-search">
      <input
        @input="searchthink"
        @confirm="tosearch"
        v-model.trim="key"
        type="search"
        placeholder="请输入你想要的商品"
      />
      <div class="thinkbox" v-if="thinkList.length !==0 ">
       
        <div @click="lianxiang(item1.goods_name)"  class="think" v-for="(item1,index1) in thinkList" :key="index1">{{item1.goods_name}}</div>
      </div>
      <button @click="clearkey" v-if="key.length !==0">取消</button>
      <icon class="soushuo" type="search" size="20px" />
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
import wxrequest from "../../utils/js/wxrequest.js";
export default {
  data() {
    return {
      key: "",
      searchList: [],
      thinkList: [],
      timer:null
    };
  },
  methods: {
    clearkey() {
      this.key = "";
      this.thinkList=[]
    },
    tosearch() {
      if (this.key != "") {
        wx.navigateTo({
          url: `/pages/searchlist/main?query=${this.key}`,
          success:()=>{
            this.thinkList=[]
          }
        });
        this.searchList.unshift(this.key.trim())
        this.searchList = [...new Set([...this.searchList ])]
        var searchListStr = JSON.stringify(this.searchList)
        wx.setStorageSync("key", searchListStr)
      }
    },
    searpro(item) {
      this.key = item;
      wx.navigateTo({
        url: `/pages/searchlist/main?query=${this.key}`,
        success: ()=>{
        this.key=""
        this.thinkList=[]
        }
      });
    },
    clearhistoy() {
      wx.showModal({
        title: "警告",
        content: "你确定要删除搜索历史吗",
        success: res => {
          if (res.confirm) {
            wx.removeStorageSync("key");
            this.key = "";
            this.searchList = [];
          }
        }
      });
    },
     searchthink() {
       if(this.timer){
        clearTimeout(this.timer)
       }
    this.timer= setTimeout( async ()=>{
        var res = await wxrequest({
        url: `api/public/v1/goods/search?query=${
          this.key
        }&pagenum=1&pagesize=10`
      });
      console.log(res);
      let { meta, message } = res.data
      this.thinkList = message.goods
     },1000)
    },
    lianxiang(item){
      this.key = item;
      wx.navigateTo({
        url: `/pages/searchlist/main?query=${this.key}`,
        success: ()=>{
        this.key=""
        this.thinkList=[]
        }
      });
       this.searchList.unshift(this.key)
        this.searchList = [...new Set([...this.searchList ])]
        var searchListStr = JSON.stringify(this.searchList)
        wx.setStorageSync("key", searchListStr)
    }
   
  },
  mounted() {
    this.key=""
    this.thinkList=[]
    var res = wx.getStorageSync("key");
    this.searchList = res ? JSON.parse(res) : []
    console.log(this.searchList);
     
    
  }
};
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
  position: relative;
  .thinkbox {
    position: absolute;
    top: 80rpx;
    left: 16rpx;
    right: 16rpx;
    background-color: #ccc;
    box-sizing: border-box;
    .think {
      font-size: 16px;
      line-height: 60rpx;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  input {
    width: 100%;
    padding: 0px 60rpx;
    height: 60rpx;
    background-color: #fff;
    border-radius: 5px;
    box-sizing: border-box;
  }

  button {
    margin-right: 0;
    margin-left: 20rpx;
    width: 160rpx;
    height: 60rpx;
    padding: 0;
    font-size: 14px;
    line-height: 60rpx;
  }
  .soushuo {
    position: absolute;
    top: 30rpx;
    left: 30rpx;
  }
}
.searchhis {
  width: 100%;
  padding: 30rpx 15rpx;
  box-sizing: border-box;
  .historytitle {
    display: flex;
    justify-content: space-between;
  }
  .searchList {
    margin-top: 10rpx;
    span {
      display: inline-block;
      padding: 20rpx 25rpx;
      background-color: #dddddd;
      margin-right: 30rpx;
      margin-top: 20rpx;
    }
  }
}
</style>

