<template>
  <div>
    <el-card
      :style="cssParams.boxCard"
      class="box-card"
      :shadow="cssParams.shadow"
      :body-style="{ padding: '0px' }"
    >
      <div class="cardTitle" :style="cssParams.title">
        <span><slot></slot></span>
      </div>
      <div
        v-for="(item, index) in params.nameList"
        :key="item"
        class="item"
        :style="cssParams.itemBox"
      >
        <span class="leftItem" :style="cssParams.leftItem">{{
          item + (params.separator ? params.separator : ":")
        }}</span
        ><span class="rightItem">{{ params.valueList[index] }}</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "cardInfo",
  props: {
    params: {
      type: Object,
      default: () => ({
        nameList: [],
        separator: ":",
        valueList: [],
      }),
    },
    cssParams: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped>
.item {
  display: inline-block;
  width: 285px;
  text-align: left;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
}
.cardTitle {
  display: inline-block;
  font-family: "PHTB";
  width: 285px;
  text-align: left;
  height: 40px;
  line-height: 40px;
  font-size: 24px;
}
.leftItem {
  font-family: "PHTM";
  margin-right: 10px;
}
.rightItem {
  font-family: "PHTR";
}
.box-card {
  display: inline-block;
  width: 100%;
  border-radius: 10px;
  border: none;
  color: #131414;
  box-sizing: border-box;
}
</style>
