<template>
  <div class="exam-add">
     <content-header title="新增考试"></content-header>
     <div class="content-container">
      <div class="content">
        <el-tabs style="flex: 1;" v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="基本信息" name="first">
            <el-form ref="form" :model="baseForm" label-width="80px">
              <el-form-item label="试卷描述">
                <el-input v-model="baseForm.description"></el-input>
              </el-form-item>
              <el-form-item label="考试时间">
                <el-col :span="11">
                  <el-date-picker type="date" placeholder="选择日期" v-model="baseForm.date1" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col :span="11">
                  <el-time-picker placeholder="选择时间" v-model="baseForm.date2" style="width: 100%;"></el-time-picker>
                </el-col>
              </el-form-item>
              <el-form-item label="试卷分数">
                <el-input v-model="baseForm.totalScore"></el-input>
              </el-form-item>
              <el-form-item label="考试时间">
                <el-input v-model="baseForm.totalTime"></el-input>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="单选题" name="second">
            
          </el-tab-pane>
          <el-tab-pane label="多选题" name="third">

          </el-tab-pane>
          <el-tab-pane label="判断题" name="fourth">

          </el-tab-pane>
          <el-tab-pane label="填空题" name="f">

          </el-tab-pane>
        </el-tabs>
        <div class="btn-group">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { apiQuerySingleList } from '@/api/question/single'
import ContentHeader from "@/components/teacher/components/contentHeader.vue"
export default {
  name: 'OnlineExamSystemExamadd',

  components: { ContentHeader },

  data() {
    return {
      baseForm: {
        description: '',
        examDate: '',
        totalScore: '',
        totalTime: '',
        date1: '',
        date2: ''
      },
      activeName: 'first',
      data1: [],
      data1Value: [1, 4]
    }
  },

  created() {
    this.getPagedata()
  },

  methods: {
    getPagedata () {
      apiQuerySingleList({pageNum: 1, pageSize: 100}).then(res => {
        this.data1 = res.data.list
      })
    },

    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="scss" scoped>
.exam-add {
  .content-container {
    box-sizing: border-box;
    padding: 10px;
    .content {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      height: 790px;
      padding: 10px;
      background-color: #fff;
    }
  }
}
.btn-group {
  height: 60px;
  background-color: pink;
}
</style>
