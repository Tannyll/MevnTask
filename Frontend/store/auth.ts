import {defineStore} from 'pinia'

interface User {
    _id: string
    email: string
    fullName: string,
    token: Token
}

interface Token {
    accessToken: string
    refreshToken: string
}

interface AuthState {
    user: User | null
    token: any | null
    isAuthenticated: boolean
    loading: boolean
}

export const useAuthStore = defineStore('auth', {
    state: (): AuthState => ({
        user: null,
        token: null,
        isAuthenticated: false,
        loading: true
    }),

    actions: {
        setUser(user: User) {
            this.user = user
            this.isAuthenticated = true
        },

        setToken(token: string) {
            this.token = token
            // Store token in localStorage for persistence
            localStorage.setItem('token', token)
        },

        clearAuth() {
            this.user = null
            this.token = null
            this.isAuthenticated = false
            localStorage.removeItem('token')
        },

        async login(email: string, password: string) {
            try {
                const {data, error, status} = await useFetch<User>('http://localhost:3000/api/users/login', {
                    method: 'POST',
                    body: {email, password}
                })
                
                this.setUser(data.value as User);
                this.setToken(data.value?.token.accessToken as string)
                return true
            } catch (error) {
                console.error('Login error:', error)
                return false
            }
        },
        
        async logout() {
            this.clearAuth()
            await navigateTo('/auth/login')
        },

        async register() {
            this.clearAuth()
            await navigateTo('/auth/register')
        },
        
        
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}