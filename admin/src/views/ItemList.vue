<template>
  <div>
    <el-table :data="items" border>
      <el-table-column label="ID" prop="_id" width="260px"></el-table-column>
      <el-table-column label="物品名称" prop="name" ></el-table-column>
      <el-table-column label="物品图标"prop="icon" >
        <template slot-scope="scope">
          <img :src="scope.row.icon" alt="" style="height: 3rem">
        </template>
      </el-table-column>
       <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="$router.push(`/items/edit/${scope.row._id}`)">编辑</el-button>
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
    console.log(this.items);
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("rest/items");
      console.log(res);
      this.items = res.data;
    },
    remove(row) {
        this.$confirm(`是否删除改物品 ${row.name}`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
           const res = await this.$http.delete(`rest/items/${row._id}`)
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