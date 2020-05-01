<template>
  <nav class="flex items-center justify-between flex-wrap bg-green-600 p-3 font-sans">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight ml-4">Contact</span>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
      >
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div class="w-full block flex-grow-0 lg:flex lg:items-start lg:w-3/5">
      <div class="text-sm lg:flex-grow">
        <router-link
          to="/"
          class="block mt-4 lg:inline-block lg:mt-0 text-white font-bold text-lg hover:text-grey-100 lg:ml-2 lg:mr-2"
          exact
        >Home</router-link>
        <router-link
          to="/list"
          class="block mt-4 lg:inline-block lg:mt-0 text-white font-bold text-lg hover:text-grey-100 lg:ml-2 lg:mr-2"
          exact
        >List</router-link>
        <router-link
          to="/login"
          class="block mt-4 lg:inline-block lg:mt-0 text-white font-bold text-lg hover:text-grey-100 lg:ml-2 lg:mr-2"
          exact
        >Login</router-link>
        <router-link
          to="/register"
          class="block mt-4 lg:inline-block lg:mt-0 text-white font-bold text-lg hover:text-grey-100 lg:ml-2 lg:mr-2"
          exact
        >Register</router-link>
      </div>
      <div>
        <a
          href="#"
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
        >Download</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>