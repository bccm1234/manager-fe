<template>
  <div class="optParamBox">
    <div v-if="paramInfo.calsum">
      <card-info
        :params="calParams"
        :cssParams="optCssParams"
        id="1-1"
        class="rightModule"
        >Calculation Summary</card-info
      >
      <div class="item mb20" style="width: 740px">
        <span class="itemLeft">More Details:</span>
        <span class="itemRight" v-if="paramInfo.calsum.fileurl"
          ><a :href="`http://localhost:3000${paramInfo.calsum.fileurl}`">{{
            paramInfo.calsum.fileurl
          }}</a></span
        >
        <span class="itemRight" v-if="!paramInfo.calsum.fileurl"
          >Not Found</span
        >
      </div>
      <card-info
        :params="latParams"
        :cssParams="optCssParams"
        class="mb20 rightModule"
        id="1-2"
        >Lattice(Optimized)</card-info
      >
      <card-info
        :params="symParams"
        :cssParams="optCssParams"
        class="mb20 rightModule"
        id="1-3"
        >Symmetry</card-info
      >
      <div class="item spaBox" v-if="paramInfo.spagro">
        <span class="itemLeft">Space Group:</span>
        <span class="itemRight" v-html="spaHtml" v-if="spaHtml"></span>
        <span class="itemRight" v-if="!spaHtml">Not Found</span>
      </div>
      <card-info
        :params="theParams"
        :cssParams="optCssParams"
        id="1-4"
        class="rightModule"
        >thermodynamic stability</card-info
      >
      <div class="item formulaBox">
        <span class="itemLeft">Formula:</span>
        <span class="itemRight" v-html="formulaHtml" v-if="formulaHtml"></span>
        <span class="itemRight" v-if="!formulaHtml">Not Found</span>
      </div>
    </div>
    <div v-if="!paramInfo" class="notFound">Not Found</div>
  </div>
</template>

<script>
import utils from "@/utils/utils";
import cardInfo from "@/component/cardInfo.vue";
export default {
  name: "optInfo",
  props: { paramInfo: Object },
  components: {
    cardInfo,
  },
  data() {
    return {
      spaHtml: "",
      formulaHtml: "",
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
      latParams: {
        nameList: ["a", "α", "b", "β", "c", "γ", "maxtrix of slab"],
        valueList: [],
      },
      symParams: {
        nameList: [],
        valueList: [],
      },
      theParams: {
        nameList: ["Total Energy"],
        valueList: [],
      },
      optCssParams: {
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
    };
  },
  mounted() {
    this.crystalCalInfo();
  },
  methods: {
    // 获取数据并处理
    crystalCalInfo() {
      // calculation summary
      const calsum = this.paramInfo.calsum;
      if (calsum) {
        this.calParams.valueList = [
          utils.assessData(calsum.func),
          utils.assessData(calsum.encut),
          utils.assessData(calsum.kpoint),
          utils.assessData(calsum.u),
          utils.assessData(calsum.code),
          utils.assessData(calsum.magnetic),
        ];
      }
      // lattice
      for (let i = 0; i < 3; i++) {
        this.latParams.valueList.push(
          utils.assessData(this.paramInfo.lattice[i], "Å")
        );
        this.latParams.valueList.push(
          utils.assessData(this.paramInfo.lattice[i + 3], "°")
        );
      }
      this.latParams.valueList.push(`(${this.paramInfo.maxtrix})`);
      // symmetry
      const idNumber = window.location.hash;
      const hashId = idNumber.substring(25, idNumber.length);
      if (hashId.includes("mB")) {
        this.symParams.nameList = ["Crystal System"];
        this.symParams.valueList = [utils.assessData(this.paramInfo.crysys)];
        this.spaHtml = utils.tranStr(1, this.paramInfo.spagro);
      } else if (hashId.includes("mS")) {
        this.symParams.nameList = ["Miller Indices", "Termination"];
        this.symParams.valueList = [
          utils.assessData(this.paramInfo.miller),
          utils.assessData(this.paramInfo.termination),
        ];
      }
      // thermodynamic stability
      this.theParams.valueList = [
        utils.assessData(this.paramInfo.totenergy, "ev"),
      ];
      let formulaStr = "";
      for (const i in this.paramInfo.formula) {
        if (this.paramInfo.formula.hasOwnProperty(i)) {
          formulaStr += `${i}${this.paramInfo.formula[i]}`;
        }
      }
      this.formulaHtml = utils.tranStr(0, formulaStr);
    },
  },
};
</script>

<style lang="scss" scoped>
.optParamBox {
  position: relative;
  width: 740px;
  height: 100%;
}
.spaBox {
  position: absolute;
  left: 370px;
  top: 487px;
}
.formulaBox {
  position: absolute;
  left: 370px;
  top: 591px;
}
</style>
