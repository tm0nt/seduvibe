import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex"; // Import Vuex
import store from "./store";
import vuetify from "./plugins/vuetify";
import createPersistedState from "vuex-persistedstate";

Vue.config.productionTip = false;

Vue.use(Vuex); // Use Vuex as a plugin

const vuexStore = new Vuex.Store(store); // Create a new instance of Vuex store

// Apply the persistedstate plugin to the Vuex store
createPersistedState()(vuexStore);

new Vue({
  router,
  store: vuexStore,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
