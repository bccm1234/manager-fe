<template>
  <!-- left -->
  <div id="leftBox">
    <!-- 元素卡片 -->
    <div class="formulaBox" v-if="infoObj">
      <div class="formulaId">{{ infoObj.id }}</div>
      <div class="formulaName" v-html="formula"></div>
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
      </div>
    </div>
  </div>
</template>

<script>
import utils from "@/utils/utils";
export default {
  name: "LeftBox",
  props: {
    infoObj: Object,
  },
  data() {
    return {
      navTop: -20,
      footerHeight: 3000,
      lastItemBottm: 0,
      formula: "",
    };
  },
  created() {
    this.menuFixed;
  },
  watch: {
    infoObj: {
      handler: function () {
        this.formula = utils.tranStr(0, this.infoObj.substance);
      },
      deep: true,
    },
  },
  mounted() {
    window.addEventListener("scroll", this.menuFixed);
    setTimeout(() => {
      this.getLastItemBottm();
    }, 100);
    window.onresize = () => {
      this.getLastItemBottm();
      scrollTo(0, 0);
    };
    scrollTo(0, 0);
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
      const windowHeight = window.innerHeight;
      const footer = document.getElementById("footer").getBoundingClientRect();
      const scrolltop = document.documentElement.scrollTop;
      const activeItem = document
        .getElementsByClassName("activeItem")[0]
        .getBoundingClientRect();
      const activeBottom = activeItem.bottom;
      const leftBox = document.getElementById("leftBox");
      if (scrolltop > 150) {
        leftBox.className = "leftBox";
        leftBox.style.top = `${this.navTop}px`;
        if (activeBottom - windowHeight > 0) {
          this.navTop -= activeBottom - windowHeight;
        }
        if (scrolltop > this.footerHeight) {
          if (this.lastItemBottm > windowHeight - footer.top + 20) {
            leftBox.style.top = `-20px`;
          } else {
            let h = 0;
            h =
              this.navTop +
              (this.lastItemBottm - (windowHeight - footer.top)) -
              20;
            leftBox.style.top = `${h}px`;
          }
        }
      } else {
        this.navTop = -20;
        leftBox.classList.remove("leftBox");
      }
    },
    getLastItemBottm() {
      const windowHeight = window.innerHeight;
      const items = document.getElementsByClassName("menuItem");
      const lastItem = items[items.length - 1];
      this.lastItemBottm =
        windowHeight - lastItem.getBoundingClientRect().bottom + 150;
      this.footerHeight =
        document.getElementById("footer").getBoundingClientRect().top -
        window.innerHeight;
    },
  },
};
</script>

<style lang="scss" scoped>
.leftBox {
  position: fixed;
  left: 50%;
  top: -20px;
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
