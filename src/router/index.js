import { createRouter, createWebHashHistory } from "vue-router";
import storage from "./../utils/storage";
import API from "./../api";
import utils from "./../utils/utils";

const routes = [
  {
    name: "home",
    path: "/",
    meta: {
      title: "首页",
    },
    component: () => import("@/views/Home.vue"),
    redirect: "/welcome",
    children: [
      {
        name: "welcome",
        path: "/welcome",
        meta: {
          title: "welcome",
        },
        component: () => import("@/views/Home/welcome.vue"),
      },
    ],
  },
  {
    name: "login",
    path: "/login",
    meta: {
      title: "登录",
    },
    component: () => import("@/views/Login.vue"),
  },
  {
    name: "404",
    path: "/404",
    meta: {
      title: "页面不存在",
    },
    component: () => import("@/views/404.vue"),
  },
  {
    name: "apps",
    path: "/apps",
    meta: {
      title: "数据库",
    },
    component: () => import("@/views/apps.vue"),
    redirect: "/apps/materials/index",
    children: [
      {
        name: "materials-index",
        path: "materials/index",
        meta: {
          title: "材料数据库首页",
        },
        component: () => import("@/views/Apps/materials/index.vue"),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

/**
 * 异步加载路由
 * @param {none} 无参数
 * @return {none} 无返回
 */
async function loadAsyncRoutes() {
  const userInfo = storage.getItem("userInfo") || {};
  const modules = import.meta.glob("./../views/Home/*.vue"); // vite 特有的动态导入方法
  if (userInfo.token) {
    try {
      const { menuList } = await API.getPermissionList();
      const routes = utils.generateRoute(menuList);
      routes.map((route) => {
        const url = `./../views/Home/${route.component}.vue`;
        route.component = modules[url];
        router.addRoute("home", route);
      });
    } catch (error) {}
  }
}
await loadAsyncRoutes();
// 判断当前地址是否可以访问
/*
function checkPermission(path) {
    let hasPermission = router.getRoutes().filter(route => route.path == path).length;
    if (hasPermission) {
        return true;
    } else {
        return false;
    }
}
*/
// 导航守卫
router.beforeEach((to, from, next) => {
  if (router.hasRoute(to.name)) {
    document.title = to.meta.title;
    next();
  } else {
    next("/404");
  }
});

router.beforeEach(async (to, from, next) => {
  if (from.name == "login") {
    await loadAsyncRoutes();
    next();
  } else next();
});

export default router;
