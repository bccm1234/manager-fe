<template>
  <div>
    <div class="navBar">
      <img
        src="@/assets/images/material/CO2.png"
        title="logo"
        class="CO2-icon"
      />
      <div class="title">CO2 数据库</div>
    </div>
    <div class="whiteBG breadcrumb">
      <img src="@/assets/images/material/search.svg" class="search-icon" />
      <div class="searchTitle">Materials Search</div>
      <div class="guide darkBorder flex">
        <div class="help-box">
          <img src="@/assets/images/material/help.png" class="help-icon" />
        </div>
        <el-link href="#apps" :underline="false" class="guideLink"
          >User's Guide</el-link
        >
      </div>
    </div>
    <div class="content"><router-view></router-view></div>
  </div>
</template>

<script>
export default {
  name: "apps",
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/app.scss";
.content {
  margin-top: 140px;
}
</style>
