<template>
  <!-- left -->
  <div id="leftBox">
    <!-- 元素卡片 -->
    <div class="formulaBox" v-if="infoObj">
      <div class="formulaId">{{ infoObj.id }}</div>
      <div class="formulaName" v-html="infoObj.substance"></div>
      <div class="formulaId">{{ infoObj.miller ? infoObj.miller : "" }}</div>
    </div>
    <!-- 左侧导航栏 -->
    <div class="leftNav">
      <div class="navTitle menuTitle">CONTENTS</div>
      <div class="manu">
        <div
          class="menuItem menuTitle activeItem"
          @click="changeColor($event), jump(0)"
        >
          Abstract
        </div>
        <div class="menuItem menuTitle" @click="changeColor($event), jump(1)">
          Structure optimization
        </div>
        <div class="menuItem" @click="changeColor($event), jump('1-1')">
          Calculation Summary
        </div>
        <div class="menuItem" @click="changeColor($event), jump('1-2')">
          lattice(optimized)
        </div>
        <div class="menuItem" @click="changeColor($event), jump('1-3')">
          Symmetry
        </div>
        <div class="menuItem" @click="changeColor($event), jump('1-4')">
          thermodynamic stability
        </div>
        <div class="menuItem menuTitle" @click="changeColor($event), jump(2)">
          Electronic Structure
        </div>
        <div class="menuItem" @click="changeColor($event), jump('2-1')">
          Calculation Summary
        </div>
        <div class="menuItem" @click="changeColor($event), jump('2-2')">
          band structure
        </div>
        <div class="menuItem" @click="changeColor($event), jump('2-3')">
          Density of states
        </div>
        <div class="menuItem" @click="changeColor($event), jump('2-4')">
          charge Density
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "details-leftbox",
  props: {
    infoObj: Object,
    formula: String,
  },
  data() {
    return {};
  },
  mounted() {
    window.addEventListener("scroll", this.menuFixed);
  },
  methods: {
    // 点击导航栏跳转
    jump(id) {
      const scrolly =
        document.getElementById(id).getBoundingClientRect().top +
        document.documentElement.scrollTop;
      window.scrollTo(0, scrolly - 200);
    },
    changeColor(event) {
      const menuItems = document.getElementsByClassName("menuItem");
      for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].classList.remove("activeItem");
      }
      event.target.classList.add("activeItem");
    },
    menuFixed() {
      const scrolltop = document.documentElement.scrollTop;
      const leftBox = document.getElementById("leftBox");
      if (scrolltop > 150) {
        leftBox.className = "leftBox";
      } else {
        leftBox.classList.remove("leftBox");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.leftBox {
  position: fixed;
  top: -20px;
  left: 50%;
  width: 320px;
  height: 100%;
  margin-left: -615px;
  text-align: left;
}
//元素卡片
.formulaBox {
  /* title */
  width: 320px;
  padding-top: 40px;
  margin-bottom: 40px;
  text-align: center;
  color: #3d3d3d;
  user-select: none;
}
.formulaName {
  height: 75px;
  font-family: "PHTB";
  font-size: 64px;
  letter-spacing: 1px;
  line-height: 75px;
  font-weight: bold;
}
.formulaId {
  width: 100%;
  height: 36px;
  font-family: "PHTR";
  font-size: 24px;
  line-height: 36px;
  text-align: center;
}
.leftNav {
  font-family: "PHTM";
  line-height: 45px;
  font-size: 18px;
  text-align: left;
  width: 320px;
}
.navTitle {
  font-family: PHTB;
  letter-spacing: 6px;
  margin-bottom: 30px;
}
.menuItem {
  text-indent: 80px;
  border-radius: 10px;
  height: 45px;
  line-height: 45px;
}
.menuTitle {
  text-indent: 50px;
}
.activeItem {
  background: #337ecc;
  color: #fff;
}
</style>
