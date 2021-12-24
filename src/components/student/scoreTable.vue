<template>
  <div class="table">
    <section class="content-el">
      <el-table ref="score" :data="score" v-loading="loading">
        <el-table-column
          prop="examDate"
          label="考试日期"
          sortable
          width="300"
          column-key="examDate">
        </el-table-column>
        <el-table-column
          prop="description"
          label="考试名称"
          width="300"
          filter-placement="bottom-end">
        </el-table-column>
        <el-table-column prop="score" label="考试分数" width="200"></el-table-column>
        <el-table-column label="是否及格" width="100">
          <template slot-scope="scope">
            <el-tag :type="scope.row.score>= 60 ? 'success' : 'danger'">{{scope.row.score >= 60 ? "及格" : "不及格"}}
            </el-tag>
          </template>
        </el-table-column>
      </el-table>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: false, //加载标识符
        score: [], //学生成绩
      }
    },
    created() {
      this.getScore();
      this.loading = true //数据加载则遮罩表格
    },
    methods: {
      getScore() {
        let studentId = this.$cookies.get("cid");
        let that = this;
        this.$axios(`/api/findUserExamInfo/2`).then(res => {
          if (res.data.code === 200) {
            this.loading = false;
            that.score = res.data.data;
          }
        })
      }
    }
  };
</script>

<style lang="scss" scoped>
  .pagination {
    padding-top: 20px;
  }

  .table {
    width: 980px;
    margin: 0 auto;

    .title {
      margin: 20px;
    }

    .content-el {
      background-color: #fff;
      padding: 20px;
    }
  }
</style>
