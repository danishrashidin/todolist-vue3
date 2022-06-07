<script>
import { useAuth0 } from '@auth0/auth0-vue'
import { useUserStore } from '../stores/user'
import AddTodoItem from '../components/AddTodoItem.vue'
import TodoListItem from '../components/TodoListItem.vue'
import { onBeforeMount, onMounted, onUpdated, ref } from 'vue'
import { getTodosById } from '../services/TodoService'

export default {
    setup() {

        const isLoading = ref(true)
        const { logout } = useAuth0();
        const user = useUserStore();

        onMounted(async () => {
            if (isLoading.value) {
                // Reset todos
                user.$patch((state) => {
                    state.todos = []
                })

                // Fetch todos
                await user.fetchTodos()
                isLoading.value = false
            }
        })

        return {
            logout: () => {
                logout({ returnTo: window.location.origin });
            },
            user,
            isLoading
        };
    },
    components: { AddTodoItem, TodoListItem }
}
</script>

<template>

    <div class="flex justify-center items-start bg-gray-50">
        <div class="w-1/5  mt-24 ring-1 ring-gray-900/5 rounded-lg p-10 bg-white shadow-xl">
            <ul>
                <li v-if="user.todos.length == 0">No todos to do</li>
                <li v-for="todo in user.todos">
                    <TodoListItem :uuid="todo.uuid" />
                </li>
                <li>
                    <AddTodoItem />
                </li>
            </ul>
        </div>


    </div>


</template>