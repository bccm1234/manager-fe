<template>
  <div>
    <div class="resultTableTitle">
      <div class="titleText">
        There are
        <b>{{ total + " records" }}</b>
        to display
      </div>
    </div>
    <el-table
      :data="tableList"
      style="margin: 10px auto 0"
      @sort-change="sortChange"
      @row-click="detailedinformation"
      border
    >
      <el-table-column label="Id" prop="id" sortable="custom">
        <template #header="scope">
          <span class="table-header" v-html="scope.column.label"></span>
        </template>
        <template #default="scope">
          <div class="table-body" v-html="scope.row.id"></div>
        </template>
      </el-table-column>
      <el-table-column
        v-for="item in selectedColumns"
        :prop="item.prop"
        :key="item.label"
        :label="item.label"
        :width="flexColumnWidth(tableList, item.label, item.prop, 47)"
        sortable="custom"
      >
        <template #header="scope">
          <span class="table-header" v-html="scope.column.label"></span>
        </template>
        <template #default="scope">
          <div
            class="table-body"
            v-html="scope.row[item.prop] ? scope.row[item.prop] : 'none'"
          ></div>
        </template>
      </el-table-column>
    </el-table>
    <div class="resultTablePagination">
      <el-pagination
        v-model:currentPage="currentPage"
        @update:currentPage="currentPageChange"
        v-model:pageSize="pageSize"
        @update:pageSize="pageSizeChange"
        layout="sizes, prev, pager, next, jumper"
        :total="total"
        :page-sizes="[5, 10, 15, 20]"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import utils from "@/utils/utils";
export default {
  name: "ResultTable",
  data() {
    return {
      selectedColumns: [
        { prop: "model", label: "Model Type" },
        { prop: "substance", label: "Formula" },
        { prop: "crystalSystem", label: "Crystal System" },
        { prop: "spaceGroup", label: "Space Group" },
        { prop: "miller", label: "Miller Indices" },
        { prop: "termination", label: "Termination" },
      ],
      currentPage: 1,
      pageSize: 10,
      sortParams: {},
    };
  },
  computed: {
    tableList: function () {
      const list = this.$store.state.materials.List;
      const resultList = [];
      list.forEach(function (data) {
        resultList.push(data.abs);
      });
      resultList.forEach(
        (x) => (x["spaceGroup"] = utils.tranStr(1, x["spaceGroup"]))
      );
      return resultList;
    },
    total: function () {
      return this.$store.state.materials.total;
    },
  },
  methods: {
    flexColumnWidth(List, label, prop, number) {
      return utils.flexColumnWidth(List, label, prop, number);
    },
    currentPageChange() {
      const page = {};
      page.pageSize = this.pageSize;
      page.pageNum = this.currentPage;
      this.$store.commit("materials/changePage", page);
      this.$store.commit("materials/commitSearch");
    },
    pageSizeChange() {
      this.currentPageChange();
    },
    sortChange({ column, order }) {
      this.sortParams = {};
      if (order == "ascending") {
        this.sortParams[column.property] = 1;
      } else if (order == "descending") {
        this.sortParams[column.property] = -1;
      }
      this.$store.commit("materials/changeSort", this.sortParams);
      this.$store.commit("materials/commitSearch");
    },
    detailedinformation(row) {
      this.$router.push({
        path: "/apps/materials/details",
        query: { id: row.id },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.resultTableTitle {
  position: static;
  left: 30px;
  top: 20px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 35px;
  align-self: stretch;
  border-bottom: 2px solid #131414;
  .titleText {
    position: static;
    left: 35px;
    top: 10px;
    height: 60px;
    font-family: PHTM;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0px;
    color: #131414;
    b {
      font-weight: 700;
    }
  }
}
::v-deep(.el-table) {
  th {
    background-color: #f4f4f5;
    div.cell {
      font-family: PHTR;
      font-size: 12px;
      font-weight: normal;
      line-height: 16px;
      text-transform: capitalize;
      letter-spacing: 0px;
      color: #000000;
    }
  }
}
.resultTablePagination {
  height: 72px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 0px;
  align-self: stretch;
}
.table-header {
  font-family: PHTR;
  font-size: 16px;
}
.table-body {
  font-family: PHTL;
  font-size: 14px;
}
</style>
