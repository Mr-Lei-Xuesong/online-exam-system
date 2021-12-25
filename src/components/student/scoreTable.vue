<template>
  <div class="table">
    <section class="content-el">
      <el-table ref="score" :data="listScore" v-loading="loading">
        <el-table-column
          prop="examDate"
          label="考试日期"
          sortable
          width="300"
          column-key="examDate"
          :formatter="carTimeFilter">
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
  import moment from 'moment';

  export default {
    data() {
      return {
        loading: false,
        listScore: [],
      }
    },
    created() {
      this.getScore();
      this.loading = true
    },
    methods: {
      getScore() {
        let studentId = this.$cookies.get("cid");
        this.$axios(`/api/findUserExamInfo/${studentId}`).then(res => {
          if (res.data.code === 200) {
            this.loading = false;
            this.listScore = res.data.data;
          }
        })
      },
      carTimeFilter(row, column, cellValue, index) {
        const daterc = row[column.property];
        if (daterc != null) {
          return moment(daterc).format("YYYY-MM-DD")
        }
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
