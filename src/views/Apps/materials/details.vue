<template>
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
      <div style="height: 40px"></div>
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
      const hashId = idNumber.substring(25, idNumber.length);
      const res = await this.$api.findMaterialsDetails({
        id: hashId,
      });
      this.allInfo = res;
    },
    // 滑动页面相应导航单改变
    scrollColor() {
      const nav = document.getElementsByClassName("menuItem");
      const item = document.getElementsByClassName("rightModule");
      for (let i = 0; i < item.length; i++) {
        const distanceT = item[i].getBoundingClientRect().top;
        if (distanceT < 200 && distanceT > 0) {
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
.detailsbox {
  position: relative;
  left: 50%;
  top: 40px;
  margin-left: -615px;
  width: 1230px;
  height: 1000px;
  //不可选中
  user-select: none;
}
.leftBox {
  float: left;
  width: 320px;
}
.rightBox {
  float: right;
  left: 370px;
  width: 860px;
  height: 600px;
}
//子组件样式穿透
//标题
:deep(.title) {
  width: 740px;
  height: 40px;
  font-size: 24px;
  font-family: PHTB;
  line-height: 40px;
  color: #131414;
}
//小项
:deep(.item) {
  display: inline-block;
  width: 370px;
  height: 40px;
  font-family: PHTM;
  font-size: 18px;
  line-height: 40px;
  color: #3d3d3d;
}
:deep(.itemLeft) {
  display: inline-block;
  margin-right: 10px;
}
:deep(.itemRight) {
  font-family: "PHTR";
  user-select: text;
}
:deep(canvas) {
  border-radius: 10px;
  background: #eef5ff;
  box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
}
//右侧内容组件标题
:deep(.moduleTitle) {
  width: 860px;
  height: 50px;
  font-family: PHTB;
  font-size: 32px;
  line-height: 50px;
  text-align: left;
  text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  color: #3d3d3d;
  margin-bottom: 30px;
}
//组件体
:deep(.body) {
  background-color: #fff;
  width: 860px;
  padding: 30px 60px;
  text-align: left;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
}
//参数个数
:deep(.el-radio-group) {
  margin: 15px 0 !important;
  .el-radio-button {
    height: 32px;
    font-family: PHTR;
    font-size: 18px;
    line-height: 32px;
    :deep(.el-radio-button__inner) {
      height: 32px;
      line-height: 32px;
      font-size: 18px;
      padding: 0 15px;
    }
  }
}
:deep(.infoSource) {
  height: 24px;
  font-family: PHTL;
  font-size: 18px;
  color: #3d3d3d;
}
//模型颜色、文件下载框
:deep(.colorDownload) {
  width: 100%;
  height: 32px;
  margin-top: 24px;
  font-family: "PHTM";
}
:deep(.colorList) {
  float: left;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  margin-top: 4px;
}
:deep(.textList) {
  float: left;
  margin-right: 5px;
  font-family: "PHTB";
  font-size: 18px;
  line-height: 32px;
}
:deep(.downloadBox) {
  float: right;
  width: 137px;
  height: 32px;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  background: #f4f4f5;
  border: 1px solid #c0c4cc;
}
:deep(.download) {
  font-weight: 500;
  text-decoration: none;
  color: #000;
}
//doi链接样式
:deep(.doiLink) {
  text-decoration: none;
  color: #000;
}
//样式
:deep(.br-10) {
  border-radius: 10px;
}
:deep(.mb-20) {
  margin-bottom: 20px;
}
:deep(.notFound) {
  font-size: 24px;
  font-weight: 700;
}
:deep(a) {
  color: #409eff;
}
</style>
