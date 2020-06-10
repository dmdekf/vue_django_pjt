<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'List' }">목록으로 |</router-link>
      <router-link v-if="!isLoggedIn" :to="{ name: 'Signup' }">Signup |</router-link>
      <router-link v-if="!isLoggedIn" :to="{ name: 'Login' }">Login |</router-link>
      <router-link v-if="isLoggedIn" :to="{ name: 'Create' }">새글쓰기 |</router-link>
      <router-link v-if="isLoggedIn" to="/accounts/logout" @click.native="logout">Logout |</router-link>
    </div>
    <router-view @submit-login-data="login" @submit-signup-data="signup" />
  </div>
</template>

<script>
import axios from "axios";
import SERVER from "@/api/drf";
//django url 이것으로 ...터미널 1번에 뜬 서버..
const SERVER_URL = SERVER.URL;
export default {
  name: "App",
  data() {
    return {
      isLoggedIn: false
    };
  },
  methods: {
    setCookie(token) {
      this.$cookies.set("auth-token", token);
      this.isLoggedIn = true;
    },

    login(loginData) {
      axios
        .post(SERVER_URL + "/rest-auth/login/", loginData, {
          withCredentials: true
        })
        .then(res => {
          this.setCookie(res.data.key);
          this.$router.push({ name: "List" });
        })
        .catch(err => console.log(err.response.data));
    },
    signup(signupData) {
      console.log(signupData);
      axios
        .post(SERVER_URL + "/rest-auth/signup/", signupData, {
          withCredentials: true
        })
        .then(res => {
          this.setCookie(res.data.key);
          this.$router.push({ name: "List" });
        })
        .catch(err => console.log(err.response.data));
    },
    logout() {
      const config = {
        heders: {
          Authorization: `Token ${this.$cookies.get("auth-token")}`
        }
      };
      axios
        .post(SERVER_URL + "/rest-auth/logout/", null, config)
        .then(() => {
          this.$cookies.remove("auth-token");
          this.isLoggedIn = false;
          this.$router.push({ name: "List" });
        })
        .catch(err => console.log(err.response.data));
    }
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
