<template>
  <div id="app">
    <cnav />
    <!-- <cheader /> -->
    <router-view></router-view>
    <!-- <landing /> -->
    <!-- <listing /> -->
    <cfooter />
  </div>
</template>

<script>
import cnav from "./components/navigation/cnav.vue";
import cfooter from "./components/navigation/cfooter.vue";
// import "./assets/css/tailwind.css";

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
</style>
