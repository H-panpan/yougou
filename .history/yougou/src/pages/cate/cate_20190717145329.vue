<template>
  <div>
    <!-- 头部搜索 -->
    <topHead />
    <div class="goods">
      <div class="proList">
        <ul>
          <li v-for="(item,index) in [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]">热门推荐</li>
        </ul>
      </div>
      <div class="braList"></div>
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
