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
const SERVER_URL = "http://localhost:8000";
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
