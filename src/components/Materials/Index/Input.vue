<template>
  <div class="inputFatherBox">
    <el-input
      class="input"
      v-model="input"
      placeholder="Please input"
      clearable
    >
      <template #prepend>
        <el-button>Filters</el-button>
      </template>
      <template #append>
        <el-button>Search</el-button>
      </template>
    </el-input>
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  data() {
    return {
      input: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.inputFatherBox {
  text-align: center;
}
::v-deep(.input) {
  margin-top: 50px;
  width: 960px;
  height: 60px;
}
::v-deep(.el-input--small .el-input__inner) {
  left: 150px;
  top: 0px;
  width: 671px;
  height: 60px;
  display: flex;
  flex-direction: column;
  padding: 16px 30px;
  flex-grow: 1;
  align-self: stretch;
  border-width: 2px 0px 2px 0px;
  border-style: solid;
  border-color: #131414;
  font-family: AlibabaPuHuiTiM;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0em;
  color: #131414;
}
::v-deep(.el-input-group__prepend) {
  left: 0px;
  top: 0px;
  width: 150px;
  height: 60px;
  padding: 0px 20px;
  border-radius: 5px 0px 0px 5px;
  background: #c7c9cc;
  box-sizing: border-box;
  border: 2px solid #000000;
  span {
    left: 10px;
    top: 0px;
    width: 130px;
    height: 60px;
    font-family: AlibabaPuHuiTiM;
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    color: #131414;
  }
}
::v-deep(.el-input-group__append) {
  position: static;
  left: 821px;
  top: 0px;
  width: 139px;
  height: 60px;
  border-radius: 0px 5px 5px 0px;
  background: #43655a;
  box-sizing: border-box;
  border-width: 2px 2px 2px 0px;
  border-style: solid;
  border-color: #000000;
  span {
    left: 0px;
    top: 0px;
    width: 139px;
    height: 60px;
    font-family: AlibabaPuHuiTiM;
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 0em;
    color: #ffffff;
  }
}
</style>
