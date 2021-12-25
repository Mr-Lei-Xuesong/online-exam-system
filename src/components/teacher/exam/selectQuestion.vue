<template>
  <div class="select-question-cp">
    <el-transfer v-model="value"
                  :data="formatQuestionList"
                  :titles="['未选题目', '已选题目']"
                  @left-check-change="test"
                  >
    </el-transfer>
  </div>
</template>

<script>
export default {
  name: 'OnlineExamSystemSelectquestion',

  props: {
    questionList: {
      type: Array,
      default: []
    }
  },

  data() {
    return {
      value: []
    }
  },

  computed: {
    formatQuestionList () {
      const data = []
      // this.qu
      for (let i = 1; i < this.data1.length; i++) {
        data.push({
          key: this.data1[i].id,
          label: this.data1[i].question,
        });
      }
      return data;
    }
  },

  methods: {
    test (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.select-question-cp {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/deep/ .el-transfer-panel {
  width: 600px;
  height: 500px;
}

/deep/ .el-checkbox-group {
  height: 500px;
}
</style>