<template>
  <div class="single-choice-container">
    <content-header title="单选题"></content-header>
    <div class="content-container">
      <div class="content">
        <!-- 按钮 -->
        <el-button class="button" type="primary">新增单选</el-button>
        <!-- 表格 -->
        <el-table :data="questionList"
                  border
                  style="width: 100%">
          <el-table-column prop="id"
                          label="id"
                          min-width="50"
                          align="center"
                          >
          </el-table-column>
          <el-table-column prop="question"
                          label="问题"
                          min-width="50"
                          align="center"
                          >
          </el-table-column>
          <el-table-column prop="answerA"
                          label="A"
                          min-width="50"
                          align="center"
                          >
          </el-table-column>
          <el-table-column prop="answerB"
                          label="B"
                          min-width="50"
                          align="center"
                          >
          </el-table-column>
          <el-table-column prop="answerC"
                          label="C"
                          min-width="50"
                          align="center"
                          >
          </el-table-column>
          <el-table-column prop="answerD"
                          label="D"
                          min-width="50"
                          align="center"
                          >
          </el-table-column>
          <el-table-column prop="rightAnswer"
                          label="正确答案"
                          min-width="50"
                          align="center"
                          >
          </el-table-column>
          <el-table-column prop="score"
                          label="分数"
                          min-width="50"
                          align="center"
                          >
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <el-pagination  class="top"
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :page-sizes="[5, 10, 20, 100]"
                        :current-page="pagingParam.pageNum"
                        :page-size="pagingParam.pageSize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { 
  apiQuerySingleList,
  apiQuerySingleDetail,
  apiAddSingle,
  apiDeleteSingle
} from '@/api/question/single'
import ContentHeader from '../components/contentHeader.vue'
export default {
  name: 'OnlineExamSystemSinglechoice',

  components: { ContentHeader },

  data() {
    return {
      questionList: [],
      total: 0,
      pagingParam: {
        pageNum: 1,
        pageSize: 5
      }
    }
  },

  created () {
    this.getPageData()
  },

  methods: {
    getPageData () {
      const params = this.pagingParam
      apiQuerySingleList(params).then(res => {
        const data = res.data
        this.questionList = data.list
        this.total = data.total
      })
    },

    handleSizeChange (e) {
      this.pagingParam.pageSize = e
      this.getPageData()
    },

    handleCurrentChange (e) {
      this.pagingParam.pageNum = e
      this.getPageData()
    }
  },
};
</script>

<style lang="scss" scoped>
.single-choice-container {
  .content-container {
    padding: 10px;
    .content {
      padding: 10px;
      background-color: #fff;
    }
  }
  .button {
    margin-bottom: 10px;
  }
  .top {
    margin-top: 10px;
  }
}
</style>