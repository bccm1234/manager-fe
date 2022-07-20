<template>
  <div>
    <div class="chemdoodleBox">
      <div class="supercellBox">
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
        >
          <form action="" v-show="!isCollapse" ref="chemForm">
            <div class="setTitle">SETTING</div>
            <div class="nextTitle">Supercell</div>
            <div style="width: 200px">
              <span class="inputLeft">X</span>
              <input
                class="inputRight"
                type="text"
                placeholder="eg:2"
                id="input1"
                autocomplete="off"
                @propertychange="checkNumInput('input1')"
                @input="checkNumInput('input1')"
                @keypress="checkNumInput('input1')"
              />
            </div>
            <div style="width: 200px">
              <span class="inputLeft">Y</span>
              <input
                class="inputRight"
                type="text"
                placeholder="eg:2"
                id="input2"
                autocomplete="off"
                @propertychange="checkNumInput('input2')"
                @input="checkNumInput('input2')"
                @keypress="checkNumInput('input2')"
              />
            </div>
            <div style="width: 200px">
              <span class="inputLeft">Z</span>
              <input
                class="inputRight"
                type="text"
                placeholder="eg:2"
                id="input3"
                autocomplete="off"
                @propertychange="checkNumInput('input3')"
                @input="checkNumInput('input3')"
                @keypress="checkNumInput('input3')"
              />
            </div>
            <div style="width: 230px">
              <button
                class="settingButton"
                @click="sentToChemIframe()"
                type="button"
              >
                Go!
              </button>
              <button
                class="settingButton"
                @click="refreshSupecell()"
                type="button"
              >
                Clean
              </button>
            </div>
          </form>
        </el-menu>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
          <div class="setButton el-icon-setting" @click="changeState()"></div>
        </el-radio-group>
      </div>
      <!-- chemdoodle -->
      <iframe
        :src="crystalURL"
        scrolling="no"
        class="modelCanvas br10"
        id="chemIframe"
      ></iframe>
    </div>
    <div class="colorDownload">
      <!-- 原子颜色 -->
      <ul>
        <li v-for="(item, index) in colorList" :key="index" style="float: left">
          <span class="colorList" :style="{ backgroundColor: item }"></span
          ><span class="textList">{{ modelInfo.atom[index] }}</span>
        </li>
      </ul>
      <!-- 下载 -->
      <span class="downloadBox br10"
        ><a class="el-icon-download download" :href="downLoadUrl"
          >DownLoad</a
        ></span
      >
    </div>
  </div>
</template>

