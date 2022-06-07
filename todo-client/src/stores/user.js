import { defineStore } from "pinia";
import { getTodosById, addTodo, deleteTodo, editTodo } from "../services/TodoService";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    nickname: '',
    uuid: '',
    todos: [],
    nextId: 0,
    updated: false
  }),
  persist: {
    enabled: true
  },
  getters: {
    getTodos() {
      return this.todos
    },
    getTodoByOrder: (state) => {
      return (order) => state.todos.find((todo) => todo.order_num == order)
    },
    findTodoByUuid: (state) => {
      return (todoId) => state.todos.findIndex((todo) => todo.uuid == todoId)
    }
  },
  actions: {
    addTodo(title) {
      let orderId = this.nextId++
      this.todos.push({
        title,
        status: false,
        order_num: orderId
      })
      console.log(this.uuid)
      addTodo(this.uuid, title, orderId).catch((err) => {
        console.error(err)
      })
    },
    removeTodo(todoId) {
      const idx = this.findTodoByUuid(todoId)
      let deleted = this.todos.splice(idx, 1)
      deleteTodo(todoId).catch((err) => {
        console.error(err)
      })
    },
    // changeTodoStatus(todoId, newStatus) {
    //   const idx = this.findTodoByUuid(todoId)
    //   this.todos[idx].status = newStatus
    // },
    // changeTodoTitle(todoId, newTitle) {
    //   const idx = this.findTodoByUuid(todoId)
    //   this.todos[idx].title = newTitle
    // },
    async fetchTodos() {
      getTodosById(this.uuid).then((res) => {
        this.todos = res.data
        this.nextId = res.order
        this.updated = true
      }).catch((err) => {

      }).finally(() => {

        console.log(JSON.stringify(this))
      })
    },
    setNickname(nickname) {
      this.nickname = nickname
    },
    setUuid(uuid) {
      this.uuid = uuid
    }
  },
});
