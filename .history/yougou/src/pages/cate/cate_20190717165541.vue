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
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563363351005&di=4da359ebcec08770afd76f6bd352d249&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ba8e57c550840000012e7e42cf21.jpg%401280w_1l_2o_100sh.png" alt />
        <div class="barshow" v-for="(item1,index1) in contentList" :key="index1" >
          <div class="bartitle">
            /
            <span>{{item1.cat_name}}</span>/
          </div>
          <div class="showList">
            <div class="rishow" v-for="(item2,index2) in item1.children" :key="index2">
              <a href="">
                <img
                :src="'https://autumnfish.cn/wx/'+item2.cat_icon"
                alt
              />
              <p>{{item2.cat_name}}</p>
              </a>
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
        this.contentList=this.proLists[this.selectpro].children
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
