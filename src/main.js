import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import * as echarts from "echarts";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/lib/theme-chalk/index.css";
import request from "./utils/request";
import storage from "./utils/storage";
import api from "./api";
import store from "./store";

console.log("环境变量=>", import.meta.env);
const app = createApp(App);
app.directive("has", {
  beforeMount: function (el, binding) {
    const actionList = storage.getItem("actionList");
    const value = binding.value;
    const hasPermission = actionList.includes(value);
    if (!hasPermission) {
      el.style = "display:none";
      setTimeout(() => {
        el.parentNode.removeChild(el);
      }, 0);
    }
  },
});
app.config.globalProperties.$request = request;
app.config.globalProperties.$api = api;
app.config.globalProperties.$storage = storage;
app.config.globalProperties.$echarts = echarts;
app.config.devtools = true;
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router).use(store).use(ElementPlus, { size: "small" }).mount("#app");
