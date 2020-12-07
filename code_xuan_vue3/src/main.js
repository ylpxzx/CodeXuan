import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./quasar";
import "./vue-photo-preview"
import animate from "animate.css";
import VueTypedJs from "vue-typed-js"

Vue.use(animate);
Vue.use(VueTypedJs)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
