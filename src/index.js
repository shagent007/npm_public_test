import Vue from "vue";

import app from "./App.vue";

function install(Vue) {
  Vue.component("app", app);
}

if (typeof window !== "undefined" && window.Vue && window.Vue === Vue) {
  install(window.Vue);
}
export default install;
