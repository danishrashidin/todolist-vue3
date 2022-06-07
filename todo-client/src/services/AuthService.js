/**
 * This file contains all of the APIs for User model
 */
import { useAuth0 } from '@auth0/auth0-vue'
import { axiosInstance } from './axios'

export const authenticate = async (user) => {

    const { email, nickname } = user
    // Get the credentials from express server
    try {
        const { data } = await axiosInstance.post('/user-service/authenticate', {
            email
        })

        return Promise.resolve({
            uuid: data.uuid,
            nickname
        })
    } catch (err) {
        return Promise.reject(err)
    }

}