import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPersist from 'pinia-plugin-persist'
import { createAuth0 } from '@auth0/auth0-vue'
import App from "./App.vue";
import './index.css'
import Router from './router/index'

const app = createApp(App);
const pinia = createPinia()
pinia.use(piniaPersist)

app.use(pinia);
app.use(createAuth0({
    domain: "danishrashidin.us.auth0.com",
    client_id: "Zc6kGE2TMpJhws90PPZ511C05eo3QFz1",
    redirect_uri: window.location.origin + '/authorize'
}))
app.use(Router())

app.mount("#app");
