<template>
  <div class="abstractBox rightModule" id="0" v-if="infoObj">
    <!-- chemdoodle模型渲染框 -->
    <div class="modelBox">
      <Formula :modelInfo="infoObj" :key="infoObj.id"></Formula>
    </div>
    <!-- 右侧内容 -->
    <div class="baseInfo">
      <card-info :params="abstractParams" :cssParams="abstractCssParams"
        >Abstract</card-info
      >
      <div class="item" style="width: 300px; margin-left: 35px">
        <span class="itemLeft">Space Group:</span>
        <span class="itemRight" v-html="spagro"></span>
      </div>
      <card-info :params="latticeParams" :cssParams="latticeCssParams"
        >lattice(parameter1)</card-info
      >
    </div>
  </div>
</template>

<script>
import utils from "@/utils/utils";
import Formula from "@/components/Materials/details/Abstract/Formula.vue";
import cardInfo from "@/repeat/cardInfo.vue";
export default {
  name: "details-abstract",
  components: {
    Formula,
    cardInfo,
  },
  props: {
    infoObj: Object,
  },
  data() {
    return {
      abstractParams: {
        nameList: ["ID", "Crystal System"],
        valueList: [],
      },
      spagro: "",
      abstractCssParams: {
        shadow: "none",
        boxCard: {
          padding: "20px 35px 0 35px",
          width: "360px",
        },
        itemBox: {
          width: "300px",
        },
        title: {
          "letter-spacing": "4px",
          "margin-bottom": "40px",
        },
      },
      latticeParams: {
        nameList: ["a", "b", "c", "α", "β", "γ"],
        valueList: [],
      },
      latticeCssParams: {
        shadow: "none",
        boxCard: {
          padding: "0 35px",
          width: "360px",
        },
        itemBox: {
          width: "300px",
        },
        title: {
          "margin-bottom": 0,
          "font-size": "18px",
        },
      },
    };
  },
  watch: {
    // 监听数据变化，调用函数
    infoObj: {
      handler: function () {
        this.dealAbstractInfo();
      },
      deep: true,
    },
  },
  methods: {
    // 处理abstract信息
    dealAbstractInfo() {
      if (this.infoObj.crysys) {
        this.abstractParams.nameList = ["ID", "Crystal System"];
        this.abstractParams.valueList = [this.infoObj.id, this.infoObj.crysys];
        this.spagro = utils.tranStr(1, this.infoObj.spagro);
      } else {
        this.abstractParams.nameList = ["ID", "Miller Indices", "Termination"];
        this.abstractParams.valueList = [
          this.infoObj.id,
          this.infoObj.miller,
          this.infoObj.termination,
        ];
      }
      for (let i = 0; i < 3; i++) {
        this.latticeParams.valueList.push(
          utils.assessData(this.infoObj.lattice[i], "Å")
        );
      }
      for (let i = 3; i < 7; i++) {
        this.latticeParams.valueList.push(
          utils.assessData(this.infoObj.lattice[i], "°")
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.abstractBox {
  width: 860px;
  height: 520px;
  font-family: PHTM;
}
.modelBox {
  position: absolute;
  width: 470px;
  height: 520px;
  padding: 25px;
  border-radius: 10px;
  text-align: left;
  background: #ffffff;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
}
//右侧内容位置
.baseInfo {
  position: absolute;
  right: 0;
  width: 360px;
  height: 520px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
}
</style>