<script>
import colorJson from "@/assets/json/color.json";
export default {
  name: "abstractModel",
  data() {
    return {
      // 默认扩胞侧边栏关闭
      isCollapse: true,
      downLoadUrl: "",
      // 模型设置栏表单内容
      input1: null,
      input2: null,
      input3: null,
      colorList: [],
      crystalURL: "",
    };
  },
  props: {
    modelInfo: Object,
  },
  mounted() {
    this.getColorList();
    this.dealUrl();
  },
  methods: {
    // 动态拼接下载链接
    dealUrl() {
      // console.log(this.infoObj.id);
      this.crystalURL = `http://localhost:3000/html/chemdoodle/chemdoodle.html?${this.modelInfo.id}`;
      this.downLoadUrl = `http://localhost:3000${this.modelInfo.cifurl}`;
    },
    // 设置扩胞侧边栏开关
    changeState() {
      this.isCollapse = !this.isCollapse;
      const input1 = document.getElementById("input1").value;
      const input2 = document.getElementById("input2").value;
      const input3 = document.getElementById("input3").value;
      setTimeout(() => {
        document.getElementById("input1").value = input1;
        document.getElementById("input2").value = input2;
        document.getElementById("input3").value = input3;
      }, 340);
    },
    // 发送模型设置框内容到iframe内的html页面
    sentToChemIframe() {
      const iFrame1 = document.getElementById("chemIframe");
      // 有输入值，传值，没有输入值，传默认值[2,2,2]
      const x = document.getElementById("input1").value
        ? document.getElementById("input1").value - 0
        : 2;
      const y = document.getElementById("input2").value
        ? document.getElementById("input2").value - 0
        : 2;
      const z = document.getElementById("input3").value
        ? document.getElementById("input3").value - 0
        : 2;
      const xyz = [x, y, z];
      // 发送消息到指chemdoodle页面
      iFrame1.contentWindow.postMessage(xyz, this.crystalURL);
    },
    refreshSupecell() {
      this.$refs.chemForm.reset();
      const iFrame1 = document.getElementById("chemIframe");
      iFrame1.contentWindow.postMessage("refresh", this.crystalURL);
    },
    // 限制输入框0-5之内
    checkNum(value) {
      let num = "" + value;
      // console.log(value);
      num = num.replace(/[^0-9]/g, "");
      // console.log(num);
      if (num === "0") {
        num = 1;
      }
      if (num >= 5) {
        num = 5;
      }
      value = num;
      return value;
    },
    checkNumInput(idName) {
      let value = document.getElementById(idName).value;
      value = this.checkNum(value);
      document.getElementById(idName).value = value;
    },
    // 获取颜色列表
    getColorList() {
      for (let i = 0; i < this.modelInfo.atom.length; i++) {
        this.colorList.push(colorJson[this.modelInfo.atom[i]]);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.chemdoodleBox {
  width: 420px;
  height: 420px;
}
//扩胞设置框---start---
.supercellBox {
  position: absolute;
  left: 25px;
  top: 25px;
  z-index: 1;
  width: 0;
}
//伸缩框展开面板
.el-menu-vertical-demo:not(.el-menu--collapse) {
  float: left;
  width: 260px;
  height: 420px;
  padding: 30px 15px;
  border-radius: 10px;
  border: 2px solid #cdd3dc;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
}
.el-menu {
  border: none;
}
//伸缩框收缩面板
.el-menu--collapse {
  float: left;
  width: 0;
  height: 420px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.6) !important;
  backdrop-filter: blur(2px);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
}
.setTitle {
  height: 40px;
  font-size: 28px;
  line-height: 40px;
  letter-spacing: 4px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
}
.nextTitle {
  height: 30px;
  font-size: 22px;
  line-height: 30px;
  text-transform: capitalize;
  color: #fff;
}
.inputLeft {
  display: inline-block;
  width: 64px;
  height: 30px;
  font-size: 18px;
  line-height: 30px;
  text-transform: capitalize;
  color: #ffffff;
  text-align: center;
}
.inputRight {
  width: 108px;
  height: 22px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  font-family: PHTM;
  font-size: 18px;
  text-indent: 20px;
  background: rgba(0, 0, 0, 0);
  color: #fff;
}
.inputRight::-webkit-input-placeholder {
  color: #464646;
}
//refresh/clean/go按钮
.settingButton {
  float: right;
  min-width: 55px;
  height: 25px;
  padding: 0 3px;
  margin-left: 15px;
  margin-top: 165px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  font-size: 18px;
  font-family: PHTM;
  background: #d8d8d8;
  cursor: pointer;
}
//侧边设置栏伸缩按钮
.setButton {
  float: left;
  width: 50px;
  height: 40px;
  margin-top: 30px;
  border-radius: 0px 10px 10px 0px;
  font-size: 24px;
  text-align: center;
  line-height: 40px;
  background: linear-gradient(
    90deg,
    #cdd3dc 0%,
    #cdd3dc 0%,
    #b9c0b9 100%,
    #b9c0b9 100%
  );
  box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
//chem渲染画布
.modelCanvas {
  position: absolute;
  left: 25px;
  top: 25px;
  z-index: 0;
  width: 420px;
  height: 420px;
  border: none;
  background: #ecf5ff;
  box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
}
</style>
