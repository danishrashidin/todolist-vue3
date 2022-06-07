<script>
import { useUserStore } from '../stores/user'
import { nextTick, ref, watch } from 'vue'
import { Close } from 'mdue'
import { editTodo } from '../services/TodoService'

export default {
    props: ['uuid'],
    setup(props) {

        const user = useUserStore()
        const idx = user.findTodoByUuid(props.uuid)
        const showDel = ref(false)

        // Todo states
        const uuid = ref(user.todos[idx].uuid)
        const title = ref(user.todos[idx].title)
        const status = ref(user.todos[idx].status)

        watch([status, title], () => {
            user.$patch(state => {
                state.todos[idx] = { ...user.todos[idx], title: title.value, status: status.value }
            })
            editTodo(uuid.value, title.value, status.value).then((res) => {
                console.log("Edit success")
            }).catch((err) => {
                console.log(err)
            })

            nextTick(() => {
                console.log(JSON.stringify(user.todos))
            })
        })

        return {
            showDel,
            deleteTodo: () => {
                user.removeTodo(uuid.value)
            },
            title,
            status
        }

    },
    components: {
        Close
    }
}

</script>

<template>
    <div class="p-2 my-2 rounded-md flex flex-row items-center" @mouseover="showDel = true"
        @mouseleave="showDel = false">
        <input type="checkbox" v-model="status" />
        <input
            class="flex-grow mx-4 font-sans font-medium text-md text-slate-700 focus:outline-none focus:border-slate-400 focus:border-b-2 focus:ring-slate-400 focus:ring-0"
            v-model="title" />
        <button v-if="showDel" @click="deleteTodo">
            <Close class="fill-skate-700" />
        </button>


    </div>
</template>