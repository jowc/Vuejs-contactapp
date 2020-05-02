import landing from "./components/landing.vue"
import list from "./components/list.vue"
import listDetail from './components/listDetail.vue'
import login from "./components/login"

export default [
    { path: "/", component: landing },
    { path: "/list", component: list },
    { path: "/list/:id", component: listDetail },
    { path: "/listDetail", component: listDetail },
    { path: "/login", component: login }
]