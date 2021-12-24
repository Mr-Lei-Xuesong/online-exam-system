<template>
  <div class="content-header">
    <div v-if="isBack == false">{{title}}</div>
    <el-page-header v-else @back="$router.back()" :content="title"></el-page-header>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    isBack: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.content-header {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 56px;
  padding: 0 20px;
  box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.25);
  background-color: #fff;
}
</style>
