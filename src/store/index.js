import { api } from "@/axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    login: false,
    user: {
      id: "",
      name: "",
      email: "",
      password: "",
      cep: "",
      street: "",
      district: "",
      number: "",
      city: "",
      state: "",
    },
    user_products: null,
  },
  // getters: {},
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USER(state, payload) {
      state.user = Object.assign(state.user, payload);
    },
    UPDATE_USER_PRODUCTS(state, payload) {
      state.user_products = payload;
    },
    ADD_USER_PRODUCTS(state, payload) {
      state.user_products.unshft(payload);
    },
  },
  actions: {
    getUserProducts(context) {
      api.get(`/product?user_id=${context.state.user.id}`).then((res) => {
        context.commit("UPDATE_USER_PRODUCTS", res.data);
      });
    },
    getUser(context) {
      return api.get("/user").then((res) => {
        context.commit("UPDATE_USER", res.data);
        context.commit("UPDATE_LOGIN", true);
      });
    },
    createUser(context, payload) {
      context.commit("UPDATE_USER", { id: payload.email });
      return api.post("/user", payload);
    },
    loginUser(context, payload) {
      return api
        .login({
          username: payload.email,
          password: payload.password,
        })
        .then((res) => {
          window.localStorage.token = `Bearer ${res.data.token}`;
        });
    },
    logoutUser(context) {
      context.commit("UPDATE_USER", {
        id: "",
        name: "",
        email: "",
        password: "",
        cep: "",
        street: "",
        district: "",
        number: "",
        city: "",
        state: "",
      });
      window.localStorage.removeItem("token");
      context.commit("UPDATE_LOGIN", false);
    },
  },
  // modules: {},
});
