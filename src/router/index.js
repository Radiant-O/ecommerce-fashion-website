import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/store",
    name: "store",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Store/store.vue"),
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Contacts.vue"),
  },
  {
    path: "/store/:id",
    name: "details",
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Store/productDetails.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHashHistory(),
  routes,
});

export default router;
