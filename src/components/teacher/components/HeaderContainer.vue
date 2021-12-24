<template>
  <div class="header-container">
    <div class="title-box">EXAM-SYSTEM</div>
    <div class="info-box">
      <div class="name">欢迎杨老师！</div>
      <div class="avatar"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OnlineExamSystemHeader',

  data() {
    return {
      
    }
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  background-color: #333744;
  .title-box {
    width: 200px;
    height: 100%;
    color: #fff;
    font-size: 24px;
    text-align: center;
    line-height: 60px;
    background-color: pink;
  }
  .info-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 10px;
    .name {
      color: #fff;
    }
    .avatar {
      width: 50px;
      height: 50px;
      margin-left: 10px;
      border-radius: 50%;
      background-image: url("~@/assets/img/good1.jpg");
      background-size: 100% 100%;
    }
  }
}
</style>