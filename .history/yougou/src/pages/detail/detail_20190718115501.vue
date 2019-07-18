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
          <image :src="item.pics_big" />
        </swiper-item>
      </block>
    </swiper>
    <!-- 产品价格 -->
    <div class="proprice">￥{{detailList.goods_price}}</div>
    <!-- 产品介绍与收藏 -->
    <div class="introduce">
      <div class="protext">{{detailList.goods_name}}</div>
      <div class="collect">
        <i class="iconfont icon-shoucang"></i>收藏
      </div>
    </div>
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
      <div v-if="seleactive===1">
       <table border="1" cellspacing="0"  cellpadding="10" width="600" align="center" style="border-collapse: collapse;">
        <tr align="center">
            <td>序号</td>
            <td>班级名称</td>
            <td>班级人数</td>
            <td>开班时间</td>
            <td>教室</td>
            <td>班主任</td>
        </tr>
        <tr align="left">
            <td>1</td>
            <td>前端第1期</td>
            <td>100</td>
            <td>2011/1/1</td>
            <td>1301</td>
            <td>花花老师</td>
        </tr>
        <tr  align="right">
            <td>2</td>
            <td>前端第2期</td>
            <td>200</td>
            <td>2012/1/1</td>
            <td>1302</td>
            <td>牛老师</td>
        </tr>
        <tr>
            <td>3</td>
            <td align="center">前端第3期</td>
            <td>300</td>
            <td>3011/1/1</td>
            <td>1303</td>
            <td>花花老师</td>
        </tr>
        <tr>
            <td>4</td>
            <td>前端第4期</td>
            <td>400</td>
            <td>2011/1/1</td>
            <td>1301</td>
            <td>花花老师</td>
        </tr>

    </table>
  </div>
    </div>
    <!-- 底部选项 -->
    <div class="bottom">
      <div class="start">
        <i class="iconfont icon-kefu"></i>联系客服
      </div>
      <div class="start">
        <i class="iconfont icon-gouwuche"></i>购物车
      </div>
      <div class="end one">加入购物车</div>
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
      detailList: {}
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
    }
  },
  onLoad(options) {
    this.goodsid = options.id;
  },
  mounted() {
    this.getprodetails();
  }
};
</script>

<style scoped lang="less">
@import "../../utils/css/iconfont.css";
@import "./index.less";
</style>
