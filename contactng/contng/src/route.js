import VueRouter from "vue-router"
import landing from "./components/landing.vue"
import list from "./components/list.vue"
import listDetail from './components/listDetail.vue'
import login from "./components/login"

const routes = [
    { path: "/", component: landing },
    { path: "/list", component: list },
    { path: "/list/:id", component: listDetail },
    { path: "/listDetail", component: listDetail },
    { path: "/login", component: login }
]

export const router = new VueRouter({
    routes,
    mode: "history"
})