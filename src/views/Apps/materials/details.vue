<template>
  <div class="detailsBody">
    <div class="detailsbox">
      <!-- 左侧导航栏 -->
      <div class="leftBox">
        <left-box :infoObj="allInfo.abs"></left-box>
      </div>
      <!-- 右侧内容部分 -->
      <div class="rightBox">
        <Abstract :infoObj="allInfo.abs"> </Abstract>
        <Structure :infoObj="allInfo.opt" style="margin: 60px 0"></Structure>
        <Electronic :infoObj="allInfo.ele" :atomList="allInfo.abs"></Electronic>
      </div>
    </div>
  </div>
</template>
<script>
import leftBox from "@/components/Materials/details/leftBox.vue";
import Abstract from "@/components/Materials/details/Abstract.vue";
import Structure from "@/components/Materials/details/Structure.vue";
import Electronic from "@/components/Materials/details/Electronic.vue";
export default {
  name: "materials-details",
  components: {
    leftBox,
    Abstract,
    Structure,
    Electronic,
  },
  data() {
    return {
      allInfo: {},
    };
  },
  created() {
    this.fetchData();
    window.scrollTo(0, 0);
  },
  mounted() {
    // 监听页面滚动事件
    window.addEventListener("scroll", this.scrollColor);
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: {
      handler() {
        this.fetchData();
      },
    },
  },
  methods: {
    // 获取并处理数据
    async fetchData() {
      const idNumber = window.location.hash;
      const hashId = idNumber.substring(28, idNumber.length);
      this.allInfo = await this.$api.findMaterialsDetails({
        id: hashId,
      });
    },
    // 滑动页面相应导航单改变
    scrollColor() {
      const nav = document.getElementsByClassName("menuItem");
      const item = document.getElementsByClassName("rightModule");
      for (let i = 0; i < item.length; i++) {
        const distanceT = item[i].getBoundingClientRect().top;
        if (distanceT < 250 && distanceT > 0) {
          for (let i = 0; i < item.length; i++) {
            nav[i].classList.remove("activeItem");
          }
          nav[i].classList.add("activeItem");
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/style/details.scss";
</style>
