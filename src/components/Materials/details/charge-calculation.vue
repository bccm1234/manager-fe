<template>
  <div>
    <div class="chargeBox">
      <div class="chargeTop">
        <!-- 模型设置表单 -->
        <div class="chargeSetBox">
          <el-menu
            default-active="1-4-1"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
          >
            <form action="" v-show="!isCollapse" ref="chargeForm">
              <div class="setTitle">SETTING</div>
              <div class="nextTitle">Isosurface</div>
              <table class="isoSetTable">
                <tr>
                  <td>Choose</td>
                  <td>Model</td>
                  <td>isosurface level&nbsp;</td>
                  <td>Color</td>
                </tr>
                <tr>
                  <td>
                    <el-checkbox
                      v-model="isPositive"
                      class="chargeCheck"
                    ></el-checkbox>
                  </td>
                  <td>Positive</td>
                  <td>
                    <input
                      type="text"
                      id="inputP"
                      class="isoInput"
                      placeholder="eg:0.05"
                      autocomplete="off"
                      @input="checkNumP()"
                      value=""
                    />
                  </td>
                  <td class="colorBox">
                    <el-color-picker v-model="colorPositive"></el-color-picker>
                  </td>
                </tr>
                <tr>
                  <td>
                    <el-checkbox
                      v-model="isNegative"
                      class="chargeCheck"
                    ></el-checkbox>
                  </td>
                  <td>Negative</td>
                  <td>
                    <input
                      type="text"
                      id="inputN"
                      class="isoInput"
                      placeholder="eg:-0.05"
                      autocomplete="off"
                      @propertychange="checkNumN()"
                      @input="checkNumN()"
                      @keypress="checkNumN()"
                    />
                  </td>
                  <td class="colorBox">
                    <el-color-picker
                      v-model="colorNegative"
                      size=""
                    ></el-color-picker>
                  </td>
                </tr>
                <tr style="font-size: 22px">
                  <td>Move</td>
                  <td>Model</td>
                </tr>
                <tr>
                  <td>
                    <el-checkbox
                      v-model="isMoveX"
                      class="chargeCheck"
                    ></el-checkbox>
                  </td>
                  <td>X Axis</td>
                  <td>
                    <input
                      type="text"
                      id="inputX"
                      class="isoInput"
                      placeholder="eg:20"
                      autocomplete="off"
                      oninput="value=value.replace(/[^\d]/g,'').replace(/^0{1,}/g,'');"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <el-checkbox
                      v-model="isMoveY"
                      class="chargeCheck"
                    ></el-checkbox>
                  </td>
                  <td>Y Axis</td>
                  <td>
                    <input
                      id="inputY"
                      type="text"
                      class="isoInput"
                      placeholder="eg:20"
                      autocomplete="off"
                      oninput="value=value.replace(/[^\d]/g,'').replace(/^0{1,}/g,'');"
                    />
                  </td>
                </tr>
                <tr style="font-size: 22px">
                  <td>Spin</td>
                </tr>
              </table>
              <div class="settingButtons">
                <button
                  class="settingButton"
                  @click="sentToChargeIframe"
                  type="button"
                >
                  Go!
                </button>
                <button
                  class="settingButton"
                  @click="refreshModel"
                  type="button"
                >
                  Clean
                </button>
              </div>
            </form>
            <table v-show="!isCollapse" class="spinSelectTable">
              <tr>
                <td style="width: 64px; text-align: center">
                  <el-checkbox
                    v-model="isSpin"
                    class="chargeCheck"
                  ></el-checkbox>
                </td>
                <td class="spinSelect" style="width: 80px; text-align: center">
                  <el-select v-model="spinAxis" :popper-append-to-body="isbody">
                    <el-option key="选项1" label="X Axis" value="x"></el-option>
                    <el-option key="选项2" label="Y Axis" value="y"></el-option>
                    <el-option
                      key="选项3"
                      label="Z Axis"
                      value="z"
                      selected
                    ></el-option>
                  </el-select>
                </td>
              </tr>
            </table>
          </el-menu>
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
            <div class="setButton el-icon-setting" @click="changeState()"></div>
          </el-radio-group>
        </div>
        <!-- 3Dmol模型渲染 -->
        <iframe
          :src="chargeURL"
          scrolling="no"
          class="chargeCanvas"
          id="chargeIframe"
        ></iframe>
      </div>
      <div class="colorDownload">
        <!-- 原子颜色 -->
        <ul>
          <li
            v-for="(item, index) in colorList"
            :key="index"
            style="float: left"
          >
            <span class="colorList" :style="{ backgroundColor: item }"></span
            ><span class="textList">{{ atomList[index] }}</span>
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
  </div>
</template>

