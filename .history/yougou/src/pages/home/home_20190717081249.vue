<template>
  <div>
    <!-- 头部搜索 -->
    <topHead />
    <!-- 轮播 -->
    <swiper class='lunbo' indicator-dots  autoplay interval="3000" duration="300" indicator-active-color='#fff'>
  <block>
    <swiper-item mode="aspectFit" v-for="(item,index) in lunboList" :key="index">
      <image :src="item.image_src"/>
    </swiper-item>
  </block>
</swiper>
 <!-- 分类导航 -->
 <div class="cate-nav">
   <div class='cate' v-for="(item,index) in catelist" :key="index"><img :src="item.image_src" alt="">
   <span>{{item.name}}</span>
   </div> 
 </div>
 <!-- 商品展示 -->
 <div class="shanping-show">
   <div class='commodity' v-for="(item,index) in commList" :key="index">
     <img class='new-house' :src="item.floor_title.image_src" alt=""><span class="house-text">{{item.floor_title.name}}</span>
     <div class='commlist'>
       <img  v-for="(item1,index1) in item.product_list" :key="index1" :src="item1.image_src" alt="">
     </div>
   </div>
     
 </div>
  </div>
</template>

<script>
import topHead from "../../components/tophead.vue"
import wxrequest from "../../utils/js/wxrequest.js"

export default {
  data () {
    return {
      lunboList:"",
      catelist:"",
      commList:""
    }
  },
  components: {
    tohead
  },
  methods: {
 async getlunbolist(){
 var res=  await  wxrequest({
       url:"api/public/v1/home/swiperdata"
     })
     //console.log(res);
     
     let {message,meta} = res.data
     if(meta.status===200){
       this.lunboList = message
     }
     

    },
    async getcatelist(){
     var res = await wxrequest({
        url:"api/public/v1/home/catitems"
     })
     //console.log(res)
     let{ message,meta}=res.data
     if(meta.status===200){
       this.catelist=message
     }
     
    },
    async getcommlist(){
     var res = await wxrequest({
       url:"api/public/v1/home/floordata"
     }) 
     console.log(res);
     let{meta,message}=res.data
     this.commList=message
     
    }
  },
  mounted () {
   this.getlunbolist()
   this.getcatelist()
   this.getcommlist()
  }
};
</script>

<style scoped lang='less'>

.lunbo{
  margin-top: 100rpx;
  width: 100%;
  height: 340rpx;
  image{
    width: 100%;
    height: 340rpx;
  }
}
.cate-nav{
  width: 100%;
  padding: 30rpx 0rpx;
  box-sizing: border-box;
  display: flex;
  text-align: center;
  .cate{
    flex: 1;
   img{
   width: 100rpx;
    height: 100rpx;
  }
  span{
    display: block;
  }
  }
  
}
.shanping-show{
  .commodity{
    position: relative;
   .new-house{
     width: 100%;
     height: 88rpx;
   }
   .house-text{
     position: absolute;
     top:25rpx;
     left:20rpx;
     color: #eb4450;
     font-size: 18px;
   }
   .commlist{
     width: 100%;
     padding: 20rpx 16rpx;
     box-sizing: border-box;
     img{
       border-radius: 5px;
       width: 232rpx;
       height: 180rpx;
       margin-left:10rpx; 
       &:first-child{
        height: 370rpx;
        float: left;
        margin-left: 0px;
     }
     }
   }
  }
}
</style>
