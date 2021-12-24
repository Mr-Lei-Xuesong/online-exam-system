<template>
  <div class="single-choice-container">
    <content-header title="单选题"></content-header>
    <div class="content-container">
      <div class="content">
        <!-- 按钮 -->
        <el-button class="button" type="primary" @click="addSingle()">新增单选</el-button>
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
          <el-table-column prop="score"
                          label="操作"
                          min-width="50"
                          align="center"
                          >
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.row)">删除</el-button>
            </template>
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
    
    addSingle () {
      console.log('asdf')
      this.$router.push({ path: '/singleChoiceAdd' })
    },

    handleEdit(row) {
      this.$router.push({
        path: '/singleChoiceAdd',
        query: row
      })
    },

    handleDelete(row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        apiDeleteSingle(row.id).then(() => {
          this.getPageData()
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
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
    box-sizing: border-box;
    padding: 10px;
    .content {
      padding: 10px;
      background-color: #fff;
    }
  }
}
.button {
    margin-bottom: 10px;
  }
  .top {
    margin-top: 10px;
  }
</style>