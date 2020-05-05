<template>
  <main class="my-4">
    <!-- sm:p-3 == 420 -->
    <div class="rounded-md sm:p-3 md:p-10 w-11/12 m-auto shadow-lg font-sans md:max-w-screen-sm">
      <div class="flex">
        <div>
          <img
            src="../../assets/media/background1.jpg"
            class="rounded-full sm:h-16 md:h-24 sm:w-16 md:w-32 object-cover object-center border-green-600 border-solid md:border-dashed border-2 md:border-4 shadow mx-auto"
          />
          <div
            class="font-bold text-gray-800 text-center text-xs mt-8 md:mt-2 text-grey-700 md:text-base"
          >4.5star(200)</div>
        </div>
        <!-- vendor details sm:420-->
        <div class="sm:ml-4 md:ml-10">
          <h1 class="font-bold text-xl text-gray-800 pb-3">Jovenik Holding LTD</h1>
          <h3 class="text-gray-700 pb-1">
            <span class="font-semibold">Category :</span> Plumbing
          </h3>
          <h3 class="text-gray-700 pb-1">
            <span class="font-semibold">Location :</span> Living
            faith Gwagalada, Abuja.
          </h3>
          <h3 class="text-gray-700 pb-1">
            <span class="font-semibold">Phone :</span> 09051547890
          </h3>
        </div>
      </div>
      <!-- Contact Vendor -->
      <template>
        <hr class="mb-2" />
        <div class="mt-4 flex pb-2">
          <div class="w-3/6 text-left">
            <span
              class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow text-sm"
              href="tel:+23488590048"
            >Call</span>
          </div>
          <div class="w-3/6 text-right">
            <router-link
              to="/listdetail"
              class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow text-sm text-right"
            >View</router-link>
          </div>
        </div>
      </template>
    </div>
  </main>
</template>

<script>
export default {
  name: "ccard"
};
</script>

<style>
</style>