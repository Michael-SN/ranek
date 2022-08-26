import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

import UserProduct from "@/views/users/UserProduct.vue";
import UserBuy from "@/views/users/UserBuy.vue";
import UserEdit from "@/views/users/UserEdit.vue";
import UserSale from "@/views/users/UserSale.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/product/:id",
    name: "product",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProductPage.vue"),
    props: true,
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
    props: true,
  },
  {
    path: "/user",
    // name: "user", --> o mesmo name usado para o fulho abaixo
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/users/User.vue"),
    props: true,
    children: [
      {
        path: "",
        name: "user",
        component: UserProduct,
      },
      {
        path: "buy",
        name: "buy",
        component: UserBuy,
      },
      {
        path: "edit",
        name: "user-edit",
        component: UserEdit,
      },
      {
        path: "sales",
        name: "sales",
        component: UserSale,
      },
    ],
  },
  // {
  //   path: "/",
  //   name: "",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ "../views/.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
});

export default router;
