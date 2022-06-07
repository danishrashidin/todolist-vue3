<script>
import { useAuth0 } from '@auth0/auth0-vue'

export default {
    setup() {

        const { loginWithRedirect, isAuthenticated } = useAuth0()

        return {
            login: () => {
                loginWithRedirect()
            },
            isAuthenticated
        }
    }
}

</script>

<template>
    <div class="flex flex-row w-screen justify-center px-40 bg-neutral-50">

        <div class="p-16 basis-5/12 flex flex-col justify-center items-start">
            <p class="text-blue-600 font-sans font-semibold text-5xl text-left leading-relaxed">Make your
                day
                productive with this Todo-list
            </p>
            <button v-if="!isAuthenticated"
                class="px-8 py-2 mt-8 bg-blue-600 drop-shadow-lg rounded-full text-white font-sans text-xl tracking-wide"
                @click="login">Log
                in</button>
            <router-link v-else to="/todos"
                class="block px-8 py-2 mt-8 bg-blue-600 drop-shadow-lg rounded-full text-white font-sans text-xl tracking-wide">
                My Todos</router-link>
        </div>
        <div class="p-10 basis-7/12">
            <img src="../assets/home-logo.svg" class="h-full">

        </div>

    </div>
</template>