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
        <img src="https://gtms01.alicdn.com/tps/i1/TB12EhzIXXXXXbMXpXXDgwcQVXX-375-130.jpg" alt="">
      <div class="barshow">
        <div class="bartitle">/<span>电视</span>/</div>
        <div class="showList">
          <div><img src="https://img.alicdn.com/bao/uploaded/i4/10009019440869076/T1hpk5XglXXXXXXXXX_!!0-item_pic.jpg_100x100q90.jpg_.webp" alt=""><p>曲面电视</p></div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import topHead from "../../components/tophead.vue";
export default {
  components: {
    topHead
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