<script>
import colorJson from "@/assets/json/color.json";
export default {
  name: "charge-calucation",
  props: {
    atomList: Array,
    fileUrl: String,
  },
  data() {
    return {
      // 表单相关内容
      isCollapse: true,
      isPositive: false,
      isNegative: false,
      isMoveX: false,
      isMoveY: false,
      isSpin: false,
      colorPositive: "#ffff56",
      colorNegative: "#78fbfd",
      spinAxis: "z",
      isbody: false,
      chargeURL: "",
      // 原子颜色列表/下载链接
      colorList: [],
      downLoadUrl: "",
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    // 获取页面hash值传给3dmol
    fetchData() {
      this.chargeURL = `http://localhost:3000/html/3dmol/3Dmol.html?${this.fileUrl}`;
      for (let i = 0; i < this.atomList.length; i++) {
        this.colorList.push(colorJson[this.atomList[i]]);
      }
      this.downLoadUrl = `http://localhost:3000${this.fileUrl}`;
    },
    // 限制positive输入0-1内的四位小数
    checkNumP() {
      let value = document.getElementById("inputP").value;
      let num = "" + value;
      num = num
        .replace(/[^\d.]/g, "")
        .replace(".", "$#$")
        .replace(/\./g, "")
        .replace("$#$", ".")
        .replace(/^(\.-)*(\d+)\.(\d\d\d\d).*$/, "$1$2.$3");
      if (num.indexOf(".") < 0 && num !== "") {
        num = parseFloat(num);
      }
      if (num >= 1) {
        num = 1;
      }
      value = num;
      document.getElementById("inputP").value = value;
    },
    // 限制negative输入-1-0内的四位小数
    checkNumN() {
      let value = document.getElementById("inputN").value;
      let numStr = "" + value;
      let num = numStr.replace("-", "");
      num = num
        .replace(/[^\d.]/g, "")
        .replace(".", "$#$")
        .replace(/\./g, "")
        .replace("$#$", ".")
        .replace(/^(\.-)*(\d+)\.(\d\d\d\d).*$/, "$1$2.$3");
      if (num.indexOf(".") < 0 && num !== "") {
        num = parseFloat(num);
      }
      if (num >= 1) {
        num = 1;
      }
      if (numStr !== "") {
        numStr = "-" + num;
      }
      value = numStr;
      document.getElementById("inputN").value = value;
    },
    // 改变设置侧边栏开关状态，保存表单输入内容
    changeState() {
      this.isCollapse = !this.isCollapse;
      const inputP = document.getElementById("inputP").value;
      const inputN = document.getElementById("inputN").value;
      const inputX = document.getElementById("inputX").value;
      const inputY = document.getElementById("inputY").value;
      console.log(inputP, inputN, inputX, inputY);
      setTimeout(() => {
        document.getElementById("inputP").value = inputP;
        document.getElementById("inputN").value = inputN;
        document.getElementById("inputX").value = inputX;
        document.getElementById("inputY").value = inputY;
      }, 340);
    },
    // 发送表单内容到html页面
    sentToChargeIframe(refresh = false) {
      const chargeIframe = document.getElementById("chargeIframe");
      const isovalPositive = this.isPositive
        ? document.getElementById("inputP").value
          ? document.getElementById("inputP").value - 0
          : 0.01
        : 0.01;
      const isoPositiveColor = this.isPositive ? this.colorPositive : "#ffff56";
      const isoNegativeColor = this.isNegative ? this.colorNegative : "#78fbfd";
      const isovalNegative = this.isNegative
        ? document.getElementById("inputN").value
          ? document.getElementById("inputN").value - 0
          : -0.01
        : -0.01;
      const moveX = this.isMoveX
        ? document.getElementById("inputX").value
          ? document.getElementById("inputX").value - 0
          : 0
        : 0;
      const moveY = this.isMoveY
        ? document.getElementById("inputY").value
          ? document.getElementById("inputY").value - 0
          : 0
        : 0;
      const translate = [moveX, moveY];
      const spinSpeed = this.isSpin ? 1 : 0;
      const chargeConfig = {
        isovalPositive,
        isovalNegative,
        isoPositiveColor,
        isoNegativeColor,
        translate,
        spinAxis: this.spinAxis,
        spinSpeed,
      };
      chargeIframe.contentWindow.postMessage(chargeConfig, this.chargeURL);
    },
    // 表单内容重置
    resetChargeForm() {
      this.$refs.chargeForm.reset();
      (this.isPositive = false),
        (this.isNegative = false),
        (this.isMoveX = false),
        (this.isMoveY = false),
        (this.isSpin = false),
        (this.colorPositive = "#ffff56"),
        (this.colorNegative = "#78fbfd"),
        (this.spinAxis = "z");
    },
    // 销毁画布重新渲染模型
    refreshModel() {
      this.resetChargeForm();
      const chargeConfig = {
        isRefresh: true,
      };
      const chargeIframe = document.getElementById("chargeIframe");
      chargeIframe.contentWindow.postMessage(chargeConfig, this.chargeURL);
    },
  },
};
</script>

<style lang="scss" scoped>
.chargeBox {
  position: relative;
  font-family: PHTM;
}
.chargeTop {
  width: 740px;
  height: 500px;
  margin: 10px 0;
  font-size: 18px;
  text-align: right;
}
//charge伸缩设置框，start
.chargeSetBox {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 2;
  width: 0;
  height: 0;
}
//伸缩框设置
//伸缩框展开面板
.el-menu-vertical-demo:not(.el-menu--collapse) {
  float: left;
  width: 370px;
  height: 500px;
  padding: 30px 15px;
  border: 2px solid #cdd3dc;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
}
.el-menu {
  border: none;
}
//伸缩框收起面板
.el-menu--collapse {
  float: left;
  width: 0;
  height: 500px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.6) !important;
  backdrop-filter: blur(2px);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
}
.setTitle {
  height: 40px;
  font-size: 28px;
  line-height: 40px;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-align: center;
  color: #ffffff;
}
.nextTitle {
  height: 30px;
  font-size: 22px;
  line-height: 30px;
  text-transform: capitalize;
  text-align: left;
  color: #fff;
}
.isoSetTable {
  width: 340px;
  font-size: 18px;
  text-align: center;
  color: #fff;
}
.isoSetTable > tr {
  height: 30px;
  line-height: 29px;
}
//选择框
.chargeCheck :deep(.el-checkbox__input > .el-checkbox__inner) {
  width: 18px;
  height: 18px;
  border: 2px solid #fff;
  background-color: rgba(0, 0, 0, 0);
}
.isoInput {
  width: 108px;
  height: 22px;
  border-radius: 10px;
  box-sizing: border-box;
  border: 1px solid #ffffff;
  font-family: PHTM;
  text-indent: 15px;
  font-size: 18px;
  font-weight: 500;
  background: none;
  color: #fff;
}
input::-webkit-input-placeholder {
  font-size: 18px;
  font-weight: 500;
  text-transform: lowercase;
  letter-spacing: 0px;
  color: #464646;
}
//颜色选择器
:deep(.el-color-picker--small) {
  position: relative;
  top: 3px;
  height: 22px;
  .el-color-picker__trigger {
    width: 22px;
    height: 22px;
    border-radius: 11px;
    padding: 0;
    border: none;
    .el-color-picker__color {
      border: none;
      .el-color-picker__color-inner {
        border: 1px solid #fff;
        border-radius: 11px;
      }
    }
    .el-color-picker__icon {
      font-size: 0;
    }
  }
}
.spinSelectTable {
  position: relative;
  top: -30px;
}
//模型旋转xyz下拉选框
.spinSelect :deep(.el-select) {
  .select-trigger {
    .el-input {
      .el-input__inner {
        width: 64px;
        height: 30px;
        padding: 0 5px;
        border: 1px solid #fff;
        border-radius: 0;
        font-family: PHTM;
        font-size: 18px;
        line-height: 30px;
        text-transform: capitalize;
        letter-spacing: 0px;
        color: #5f6266;
        background: #d8d8d8;
      }
      .el-input__suffix > .el-input__suffix-inner > .el-select__caret {
        display: none;
      }
    }
  }
  .el-popper {
    width: 64px;
    border: none;
    top: 30px !important;
    .el-scrollbar .el-select-dropdown__list {
      padding: 0;
      border-bottom: 1px solid #fff;
      .el-select-dropdown__item {
        width: 64px;
        height: 30px;
        padding: 0;
        border-left: 1px solid #fff;
        border-right: 1px solid #fff;
        font-family: PHTM;
        font-size: 18px;
        line-height: 30px;
        color: #fff;
        background: rgba(0, 0, 0, 0.6);
      }
    }
    .el-popper__arrow::before {
      display: none;
    }
  }
}
//go/clean/refresh 按钮
//按钮总盒子
.settingButtons {
  position: relative;
  top: 105px;
  width: 340px;
  height: 30px;
}
//每个按钮
.settingButton {
  float: right;
  min-width: 55px;
  height: 25px;
  padding: 0 3px;
  margin-left: 15px;
  border-radius: 10px;
  border: 1px solid #ffffff;
  font-size: 18px;
  font-family: PHTM;
  background: #d8d8d8;
  cursor: pointer;
}
//设置（抽屉开关按钮）
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
//侧边设置栏end
//charge渲染画布
.chargeCanvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 740px;
  height: 500px;
  margin: 0 0 20px;
  border: none;
  border-radius: 10px;
  background: #eef5ff;
  box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
}
</style>
