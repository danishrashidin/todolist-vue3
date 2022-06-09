import axios from 'axios'

const baseURL = "https://todolist-vue3-express.herokuapp.com"

export const axiosInstance = axios.create({
    baseURL,
})

