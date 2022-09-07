<template>
    <a-layout>
    <a-layout-sider class="layoutSider"  ref="layoutSider">
      <!-- 左侧导航 -->
    </a-layout-sider>
    <a-layout>
      <a-layout-header>Header</a-layout-header>
      <a-layout-content>Content</a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </a-layout>
  <router-view/>
</template>
<script>
export default {
  data () {
    return {
      siderHeight: ''
    }
  },
  created () {
    this.siderHeight = document.body.clientHeight
    console.log(this.siderHeight)
  },
  mounted () {
    console.log(this.$refs.layoutSider)
  }
}
</script>
<style scoped lang='less'>
.layoutSider{
  // height: 100%;
}
</style>
