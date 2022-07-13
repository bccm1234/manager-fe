<template>
  <div id="m-index">
    <SearchInput />
    <PeriodicTable />
    <el-container>
      <el-aside width="350px">
        <Filters />
      </el-aside>
      <el-main>
        <ResultTable />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import SearchInput from "@/components/Materials/Index/Input.vue";
import PeriodicTable from "@/components/Materials/Index/PeriodicTable.vue";
import Filters from "@/components/Materials/Index/Filters.vue";
import ResultTable from "@/components/Materials/Index/ResultTable.vue";
export default {
  name: "materials-index",
  components: { SearchInput, PeriodicTable, Filters, ResultTable },
};
</script>

<style lang="scss" scoped>
#m-index {
  background: rgba(185, 192, 185, 0.25);
}
.el-container {
  background: #e9ebe9;
}
.el-aside {
  top: 50px;
  width: 350px;
  display: flex;
  padding: 10px;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  margin-left: 220px;
  margin-top: 50px;
  margin-bottom: 50px;
}
.el-main {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 220px;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 20px 30px;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
}
</style>
