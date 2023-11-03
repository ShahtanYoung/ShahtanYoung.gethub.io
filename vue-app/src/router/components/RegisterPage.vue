<template>
  <div class="regis_body" @click="back">
    <div class="regis_main" @click="stop">
      <h3>注册管理员账号</h3>
      <el-form :model="formLabelAlign">
        <el-form-item>
          <el-input
            v-model="formLabelAlign.name"
            placeholder="请自定义管理员账户名"
          ></el-input>
          <div class="create_btn" @click="create()">提交</div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
// import create_account from "../../js/account/account_create";
import get_my_card from '../../js/get_my_card';
export default {
  name: "RegisterPage",
  data() {
    return {
      formLabelAlign: {
        name: "",
      },
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    stop(event) {
      event = event || window.event;
      if (event.stopPropagation) {
        event.stopPropagation();
      } else {
        event.cancelBubble = true;
      }
    },
    create() {
      let name = this.formLabelAlign.name;
      // this.$router.back();
      let card = get_my_card();
      var axios = require("axios");
      var FormData = require("form-data");
      var form_data = new FormData();
      form_data.append("username", name);

      var config = {
        method: "post",
        url: "https://www.chengzier.cn:8000/api/createsuperuser",
        headers: {
          "Content-Type": "applacation/x-www-form-urlencode",
          Authorization: `Bearer ${card}`,
        },
        data: form_data,
      };

      axios(config)
        .then(function (response) {
            let a = JSON.stringify(response.data)
            console.log(a)
            localStorage.setItem("account", a)
            alert(`账户创建成功,请牢记密码:${response.password}`)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
<style>
.regis_body {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #aaaa;
}
.regis_main {
  width: 40vmax;
  height: 20vmax;
  position: fixed;
  left: 30%;
  top: 30%;
  background-color: #fff;
}
h3 {
  font-size: 4vmax;
  line-height: 7vmax;
}
.el-form-item {
  display: flex;
  justify-content: space-around;
}
.create_btn {
  width: 8vmax;
  height: 3vmax;
  font-size: 2vmax;
}
</style>
