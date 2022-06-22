/* eslint-disable vue/no-dupe-keys */
<template>
  <div class="basic-layout">
    <div :class="['nav-side', isCollapse ? 'fold' : 'unfold']">
      <!-- 系统LOGO -->
      <div class="logo">
        <img src="./../assets/logo.png" />
        <span>Manager</span>
      </div>
      <!-- 导航菜单 -->
      <el-menu
        :default-active="activeMenu"
        background-color="#001529"
        text-color="#fff"
        router
        :collapse="isCollapse"
        class="nav-menu"
      >
        <tree-menu :userMenu="userMenu" />
      </el-menu>
    </div>
    <div :class="['content-right', isCollapse ? 'fold' : 'unfold']">
      <div class="nav-top">
        <div class="nav-left">
          <div class="menu-fold" @click="toggle">
            <i class="el-icon-s-fold"></i>
          </div>
          <div class="bread">
            <BreadCrumb />
          </div>
        </div>
        <div class="user-info">
          <el-badge
            :is-dot="noticeCount > 0 ? true : false"
            class="notice"
            type="danger"
            @click="$router.push('/audit/approve')"
          >
            <i class="el-icon-bell"></i>
          </el-badge>
          <el-dropdown @command="handleLogout">
            <span class="user-link">
              {{ userInfo.userName }}
              <i class="el-icon--right"></i>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="email"
                  >邮箱：{{ userInfo.userEmail }}</el-dropdown-item
                >
                <el-dropdown-item command="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
      <div class="wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import TreeMenu from "./TreeMenu.vue";
