<script setup lang="ts">
import {useAuthStore} from "~/store/auth";

const authStore = useAuthStore()
const router = useRouter()

const email = ref('serdar@emirci.com')
const password = ref('passw0rd')
const loading = ref(false)
const error = ref('')

async function login() {
  loading.value = true
  error.value = ''

  try {
    const success = await authStore.login(email.value, password.value)
    if (success) {
      router.push('/')
    } else {
      error.value = 'Invalid credentials'
    }
  } catch (e) {
    error.value = 'An error occurred'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  
  <form @submit.prevent="login">
    <div class="flex flex-col mb-4 gap-1">
      <label class="block mb-2">Email</label>
      <input
          v-model="email"
          type="email"
          required
          class="w-full px-3 py-2 border rounded"
      >
    </div>

    <div class="mb-4">
      <label class="block mb-2">Password</label>
      <input
          v-model="password"
          type="password"
          required
          class="w-full px-3 py-2 border rounded"
      >
    </div>

    <button
        type="submit"
        :disabled="loading"
    >
      {{ loading ? 'Loading...' : 'Login' }}
    </button>

    <p v-if="error" class="mt-4 text-red-500">
      {{ error }}
    </p>
  </form>
</template>
