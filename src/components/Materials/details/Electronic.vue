<template>
  <div id="2" v-if="infoObj" class="rightModule">
    <div class="moduleTitle">Electronic Structure</div>
    <div class="body br10">
      <div class="mb20">
        <div class="title">
          There are {{ Object.keys(infoObj).length }} parameters
        </div>
        <el-radio-group v-model="paramX" style="margin-bottom: 30px">
          <el-radio-button
            v-for="item in Object.keys(infoObj).length"
            :key="item"
            :label="item"
            >parameters{{ item }}</el-radio-button
          >
        </el-radio-group>
        <div class="infoSource" v-if="Object.keys(infoObj).length">
          数据来源：{{ infoObj[`param${paramX}`].source }}
        </div>
      </div>
      <ele-info
        :paramInfo="infoObj[`param${paramX}`]"
        :key="paramX"
        v-if="Object.keys(infoObj).length"
        :atomList="atomList.atom"
      ></ele-info>
    </div>
  </div>
</template>

<script>
import EleInfo from "./ele-info.vue";
export default {
  name: "Electronic",
  props: { infoObj: Object, atomList: Object },
  components: {
    EleInfo,
  },
  data() {
    return {
      paramX: "1",
      eleParamObj: {},
      calParams: {
        nameList: [
          "Functional",
          "Energy Cutoff",
          "K-point",
          "U-value",
          "Code",
          "Magnetic Ordering",
        ],
        valueList: [],
      },
      eleCssParams: {
        shadow: "none",
        itemBox: {
          width: "370px",
        },
        title: {
          display: "block",
          "font-size": "24px",
          "margin-bottom": 0,
          width: "370px",
        },
      },
      bandParams: {
        nameList: ["Band Gap"],
        valueList: [],
      },
    };
  },
  watch: {
    // 监听vuex getters中的数据变化
    "$store.getters.allInfo"() {
      this.eleInfo();
    },
  },
  methods: {
    // 获取数据并处理
    eleInfo() {
      this.eleParamObj = this.infoObj.param1;
      // calculation summary
      const calsum = this.eleParamObj.calsys;
      this.calParams.valueList = [
        calsum.func,
        calsum.encut,
        calsum.kpoint,
        calsum.u,
        calsum.code,
        calsum.magnetic,
      ];
      // band gap
      this.bandParams.valueList = [
        this.assessData(this.infoObj.param1.bandgap, "ev"),
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
:deep(.el-radio-button--small .el-radio-button__inner) {
  padding: 5px 15px;
  font-size: 18px;
}
</style>
