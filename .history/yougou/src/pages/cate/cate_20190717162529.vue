<template>
  <div>
    <!-- 头部搜索 -->
    <topHead />
    <div class="goods">
      <div class="proList">
        <ul>
          <li @click="selectproud(index)" :class="{active: selectpro===index}" v-for="(item,index) in proLists" :key="index">{{item.cat_name}}</li>
        </ul>
      </div>
      <div class="braList">
        <img src="https://gtms01.alicdn.com/tps/i1/TB12EhzIXXXXXbMXpXXDgwcQVXX-375-130.jpg" alt />
        <div class="barshow" v-for="(item1,index1) in item.children" :key="index1" >
          <div class="bartitle">
            /
            <span>{{item1.cat_name}}</span>/
          </div>
          <div class="showList">
            <div class="rishow">
              <img
                src="https://img.alicdn.com/bao/uploaded/i4/10009019440869076/T1hpk5XglXXXXXXXXX_!!0-item_pic.jpg_100x100q90.jpg_.webp"
                alt
              />
              <p>曲面电视</p>
            </div>
               
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topHead from "../../components/tophead.vue";
import wxrequest from "../../utils/js/wxrequest.js"
export default {
  data () {
    return {
      proLists:[],
      selectpro:0,
      contentList:[]
    }
  },
  components: {
    topHead
  },
  methods: {
    // 点击li标签触发
    selectproud(index){
      this.selectpro=index
      this.contentList=this.proLists[index].children
      console.log( this.contentList);
      
    },
    // 获取分类数据源
    async getproList(){
      // 添加加载样式
      wx.showLoading({
        title:"正在加载"
      })
   var res = await wxrequest({
        url:"api/public/v1/categories"
      })
      console.log(res);
      let{message,meta}=res.data
      if(meta.status===200){
        this.proLists=message
      }
      // 结束加载
      wx.hideLoading()
      
    },
  
  },
  mounted () {
    this.getproList()
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
