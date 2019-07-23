<template>
  <div>
    <!-- 轮播图 -->
    <swiper
      indicator-dots
      autoplay
      interval="3000"
      duration="500"
      class="detaillunbo"
      indicator-active-color="#fff"
    >
      <block>
        <swiper-item v-for="(item,index) in detailList.pics" :key="index">
          <image @click="preview(item.pics_big)" :src="item.pics_big" />
        </swiper-item>
      </block>
    </swiper>
    <!-- 产品价格 -->
    <div class="proprice">￥{{detailList.goods_price}}</div>
    <!-- 产品介绍与收藏 -->
    <div class="introduce">
      <div class="protext">{{detailList.goods_name}}</div>
      <div class="collect">
        <i class="iconfont icon-fenxiang"></i>分享
        <button open-type="share">分享</button>
      </div>
    </div>
    <div class="clear"></div>
    <!-- 运费促销介绍等 -->
    <div class="freight">快递:免运费</div>
    <div class="prosele">
      <p class="promotion">
        促销
        <span>满300减30元</span>
      </p>
      <p class="selected">
        已选
        <span>黑色/S/1件</span>
      </p>
    </div>
    <div class="send">
      送至
      <span>广东省广州市海珠区></span>
    </div>
    <!-- 产品图文参数 -->
    <div class="imgpra">
      <div @click="seleactive=0" class="item" :class="{active:seleactive===0}">图文介绍</div>
      <div @click="seleactive=1" class="item" :class="{active:seleactive===1}">规格参数</div>
    </div>
    <div class="imgcontent">
      <div v-if="seleactive===0" v-html="detailList.goods_introduce"></div>
      <div  v-if="seleactive===1" class="parameter" >
        <div v-for="(item1,index1) in detailList.attrs" :key="index1">
      <div class="partxt">{{item1.attr_name}}</div>
      <div class="partxts">{{item1.attr_vals}}</div>
      </div>
      <div class="tress"></div>
  </div>
    </div>
    <!-- 底部选项 -->
    <div class="bottom">
      <div class="start kefu">
        <i class="iconfont icon-kefu"></i>联系客服
        <button open-type="contact">联系客服</button>
      </div>
      <div @click="toCart" class="start">
        <i class="iconfont icon-gouwuche"></i>购物车
      </div>
      <div class="end one" @click="Addtocart">加入购物车</div>
      <div class="end two">立即购买</div>
    </div>
  </div>
</template>

<script>
import wxrequest from "../../utils/js/wxrequest.js";
export default {
  data() {
    return {
      seleactive: 0,
      goodsid: "",
      detailList: {},
      cartList:{}
    };
  },
  methods: {
    async getprodetails() {
      var res = await wxrequest({
        url: "api/public/v1/goods/detail",
        data: {
          goods_id: this.goodsid
        }
      });
      console.log(res);
      let { message, meta } = res.data;
      if (meta.status === 200) {
        this.detailList = message;
      }
    },

    preview(url){
      var newPicArr = []
      this.detailList.pics.forEach(item => {
        newPicArr.push(item.pics_big)
      })
      wx.previewImage({
  current: url, // 当前显示图片的http链接
  urls: newPicArr // 需要预览的图片http链接列表
})
    },
    toCart(){
      // wx.navigateTo({
      //   url:"/pages/searchlist/main?query=小米"
      // })
      wx.switchTab({
        url:"/pages/cart/main"
      })
    },
    Addtocart(){
     console.log(this.detailList)
    this.cartList[this.detailList.goods_id]={
      ...this.detailList,
      num:1
    }
     wx.setStorageSync('cart',this.cartList)
     
     wx.showToast({
    title: '添加成功',
    icon: 'success',
    duration: 2000
})

    }
  },
  onLoad(options) {
    this.goodsid = options.id
    this.cartList=wx.getStorageSync("cart") || {}
  },
  mounted() {
    this.getprodetails();
  },
  onShareAppMessage(){
    console.log("发送分享了");
    
  }
};
</script>

<style scoped lang="less">
@import "../../utils/css/iconfont.css";
@import "./index.less";
</style>
