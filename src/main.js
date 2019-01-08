import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import CodeBlock from "./components/CodeBlock";
import Screenshot from "./components/Screenshot";

Vue.config.productionTip = false;

Vue.component("code-block", CodeBlock);
Vue.component("screenshot", Screenshot);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
