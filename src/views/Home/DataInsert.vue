<template>
  <div>
    <div class="query-form trans-right">
      <el-form ref="dbselect" :inline="true" :model="dbselect">
        <el-form-item label="数据库名称">
          <el-select
            v-model="dbselect.dbname"
            placeholder="请选择数据库名称"
            size="large"
          >
            <el-option
              v-for="item in dboptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="base-table">
      <el-form
        ref="insertForm"
        :model="insertForm"
        :rules="rules"
        label-width="80px"
        :inline="true"
        class="insert-form"
      >
        <el-form-item label="化学式" prop="formula">
          <el-input v-model="insertForm.formula" />
        </el-form-item>
        <el-form-item label="长度">
          <el-form-item prop="a">
            <el-input v-model.number="insertForm.a" />
          </el-form-item>
          <el-form-item prop="b">
            <el-input v-model.number="insertForm.b" />
          </el-form-item>
          <el-form-item prop="c">
            <el-input v-model.number="insertForm.c" />
          </el-form-item>
        </el-form-item>
        <el-form-item label="体积" prop="volume">
          <el-input v-model.number="insertForm.volume" />
        </el-form-item>
        <el-form-item label="角度">
          <el-form-item prop="α">
            <el-input v-model.number="insertForm.α" />
          </el-form-item>
          <el-form-item prop="β">
            <el-input v-model.number="insertForm.β" />
          </el-form-item>
          <el-form-item prop="γ">
            <el-input v-model.number="insertForm.γ" />
          </el-form-item>
        </el-form-item>
        <el-form-item label="带隙" prop="band gap">
          <el-input v-model.number="insertForm['band gap']" />
        </el-form-item>
        <el-form-item label="晶体类型" prop="crystal system">
          <el-input v-model="insertForm['crystal system']" />
        </el-form-item>
        <el-form-item label="空间群" prop="space group">
          <el-input v-model="insertForm['space group']" />
        </el-form-item>
        <el-form-item label="形成能" prop="formation energy">
          <el-input v-model.number="insertForm['formation energy']" />
        </el-form-item>
      </el-form>
      <div class="btn">
        <el-button type="primary" @click="submitForm"> Submit </el-button>
        <el-button @click="resetForm"> Reset </el-button>
      </div>
    </div>
    <div class="btn">
      <el-upload
        :file-list="fileList"
        class="fileupload"
        action="/api/data/file"
        multiple
        :headers="gethead"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
      >
        <el-button type="primary">上传文件</el-button>
        <template #tip>
          <div class="el-upload__tip"></div>
        </template>
      </el-upload>
      <el-button type="primary" @click="writeJSON">写入文件</el-button>
    </div>
    <el-dialog title="JSON文件" v-model="showJSON">
      <el-form ref="jsonfile" :model="jsonForm" label-width="100px">
        <el-form-item label="json文件" prop="json">
          <el-input type="textarea" v-model="jsonForm.json" />
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
  name: "DataInsert",
  data() {
    return {
      dbselect: {
        dbname: "",
      },
      dboptions: [
        {
          value: "材料数据库",
          label: "材料数据库",
        },
        {
          value: "反应数据库",
          label: "反应数据库",
        },
      ],
      insertForm: {
        formula: "",
        a: null,
        b: null,
        c: null,
        α: null,
        β: null,
        γ: null,
        volume: null,
        "band gap": null,
        "crystal system": "",
        "space group": "",
        "formation energy": null,
      },
      rules: {
        formula: [
          {
            type: "string",
            required: true,
          },
        ],
        a: [
          {
            type: "number",
            required: true,
          },
        ],
        b: [
          {
            type: "number",
            required: true,
          },
        ],
        c: [
          {
            type: "number",
            required: true,
          },
        ],
        α: [
          {
            type: "number",
            required: true,
          },
        ],
        β: [
          {
            type: "number",
            required: true,
          },
        ],
        γ: [
          {
            type: "number",
            required: true,
          },
        ],
        volume: [
          {
            type: "number",
            required: true,
          },
        ],
        "band gap": [
          {
            type: "number",
            required: true,
          },
        ],
        "crystal system": [
          {
            type: "string",
            required: true,
          },
        ],
        "space group": [
          {
            type: "string",
            required: true,
          },
        ],
        "formation energy": [
          {
            type: "number",
            required: true,
          },
        ],
      },
      fileList: [],
      showJSON: false,
      jsonForm: {
        json: "",
      },
    };
  },
  computed: {
    gethead() {
      return {
        Authorization: "Bearer " + (this.$store.state.userInfo.token || ""),
      };
    },
  },
  methods: {
    async submitForm() {
      try {
        await this.$api.submitDataForm(
          Object.assign({}, this.dbselect, this.insertForm)
        );
      } catch (e) {
        throw new Error(e);
      }
    },
    resetForm() {
      this.$refs.insertForm.resetFields();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    writeJSON() {
      this.showJSON = true;
    },
    handleClose() {
      this.$refs.jsonfile.resetFields();
      this.showJSON = false;
    },
    async handleSubmit() {
      const params = JSON.parse(this.jsonForm.json);
      try {
        await this.$api.submitDataForm(params);
      } catch (e) {
        throw new Error(e);
      }
      this.showJSON = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.trans-right {
  padding-left: 172px;
}
.insert-form {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 10px;
}
.fileupload {
  margin-right: 100px;
  :deep(.el-upload-list__item) {
    width: 400px;
  }
}
</style>
