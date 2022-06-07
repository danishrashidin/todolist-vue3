/**
 * This file contains all of the APIs for Todo model
 */
import { axiosInstance } from "./axios"

const apiRoute = "/todo-service"

export const addTodo = async (userID, title, order) => {

    try {

        const { data } = await axiosInstance.post(`${apiRoute}/create`, {
            user_uuid: userID,
            title,
            order
        })

        return Promise.resolve(data)
    } catch (error) {
        return Promise.reject(error)
    }

}

export const deleteTodo = async (todoID) => {

    try {

        const { data } = await axiosInstance.delete(`${apiRoute}/delete/${todoID}`)

        return Promise.resolve(data)
    } catch (error) {
        return Promise.reject(error)
    }

}

export const editTodo = async (todoID, title, status) => {

    try {

        const { data } = await axiosInstance.patch(`${apiRoute}/edit/${todoID}`, {
            title,
            status
        })

        return Promise.resolve(data)
    } catch (error) {
        return Promise.reject(error)
    }

}

export const getTodosById = async (userID) => {

    try {

        const { data } = await axiosInstance.get(`${apiRoute}/${userID}`)

        return Promise.resolve(data)
    } catch (error) {
        return Promise.reject(error)
    }

}