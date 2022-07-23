<template>
  <div>
    <el-form ref="filterform" :model="form">
      <div class="title">
        <span class="Filters">Filters</span>
        <el-button class="Reset" @click="ResetForm">Reset</el-button>
        <el-button class="Go" @click="commitSearch">Go!</el-button>
      </div>
      <el-collapse v-model="activeNames">
        <el-collapse-item name="model-type">
          <template #title>
            <div>
              <el-icon :size="16"><Operation /></el-icon>
              <span>Model Type</span>
            </div>
          </template>
          <el-form-item prop="model">
            <el-select v-model="form.model" placeholder="请选择" size="large">
              <el-option
                v-for="item in modelOptions"
                :key="item.value"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-collapse-item>
        <el-collapse-item name="symmetry">
          <template #title>
            <div>
              <el-icon :size="16"><Operation /></el-icon>
              <span>Symmetry</span>
            </div>
          </template>
          <div class="formItemTitle">Crystal System</div>
          <el-form-item prop="crystalSystem">
            <el-select
              v-model="form.crystalSystem"
              placeholder="请选择"
              size="large"
            >
              <el-option
                v-for="item in crystalSystemOptions"
                :key="item.value"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <div class="formItemTitle">Spacegroup Symbol</div>
          <el-form-item prop="spaceGroup">
            <el-input
              v-model="form.spaceGroup"
              placeholder="P_4m-3n 代表 <html>P_4m-3n<html>"
              size="large"
            ></el-input>
          </el-form-item>
        </el-collapse-item>
        <el-collapse-item name="surface">
          <template #title>
            <div>
              <el-icon :size="16"><Operation /></el-icon>
              <span>Surface</span>
            </div>
          </template>
          <div class="formItemTitle">Miller Indices</div>
          <el-form-item prop="millerIndice">
            <el-input
              v-model="form.millerIndice"
              placeholder="请输入密勒指数，例如(111)"
              size="large"
            ></el-input>
          </el-form-item>
          <div class="formItemTitle">Termination</div>
          <el-form-item prop="termination">
            <el-select
              v-model="form.termination"
              placeholder="请选择"
              size="large"
            >
              <el-option
                v-for="item in surfaceTerminationOptions"
                :key="item.value"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-collapse-item>
      </el-collapse>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Filters",
  data() {
    return {
      form: {
        model: "",
        crystalSystem: "",
        spaceGroup: "",
        millerIndice: "",
        termination: "",
      },
      modelOptions: [
        {
          value: "Bulk",
        },
        {
          value: "Slab/Surface",
        },
        {
          value: "Both",
        },
      ],
      crystalSystemOptions: [
        {
          value: "Cubic",
        },
        {
          value: "Hexagonal",
        },
        {
          value: "Trigonal",
        },
        {
          value: "Tetragonal",
        },
        {
          value: "Orthorhombic",
        },
        {
          value: "Monoclinic",
        },
        {
          value: "Triclinic",
        },
      ],
      surfaceTerminationOptions: [
        {
          value: "A",
        },
        {
          value: "B",
        },
        {
          value: "C",
        },
        {
          value: "D",
        },
        {
          value: "E",
        },
        {
          value: "F",
        },
      ],
      activeNames: ["model-type", "symmetry", "surface"],
    };
  },
  watch: {
    form: {
      handler(newVal) {
        const formCopy = JSON.parse(JSON.stringify(this.form));
        const isBulk = newVal.crystalSystem || newVal.spaceGroup;
        const isSurface = newVal.millerIndice || newVal.termination;
        switch (newVal.model) {
          case "Bulk":
            this.form.millerIndice = "";
            this.form.termination = "";
            break;
          case "Slab/Surface":
            this.form.crystalSystem = "";
            this.form.spaceGroup = "";
            break;
          default:
            break;
        }
        if (isBulk) {
          if (isSurface) {
            formCopy.model = "Both";
          } else {
            formCopy.model = "Bulk";
          }
        } else {
          if (isSurface) {
            formCopy.model = "Slab/Surface";
          }
        }
        this.$store.commit("materials/changeInputParams", formCopy);
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    ResetForm() {
      this.$refs.filterform.resetFields();
    },
    commitSearch() {
      this.$store.commit("materials/commitSearch");
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep(.title) {
  left: 0px;
  top: 0px;
  width: 280px;
  height: 72px;
  display: flex;
  align-items: center;
  padding: 20px 10px;
  align-self: stretch;
  background: #ffffff;
  .Filters {
    left: 0px;
    top: 0px;
    width: 106px;
    height: 24px;
    font-family: PHTM;
    font-size: 36px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0px;
    color: #131414;
  }
  .Reset {
    position: relative;
    left: 46px;
    top: 0px;
    width: 57px;
    height: 28px;
    padding: 2px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: #f4f4f5;
    box-sizing: border-box;
    border: 1px solid #c7c9cc;
    span {
      position: static;
      left: 5px;
      top: 2px;
      height: 24px;
      font-size: 18px;
      width: 63px;
      height: 24px;
      font-family: PHTR;
      font-weight: normal;
      line-height: 24px;
      letter-spacing: 0px;
      color: #131414;
    }
  }
  .Go {
    position: relative;
    left: 56px;
    width: 41px;
    height: 28px;
    padding: 2px 5px;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: #f4f4f5;
    box-sizing: border-box;
    border: 1px solid #c7c9cc;
    span {
      position: static;
      left: 5px;
      top: 2px;
      width: 31px;
      height: 24px;
      font-size: 18px;
      font-family: PHTR;
      font-weight: normal;
      line-height: 24px;
      letter-spacing: 0px;
      color: #131414;
    }
  }
}
::v-deep(.el-collapse-item__header) {
  position: static;
  left: 0px;
  top: 0px;
  width: 280px;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  background: #ffffff;
  div {
    i {
      position: relative;
      left: 0px;
      top: 0px;
    }
    span {
      position: relative;
      left: 5px;
      top: 0px;
      width: 133px;
      height: 24px;
      font-family: PHTM;
      font-size: 24px;
      font-weight: 500;
      line-height: 24px;
      text-transform: capitalize;
      letter-spacing: 0px;
      color: #131414;
    }
  }
}
::v-deep(.el-select) {
  position: static;
  left: 0px;
  top: 0px;
  width: 240px;
  height: 40px;
  margin: 0px 20px;
}
::v-deep(.el-collapse-item__content) {
  padding: 10px 0px;
}
::v-deep(.el-form-item__content > .el-input) {
  position: static;
  left: 0px;
  top: 0px;
  width: 240px;
  height: 40px;
  margin: 0 20px;
}
::v-deep(input) {
  background-color: #f4f4f5;
}
.formItemTitle {
  position: static;
  left: 0px;
  top: 0px;
  width: 240px;
  height: 18px;
  font-family: PHTR;
  font-size: 18px;
  font-weight: normal;
  line-height: 18px;
  letter-spacing: 0em;
  color: #131414;
  margin: 0px 20px 8px;
}
.el-button + .el-button {
  margin-left: 0px;
}
</style>
