import Vue from "vue";
import VueRouter from "vue-router";

import LoginView from "../views/accounts/LoginView.vue";
import SignupView from "../views/accounts/SignupView.vue";
import CreateView from "../views/articles/CreateView.vue";
import ListView from "../views/articles/ListView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/accounts/login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/accounts/signup",
    name: "Signup",
    component: SignupView,
  },
  {
    path: "/articles/create",
    name: "Create",
    component: CreateView,
  },
  {
    path: "/articles",
    name: "List",
    component: ListView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
