<template>
  <div id="app" class="font-sans antialiased overflow-x-hidden">
    <cnav />
    <router-view></router-view>
    <cfooter />
  </div>
</template>

<script>
import cnav from "./components/navigation/cnav.vue";
import cfooter from "./components/navigation/cfooter.vue";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    cfooter,
    cnav
  }
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

main {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2348ea9b' fill-opacity='0.05'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
