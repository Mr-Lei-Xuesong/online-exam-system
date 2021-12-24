<template>
<el-container style="height: 100vh;">
  <!-- hearder -->
  <el-header style="padding: 0">
    <header-container></header-container>
  </el-header>
  <el-container>
    <!-- left-menu -->
    <el-aside width="200px">
      <home-aside></home-aside>
    </el-aside>
    <!-- content -->
    <el-main style="padding: 0;">
      <router-view/>
    </el-main>
  </el-container>

</el-container>
</template>

<script>
import HeaderContainer from './components/HeaderContainer.vue'
import HomeAside from './components/HomeAside.vue'

export default {
  name: "index",

  components: {
    HeaderContainer,
    HomeAside
  }
}
</script>

<style>

</style>
