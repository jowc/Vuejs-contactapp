<template>
  <main class="overflow-hidden">
    <div class="max-w-full pt-40 pb-10 text-center backdrop">
      <h1 class="font-bold text-4xl text-white pb-3">Jovenik Holding LTD</h1>
      <span class="font-bold text-xl text-white">4.5star(230)</span>
    </div>
    <div class="flex py-8 px-12 bg-gray-300">
      <div class="flex-1"></div>
      <div class="flex-2">
        <div>
          <h3 class="text-gray-700 pb-1">
            <span class="font-semibold">Category :</span> Plumbing
          </h3>
          <h3 class="text-gray-700 pb-1">
            <span class="font-semibold">Location :</span> Living
            faith Gwagalada, Abuja.
          </h3>
        </div>
      </div>
    </div>
    <div class="-mt-40 pb-8">
      <img
        src="../assets/media/background1.jpg"
        class="rounded-full h-40 w-40 flex items-center justify-center ml-56 border-t-6 border-gray-300 border-solid"
      />
    </div>
    <div class="flex my-10 container">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src="../assets/media/background1.jpg" alt="Sunset in the mountains" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p
            class="text-gray-700 text-base"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
        </div>
        <div class="px-6 py-4">
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >#photography</span>
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >#travel</span>
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
          >#winter</span>
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

div .backdrop {
  background-color: #e6e3ea;
  background-image: url("data:image/svg+xml,%3Csvg width='84' height='16' viewBox='0 0 84 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M78 7V4h-2v3h-3v2h3v3h2V9h3V7h-3zM30 7V4h-2v3h-3v2h3v3h2V9h3V7h-3zM10 0h2v16h-2V0zm6 0h4v16h-4V0zM2 0h4v16H2V0zm50 0h2v16h-2V0zM38 0h2v16h-2V0zm28 0h2v16h-2V0zm-8 0h6v16h-6V0zM42 0h6v16h-6V0z' fill='%2328bf1e' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
}
</style>