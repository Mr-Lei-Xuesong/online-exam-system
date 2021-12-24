<template>
  <div class="welcome-container">
    <div class="header"></div>
    <div class="content">
      <div>很高兴遇见你，你是帅气的杨老师</div>
      <div>教务公告：</div>
      <div>寒假放假通知</div>
      <div>下周例行工作报告会</div>
      <div>关于毕业生答辩具体流程</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.welcome-container {
  overflow: hidden;
  position: relative;
  height: 100%;
  .empty {
    position: absolute;
    top: 0;
    box-sizing: border-box;
    width: 100%;
    height: 56px;
    box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.25);
  }
  .content {
    padding: 20px;
    margin-top: 56px;
  }
}
</style>