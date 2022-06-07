<script>
import { onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'
import { authenticate } from '../services/AuthService'
import { useAuth0 } from '@auth0/auth0-vue'

export default {
    setup() {

        const userStore = useUserStore()
        const router = useRouter()
        const { isAuthenticated, user, isLoading } = useAuth0()

        watch(isLoading, () => {
            if (isLoading != false && isAuthenticated) {
                authenticate(user._value).then(({ uuid, nickname }) => {
                    userStore.setUuid(uuid)
                    userStore.setNickname(nickname)
                    router.push({
                        name: 'todos'
                    })
                }).catch(err => {
                    console.log(err)
                })
            }
        })

        return {
            user
        }
    }

}
</script>

<template>
    <h1>Loading</h1>
</template>