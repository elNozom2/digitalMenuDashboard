import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Base from "../components/base/base.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: Base,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      // users rotues

      {
        path: "users",
        name: "users",
        component: () => import("../views/users/index.vue"),
      },

      {
        path: "users/edit/:id",
        name: "users-edit",
        component: () => import("../views/users/edit.vue"),
      },
      {
        path: "users/view/:id",
        name: "users-view",
        component: () => import("../views/users/view.vue"),
      },
      {
        path: "groups",
        name: "/groupsView",
        component: () => import("../views/users/formEdit.vue"),
      },
      {
        path: "createProducts",
        name: "createProducts.vue",
        component: () => import("../views/users/productsCreate.vue"),
      },
    ],
  },
  {
    path: "/server-error",
    component: () => import("../views/errors/server.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
