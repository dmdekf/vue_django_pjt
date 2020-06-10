<template>
  <div class="container">
    <h1>커뮤니티</h1>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input
          v-model="articleData.title"
          id="title"
          type="text"
          class="form-control"
          placeholder="제목"
        />
        <small class="form-text text-muted">영화와 관련된 자유로운 의견을 남겨주세요.</small>
      </div>
      <div class="form-group">
        <label for="content">Content</label>
        <textarea v-model="articleData.content" id="content" class="form-control" rows="3"></textarea>
      </div>
    </form>
    <div>
      <button @click="createArticle" class="btn btn-primary">작성하기</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SERVER from "@/api/drf";
//django url 이것으로 ...터미널 1번에 뜬 서버..
const SERVER_URL = SERVER.URL;
export default {
  name: "CreateView",
  data() {
    return {
      articleData: {
        title: null,
        content: null
      }
    };
  },
  methods: {
    createArticle() {
      const config = {
        headers: {
          Authorization: `Token ${this.$cookies.get("auth-token")}`,
          withCredentials: true
        }
      };
      axios
        .post(SERVER_URL + "/articles/create/", this.articleData, config)
        .then(res => {
          console.log(res.data);
          this.$router.push({ name: "List" });
        })
        .catch(err => console.log(err.response.data));
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
