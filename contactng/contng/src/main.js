import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource"
import VueRouter from "vue-router"
import routes from "./route"
import { store } from "./store/store"

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: "history"
})

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
