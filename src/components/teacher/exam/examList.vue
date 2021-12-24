<template>
  <div class="exam-list">
     <content-header title="试卷列表"></content-header>
     <div class="content-container">
      <div class="content">
        <!-- 表格 -->
        <el-table :data="examList"
                  border
                  style="width: 100%">
          <el-table-column prop="examId"
                          label="id"
                          min-width="50"
                          align="center"
                          >
          </el-table-column>
          <el-table-column prop="description"
                          label="描述"
                          min-width="50"
                          align="center"
                          >
          </el-table-column>
          <el-table-column prop="examDate"
                          label="考试时间"
                          min-width="50"
                          align="center"
                          >
          </el-table-column>
          <el-table-column prop="totalScore"
                          label="总分"
                          min-width="50"
                          align="center"
                          >
          </el-table-column>
          <el-table-column prop="totalTime"
                          label="考试时长"
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
  apiQueryExamList
} from '../../../api/exam/exam'
import ContentHeader from "@/components/teacher/components/contentHeader.vue"
export default {
  name: 'OnlineExamSystemExamlist',

  components: { ContentHeader },

  data() {
    return {
      examList: [],
      total: 0,
      pagingParam: {
        pageNum: 1,
        pageSize: 5
      }
    }
  },

  created() {
    this.getPageData()
  },

  methods: {
    getPageData () {
      const params = this.pagingParam
      apiQueryExamList(params).then(res => {
        const data = res.data
        this.examList = data.list
        this.total = data.total
      })
    },

    HandleAdd () {

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
        apiDeleteMultipe(row.id).then(() => {
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
  }
}
</script>

<style lang="scss" scoped>
.exam-list {
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
