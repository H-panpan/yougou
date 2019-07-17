<template>
  <div>
    <!-- 头部搜索 -->
    <topHead />
    <div class="goods">
    <div class="proList"></div>
    <div class="braList"></div>
    </div>
  </div>
</template>

<script>
import topHead from "../../components/tophead.vue"
export default {
components: {
  topHead
}
}
</script>

<style lang="less" scoped>
@import "./index.less";

</style>
