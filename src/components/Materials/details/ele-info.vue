<template>
  <div v-if="paramInfo">
    <card-info
      :params="calParams"
      :cssParams="eleCssParams"
      id="2-1"
      class="rightModule"
      >Calculation Summary</card-info
    >
    <div class="item mb-20">
      <span class="itemLeft">More Details:</span>
      <span class="itemRight"
        ><a :href="paramInfo.calsys.fileurl">{{
          paramInfo.calsys.fileurl
        }}</a></span
      >
    </div>
    <card-info
      :params="bandParams"
      :cssParams="eleCssParams"
      id="2-2"
      class="rightModule"
      >Band Structure</card-info
    >
    <band-picture class="mb-20" v-if="paramInfo.bandurl"></band-picture>
    <card-info :cssParams="eleCssParams" id="2-3" class="rightModule"
      >Density of states</card-info
    >
    <dos-picture class="mb-20" v-if="paramInfo.dosurl"></dos-picture>
    <card-info :cssParams="eleCssParams" id="2-4" class="rightModule"
      >charge Density</card-info
    >
    <charge-canvas :atomList="atomList"></charge-canvas>
  </div>
</template>

<script>
import utils from "@/utils/utils";
import CardInfo from "@/component/cardInfo.vue";
import bandPicture from "@/components/materials/details/band-picture.vue";
import dosPicture from "./dos-picture.vue";
import chargeCanvas from "./charge-calculation.vue";
export default {
  name: "details-band",
  props: { paramInfo: Object, atomList: Array },
  components: { CardInfo, bandPicture, dosPicture, chargeCanvas },
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
