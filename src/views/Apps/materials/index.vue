<template>
  <div>
    <div id="index-color1">
      <SearchInput />
      <PeriodicTable />
    </div>
    <div id="index-color2">
      <el-container>
        <el-aside width="350px">
          <Filters />
        </el-aside>
        <el-main>
          <ResultTable />
        </el-main>
      </el-container>
    </div>
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
#index-color1 {
  background: rgba(185, 192, 185, 0.25);
  padding-bottom: 40px;
}
#index-color2 {
  background-color: #e9ebe9;
  padding-top: 20px;
}
.el-container {
  width: 1320px;
  margin: 0 auto;
}
.el-aside {
  top: 50px;
  width: 300px;
  display: flex;
  padding: 10px;
  border-radius: 5px;
  background: #ffffff;
  margin-bottom: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
}
.el-main {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  padding: 20px 30px;
  border-radius: 5px;
  background: #ffffff;
  margin-bottom: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
}
</style>
