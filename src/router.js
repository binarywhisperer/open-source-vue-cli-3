import ProductionBuilds from "./views/ProductionBuilds";
import VueCLI3 from "./views/VueCLI3";
import VueUI from "./views/VueUI";
import Vuex from "./views/Vuex";
import Vue from "vue";
import Router from "vue-router";
import Introduction from "./views/Introduction";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/introduction",
            name: "Introduction",
            component: Introduction
        },
        {
            path: "/",
            redirect: "/introduction"
        },
        {
            path: "/vue-cli-3",
            name: "Vue CLI 3",
            component: VueCLI3
        },
        {
            path: "/vue-ui",
            name: "Vue UI",
            component: VueUI
        },
        {
            path: "/vue-router",
            name: "Vue Router",
            component: () =>
                import(/* webpackChunkName: "vuerouter" */ "./views/VueRouter.vue")
        },
        {
            path: "/vuex",
            name: "Vuex",
            component: Vuex
        },
        {
            path: "/production-builds",
            name: "Production Builds",
            component: ProductionBuilds
        }
        /*{
            path: "/vue-ui-test",
            name: "vue ui",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/!* webpackChunkName: "about" *!/ "./views/VueUI.vue")
        }*/
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash
                , offset: { x: 0, y: 15 }
            };
        }
    }
});
