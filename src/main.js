import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import moment from "moment";

Vue.config.productionTip = false;

Vue.filter("formatDate", function(value) {
  return moment(value).format("DD.MM.YYYY");
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
