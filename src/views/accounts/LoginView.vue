<template>
  <div class="container">
    <h1>로그인</h1>
    <div class="form-group">
      <label for="username">아이디</label>
      <input class="form-control" v-model="loginData.username" type="text" id="username" />
      <small class="form-text text-muted">아이디를 작성해주세요</small>
    </div>
    <div class="form-group">
      <label for="password">비밀번호</label>
      <input class="form-control" v-model="loginData.password" type="password" id="password" />
      <small class="form-text text-muted">비밀번호를 작성해주세요</small>
    </div>
    <div>
      <button class="btn btn-primary" @click="login">확인</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      loginData: {
        username: null,
        password: null
      }
    };
  },
  methods: {
    login() {
      this.$emit("submit-login-data", this.loginData);
    }
  }
};
</script>

<style scoped>
label {
  display: block;
  width: x;
  height: y;
  text-align: left;
}
small {
  display: block;
  width: x;
  height: y;
  text-align: left;
}
</style>
