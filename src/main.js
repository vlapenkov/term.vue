import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import moment from "moment";
import VeeValidate, { Validator } from "vee-validate";
import messagesRU from "vee-validate/dist/locale/ru";

Vue.config.productionTip = false;

Vue.use(VeeValidate);


const dictionary = {
  ru: {
    attributes: {
      newsName: "Имя новости"
    }
  }
};
/*
Vue.use(VeeValidate, {
  locale: "ru",
  dictionary: {
    ru: { messages: messagesRU, attributes: dictionary }
  }
});
*/
//Validator.localize(dictionary);

Validator.localize("ru", messagesRU);
Validator.localize(dictionary);

Vue.filter("formatDate", function(value) {
  return moment(value).format("DD.MM.YYYY");
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
