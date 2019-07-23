<template>
  <div class="bgc">
   <!-- 收货地址 -->
   <div @click="setAddress" v-if="!Address.userName" class='site'>
    <span> 还没有选择地址</span><span>></span>
   </div>
    <div @click="setAddress" v-else class="location">
    <p> <span class="consignee">收货人:  {{Address.userName}}</span>  <span class="phone">{{Address.telNumber}} <text class="jiantou">></text></span> </p>
     <p class="address">收货地址:  {{setaddress}}</p>
    </div>

    <div class="kromogram">
      <img src="../../../static/images/icon/cart_border@2x(1).png" alt="">
    </div>
    <div class="shop"><span class="iconfont  icon-shouye"></span><span>优购生活馆</span></div>
    <!-- 商品列表 -->
    <div class="shopList">
       <div class="content" v-for="(value,key) in goosList" :key="key">
         <icon @click="chagestatus(value)" type="success" :color="value.status ? 'red':'gray'"/>
         <div class="shoppro">
           <img :src="value.goods_small_logo" alt="">
           <span class="text">
            {{value.goods_name}}
           </span>
           <div class="price">
             <div class="money">￥{{value.goods_price}}</div>
           <div class="amount">
             <span @click="subone(value)">-</span>
             <input type="text" :value="value.num">
             <span @click="addone(value)">+</span>
           </div>
         </div>
         </div>

       </div>
    </div>
    <!-- 合计底部 -->
    <div class="bottom">
      <div class="icons">
        <icon @click="chackAll" type="success" :color="selectAll ? 'red' : 'gray'"/>
        <span>全选</span>
      </div>
      <div class="totalprice">
        <span>合计:</span><span class="priceAll">￥{{total}}.00</span>
        <p>包含运费</p>
      </div>
      <div class="close">结算</div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
     
      Address:{},
      goosList:{}
    }
  },
  methods: {
    setAddress(){
     wx.chooseAddress({
  success: res=> {
  
  this.Address=res
  console.log(this.Address)
  wx.setStorageSync("Address",this.Address)
  
  }
})
    },
    chagestatus(item){
     item.status = !item.status
     wx.setStorageSync("cart",this.goosList)
    },
    subone(value){
      
        value.num--
        if(value.num===0){
          
          wx.showModal({
           title: '提示',
           content: '你确定要删除此商品吗?',
           success: res=> {
           if (res.confirm) {
              delete this.goosList[value.goods_id]
              this.goosList={...this.goosList}
               wx.setStorageSync("cart",this.goosList)
             } else if (res.cancel) {
             value.num=1
              wx.setStorageSync("cart",this.goosList)
             }
           }
         })

        }
        
    },
    addone(value){
      value.num++
       wx.setStorageSync("cart",this.goosList)
    },
    chackAll(){
      var status = !selectAll
       Object.keys(this.goosList).forEach(item=>{
        this.goosList[item].status=status
         
        
      })
      wx.setStorageSync("cart",this.goosList)
    }
  },
  computed: {
    setaddress(){
      return this.Address ? this.Address.provinceName+this.Address.cityName+this.Address.countyName+this.Address.detailInfo : ""
    },
    total(){
      var count=0
      // for(var item in this.goosList){
      //   console.log(this.goosList[item].goods_price);
        
      //   if(this.goosList[item].status===true){
      //     count += this.goosList[item].goods_price
      //   }
      // }
      Object.keys(this.goosList).forEach(item=>{
        if(this.goosList[item].status===true){
          count += this.goosList[item].goods_price*this.goosList[item].num
        }
      })
      return count;
      
    },
    selectAll(){
      var isAll = true
      Object.keys(this.goosList).forEach(item=>{
        if(this.goosList[item].status===false){
          isAll = false
        }
      })
      return isAll
    }

    
  },
  onShow(){
    this.Address = wx.getStorageSync("Address") || {}
    this.goosList = wx.getStorageSync("cart") || {}
  }
}
</script>
<style>
page{
  background-color: #f4f4f4;
}
</style>
<style scoped lang="less">
@import "../../utils/css/iconfont.css";
.bgc{
  background-color: #fff;
}
.site{
 width: 100%;
 padding: 0rpx 20rpx;
 display: flex;
 justify-content: space-between;
 box-sizing: border-box;
 line-height: 100rpx;
 
}
.location{
 width: 100%;
 padding: 15rpx 20rpx;
 box-sizing: border-box;
 
 p{
   line-height: 90rpx;
   .phone{
     width: 268rpx;
    float: right;
    .jiantou{
      margin-left: 10rpx;
      color: #999;
    }
   }
 }
}
.kromogram{
  width: 100%;
  
  img{
    width: 100%;
    height: 15rpx;
    border-bottom: 5px solid #f4f4f4;
  }
}
.shop{
  width: 100%;
  padding-left: 33rpx;
  box-sizing: border-box;
  line-height: 88rpx;
  border-bottom: 1px solid #dddddd;
  
  .iconfont{
    color: #9d9d9d;
    margin-right: 10rpx;
  }
}
.shopList{
 margin-bottom: 158rpx;
.content{
  width: 100%;
  padding: 20rpx 0rpx 20rpx 30rpx;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  
  icon{
    line-height: 204rpx;
    margin-right: 30rpx;
  }
  .shoppro{
    padding-right: 20rpx;
    border-bottom: 1px solid #ddd;
    img{
      width: 160rpx;
      height: 160rpx;
      float: left;
      margin-right: 20rpx;
    }
    .text{
      text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    }
  }
.price{
  display: flex;
  justify-content: space-between;
  padding: 20rpx 0rpx;
  box-sizing: border-box;
  .money{
   margin-top: 25rpx;
  }
  .amount{
    input{
      width: 79rpx;
      height: 55rpx;
      display: inline-block;
      text-align: center;
      position: relative;
      top: 15rpx;

      
    }
    span{
      font-weight: bold;
      border: 2px solid #666;
      padding: 5rpx 24rpx;
    }
  }
}
}
}
.bottom{
  background-color: #fff;
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 100rpx;
  padding-left: 30rpx;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  z-index: 1000;
  .icons{
    height: 100%;
    line-height: 70rpx;
    icon{
      margin-top: 28rpx;
      margin-right: 20rpx;
      vertical-align: middle;
    }
    
  }
  .totalprice{
    padding-top:10rpx;
    span:first-child{
        margin-right: 10rpx;
      }
    .priceAll{
      color: #eb4450;
      font-size: 18px;
    }
    p{
      font-size:14px;
      color: #9e9e9e;
    }
  }
  .close{
    background-color: #eb4450;
    padding: 0rpx 66rpx;
    line-height: 100rpx;
    color: #fff;
  }
}

</style>
