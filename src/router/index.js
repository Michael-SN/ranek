import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductPage from "../views/ProductPage.vue";
import Login from "../views/Login.vue";
import User from "../views/users/User.vue";
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
    component: ProductPage,
    props: true,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/user",
    component: User,
    meta: {
      login: true,
    },
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

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.login)) {
    if (!window.localStorage.token) {
      next("/login");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
