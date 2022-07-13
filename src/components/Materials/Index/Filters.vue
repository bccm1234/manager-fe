<template>
  <div>
    <el-form ref="form" :model="form">
      <div class="title">
        <span class="Filters">Filters</span>
        <el-button class="Reset" @click="ResetForm">Reset</el-button>
        <el-button class="Go">Go!</el-button>
      </div>
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item name="model-type">
          <template #title>
            <div>
              <el-icon :size="30"><Expand /></el-icon>
              <span>Model Type</span>
            </div>
          </template>
          <el-form-item prop="modelType">
            <el-select
              v-model="form.modelType"
              placeholder="请选择"
              size="large"
            >
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
              <el-icon :size="30"><Expand /></el-icon>
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
              <el-icon :size="30"><Expand /></el-icon>
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
          <el-form-item prop="surfaceTermination">
            <el-select
              v-model="form.surfaceTermination"
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
        modelType: "",
        crystalSystem: "",
        spaceGroup: "",
        millerIndice: "",
        surfaceTermination: "",
      },
      modelOptions: [
        {
          value: "Bulk",
        },
        {
          value: "Slab/Surface",
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
  methods: {
    ResetForm() {
      this.$refs.form.resetFields();
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep(.title) {
  left: 0px;
  top: 0px;
  width: 330px;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 10px;
  align-self: stretch;
  background: #ffffff;
  .Filters {
    left: 0px;
    top: 0px;
    width: 106px;
    height: 24px;
    font-family: AlibabaPuHuiTiM;
    font-size: 36px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0px;
    color: #131414;
  }
  .Reset {
    left: 0px;
    top: 0px;
    width: 95px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 16px;
    border-radius: 5px;
    background: #f4f4f5;
    box-sizing: border-box;
    border: 1px solid #c7c9cc;
    span {
      left: 16px;
      top: 4px;
      width: 63px;
      height: 24px;
      font-family: AlibabaPuHuiTiR;
      font-size: 24px;
      font-weight: normal;
      line-height: 24px;
      letter-spacing: 0px;
      color: #131414;
    }
  }
  .Go {
    left: 105px;
    top: 0px;
    width: 73px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 16px;
    border-radius: 5px;
    background: #f4f4f5;
    box-sizing: border-box;
    border: 1px solid #c7c9cc;
    span {
      left: 16px;
      top: 4px;
      width: 41px;
      height: 24px;
      font-family: AlibabaPuHuiTiR;
      font-size: 24px;
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
  width: 330px;
  height: 78px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  background: #ffffff;
  div {
    i {
      position: relative;
      left: 0px;
      top: 6px;
    }
    span {
      position: relative;
      left: 20px;
      top: 0px;
      width: 133px;
      height: 24px;
      font-family: AlibabaPuHuiTiM;
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
  width: 290px;
  height: 40px;
  margin: 0px 20px;
}
::v-deep(.el-form-item__content > .el-input) {
  position: static;
  left: 0px;
  top: 0px;
  width: 290px;
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
  width: 290px;
  height: 18px;
  font-family: AlibabaPuHuiTiR;
  font-size: 18px;
  font-weight: normal;
  line-height: 18px;
  letter-spacing: 0em;
  color: #131414;
  margin: 0px 20px 8px;
}
</style>
