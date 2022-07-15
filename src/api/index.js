/**
 * api管理
 */
import request from "./../utils/request";
export default {
  findMaterialsAbstracts(params) {
    return request({
      url: "/materials/findAbstracts",
      method: "get",
      data: params,
    });
  },
  submitDataForm(params) {
    return request({
      url: "/data/submit",
      method: "post",
      data: params,
    });
  },
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
  getUserList(params) {
    return request({
      url: "/users/list",
      method: "get",
      data: params,
      mock: false,
    });
  },
  userOperate(params) {
    return request({
      url: "/users/operate",
      method: "post",
      data: params,
      mock: false,
    });
  },
  userDelete(params) {
    return request({
      url: "/users/delete",
      method: "post",
      data: params,
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
