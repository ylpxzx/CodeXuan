import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./quasar";
import animate from "animate.css";
// 自定义引用bootstrap和zico
// import "jquery/dist/jquery"
// import "bootstrap/dist/js/bootstrap.min.js";
// import "zico/css/zico.min.css";

Vue.use(animate);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
