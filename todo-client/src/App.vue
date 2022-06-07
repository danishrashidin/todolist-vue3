<script>
import { useAuth0 } from '@auth0/auth0-vue'

export default {
  setup() {

    const { isAuthenticated, logout } = useAuth0()

    return {
      isAuthenticated,
      logout: () => {
        logout({ returnTo: window.location.origin });
      },
    }

  }
}


</script>

<template>
  <div class="h-screen w-screen subpixel-antialiased">
    <header class="bg-blue-600 flex h-24 justify-center items-center drop-shadow-2xl fixed inset-x-0 top-0 z-10">

      <router-link to="/" class="px-6 py-2 text-white font-sans font-semibold text-base">
        Home
      </router-link>
      <router-link to="/todos" class="px-6 py-2 text-white font-sans font-semibold text-base">Todos
      </router-link>

      <button v-if="isAuthenticated" @click="logout"
        class="absolute right-24 px-6 py-2 ring-2 text-white ring-white hover:bg-neutral-50 hover:drop-shadow-xl rounded-full hover:text-blue-600 font-sans font-semibold text-md tracking-">Log
        Out</button>

    </header>
    <router-view class="absolute inset-x-0 bottom-0 top-24" />

  </div>
</template>
