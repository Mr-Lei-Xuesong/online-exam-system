<template>
  <div class="single-choice-add">
     <content-header :title="this.questionForm.id ? '修改单选题' : '新增单选题'" :isBack="true"></content-header>
     <div class="content-container">
      <div class="content">
        <el-form ref="form" :model="questionForm" label-width="80px">
          <el-form-item label="问题">
            <el-input v-model="questionForm.question"></el-input>
          </el-form-item>
          <el-form-item label="选项A">
            <el-input v-model="questionForm.answerA"></el-input>
          </el-form-item>
          <el-form-item label="选项B">
            <el-input v-model="questionForm.answerB"></el-input>
          </el-form-item>
          <el-form-item label="选项C">
            <el-input v-model="questionForm.answerC"></el-input>
          </el-form-item>
          <el-form-item label="选项D">
            <el-input v-model="questionForm.answerD"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="questionForm.rightAnswer" placeholder="请选择正确答案">
              <el-option label="A" value="A"></el-option>
              <el-option label="B" value="B"></el-option>
              <el-option label="C" value="C"></el-option>
              <el-option label="D" value="D"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="分数">
            <el-input v-model="questionForm.score" type="number"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button v-if="this.questionForm.id === 0" type="primary" @click="addSingle()">新增</el-button>
            <el-button v-else type="primary" @click="updateSingle()">修改</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { 
  apiAddSingle,
  apiUpdateSingle
} from '@/api/question/single'
import ContentHeader from "@/components/teacher/components/contentHeader.vue"
export default {
  name: 'OnlineExamSystemSinglechoiceadd',

  components: { ContentHeader },

  data() {
    return {
      questionForm: {
        questionType: 1,
        question: '',
        answerA: '',
        answerB: '',
        answerC: '',
        answerD: '',
        rightAnswer: '',
        score: 0,
        id: 0
      }
    }
  },

  created () {
    const query = this.$route.query
    if (Object.keys(query).length !== 0) {
      this.questionForm = { ...query }
    }
    console.log(this.questionForm)
  },

  methods: {
    addSingle () {
      delete this.questionForm.id
      apiAddSingle(this.questionForm).then(res => {
        // this.$router.back()
      })
    },

    updateSingle () {
      apiUpdateSingle(this.questionForm).then(res => {
        // this.$router.back()
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.single-choice-add {
  .content-container {
    box-sizing: border-box;
    padding: 10px;
    .content {
      padding: 10px;
      background-color: #fff;
    }
  }
}
</style>