<template>
  <div class="mask">
    <div>
      <h1 class="login-title">登录</h1>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="admin">
          <el-input type="text" v-model="ruleForm.admin"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="check">
          <el-input type="text" v-model="ruleForm.test"></el-input>
        </el-form-item>
        <div>
          <img @click="getUid()" src="" class="uid_place" />
        </div>
        <el-form-item>
          <el-button type="text" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
      <button @click="gotofn()" id="go">直接登录</button>
    </div>
  </div>
</template>
<script>
let uuidv4 = "829526ca-4fe8-03a2-8640-d5012ec18e29";
import goto from "../../js/landing"
export default {
  data() {
    let checkTest = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入验证码"));
      }
    };
    let validateAdmin = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
          callback();
        }
      }
    };
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        admin: "",
        pass: "",
        test: "",
      },
      rules: {
        admin: [{ validator: validateAdmin, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        test: [{ validator: checkTest, trigger: "blur" }],
      },
      uidUrl: "https://www.chengzier.cn:8000/api/generateimagecode?",
      uidData: `${uuidv4}`,
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
          let axios = require("axios");
          let FormData = require("form-data");
          let formdata = new FormData();
          formdata.append("username", `${this.ruleForm.admin}`);
          formdata.append("password", `${this.ruleForm.pass}`);
          formdata.append("uuid", `${this.uidData}`);
          formdata.append("text", `${this.ruleForm.test}`);
          console.log(formdata);
          let config = {
            method: "post",
            url: "https://www.chengzier.cn:8000/api/supersignin",
            headers: { "Content-Type": "applacation/x-www-form-urlencode" },
            data: formdata,
          };
          axios(config)
            .then(function (response) {
              if ((response.data.msg = "超级管理员登录成功")) {
                console.log(response)
                localStorage.setItem("ID", `${response.data.token}`);
                goto();
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getUid() {
      let getUidUrl = this.uidUrl + `uuid=${this.uidData}`;
      document.querySelector(".uid_place").src = getUidUrl;
    },
    gotofn() {
      goto();
      console.log("这是this", this.$router)
      this.$router.push('/MainPage')
    }
  },
};
</script>
<style>
.uid_place {
  width: 80px;
  height: 30px;
}
</style>
