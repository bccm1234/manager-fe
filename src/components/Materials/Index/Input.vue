<template>
  <div class="inputFatherBox">
    <el-input
      class="input"
      v-model="input"
      placeholder="Please input"
      @input="judgeinput"
      clearable
    >
      <template #prepend>
        <el-button>Filters</el-button>
      </template>
      <template #append>
        <el-button :disabled="!isabled">Search</el-button>
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
      isabled: false,
    };
  },
  computed: {},
  methods: {
    judgeinput() {
      let ElementList = [];
      const inputeleList = this.sliceinput(this.input);
      [this.isabled, ElementList] = this.judgeinputeleList(inputeleList);
      this.$store.commit("materials/saveInput", ElementList);
    },
    sliceinput(forminput) {
      let elelist = [];
      if (forminput.includes("-")) {
        elelist = forminput.split("-");
      } else if (forminput.includes(",")) {
        elelist = forminput.split(",");
      } else {
        let startindex = "";
        let endindex = "";
        for (let i = 0; i < forminput.length; i++) {
          if (forminput[i].match(/[A-Z*]/)) {
            startindex = endindex;
            endindex = i;
            if (endindex != 0 && startindex === "") {
              // 捕捉436Cu2Zn3中的436
              elelist.push(forminput.slice(0, endindex));
            }
            if (parseFloat(startindex).toString() !== "NaN") {
              // 捕捉436Cu2Zn3中的Cu2
              elelist.push(forminput.slice(startindex, endindex));
            }
          }
        }
        // 捕捉436Cu2Zn3中的Zn3
        elelist.push(forminput.slice(endindex, forminput.length));
      }
      return elelist;
    },
    judgeinputeleList(list) {
      const state = [];
      const List = [];
      list.forEach((x) => {
        x.match(/[^\(\)A-Za-z0-9,*-]/) ? state.push(false) : state.push(true); // 判断是否含非法字符
        const newx = x.replaceAll(/[^A-Za-z*]/g, "");
        if (
          !Object.keys(this.$store.state.materials.isActive).includes(newx) && // 判断是否含非法元素
          newx !== "" &&
          newx !== "*"
        )
          state.push(false);
        else {
          state.push(true);
          if (newx !== "") List.push(newx);
        }
      });
      return [List.length > 0 ? state.every((x) => x == true) : false, List];
    },
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
.el-button.is-disabled,
.el-button.is-disabled:focus,
.el-button.is-disabled:hover {
  background-color: inherit;
  border: none;
}
</style>
