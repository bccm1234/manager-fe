/**
 * api管理
 */
import request from "./../utils/request";
export default {
  login(params) {
    return request({
      url: "/users/login",
      method: "post",
      data: params,
    });
  },
  getPermissionList() {
    return request({
      url: "/users/getPermissionList",
      method: "get",
      data: {},
      mock: false,
    });
  },
  getRoleAllList() {
    return request({
      url: "/roles/allList",
      method: "get",
      data: {},
      mock: false,
    });
  },
  getRoleList(params) {
    return request({
      url: "/roles/list",
      method: "get",
      data: params,
      mock: false,
    });
  },
  userSubmit(params) {
    return request({
      url: "/users/operate",
      method: "post",
      data: params,
      mock: false,
    });
  },
  roleOperate(params) {
    return request({
      url: "/roles/operate",
      method: "post",
      data: params,
      mock: false,
    });
  },
  updatePermission(params) {
    return request({
      url: "/roles/update/permission",
      method: "post",
      data: params,
      mock: false,
    });
  },
};
