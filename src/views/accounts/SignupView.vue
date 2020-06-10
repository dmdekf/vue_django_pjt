<template>
  <div class="container">
    <h1>회원가입</h1>
    <div class="form-group">
      <label for="username">아이디</label>
      <input class="form-control" v-model="signupData.username" type="text" id="username" />
      <small class="form-text text-muted">아이디를 작성해주세요</small>
    </div>
    <div>
      <label for="password1">비밀번호</label>
      <input class="form-control" v-model="signupData.password1" type="password" id="password1" />
      <small class="form-text text-muted">비밀번호를 작성해주세요</small>
    </div>
    <div>
      <label for="password2">비밀번호 확인</label>
      <input class="form-control" v-model="signupData.password2" type="password" id="password2" />
      <small class="form-text text-muted">비밀번호를 확인해주세요</small>
    </div>
    <div>
      <button class="btn btn-primary" @click="signup">확인</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignupView",
  data() {
    return {
      signupData: {
        username: null,
        password1: null,
        password2: null
      }
    };
  },
  methods: {
    signup() {
      this.$emit("submit-signup-data", this.signupData);
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
