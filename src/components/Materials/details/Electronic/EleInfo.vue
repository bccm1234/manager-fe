<template>
  <div v-if="paramInfo">
    <card-info
      :params="calParams"
      :cssParams="eleCssParams"
      id="2-1"
      class="rightModule"
      >Calculation Summary</card-info
    >
    <div class="item mb20" style="width: 370px">
      <span class="itemLeft">Cube File:</span>
      <span class="itemRight"
        ><a :href="`http://localhost:3000${paramInfo.cubeurl}.cube`"
          >cube</a
        ></span
      >
    </div>
    <div class="item mb20" style="width: 370px">
      <span class="itemLeft">More Details:</span>
      <span class="itemRight"
        ><a :href="`http://localhost:3000${paramInfo.calsys.fileurl}`"
          >ele.zip</a
        ></span
      >
    </div>
    <card-info
      :params="bandParams"
      :cssParams="eleCssParams"
      id="2-2"
      class="rightModule"
      >Band Structure</card-info
    >
    <Band class="mb20 canvas" v-if="paramInfo.bandurl"></Band>
    <card-info :cssParams="eleCssParams" id="2-3" class="rightModule"
      >Density of states</card-info
    >
    <Dos class="mb20 canvas" v-if="paramInfo.dosurl"></Dos>
  </div>
</template>

<script>
import utils from "@/utils/utils";
import CardInfo from "@/repeat/cardInfo.vue";
import Band from "@/components/materials/details/Electronic/Band.vue";
import Dos from "@/components/materials/details/Electronic/DOs.vue";
export default {
  name: "EleInfo",
  props: { paramInfo: Object, atomList: Array },
  components: { CardInfo, Band, Dos },
  data() {
    return {
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
  mounted() {
    this.eleInfo();
  },
  methods: {
    // 获取数据并处理
    eleInfo() {
      // calculation summary
      const calsum = this.paramInfo.calsys;
      this.calParams.valueList = [
        utils.assessData(calsum.func),
        utils.assessData(calsum.encut),
        utils.assessData(calsum.kpoint),
        utils.assessData(calsum.u),
        utils.assessData(calsum.code),
        utils.assessData(calsum.magnetic),
      ];
      // band gap
      this.bandParams.valueList = [
        utils.assessData(this.paramInfo.bandgap, "ev"),
      ];
    },
  },
};
</script>
