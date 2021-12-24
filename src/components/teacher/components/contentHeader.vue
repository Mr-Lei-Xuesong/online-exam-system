<template>
  <div class="content-header">
    {{title}}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.content-header {
  width: 100%;
  height: 56px;
  padding: 0 20px;
  line-height: 56px;
  box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.25);
  background-color: #fff;
}
</style>
