<template>
  <div class="aside-container">
    <el-menu  background-color="#333744"
              text-color="#fff"
              active-text-color="#409EFF"
              :unique-opened="true"
              :router="true"
              :default-active="$route.path"
              >
      <menu-item :menu="menu"></menu-item>
    </el-menu>
  </div>
</template>

<script>
import MenuItem from './MenuItem.vue'
import { mapState } from 'vuex'
export default {
  name: 'HomeAside',

  components: { MenuItem },

  computed: {
    ...mapState({
      menu: state => state.menu.menu
    })
  }
}
</script>

<style>
  .aside-container {
    height: 100%;
    background-color: #333744;
  }
  .el-menu {
    border-right: 0;
  }
</style>
