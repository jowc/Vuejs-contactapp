<template>
  <div
    class="h-screen overflow-hidden flex items-center justify-center"
    style="background: #edf2f7;"
  >
    <div class="bg-white font-sans h-screen w-full">
      <div class="w-full flex flex-wrap">
        <!-- Login Section -->
        <div class="w-full md:w-1/2 flex flex-col">
          <!-- <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
            <a href="#" class="bg-black text-white font-bold text-xl p-4">Logo</a>
          </div>-->

          <div
            class="flex flex-col justify-center md:justify-start lg:my-48 pt-8 md:pt-0 px-8 md:px-24 lg:px-32"
          >
            <p class="text-center text-3xl">Welcome.</p>
            <form class="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">
              <div class="flex flex-col pt-4">
                <label for="email" class="text-lg">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div class="flex flex-col pt-4">
                <label for="password" class="text-lg">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <button
                class="bg-green-700 text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8 shadow rounded-md"
              >Log In</button>
            </form>
            <div class="text-center pt-12 pb-12">
              <p>
                Don't have an account?
                <router-link to="/register" class="underline font-semibold">
                  Register
                  here.
                </router-link>
              </p>
            </div>
          </div>
        </div>

        <!-- Image Section -->
        <div class="w-1/2 shadow-2xl">
          <img
            class="object-cover w-full h-screen hidden md:block"
            src="../assets/media/background1.jpg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login"
};
</script>

<style>
</style>