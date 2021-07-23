import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Child from "../views/Child.vue";
import Home from "../views/Home.vue";
import NewTodo from "../views/newTodo.vue";
import Workspace from "../views/Workspace.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/child",
    name: "Child",
    component: Child,
  },
  {
    path: "/workspace/:childId",
    name: "workspace",
    component: Workspace,
  },
  {
    path: "/workspace/:childId/newTodo",
    name: "newTodo",
    component: NewTodo,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
