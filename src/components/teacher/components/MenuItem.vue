<template>
  <div>
    <div v-for="(item, i) in menu" :key="i">
      <!-- 无下级菜单 -->
      <el-menu-item  v-if="!item.hasOwnProperty('children')" :index="String(item.path)">
        <i :class="item.icon"></i>
        <span>{{item.authName}}</span>
      </el-menu-item>
      <!-- 存在下级菜单 -->
      <el-submenu v-else :index="String(item.path)">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.authName}}</span>
        </template>
        <MenuItem :menu="item.children" />
      </el-submenu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',

  props: {
    menu: Array
  }
};
</script>

<style lang="scss" scoped>

</style>