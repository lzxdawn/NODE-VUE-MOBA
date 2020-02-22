<template>
  <div>
    <el-table :data="items" border>
      <el-table-column label="ID" prop="_id" width="260px"></el-table-column>
      <el-table-column label="所属分类" prop="categories" width="260px"></el-table-column>
      <el-table-column label="标题" prop="title"></el-table-column>
       <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="$router.push(`/articles/edit/${scope.row._id}`)">编辑</el-button>
        <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("rest/articles");
      console.log(res);
      this.items = res.data;
    },
    remove(row) {
        this.$confirm(`是否删除改文章 ${row.title}`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
           const res = await this.$http.delete(`rest/articles/${row._id}`)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.fetch();
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    }
  }
};
</script>

<style scoped>
</style>