import BreadCrumb from "./BreadCrumb.vue";
export default {
  name: "Home",
  components: { TreeMenu, BreadCrumb },
  data() {
    return {
      isCollapse: false,
      userInfo: this.$store.state.userInfo,
      userMenu: [],
      activeMenu: location.hash.slice(1),
    };
  },
  computed: {
    noticeCount() {
      return this.$store.state.noticeCount || 0;
    },
  },
  mounted() {
    // this.getNoticeCount();
    this.getMenuList();
  },
  methods: {
    toggle() {
      this.isCollapse = !this.isCollapse;
    },
    handleLogout(key) {
      if (key == "email") return;
      this.$store.commit("saveUserInfo", "");
      this.userInfo = {};
      this.$router.push("/login");
    },
    async getNoticeCount() {
      try {
        const count = await this.$api.noticeCount();
        this.$store.commit("saveNoticeCount", count);
      } catch (error) {
        console.error(error);
      }
    },
    async getMenuList() {
      try {
        // const { menuList, actionList } = await this.$api.getPermissionList();
        const { menuList, actionList } = {
          menuList: [
            {
              parentId: [null],
              updateTime: "2021-03-06T10:03:38.947Z",
              createTime: "2021-01-30T09:22:00.000Z",
              _id: "600d4075e218daaf4ec77e52",
              menuType: "1",
              menuName: "系统管理",
              menuCode: "",
              path: "/system",
              icon: "el-icon-setting",
              order: "0",
              component: "",
              children: [
                {
                  parentId: ["600d4075e218daaf4ec77e52"],
                  updateTime: "2021-02-04T09:52:40.576Z",
                  createTime: "2021-02-04T09:52:40.576Z",
                  _id: "601ca9a8a794e23c2e42efab",
                  menuType: "1",
                  menuState: "1",
                  menuName: "角色管理",
                  path: "/system/role",
                  component: "/system/role",
                  __v: 0,
                  children: [
                    {
                      parentId: [
                        "600d4075e218daaf4ec77e52",
                        "601ca9a8a794e23c2e42efab",
                      ],
                      updateTime: "2021-02-21T12:38:19.650Z",
                      createTime: "2021-02-21T11:06:19.345Z",
                      _id: "60325425a821c6bb59084545",
                      menuType: "2",
                      menuState: "1",
                      menuName: "查看",
                      menuCode: "role-query",
                      __v: 0,
                    },
                    {
                      parentId: [
                        "600d4075e218daaf4ec77e52",
                        "601ca9a8a794e23c2e42efab",
                      ],
                      updateTime: "2021-02-21T11:06:19.345Z",
                      createTime: "2021-02-21T11:06:19.345Z",
                      _id: "60325461a821c6bb59084546",
                      menuType: "2",
                      menuState: "1",
                      menuName: "创建",
                      menuCode: "role-create",
                      __v: 0,
                    },
                  ],
                  action: [
                    {
                      parentId: [
                        "600d4075e218daaf4ec77e52",
                        "601ca9a8a794e23c2e42efab",
                      ],
                      updateTime: "2021-02-21T12:38:19.650Z",
                      createTime: "2021-02-21T11:06:19.345Z",
                      _id: "60325425a821c6bb59084545",
                      menuType: "2",
                      menuState: "1",
                      menuName: "查看",
                      menuCode: "role-query",
                      __v: 0,
                    },
                    {
                      parentId: [
                        "600d4075e218daaf4ec77e52",
                        "601ca9a8a794e23c2e42efab",
                      ],
                      updateTime: "2021-02-21T11:06:19.345Z",
                      createTime: "2021-02-21T11:06:19.345Z",
                      _id: "60325461a821c6bb59084546",
                      menuType: "2",
                      menuState: "1",
                      menuName: "创建",
                      menuCode: "role-create",
                      __v: 0,
                    },
                  ],
                },
              ],
            },
            {
              parentId: [null],
              updateTime: "2021-03-06T10:03:38.947Z",
              createTime: "2021-01-30T09:22:00.000Z",
              _id: "600d4075e218daaf4ec77e53",
              menuType: "1",
              menuName: "数据管理",
              menuCode: "",
              path: "/data",
              icon: "el-icon-setting",
              order: "0",
              component: "",
              children: [
                {
                  parentId: ["600d4075e218daaf4ec77e53"],
                  updateTime: "2021-02-04T09:52:40.576Z",
                  createTime: "2021-02-04T09:52:40.576Z",
                  _id: "601ca9a8a794e23c2e42ef3c",
                  menuType: "1",
                  menuState: "1",
                  menuName: "数据查询",
                  path: "/data/query",
                  component: "/data/query",
                  __v: 0,
                  children: [
                    {
                      parentId: [
                        "600d4075e218daaf4ec77e53",
                        "601ca9a8a794e23c2e42ef3c",
                      ],
                      updateTime: "2021-02-21T12:38:19.650Z",
                      createTime: "2021-02-21T11:06:19.345Z",
                      _id: "60325425a821c6bb59084572",
                      menuType: "2",
                      menuState: "1",
                      menuName: "查看",
                      menuCode: "data-query",
                      __v: 0,
                    },
                  ],
                  action: [
                    {
                      parentId: [
                        "600d4075e218daaf4ec77e53",
                        "601ca9a8a794e23c2e42ef3c",
                      ],
                      updateTime: "2021-02-21T12:38:19.650Z",
                      createTime: "2021-02-21T11:06:19.345Z",
                      _id: "60325425a821c6bb59084572",
                      menuType: "2",
                      menuState: "1",
                      menuName: "查看",
                      menuCode: "data-query",
                      __v: 0,
                    },
                  ],
                },
              ],
            },
          ],
          actionList: ["role-query", "role-create", "data-query"],
        };
        this.$store.commit("saveMenuList", menuList);
        this.$store.commit("saveActionList", actionList);
        this.userMenu = menuList;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss">
.basic-layout {
  position: relative;
  .nav-side {
    position: fixed;
    width: 200px;
    height: 100vh;
    background-color: #001529;
    color: #fff;
    overflow-y: auto;
    transition: width 0.5s;
    .logo {
      display: flex;
      align-items: center;
      font-size: 18px;
      height: 50px;
      img {
        margin: 0 16px;
        width: 32px;
        height: 32px;
      }
    }
    .nav-menu {
      height: calc(100vh - 50px);
      border-right: none;
    }
    // 合并
    &.fold {
      width: 64px;
    }
    // 展开
    &.unfold {
      width: 200px;
    }
  }
  .content-right {
    margin-left: 200px;
    // 合并
    &.fold {
      margin-left: 64px;
    }
    // 展开
    &.unfold {
      margin-left: 200px;
    }
    .nav-top {
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      padding: 0 20px;
      .nav-left {
        display: flex;
        align-items: center;
        .menu-fold {
          margin-right: 15px;
          font-size: 18px;
        }
      }
      .user-info {
        .notice {
          line-height: 30px;
          margin-right: 15px;
          cursor: pointer;
        }
        .user-link {
          cursor: pointer;
          color: #409eff;
        }
      }
    }
    .wrapper {
      background: #eef0f3;
      padding: 20px;
      height: calc(100vh - 50px);
      .main-page {
        background: #fff;
        height: 100%;
      }
    }
  }
}
</style>
