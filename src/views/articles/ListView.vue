<template>
  <div class="container">
    <h1>게시판</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col-1">순서</th>
          <th scope="col-5">제목</th>
          <th scope="col-2">작성자</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="article in articles" :key="`article_${article.id}`">
          <td>{{ article.id }}</td>
          <td>{{ article.title }}</td>
          <td>{{ article.user.username }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import SERVER from "@/api/drf";
//django url 이것으로 ...터미널 1번에 뜬 서버..
const SERVER_URL = SERVER.URL;
export default {
  name: "ListView",
  data() {
    return {
      articles: []
    };
  },
  methods: {
    fetchArticles() {
      axios
        .get(SERVER_URL + "/articles/")
        .then(res => (this.articles = res.data))
        .catch(err => console.error(err));
    }
  },
  created() {
    this.fetchArticles();
  }
};
</script>

<style></style>
