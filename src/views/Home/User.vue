<template>
  <div class="user-manage">
    <div class="query-form">
      <el-form ref="form" :inline="true" :model="queryForm">
        <el-form-item label="用户名称" prop="username">
          <el-input v-model="queryForm.username" placeholder="请输入用户名称" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getUserList">查询</el-button>
          <el-button @click="handleReset('form')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="base-table">
      <div class="action">
        <el-button type="primary" @click="handleAdd">创建</el-button>
      </div>
      <el-table :data="userList">
        <el-table-column
          v-for="item in columns"
          :key="item.prop"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
        >
        </el-table-column>
        <el-table-column label="操作" width="260">
          <template #default="scope">
            <el-button size="mini" @click="handleEdit(scope.row)"
              >编辑</el-button
            >
            <el-button
              type="danger"
              size="mini"
              @click="handleDel(scope.row._id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="pagination"
        background
        layout="prev, pager, next"
        :total="pager.total"
        :page-size="pager.pageSize"
        @current-change="handleCurrentChange"
      />
    </div>
    <el-dialog title="用户信息" v-model="showModal">
      <el-form
        ref="dialogForm"
        :model="userForm"
        label-width="100px"
        :rules="rules"
      >
        <el-form-item label="用户名称" prop="username">
          <el-input v-model="userForm.username" placeholder="请输入用户名称" />
        </el-form-item>
        <el-form-item label="用户密码" prop="password">
          <el-input v-model="userForm.password" placeholder="请输入用户密码" />
        </el-form-item>
        <el-form-item label="用户邮箱" prop="userEmail">
          <el-input v-model="userForm.userEmail" placeholder="请输入邮箱" />
        </el-form-item>
        <el-form-item label="用户部门" prop="deptId">
          <el-input v-model="userForm.deptId" placeholder="请输入部门" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleClose">取 消</el-button>
          <el-button type="primary" @click="handleSubmit">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "user",
  data() {
    return {
      queryForm: {
        username: "",
      },
      columns: [
        {
          label: "用户名称",
          prop: "username",
        },
        {
          label: "用户邮箱",
          prop: "userEmail",
        },
        {
          label: "部门",
          prop: "deptId",
        },
        {
          label: "权限列表",
          prop: "roleList",
        },
      ],
      userList: [],
      pager: {
        total: 0,
        pageNum: 1,
        pageSize: 10,
      },
      showModal: false,
      action: "create",
      userForm: {},
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名称",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入用户密码",
          },
        ],
        userEmail: [
          {
            required: true,
            message: "请输入用户邮箱",
          },
        ],
        deptId: [
          {
            required: true,
            message: "请输入部门",
          },
        ],
      },
      // 权限展示
      showPermission: false,
      curRoleId: "",
      curRoleName: "",
      menuList: [],
      // 菜单映射表
      actionMap: {},
    };
  },
  mounted() {
    this.getUserList();
    // this.getMenuList();
  },
  methods: {
    // 用户列表初始化
    async getUserList() {
      try {
        const { list, page } = await this.$api.getUserList({
          ...this.queryForm,
          ...this.pager,
        });
        this.userList = list;
        this.pager.total = page.total;
      } catch (e) {
        throw new Error(e);
      }
    },
    // 表单重置
    handleReset(form) {
      this.$refs[form].resetFields();
    },
    // 用户添加
    handleAdd() {
      this.action = "add";
      this.showModal = true;
    },
    // 用户编辑
    handleEdit(row) {
      this.action = "edit";
      this.showModal = true;
      this.$nextTick(() => {
        this.userForm = {
          _id: row._id,
          userId: row.userId,
          username: row.username,
          password: row.password,
          userEmail: row.userEmail,
          deptId: row.deptId,
        };
      });
    },
    // 用户删除
    async handleDel(_id) {
      await this.$api.userDelete({ _id });
      this.$message.success("删除成功");
      this.getUserList();
    },
    // 弹框关闭
    handleClose() {
      this.handleReset("dialogForm");
      this.showModal = false;
    },
    // 用户提交
    handleSubmit() {
      this.$refs.dialogForm.validate(async (valid) => {
        if (valid) {
          const { userForm, action } = this;
          const params = { ...userForm, action };
          const res = await this.$api.userOperate(params);
          if (res) {
            this.showModal = false;
            this.$message.success((action == "add" ? "添加" : "修改") + "成功");
            this.handleReset("dialogForm");
            this.getUserList();
          }
        }
      });
    },
    handleCurrentChange(current) {
      this.pager.pageNum = current;
      this.getUserList();
    },
  },
};
</script>

<style lang="scss"></style>
