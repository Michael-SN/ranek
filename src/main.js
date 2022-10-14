import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import LoadingPage from "./components/LoadingPage.vue";
import ErrorNotify from "./components/ErrorNotify.vue";

Vue.config.productionTip = false;

Vue.component("LoadingPage", LoadingPage);
Vue.component("ErrorNotify", ErrorNotify);

Vue.filter("fullPrice", (value) => {
  value = Number(value);
  if (!isNaN(value)) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  } else {
    return "";
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
