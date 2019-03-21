<template>
  <div class="login-wrapper">
    <div class="title">后台登录</div>
    <el-form :model="form" label-width="80px" ref="form" :status-icon="true" :rules='rules'>
      <el-form-item label="姓名：" prop='name'>
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop='password'>
        <el-input v-model="form.password" type="password" :show-password="true"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :disabled="btnDisabled" @click="login">{{loginTxt}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "Login",
  data: function() {
    return {
      form: {
        name: "",
        password: ""
      },
      loginTxt: "登录",
      rules: {
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    };
  },
  computed: {
    btnDisabled: function() {
      return !this.form.name.trim() || !this.form.password.trim();
    }
  },
  methods: {
    login: function() {
      this.$http.post('/user/login', {
        ...this.form
      }).then(response => {
        console.log(response)
      }).catch(err => {
        console.log(err)
      })
    }
  },
};
</script>
<style lang="less" scoped>
.login-wrapper {
  width: 400px;
  margin: 0 auto;
  .title {
    color: #273444;
    font-size: 1.5em;
    text-align: center;
    margin: 0 0 20px 80px;
  }
}
</style>


