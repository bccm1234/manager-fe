<template>
  <div>
    <el-button @click="jumpToApps">材料数据库</el-button>
  </div>
</template>

<script>
export default {
  name: "DataQuery",
  methods: {
    jumpToApps() {
      this.$router.push({ path: "/apps" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
