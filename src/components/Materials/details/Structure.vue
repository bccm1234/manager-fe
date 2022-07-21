<template>
  <div id="1" class="rightModule" v-if="infoObj">
    <div class="moduleTitle">Structure optimization</div>
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
      <opt-info
        :paramInfo="infoObj[`param${paramX}`]"
        :key="paramX"
        v-if="Object.keys(infoObj).length"
      ></opt-info>
    </div>
  </div>
</template>

<script>
import optInfo from "@/components/materials/details/opt-info.vue";
export default {
  name: "Structure",
  props: ["infoObj"],
  components: {
    optInfo,
  },
  data() {
    return {
      paramX: "1",
    };
  },
};
</script>
<style lang="scss" scoped>
:deep(.el-radio-button--small .el-radio-button__inner) {
  padding: 5px 15px;
  font-size: 18px;
}
</style>
