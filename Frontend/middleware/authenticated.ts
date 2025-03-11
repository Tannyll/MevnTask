import {useAuthStore} from "~/store/auth";

export default defineNuxtRouteMiddleware(async (to) => {
    if (import.meta.server) return
    const authStore =  useAuthStore()


    if (!authStore.user) {
        return navigateTo('/auth/login')
    }
})
