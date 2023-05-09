import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { VSlideGroup, VSlideGroupItem } from "vuetify/lib";

Vue.component("v-slide-group", VSlideGroup);
Vue.component("v-slide-group-item", VSlideGroupItem);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
