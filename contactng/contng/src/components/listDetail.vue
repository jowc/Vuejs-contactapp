<template>
  <main class="overflow-hidden">
    <div class="pt-40 bg-gray-300 w-10/12 mx-auto rounded-lg">
      <vheader />
    </div>
    <vproducts />
  </main>
</template>
<script>
import vheader from "./vendor/vheader";
import vproducts from "./vendor/vproducts";
export default {
  components: {
    vheader,
    vproducts
  }
};
</script>
<style>
</style>