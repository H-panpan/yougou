<template>
  <div>
    <!-- 头部搜索 -->
    <topHead />
    <div class="goods">
      <div class="proList">
        <ul>
          <li v-for="(item,index) in [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]" :key="index">热门推荐</li>
        </ul>
      </div>
      <div class="braList">
        <img src="https://gtms01.alicdn.com/tps/i1/TB12EhzIXXXXXbMXpXXDgwcQVXX-375-130.jpg" alt />
        <div class="barshow" v-for="(item1,index1) in [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]" :key="index1" >
          <div class="bartitle">
            /
            <span>电视</span>/
          </div>
          <div class="showList">
            <div class="rishow">
              <img
                src="https://img.alicdn.com/bao/uploaded/i4/10009019440869076/T1hpk5XglXXXXXXXXX_!!0-item_pic.jpg_100x100q90.jpg_.webp"
                alt
              />
              <p>曲面电视</p>
            </div>
             <div class="rishow">
              <img
                src="https://img.alicdn.com/bao/uploaded/i4/10009019440869076/T1hpk5XglXXXXXXXXX_!!0-item_pic.jpg_100x100q90.jpg_.webp"
                alt
              />
              <p>曲面电视</p>
            </div>
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
      proLists:""
    }
  },
  components: {
    topHead
  },
  methods: {
    async getproList(){
   var res = await wxrequest({
        url:"api/public/v1/categories"
      })
      console.log(res);
      
    }
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
