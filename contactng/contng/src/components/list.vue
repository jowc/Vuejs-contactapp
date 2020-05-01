<template>
  <main class="py-56 overflow-hidden">
    <div class="mx-auto max-w-screen-sm font-sans">
      <div class="rounded-lg shadow-2xl flex p-10 bg-white">
        <div>
          <img
            src="../assets/media/background1.jpg"
            class="rounded-full mx-auto h-32 w-32 border-green-600 border-dashed border-4 shadow"
          />
          <div class="font-bold text-gray-800 text-center text-base mt-2">4.5star(200)</div>
        </div>
        <div class="ml-10">
          <h1 class="font-bold text-2xl text-gray-800 pb-3">Jovenik Holding LTD</h1>
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
          <div class="my-2">
            <button
              class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-3 rounded-full text-xs"
            >#Building</button>
            <button
              class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-3 rounded-full text-xs"
            >#Plumbing</button>
          </div>
        </div>
        <div class="mx-2">
          <router-link to="/listdetail">
            <button
              class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md shadow my-auto text-sm"
            >View</button>
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

main {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2348ea9b' fill-opacity='0.05'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>