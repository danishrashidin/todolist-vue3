<script>
import { useUserStore } from "../stores/user";
import { reactive } from "vue";

export default {
    setup() {

        const user = useUserStore()
        const todo = reactive({
            title: '',
        })

        return {

            user,
            todo,
            submitTodo: () => {
                user.addTodo(todo.title)
                todo.title = ''
            }
        }
    }
}


</script>

<template>
    <div @keyup.enter.prevent="submitTodo" class="mt-4 pt-4 flex flex-row items-center border-t-2 border-slate-100">
        <input id="todo-title" v-model="todo.title" type="text" placeholder="Add new todo"
            class="w-full p-2 placeholder:italic placeholder:text-slate-400 focus:rounded focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1" />
    </div>
</template>